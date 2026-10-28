// ==========================================
// MurliSadhak - Tanpura Acoustic Synthesizer
// Web Audio API pure Indian Classical Drone
// ==========================================

class TanpuraEngine {
  constructor() {
    this.audioCtx = null;
    this.isPlaying = false;
    this.masterGain = null;
    this.scale = 'C';
    this.droneType = 'Pa'; // 'Pa' (standard: Pa-Sa-Sa-Sa) or 'Ma' (for Ragas like Malkauns/Lalit: Ma-Sa-Sa-Sa) or 'Ni'
    this.tempoBpm = 28; // Traditional slow meditative tanpura cycle
    this.timerId = null;
    this.currentString = 0;
    this.volume = 0.5;

    // Base frequencies for middle Sa (Sa3 / Sa4)
    this.baseFrequencies = {
      'C': 261.63,
      'C#': 277.18,
      'D': 293.66,
      'D#': 311.13,
      'E': 329.63,
      'F': 349.23,
      'F#': 369.99,
      'G': 392.00,
      'G#': 415.30,
      'A': 440.00,
      'A#': 466.16,
      'B': 493.88
    };
  }

  initContext() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
      this.masterGain = this.audioCtx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.audioCtx.currentTime);

      // Warm subtle low-pass filter to give rich acoustic wooden body resonance (jawari effect)
      this.bodyFilter = this.audioCtx.createBiquadFilter();
      this.bodyFilter.type = 'lowpass';
      this.bodyFilter.frequency.setValueAtTime(3200, this.audioCtx.currentTime);
      this.bodyFilter.Q.setValueAtTime(2.5, this.audioCtx.currentTime);

      this.masterGain.connect(this.bodyFilter);
      this.bodyFilter.connect(this.audioCtx.destination);
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.audioCtx) {
      this.masterGain.gain.setTargetAtTime(this.volume, this.audioCtx.currentTime, 0.05);
    }
  }

  setScale(scale) {
    if (this.baseFrequencies[scale]) {
      this.scale = scale;
    }
  }

  setDroneType(type) {
    if (['Pa', 'Ma', 'Ni'].includes(type)) {
      this.droneType = type;
    }
  }

  // Get pitches of the 4 strings:
  // String 1: Pancham (Pa = 1.5 * Sa) or Madhyam (Ma = 1.333 * Sa) or Nishad (Ni = 1.887 * Sa / 2)
  // String 2: Jodi (Sa in middle octave)
  // String 3: Jodi (Sa in middle octave with slight acoustic detune +1.2 Hz)
  // String 4: Kharaj (Sa in lower octave / bass = Sa / 2)
  getStringFrequencies() {
    const sa = this.baseFrequencies[this.scale] || 261.63;
    let firstString = sa * 1.5; // Pa

    if (this.droneType === 'Ma') {
      firstString = sa * (4 / 3); // Shuddha Ma
    } else if (this.droneType === 'Ni') {
      firstString = (sa * 1.8877) / 2; // Shuddha Ni in lower register
    }

    return [
      firstString,       // String 1: Pa or Ma
      sa,                // String 2: Sa (Jodi)
      sa * 1.002,        // String 3: Sa (Jodi with rich jawari beating)
      sa / 2             // String 4: Kharaj (Bass Sa)
    ];
  }

  // Pluck a single tanpura string with rich harmonics (simulating jawari thread grazing)
  pluckString(frequency) {
    if (!this.audioCtx) return;
    const now = this.audioCtx.currentTime;

    // Tanpura string has a very rich harmonic series: fundamental, 2nd, 3rd, 4th, 5th, 6th harmonics
    // The "Jawari" buzzing effect is created by upper harmonics blooming right after the initial pluck
    const harmonics = [
      { ratio: 1.0, gain: 0.35, decay: 4.5 },
      { ratio: 2.0, gain: 0.28, decay: 4.2 },
      { ratio: 3.0, gain: 0.22, decay: 3.8 },
      { ratio: 4.0, gain: 0.16, decay: 3.2 },
      { ratio: 5.0, gain: 0.10, decay: 2.6 },
      { ratio: 6.0, gain: 0.08, decay: 2.0 }
    ];

    harmonics.forEach((h, idx) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(frequency * h.ratio, now);

      // Slight natural shimmer
      const detuneCents = (Math.random() - 0.5) * 4;
      osc.detune.setValueAtTime(detuneCents, now);

      // Pluck envelope: sharp gentle attack, gradual acoustic sustain and bloom, long natural decay
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(h.gain * 0.4, now + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + h.decay);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + h.decay + 0.1);
    });
  }

  // Step through the traditional 4-string pluck cycle:
  // 1: Pa/Ma -> 2: Sa -> 3: Sa -> 4: Bass Sa
  playStep() {
    if (!this.isPlaying) return;
    const freqs = this.getStringFrequencies();
    this.pluckString(freqs[this.currentString]);

    this.currentString = (this.currentString + 1) % 4;

    // Interval between plucks based on tempo (approx 1.2s to 1.8s per pluck)
    const intervalMs = (60 / this.tempoBpm) * 1000;
    this.timerId = setTimeout(() => this.playStep(), intervalMs);
  }

  start() {
    this.initContext();
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.currentString = 0;
    this.playStep();
  }

  stop() {
    this.isPlaying = false;
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }
}

// Global instance
window.tanpura = new TanpuraEngine();
