// ==========================================
// MurliSadhak - Core Application Engine
// Riyaaz Planner, Audio, Care, Learning, Videos, Goals & Backup
// ==========================================

const STORAGE_KEY = 'murlisadhak_state_v2';

// Default Seed Data matching the user's screenshots and Indian Classical Bansuri aesthetic
const DEFAULT_STATE = {
  theme: 'light', // 'light' or 'dark'
  activeTab: 'dashboard', // dashboard, planner, audio, learning, flutes, videohub, goals
  user: {
    name: 'Aarav',
    initials: 'AS',
    weeklyTargetHours: 5,
    weeklyLoggedMinutes: 260, // 4h 20m
    streakDays: 9,
    streakFocus: 'mindful Meend practice'
  },
  accompanimentLinks: {
    tabla: {
      name: 'Tabla',
      subtitle: 'Spardha Online Tabla Beats · Teentaal & Riyaz',
      bpm: '60 BPM · 16 beats',
      url: 'https://www.spardhaschoolofmusic.com/tools/tabla',
      isConnected: true
    },
    sitar: {
      name: 'Tanpura & Shruti Box',
      subtitle: 'Spardha Online Shruti Box · Sustained Drone',
      scale: 'All scales · vocal & bansuri practice',
      url: 'https://www.spardhaschoolofmusic.com/tools/tanpura',
      isConnected: true
    }
  },
  todayPlan: {
    title: "Today's riyaaz",
    subtitle: "Evening practice · 6:00–7:00 pm · C natural bamboo",
    totalMinutes: 60,
    activities: [
      { id: 'act-1', timeRange: '00–30', name: 'Long notes', description: 'Breath, tone & a steady Sa', durationMin: 30, completed: false },
      { id: 'act-2', timeRange: '30–45', name: 'Alankars', description: 'Patterns 1–4 · slow and even', durationMin: 15, completed: false },
      { id: 'act-3', timeRange: '45–60', name: 'Ornaments', description: 'Meend / Gamak / Jhala', durationMin: 15, completed: false }
    ]
  },
  liveSession: {
    isActive: false,
    isPaused: false,
    startTime: null,
    currentActivityIndex: 0,
    activityRemainingSeconds: 0,
    totalElapsedSeconds: 0,
    timerIntervalId: null,
    stopwatchRunning: false,
    stopwatchSeconds: 0,
    stopwatchIntervalId: null,
    recordedBreaths: [18, 22, 26, 29] // seconds
  },
  sessionHistory: [
    {
      id: 'sess-1',
      date: '25 Oct 2026',
      time: '07:30 AM',
      durationMinutes: 45,
      fluteUsed: 'C natural Bamboo',
      techniques: ['Long notes (20m)', 'Alankars 1-3 (15m)', 'Meend on Re-Ga (10m)'],
      notes: 'Tone on Mandra Sa was warm and clear. Breath steady at 24s.',
      mood: 'Meditative'
    },
    {
      id: 'sess-2',
      date: '24 Oct 2026',
      time: '06:15 PM',
      durationMinutes: 60,
      fluteUsed: 'G bass Bamboo',
      techniques: ['Long notes (30m)', 'Alankars (15m)', 'Gamak drills (15m)'],
      notes: 'Lower holes on G bass felt comfortable. Diaphragmatic pulse gentle.',
      mood: 'Focused'
    },
    {
      id: 'sess-3',
      date: '23 Oct 2026',
      time: '07:00 AM',
      durationMinutes: 40,
      fluteUsed: 'D natural PVC',
      techniques: ['Long notes (25m)', 'Raag Yaman Pakad (15m)'],
      notes: 'Quick morning riyaaz before work. PVC flute had instantaneous response.',
      mood: 'Light'
    }
  ],
  flutes: [
    {
      id: 'flute-1',
      name: 'C natural',
      type: 'Bamboo',
      scale: 'C natural',
      usage: 'Everyday flute',
      lastCleaned: '22 Oct 2026',
      nextCleaning: '29 Oct 2026',
      status: 'Ready', // 'Ready', 'Care due', 'Overdue'
      notes: 'Punam Flutes Assam bamboo · Sweet balanced tone on high register'
    },
    {
      id: 'flute-2',
      name: 'G bass',
      type: 'Bamboo',
      scale: 'G bass',
      usage: 'Low register',
      lastCleaned: '18 Oct 2026',
      nextCleaning: '25 Oct 2026',
      status: 'Care due',
      notes: 'Deep resonant kharaj. Needs weekly light bore swabbing.'
    },
    {
      id: 'flute-3',
      name: 'D natural',
      type: 'PVC',
      scale: 'D natural',
      usage: 'Travel companion',
      lastCleaned: '23 Oct 2026',
      nextCleaning: '06 Nov 2026',
      status: 'Ready',
      notes: 'Durable weather-proof PVC. Great for travelling and monsoon riyaaz.'
    }
  ],
  careLogs: [
    {
      id: 'care-1',
      date: '23 Oct 2026',
      fluteName: 'D natural',
      fluteType: 'PVC',
      observation: 'Cleaned and fully air-dried. No visible wear.'
    },
    {
      id: 'care-2',
      date: '22 Oct 2026',
      fluteName: 'C natural',
      fluteType: 'Bamboo',
      observation: 'Dry swab after practice. Tone holes clear; no cracks.'
    },
    {
      id: 'care-3',
      date: '18 Oct 2026',
      fluteName: 'G bass',
      fluteType: 'Bamboo',
      observation: 'Dry swab and inspection. Monitor slight dryness near foot.'
    }
  ],
  audioSources: [
    {
      id: 'src-1',
      name: 'Spardha Online Tabla Beats',
      category: 'website',
      type: 'Website',
      description: 'Play Tabla Beats for Practice & Learning – Teentaal, Keherwa, Dadra & Rupak',
      url: 'https://www.spardhaschoolofmusic.com/tools/tabla',
      scale: 'Universal'
    },
    {
      id: 'src-2',
      name: 'Spardha Shruti Box & Tanpura',
      category: 'website',
      type: 'Website',
      description: 'Best Digital Shruti Box for Flute & Vocal Practice – Sustained Indian Drone',
      url: 'https://www.spardhaschoolofmusic.com/tools/tanpura',
      scale: 'All Scales'
    },
    {
      id: 'src-3',
      name: 'Slow practice backing',
      category: 'youtube',
      type: 'YouTube',
      description: 'Backing track for Alankars and long notes (Tanpura & Swarmandal in C#)',
      url: 'https://www.youtube.com/watch?v=k_lXh_y4yL0',
      scale: 'C# / C'
    },
    {
      id: 'src-4',
      name: 'Raag Yaman Flute Backing Drone',
      category: 'youtube',
      type: 'YouTube',
      description: 'Tanpura Pa-Sa with gentle Swarmandal and Teentaal at 70 BPM',
      url: 'https://www.youtube.com/watch?v=4qK8w7aB8gM',
      scale: 'E bass'
    }
  ],
  learningSubtab: 'techniques', // 'techniques' or 'raags'
  techniques: [
    {
      id: 'tech-1',
      name: 'Meend',
      subtitle: 'Expression · Pitch connection · Slow practice',
      summary: 'Connect swars with an unbroken glide.',
      description: 'Let one swar melt into the next. Practise slowly enough to hear the entire journey, without breaking the breath.',
      // STRICT REQUIREMENT: strictly 'Not started' or 'Learning' ONLY - no 'Mastered' or 'Completed'!
      status: 'Learning',
      notes: '24 Oct · Start with Re -> Ga. Keep finger movement gentle and listen for gaps in the glide. Next: try the same phrase with less breath pressure.',
      connectedGoal: '15 days of Meend · Day 9',
      youtubeUrl: 'https://www.youtube.com/watch?v=k1tM1_2K3Jk',
      videos: [
        {
          id: 'v-meend-1',
          title: 'Meend Fundamentals: Gentle finger gliding between Re and Ga',
          url: 'https://www.youtube.com/watch?v=k1tM1_2K3Jk',
          notes: 'Focus on gradual half-hole opening without breath pressure drop.'
        },
        {
          id: 'v-meend-2',
          title: 'Mandra Saptak Meend & Continuous Breath Stream',
          url: 'https://www.youtube.com/watch?v=0hW6V8Yg_fA',
          notes: 'Lower register glide with steady diaphragmatic support.'
        }
      ]
    },
    {
      id: 'tech-2',
      name: 'Gamak',
      subtitle: 'Oscillation · Weight · Diaphragm control',
      summary: 'Explore weight and oscillation in a note.',
      description: 'A deep, heavy oscillation that originates from the lower abdomen and diaphragm, not the throat.',
      status: 'Learning',
      notes: 'Keep the throat completely open. Pulse the lower belly rhythmically while holding Dha.',
      connectedGoal: '',
      youtubeUrl: 'https://www.youtube.com/watch?v=0hW6V8Yg_fA',
      videos: [
        {
          id: 'v-gamak-1',
          title: 'Gamak Diaphragm Pulsing & Abdominal Breath Control',
          url: 'https://www.youtube.com/watch?v=0hW6V8Yg_fA',
          notes: 'Pulse from the lower abdomen; keep the throat relaxed.'
        },
        {
          id: 'v-gamak-2',
          title: 'Applying Gamak in Raag Darbari & Bhairav',
          url: 'https://www.youtube.com/watch?v=k1tM1_2K3Jk',
          notes: 'Heavy classical oscillations on Komal Dha and Komal Ga.'
        }
      ]
    },
    {
      id: 'tech-3',
      name: 'Murki',
      subtitle: 'Agility · Cluster grace · Lightness',
      summary: 'A quick, delicate cluster of swars.',
      description: 'A rapid, graceful flick across adjacent notes, like a sudden drop of dew shaking off a leaf.',
      status: 'Not started',
      notes: 'Warm up fingers on Alankar 4 before drilling Murki speed.',
      connectedGoal: '',
      youtubeUrl: 'https://www.youtube.com/watch?v=4yM2nB9yv8A',
      videos: [
        {
          id: 'v-murki-1',
          title: 'Murki Agility Drill: 3-Swar Rapid Cluster Ornaments',
          url: 'https://www.youtube.com/watch?v=4yM2nB9yv8A',
          notes: 'Keep fingers feather-light over the holes.'
        },
        {
          id: 'v-murki-2',
          title: 'Murki & Khatka in Thumri and Semi-Classical Phrases',
          url: 'https://www.youtube.com/watch?v=k1tM1_2K3Jk',
          notes: 'Expressive ornamentations in Thumri style.'
        }
      ]
    },
    {
      id: 'tech-4',
      name: 'Komal swars',
      subtitle: 'Half-hole shading · Pitch micro-tonality',
      summary: 'Find the colour of flattened notes.',
      description: 'Accurate half-covering of holes for Komal Re, Ga, Dha, and Ni. Rolling the flute slightly inwards drops the pitch with acoustic warmth.',
      status: 'Not started',
      notes: 'Use a digital tuner to verify precise Komal Re and Komal Dha pitch without blowing flat.',
      connectedGoal: '',
      youtubeUrl: 'https://www.youtube.com/watch?v=1K8_Z7Y2x8k',
      videos: [
        {
          id: 'v-komal-1',
          title: 'Mastering Half-Hole Technique for Komal Swars',
          url: 'https://www.youtube.com/watch?v=1K8_Z7Y2x8k',
          notes: 'Proper finger placement and angle on holes 1, 2, and 4.'
        },
        {
          id: 'v-komal-2',
          title: 'Intonation & Tone Color with Inward Flute Rolling',
          url: 'https://www.youtube.com/watch?v=0hW6V8Yg_fA',
          notes: 'Fine pitch adjustments for microtonal precision.'
        }
      ]
    },
    {
      id: 'tech-5',
      name: 'Alankars',
      subtitle: 'Patterns · Breath synchronization · Speed',
      summary: 'Patterns for clarity, control and flow.',
      description: 'The foundation of bansuri riyaaz. Regular ascending and descending swar permutations build finger-brain reflex.',
      status: 'Learning',
      notes: 'Practice Alankar 1 through 7 in 3 speeds: Vilambit (60 BPM), Madhyalaya (90 BPM), Drut (120 BPM).',
      connectedGoal: 'Clear 7 basic Alankars',
      youtubeUrl: 'https://www.youtube.com/watch?v=3g8J2L1vK8w',
      videos: [
        {
          id: 'v-alankar-1',
          title: 'Top 7 Alankars for Flute Finger Speed & Breath Control',
          url: 'https://www.youtube.com/watch?v=3g8J2L1vK8w',
          notes: 'Ascending and descending swar exercises across two octaves.'
        },
        {
          id: 'v-alankar-2',
          title: 'Speed Building: Metronome Alankar Drills from 60 to 140 BPM',
          url: 'https://www.youtube.com/watch?v=4yM2nB9yv8A',
          notes: 'Maintain equal volume across all 7 notes at high speed.'
        }
      ]
    },
    {
      id: 'tech-6',
      name: 'Kan Swar',
      subtitle: 'Grace notes · Shadow swar · Touch',
      summary: 'Touch the shadow of an adjacent swar.',
      description: 'A fleeting touch of a higher or lower swar before resting on the principal note, adding soul to classical renditions.',
      status: 'Learning',
      notes: 'The touch must be instantaneous and weightless.',
      connectedGoal: '',
      youtubeUrl: 'https://www.youtube.com/watch?v=5zM1v8K9yLw',
      videos: [
        {
          id: 'v-kan-1',
          title: 'Kan Swar (Grace Notes): Adding Emotion & Classical Depth',
          url: 'https://www.youtube.com/watch?v=5zM1v8K9yLw',
          notes: 'Subtle touch of adjacent note without losing principal pitch.'
        }
      ]
    },
    {
      id: 'tech-7',
      name: 'Jhala & Tonguing',
      subtitle: 'Fast articulation · Ta-Da / Ta-Ka',
      summary: 'Crisp rhythmic cascades and staccato.',
      description: 'Fast rhythmic articulation using double-tonguing while maintaining continuous breath stream into the embouchure.',
      status: 'Not started',
      notes: 'Practice whispering Ta-Ka-Ta-Ka cleanly before doing it on the blowing hole.',
      connectedGoal: '',
      youtubeUrl: 'https://www.youtube.com/watch?v=7kL2v9Y1m4A',
      videos: [
        {
          id: 'v-jhala-1',
          title: 'Double Tonguing (Ta-Ka Ta-Ka) Technique for Bansuri',
          url: 'https://www.youtube.com/watch?v=7kL2v9Y1m4A',
          notes: 'Clear rhythmic attack on the embouchure.'
        }
      ]
    }
  ],
  raags: [
    {
      id: 'raag-1',
      name: 'Raag Yaman',
      thaat: 'Kalyan',
      prahar: 'Evening / Pratham Prahar (7:00 PM – 10:00 PM)',
      aroha: 'Ni Re Ga, Ma’ Dha Ni, Sa’',
      avroha: 'Sa’ Ni Dha, Pa, Ma’ Ga, Re, Sa',
      vadi: 'Ga (Gandhar)',
      samvadi: 'Ni (Nishad)',
      pakad: 'Ni Re Ga, Re Sa, Pa Ma’ Ga, Re Sa',
      rasa: 'Shringara (Romantic Devotion) & Shanti',
      description: 'The monarch of evening Ragas. Known for Teevra Madhyam and expansive peaceful development in the Mandra and Madhya saptaks.',
      flautist: 'Pt. Hariprasad Chaurasia',
      performanceTitle: 'Pt. Hariprasad Chaurasia – Divine Raag Yaman Flute Live',
      youtubeUrl: 'https://www.youtube.com/watch?v=Gk74iG0-X8k'
    },
    {
      id: 'raag-2',
      name: 'Raag Bhupali',
      thaat: 'Kalyan',
      prahar: 'First quarter of night (7:00 PM – 10:00 PM)',
      aroha: 'Sa Re Ga Pa Dha Sa’',
      avroha: 'Sa’ Dha Pa Ga Re Sa',
      vadi: 'Ga (Gandhar)',
      samvadi: 'Dha (Dhaivat)',
      pakad: 'Ga Re Sa .Dha, Sa Re Ga, Pa Ga, Dha Pa Ga Re Sa',
      rasa: 'Bhakti, Shanta & Majestic Peace',
      description: 'An audav-audav (pentatonic) Raga omitting Ma and Ni. Pure, sublime and soaring on bamboo bansuri.',
      flautist: 'Pt. Ronu Majumdar',
      performanceTitle: 'Pt. Ronu Majumdar – Raag Bhupali Alaap & Jod',
      youtubeUrl: 'https://www.youtube.com/watch?v=2rN9L1yX7oQ'
    },
    {
      id: 'raag-3',
      name: 'Raag Bhairav',
      thaat: 'Bhairav',
      prahar: 'Dawn / Pratahkaal (Sunrise 4:00 AM – 7:00 AM)',
      aroha: 'Sa Re_ Ga Ma Pa Dha_ Ni Sa’',
      avroha: 'Sa’ Ni Dha_ Pa Ma Ga Re_ Sa',
      vadi: 'Dha_ (Komal Dhaivat with Andolan)',
      samvadi: 'Re_ (Komal Rishabh with Andolan)',
      pakad: 'Ga Ma Dha_ Dha_ Pa, Ma Ga, Ma Re_ Re_ Sa',
      rasa: 'Gambhir (Grave), Meditative & Sacred',
      description: 'The ancient morning awakening. The gentle trembling oscillation (Andolan) on Komal Re and Komal Dha requires masterful finger control.',
      flautist: 'Pt. Hariprasad Chaurasia',
      performanceTitle: 'Morning Riyaaz in Raag Bhairav – Pt. Hariprasad Chaurasia',
      youtubeUrl: 'https://www.youtube.com/watch?v=9gM2L7xK4rY'
    },
    {
      id: 'raag-4',
      name: 'Raag Bageshri',
      thaat: 'Kafi',
      prahar: 'Midnight (11:00 PM – 1:00 AM)',
      aroha: 'Sa .Ni Dha .Ni Sa, Ma, Dha Ni Sa’',
      avroha: 'Sa’ Ni Dha, Ma, Pa Dha Ga_ Ma Re Sa',
      vadi: 'Ma (Madhyam)',
      samvadi: 'Sa (Shadja)',
      pakad: 'Dha .Ni Sa, Ma, Dha Ni Dha Ma, Ma Ga_ Re Sa',
      rasa: 'Viraha (Soulful Longing) & Introspection',
      description: 'An evocative late-night raga with Komal Ga and Komal Ni. Pancham is vakra and used very delicately in descent.',
      flautist: 'Pt. Pravin Godkhindi',
      performanceTitle: 'Pt. Pravin Godkhindi – Soulful Raag Bageshri',
      youtubeUrl: 'https://www.youtube.com/watch?v=8bK4m1Z3yWw'
    },
    {
      id: 'raag-5',
      name: 'Raag Darbari Kanada',
      thaat: 'Asavari',
      prahar: 'Late Night (12:00 AM – 3:00 AM)',
      aroha: 'Sa Re Ga_ Ma Pa Dha_ Ni_ Sa’',
      avroha: 'Sa’ Dha_ Ni_ Pa, Ma Pa, Ga_ Ma Re Sa',
      vadi: 'Re (Rishabh)',
      samvadi: 'Pa (Pancham)',
      pakad: 'Ga_ Ma Re Sa, .Dha_ .Ni_ Sa',
      rasa: 'Veera & Deep Majesty',
      description: 'Emperor Akbar’s court raga, created by Mian Tansen. Characterized by deep, slow, weeping andolan oscillations on Komal Ga and Komal Dha.',
      flautist: 'Pt. Pannalal Ghosh',
      performanceTitle: 'Legendary Pt. Pannalal Ghosh – Historic Raag Darbari',
      youtubeUrl: 'https://www.youtube.com/watch?v=6vN2m4K1xL0'
    }
  ],
  songs: [
    {
      id: 'song-1',
      title: 'Lag Jaa Gale',
      movie: 'Woh Kaun Thi / Lata Mangeshkar',
      scale: 'C natural',
      difficulty: 'Intermediate',
      // Song statuses: 'Want to learn', 'Learning', 'Learned' (allowed for repertoire songs!)
      status: 'Learning',
      youtubeUrl: 'https://www.youtube.com/watch?v=1F_qR3wQ98g',
      notes: 'Focus next: smooth phrase endings on "ke phir ye haseen raat ho na ho". Gentle Meend on Re to Pa.'
    },
    {
      id: 'song-2',
      title: 'Krishna Theme (Flute masterpiece)',
      movie: 'Mahabharat / Pt. Hariprasad Chaurasia',
      scale: 'G bass / E bass',
      difficulty: 'Advanced',
      status: 'Learning',
      youtubeUrl: 'https://www.youtube.com/watch?v=W0rGZ7y4m-s',
      notes: 'Divine slow meends between Pa and Dha. Emphasize warm lower register blowing.'
    },
    {
      id: 'song-3',
      title: 'Moh Moh Ke Dhaage',
      movie: 'Dum Laga Ke Haisha (Raga Yaman base)',
      scale: 'C natural',
      difficulty: 'Intermediate',
      status: 'Want to learn',
      youtubeUrl: 'https://www.youtube.com/watch?v=5Vj8vY6nB3M',
      notes: 'Soft breath modulation on high Sa and Ni.'
    },
    {
      id: 'song-4',
      title: 'Ae Mere Humsafar',
      movie: 'Qayamat Se Qayamat Tak',
      scale: 'C# natural',
      difficulty: 'Beginner',
      status: 'Learned',
      youtubeUrl: 'https://www.youtube.com/watch?v=3g8K1v8x9wM',
      notes: 'Clean ornamentations and timing on the chorus. Mastered steady tempo with tabla.'
    },
    {
      id: 'song-5',
      title: 'Albela Sajan Aayo Re',
      movie: 'Hum Dil De Chuke Sanam / Raag Ahir Bhairav',
      scale: 'D natural',
      difficulty: 'Advanced',
      status: 'Want to learn',
      youtubeUrl: 'https://www.youtube.com/watch?v=9jR2L8xQ3mA',
      notes: 'Intricate Komal Ni and Komal Re gamaks.'
    }
  ],
  goals: [
    {
      id: 'goal-1',
      title: '15 days of Meend',
      description: '5 mindful minutes each day. Keep the glide unhurried.',
      targetDays: 15,
      currentDays: 9,
      targetDate: '31 Oct 2026',
      linkedTechnique: 'Meend',
      completed: false,
      log: '9 practice days logged. Keep the glide unhurried.'
    },
    {
      id: 'goal-2',
      title: 'Steady 25s Sa on G Bass',
      description: 'Deep abdominal pranayama breathing without tension in throat.',
      targetDays: 20,
      currentDays: 12,
      targetDate: '10 Nov 2026',
      linkedTechnique: 'Long notes',
      completed: false,
      log: 'Reached 22s steady hold without pitch flutter.'
    },
    {
      id: 'goal-3',
      title: 'Clear all 7 basic Alankars at 120 BPM',
      description: 'Clean finger articulation with metronome precision.',
      targetDays: 30,
      currentDays: 14,
      targetDate: '20 Nov 2026',
      linkedTechnique: 'Alankars',
      completed: false,
      log: 'Alankars 1-4 sounding crisp at 100 BPM.'
    }
  ]
};

// ==========================================
// Application State Controller
// ==========================================

class MurliSadhakApp {
  constructor() {
    this.state = this.loadState();
    this.modalActive = null;
    this.activeVideo = null;
  }

  loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Clean merge with default structure
        return { ...DEFAULT_STATE, ...parsed, liveSession: { ...DEFAULT_STATE.liveSession } };
      }
    } catch (e) {
      console.warn('Failed to load state from localStorage, using defaults', e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_STATE));
  }

  saveState() {
    try {
      // Don't persist active timers
      const clone = { ...this.state, liveSession: { ...this.state.liveSession, timerIntervalId: null, stopwatchIntervalId: null } };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(clone));
    } catch (e) {
      console.error('Failed to save state to localStorage', e);
    }
  }

  init() {
    // Ensure all techniques have valid videos array (Prompt #8: multiple videos per technique)
    if (this.state && Array.isArray(this.state.techniques)) {
      this.state.techniques.forEach(t => {
        if (!Array.isArray(t.videos) || t.videos.length === 0) {
          t.videos = this.getTechniqueVideos(t);
        }
      });
    }

    // Apply theme
    this.applyTheme(this.state.theme);
    this.updateUserInitialsBadge();

    // Initial Render
    this.renderNav();
    this.renderCurrentTab();
    this.setupGlobalEvents();
  }

  applyTheme(theme) {
    this.state.theme = theme;
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.innerHTML = theme === 'dark' 
        ? `<svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`
        : `<svg class="w-5 h-5 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>`;
    }
    this.saveState();
  }

  toggleTheme() {
    const nextTheme = this.state.theme === 'dark' ? 'light' : 'dark';
    this.applyTheme(nextTheme);
  }

  switchTab(tabId) {
    this.state.activeTab = tabId;
    this.saveState();
    this.renderNav();
    this.renderCurrentTab();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ==========================================
  // YouTube Helper: extract ID, thumbnail & embed URL
  // ==========================================
  getYouTubeVideoId(url) {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  }

  getYouTubeThumbnail(url) {
    const videoId = this.getYouTubeVideoId(url);
    if (!videoId) return null;
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  }

  previewYouTubeThumbnail(url, targetContainerId) {
    const container = document.getElementById(targetContainerId);
    if (!container) return;
    const thumb = this.getYouTubeThumbnail(url);
    if (thumb) {
      container.innerHTML = `
        <div class="mt-2.5 relative rounded-xl overflow-hidden aspect-video max-w-xs border border-stone-300 dark:border-stone-700 shadow-md">
          <img src="${thumb}" alt="Video Thumbnail" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-black/25 flex items-center justify-center">
            <span class="w-9 h-9 rounded-full bg-orange-600/90 text-white flex items-center justify-center shadow-lg text-xs">▶</span>
          </div>
          <span class="absolute bottom-1.5 right-1.5 px-2 py-0.5 rounded bg-black/80 text-[10px] text-white font-mono">Video Link Verified</span>
        </div>
      `;
    } else {
      container.innerHTML = '';
    }
  }

  // Retrieve array of YouTube videos for a technique with backward compatibility
  getTechniqueVideos(tech) {
    if (!tech) return [];
    if (Array.isArray(tech.videos) && tech.videos.length > 0) {
      return tech.videos;
    }
    // Match default technique templates if available
    const defaultTech = DEFAULT_STATE.techniques.find(d => d.id === tech.id);
    if (defaultTech && Array.isArray(defaultTech.videos) && defaultTech.videos.length > 0) {
      return defaultTech.videos;
    }
    if (tech.youtubeUrl) {
      return [{
        id: 'v-' + tech.id,
        title: `${tech.name} Tutorial Lesson`,
        url: tech.youtubeUrl,
        notes: tech.summary || 'Fundamental technique practice drill'
      }];
    }
    return [];
  }

  openModal(modalId) {
    const modalEl = document.getElementById(modalId);
    if (modalEl) {
      modalEl.classList.remove('hidden');
      modalEl.classList.add('flex');
    }
  }

  closeModal(modalId) {
    const modalEl = document.getElementById(modalId);
    if (modalEl) {
      modalEl.classList.add('hidden');
      modalEl.classList.remove('flex');
    }
  }

  openVideoModal(title, url, contextDesc = '') {
    const videoId = this.getYouTubeVideoId(url);
    const modalEl = document.getElementById('video-player-modal');
    const titleEl = document.getElementById('modal-video-title');
    const descEl = document.getElementById('modal-video-desc');
    const frameContainer = document.getElementById('modal-video-frame-container');
    const openYtLink = document.getElementById('modal-open-youtube-link');

    titleEl.textContent = title;
    descEl.textContent = contextDesc;
    openYtLink.href = url || `https://www.youtube.com/watch?v=${videoId}`;

    if (videoId) {
      frameContainer.innerHTML = `
        <iframe 
          class="w-full h-full rounded-xl"
          src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1" 
          title="${title}" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
        </iframe>
      `;
    } else {
      frameContainer.innerHTML = `
        <div class="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-stone-100 dark:bg-stone-900 rounded-xl">
          <p class="text-stone-600 dark:text-stone-300 font-medium mb-3">Video source not found or custom URL provided.</p>
          <a href="${url}" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium">Open Link in New Tab</a>
        </div>
      `;
    }

    this.openModal('video-player-modal');
  }

  closeVideoModal() {
    const frameContainer = document.getElementById('modal-video-frame-container');
    if (frameContainer) frameContainer.innerHTML = ''; // Stop video playback
    this.closeModal('video-player-modal');
  }

  // ==========================================
  // Global Navigation Header
  // ==========================================
  renderNav() {
    const tabs = [
      { id: 'dashboard', label: 'Dashboard', icon: '🏠' },
      { id: 'session', label: 'Session', icon: '⏱️' },
      { id: 'audio', label: 'Audio Riyaaz', icon: '🎵' },
      { id: 'learning', label: 'Learning library', icon: '📖' },
      { id: 'flutes', label: 'Flutes & care', icon: '🪈' },
      { id: 'videohub', label: 'Video hub', icon: '🎬' },
      { id: 'goals', label: 'Goals', icon: '🎯' }
    ];

    const isCurrent = (id) => this.state.activeTab === id || (id === 'session' && this.state.activeTab === 'planner');

    // Desktop nav container
    const navContainer = document.getElementById('main-nav-links');
    if (navContainer) {
      navContainer.innerHTML = tabs.map(tab => {
        const isActive = isCurrent(tab.id);
        return `
          <button 
            onclick="app.switchTab('${tab.id}')"
            class="px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all duration-150 flex items-center gap-1.5 ${
              isActive
                ? 'bg-orange-600 text-white shadow-xs'
                : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800/70 font-medium'
            }">
            <span>${tab.label}</span>
          </button>
        `;
      }).join('');
    }

    // Mobile / Tablet submenu container
    const mobileNav = document.getElementById('mobile-nav-links');
    if (mobileNav) {
      mobileNav.innerHTML = tabs.map(tab => {
        const isActive = isCurrent(tab.id);
        return `
          <button 
            onclick="app.switchTab('${tab.id}')"
            class="px-3 py-1.5 rounded-lg whitespace-nowrap text-xs font-semibold transition-all flex items-center gap-1.5 shrink-0 ${
              isActive
                ? 'bg-orange-600 text-white shadow-xs'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 font-medium'
            }">
            <span>${tab.icon}</span>
            <span>${tab.label}</span>
          </button>
        `;
      }).join('');
    }
  }

  // ==========================================
  // Router / Tab Switcher
  // ==========================================
  renderCurrentTab() {
    const content = document.getElementById('app-main-content');
    if (!content) return;

    switch (this.state.activeTab) {
      case 'dashboard':
        content.innerHTML = this.getDashboardHTML();
        break;
      case 'session':
      case 'planner':
        content.innerHTML = this.getSessionHTML();
        break;
      case 'audio':
        content.innerHTML = this.getAudioRiyaazHTML();
        break;
      case 'learning':
        content.innerHTML = this.getLearningLibraryHTML();
        break;
      case 'flutes':
        content.innerHTML = this.getFlutesCareHTML();
        break;
      case 'videohub':
        content.innerHTML = this.getVideoHubHTML();
        break;
      case 'goals':
        content.innerHTML = this.getGoalsHTML();
        break;
      default:
        content.innerHTML = this.getDashboardHTML();
    }
  }

  // ==========================================
  // 1. DASHBOARD VIEW (Matches Screenshot 5 & 1)
  // ==========================================
  getDashboardHTML() {
    const dueFlute = this.state.flutes.find(f => f.status === 'Care due') || this.state.flutes[1];
    const cFlute = this.state.flutes.find(f => f.name.includes('C natural')) || this.state.flutes[0];
    const meendGoal = this.state.goals[0];
    const activeSong = this.state.songs[0];

    return `
      <div class="space-y-7 max-w-7xl mx-auto pb-12 fade-in">
        <!-- Top Title & Subheading -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div class="flex items-center gap-3.5">
            <img src="logo-icon.png" alt="MurliSadhak Emblem" class="w-12 h-12 sm:w-14 sm:h-14 object-contain shrink-0 drop-shadow-2xs">
            <div>
              <span class="text-xs font-bold tracking-wider uppercase text-orange-600 dark:text-orange-400">STUDIO DASHBOARD & RIYAAZ HUB</span>
              <h1 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900 dark:text-stone-50 mt-0.5">
                Sadhana Dashboard · ${this.state.user.name}
              </h1>
              <p class="text-stone-500 dark:text-stone-400 text-xs sm:text-sm mt-0.5">
                Your flute practice overview, quick accompaniment links, flute health, and weekly targets.
              </p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <button 
              onclick="app.switchTab('session')" 
              class="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white rounded-lg text-sm font-bold shadow-xs transition-all">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              Open Session Room &rarr;
            </button>
          </div>
        </div>

        <!-- 4 Metric Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <!-- Metric 1: This week -->
          <div class="bg-white dark:bg-[#201e1b] rounded-xl p-5 border border-stone-200/90 dark:border-stone-800 shadow-sm relative overflow-hidden">
            <div class="flex items-center justify-between text-stone-500 dark:text-stone-400 text-xs font-medium">
              <span>This week</span>
              <svg class="w-4 h-4 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div class="text-2xl font-bold text-stone-900 dark:text-stone-100 mt-2">
              4 h 20 m
            </div>
            <div class="text-xs text-stone-500 dark:text-stone-400 mt-1">
              of your ${this.state.user.weeklyTargetHours}-hour intention
            </div>
            <div class="w-full bg-stone-100 dark:bg-stone-800 h-1.5 rounded-full mt-3 overflow-hidden">
              <div class="bg-orange-600 h-full rounded-full" style="width: 86%;"></div>
            </div>
          </div>

          <!-- Metric 2: Your rhythm -->
          <div class="bg-white dark:bg-[#201e1b] rounded-xl p-5 border border-stone-200/90 dark:border-stone-800 shadow-sm relative overflow-hidden">
            <div class="flex items-center justify-between text-stone-500 dark:text-stone-400 text-xs font-medium">
              <span>Your rhythm</span>
              <svg class="w-4 h-4 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"/></svg>
            </div>
            <div class="text-2xl font-bold text-stone-900 dark:text-stone-100 mt-2">
              ${this.state.user.streakDays} days
            </div>
            <div class="text-xs text-stone-500 dark:text-stone-400 mt-1">
              of mindful Meend practice
            </div>
            <div class="flex items-center gap-1 mt-3">
              ${[1,2,3,4,5,6,7].map(d => `<span class="w-2.5 h-2.5 rounded-full ${d <= 5 ? 'bg-orange-500' : 'bg-stone-200 dark:bg-stone-700'}"></span>`).join('')}
            </div>
          </div>

          <!-- Metric 3: Practice sessions -->
          <div class="bg-white dark:bg-[#201e1b] rounded-xl p-5 border border-stone-200/90 dark:border-stone-800 shadow-sm relative overflow-hidden">
            <div class="flex items-center justify-between text-stone-500 dark:text-stone-400 text-xs font-medium">
              <span>Practice sessions</span>
              <svg class="w-4 h-4 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            </div>
            <div class="text-2xl font-bold text-stone-900 dark:text-stone-100 mt-2">
              18
            </div>
            <div class="text-xs text-stone-500 dark:text-stone-400 mt-1">
              this October · 4 this week
            </div>
            <div class="text-xs font-semibold text-stone-600 dark:text-stone-300 mt-3 flex items-center gap-1">
              <span class="inline-block w-1.5 h-1.5 rounded-full bg-orange-600"></span> Consistent morning routine
            </div>
          </div>

          <!-- Metric 4: Songs in progress -->
          <div class="bg-white dark:bg-[#201e1b] rounded-xl p-5 border border-stone-200/90 dark:border-stone-800 shadow-sm relative overflow-hidden">
            <div class="flex items-center justify-between text-stone-500 dark:text-stone-400 text-xs font-medium">
              <span>Songs in progress</span>
              <svg class="w-4 h-4 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/></svg>
            </div>
            <div class="text-2xl font-bold text-stone-900 dark:text-stone-100 mt-2">
              2 learning
            </div>
            <div class="text-xs text-stone-500 dark:text-stone-400 mt-1">
              ${this.state.songs.length} songs · 4 tutorial slots
            </div>
            <div class="text-xs font-semibold text-orange-600 dark:text-orange-400 mt-3 cursor-pointer hover:underline" onclick="app.switchTab('videohub')">
              Open song hub &rarr;
            </div>
          </div>
        </div>

        <!-- Banner + Flute Health Section -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Inspiration Banner (2 columns) -->
          <div class="lg:col-span-2 bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-md relative overflow-hidden">
            <div class="relative z-10 max-w-md">
              <span class="text-xs font-bold uppercase tracking-wider text-orange-400">SUNDAY, 25 OCTOBER</span>
              <h2 class="text-2xl sm:text-3xl font-extrabold mt-2 leading-tight">
                Make room for your sound.
              </h2>
              <p class="text-stone-300 text-sm mt-2 leading-relaxed">
                A steady breath. A single note. A little more ease.
              </p>
              <div class="mt-6 flex flex-wrap items-center gap-3">
                <button 
                  onclick="app.startLiveSession()"
                  class="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-sm font-semibold shadow-sm transition-all flex items-center gap-2">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  Begin today's riyaaz
                </button>
                <button 
                  onclick="app.switchTab('audio')"
                  class="px-4 py-2.5 bg-stone-700 hover:bg-stone-600 text-stone-200 rounded-lg text-sm font-medium transition-all">
                  Tanpura & accompaniment
                </button>
              </div>
            </div>

            <!-- Flute Graphic Decoration on the right -->
            <div class="absolute right-4 bottom-4 md:right-8 md:top-1/2 md:-translate-y-1/2 opacity-80 pointer-events-none hidden sm:block">
              <div class="w-48 h-32 relative rounded-xl overflow-hidden border border-stone-700/60 shadow-inner bg-stone-950/40 p-3 flex flex-col justify-center items-center">
                <div class="flute-graphic-bamboo scale-90 mb-3">
                  <span class="binding left"></span>
                  <div class="flute-hole"></div>
                  <div class="flute-hole"></div>
                  <div class="flute-hole"></div>
                  <div class="flute-hole"></div>
                  <div class="flute-hole"></div>
                  <div class="flute-hole"></div>
                  <span class="binding right"></span>
                </div>
                <span class="text-[11px] text-stone-400 tracking-wide font-mono">C Natural Bamboo · 440 Hz</span>
              </div>
            </div>
          </div>

          <!-- Flute Health Widget (1 column) -->
          <div class="bg-white dark:bg-[#201e1b] rounded-2xl p-6 border border-stone-200/90 dark:border-stone-800 shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between pb-3 border-b border-stone-100 dark:border-stone-800">
                <h3 class="text-base font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                  <span>Flute health</span>
                </h3>
                <button onclick="app.switchTab('flutes')" class="text-xs font-semibold text-orange-600 dark:text-orange-400 hover:underline">
                  View all ${this.state.flutes.length}
                </button>
              </div>

              <!-- Flute item -->
              <div class="mt-4 flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg bg-orange-50 dark:bg-orange-950/40 flex items-center justify-center text-orange-600 dark:text-orange-400">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </div>
                  <div>
                    <div class="text-sm font-bold text-stone-900 dark:text-stone-100">${cFlute.name} · ${cFlute.type}</div>
                    <div class="text-xs text-stone-500 dark:text-stone-400">${cFlute.usage}</div>
                  </div>
                </div>
                <span class="px-2.5 py-1 text-xs font-semibold rounded-md bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-300">
                  Ready
                </span>
              </div>

              <div class="text-xs text-stone-500 dark:text-stone-400 mt-2 pl-11">
                Cleaned ${cFlute.lastCleaned} · Next care ${cFlute.nextCleaning}
              </div>
            </div>

            <!-- Due notice -->
            <div class="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800">
              <div class="flex items-start gap-2.5 p-3 rounded-xl bg-orange-50/80 dark:bg-orange-950/30 border border-orange-200/60 dark:border-orange-900/40 text-xs text-stone-700 dark:text-stone-300">
                <svg class="w-4 h-4 text-orange-600 dark:text-orange-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                <div>
                  <span class="font-semibold text-orange-800 dark:text-orange-300">${dueFlute.name} bamboo</span> is due for inspection & care today.
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Middle Row: Today's Riyaaz Plan & Your Accompaniment -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Today's Riyaaz (2 columns) -->
          <div class="lg:col-span-2 bg-white dark:bg-[#201e1b] rounded-2xl p-6 border border-stone-200/90 dark:border-stone-800 shadow-sm">
            <div class="flex items-center justify-between pb-4 border-b border-stone-100 dark:border-stone-800">
              <div>
                <h3 class="text-lg font-bold text-stone-900 dark:text-stone-100">${this.state.todayPlan.title}</h3>
                <p class="text-xs text-stone-500 dark:text-stone-400 mt-0.5">${this.state.todayPlan.subtitle}</p>
              </div>
              <button onclick="app.switchTab('session')" class="text-xs font-semibold text-stone-700 dark:text-stone-300 hover:text-orange-600 dark:hover:text-orange-400 flex items-center gap-1">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                Edit session
              </button>
            </div>

            <!-- Schedule Items -->
            <div class="divide-y divide-stone-100 dark:divide-stone-800/80 my-2">
              ${this.state.todayPlan.activities.map(act => `
                <div class="py-3.5 flex items-center justify-between">
                  <div class="flex items-start gap-4">
                    <span class="text-xs font-mono font-medium text-stone-400 dark:text-stone-500 w-12 pt-0.5">${act.timeRange}</span>
                    <div>
                      <h4 class="text-sm font-bold text-stone-900 dark:text-stone-100">${act.name}</h4>
                      <p class="text-xs text-stone-500 dark:text-stone-400 mt-0.5">${act.description}</p>
                    </div>
                  </div>
                  <span class="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400">
                    ${act.durationMin} min
                  </span>
                </div>
              `).join('')}
            </div>

            <!-- Footer: 60 minutes for yourself + Begin riyaaz button -->
            <div class="pt-4 border-t border-stone-100 dark:border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span class="text-xs font-medium text-stone-500 dark:text-stone-400">
                ${this.state.todayPlan.totalMinutes} minutes planned for today's sadhana
              </span>
              <button 
                onclick="app.switchTab('session')" 
                class="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 dark:bg-stone-800 dark:hover:bg-stone-700 text-white rounded-lg text-xs font-bold shadow-xs transition-all flex items-center justify-center gap-2">
                <span>⏱️ Open Session & Start Live Timer</span>
                <span>&rarr;</span>
              </button>
            </div>
          </div>

          <!-- Your Accompaniment (Tabla & Sitar Redirection as requested in prompt #1!) -->
          <div class="bg-white dark:bg-[#201e1b] rounded-2xl p-6 border border-stone-200/90 dark:border-stone-800 shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between pb-3 border-b border-stone-100 dark:border-stone-800">
                <div>
                  <h3 class="text-base font-bold text-stone-900 dark:text-stone-100">Your accompaniment</h3>
                  <p class="text-xs text-stone-400 mt-0.5">Direct external backing sources</p>
                </div>
                <button onclick="app.switchTab('audio')" class="text-xs font-semibold text-orange-600 dark:text-orange-400 hover:underline">
                  Audio tab &rarr;
                </button>
              </div>

              <!-- Option 1: TABLA -->
              <div class="mt-4 p-4 rounded-xl border border-stone-200/90 dark:border-stone-800 bg-stone-50/70 dark:bg-stone-900/40 hover:border-orange-500/50 transition-all">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-lg bg-orange-100 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400 flex items-center justify-center font-bold">
                      🥁
                    </div>
                    <div>
                      <div class="text-sm font-bold text-stone-900 dark:text-stone-100">${this.state.accompanimentLinks.tabla.name}</div>
                      <div class="text-xs text-stone-500 dark:text-stone-400">${this.state.accompanimentLinks.tabla.subtitle}</div>
                    </div>
                  </div>
                  <a 
                    href="${this.state.accompanimentLinks.tabla.url}" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 dark:bg-stone-800 dark:hover:bg-stone-700 text-white rounded-md text-xs font-semibold transition-all inline-flex items-center gap-1.5 shadow-xs">
                    <span>Open Tabla</span>
                    <svg class="w-3.5 h-3.5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                  </a>
                </div>
              </div>

              <!-- Option 2: SITAR / TANPURA SHRUTI BOX -->
              <div class="mt-3 p-4 rounded-xl border border-stone-200/90 dark:border-stone-800 bg-stone-50/70 dark:bg-stone-900/40 hover:border-orange-500/50 transition-all">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-lg bg-orange-100 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400 flex items-center justify-center font-bold">
                      🪕
                    </div>
                    <div>
                      <div class="text-sm font-bold text-stone-900 dark:text-stone-100">${this.state.accompanimentLinks.sitar.name}</div>
                      <div class="text-xs text-stone-500 dark:text-stone-400">${this.state.accompanimentLinks.sitar.subtitle}</div>
                    </div>
                  </div>
                  <a 
                    href="${this.state.accompanimentLinks.sitar.url}" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 dark:bg-stone-800 dark:hover:bg-stone-700 text-white rounded-md text-xs font-semibold transition-all inline-flex items-center gap-1.5 shadow-xs">
                    <span>Open Drone</span>
                    <svg class="w-3.5 h-3.5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                  </a>
                </div>
              </div>
            </div>

            <!-- Built-in Tanpura Drone Quick Toggle -->
            <div class="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full ${window.tanpura && window.tanpura.isPlaying ? 'bg-orange-600 animate-ping' : 'bg-stone-300 dark:bg-stone-600'}"></span>
                  <span class="text-xs font-medium text-stone-600 dark:text-stone-300">Tanpura drone (C Sa-Pa)</span>
                </div>
                <button 
                  onclick="app.toggleTanpura()" 
                  id="dashboard-tanpura-btn"
                  class="px-3 py-1 text-xs font-semibold rounded-md ${window.tanpura && window.tanpura.isPlaying ? 'bg-orange-600 text-white' : 'bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-200'}">
                  ${window.tanpura && window.tanpura.isPlaying ? 'Stop' : 'Play Drone'}
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Row: 15 days of Meend Goal & Pick up where you left off -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Goal Card: 15 days of Meend -->
          <div class="bg-white dark:bg-[#201e1b] rounded-2xl p-6 border border-stone-200/90 dark:border-stone-800 shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between">
                <h3 class="text-base font-bold text-stone-900 dark:text-stone-100">${meendGoal.title}</h3>
                <button onclick="app.switchTab('goals')" class="text-xs font-semibold text-orange-600 dark:text-orange-400 hover:underline">
                  View goal &rarr;
                </button>
              </div>
              <div class="text-xs text-stone-500 dark:text-stone-400 mt-1">
                Day ${meendGoal.currentDays} of ${meendGoal.targetDays} · Target ${meendGoal.targetDate}
              </div>
              <div class="w-full bg-stone-100 dark:bg-stone-800 h-2 rounded-full mt-4 overflow-hidden">
                <div class="bg-orange-600 h-full rounded-full transition-all duration-500" style="width: ${(meendGoal.currentDays / meendGoal.targetDays) * 100}%;"></div>
              </div>
            </div>
            <div class="text-xs text-stone-500 dark:text-stone-400 mt-4">
              ${meendGoal.log}
            </div>
          </div>

          <!-- Pick up where you left off: Song Video Hub -->
          <div class="bg-white dark:bg-[#201e1b] rounded-2xl p-6 border border-stone-200/90 dark:border-stone-800 shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between">
                <h3 class="text-base font-bold text-stone-900 dark:text-stone-100">Pick up where you left off</h3>
                <button onclick="app.switchTab('videohub')" class="text-xs font-semibold text-orange-600 dark:text-orange-400 hover:underline">
                  Open Video hub &rarr;
                </button>
              </div>
              <div class="text-sm font-semibold text-stone-800 dark:text-stone-200 mt-2">
                ${activeSong.title} · Song tutorial
              </div>
              <div class="flex items-center gap-2 mt-2">
                <span class="px-2 py-0.5 text-xs font-medium rounded bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300">
                  ${activeSong.status}
                </span>
                <span class="text-xs text-stone-500 dark:text-stone-400">
                  ${activeSong.notes}
                </span>
              </div>
            </div>
            <div class="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between">
              <span class="text-xs text-stone-400 font-mono">Flute: ${activeSong.scale}</span>
              <button 
                onclick="app.openVideoModal('${activeSong.title}', '${activeSong.youtubeUrl}', '${activeSong.notes}')"
                class="px-3.5 py-1.5 bg-orange-600 hover:bg-orange-700 text-white rounded-md text-xs font-semibold transition-all flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                Watch on website
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // ==========================================
  // 2. SESSION & LIVE RIYAAZ RUNTIME PLAYER
  // ==========================================
  getSessionHTML() {
    const isLive = this.state.liveSession.isActive;

    return `
      <div class="space-y-8 max-w-6xl mx-auto pb-16 fade-in">
        <!-- Session Header -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span class="text-xs font-bold tracking-wider uppercase text-orange-600 dark:text-orange-400">SESSION PLANNER & LIVE PRACTICE ROOM</span>
            <h1 class="text-3xl font-extrabold tracking-tight text-stone-900 dark:text-stone-50 mt-1">
              Interactive Riyaaz Session Studio.
            </h1>
            <p class="text-stone-500 dark:text-stone-400 text-sm mt-1">
              Minute-by-minute breakdown, live stopwatch for long notes, countdown timer, and riyaaz history.
            </p>
          </div>
          <div class="flex items-center gap-3">
            <button 
              onclick="app.openAddActivityModal()" 
              class="px-4 py-2.5 bg-stone-900 hover:bg-stone-800 dark:bg-stone-800 dark:hover:bg-stone-700 text-white rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5">
              <svg class="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              Add sub-activity
            </button>
            <button 
              onclick="app.startLiveSession()" 
              class="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-sm font-bold shadow-xs transition-all flex items-center gap-2">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              ${isLive ? 'Return to Live Session' : 'Start Live Session Now'}
            </button>
          </div>
        </div>

        <!-- Active / Live Session Runtime Card (Prominent interactive area) -->
        ${isLive ? this.renderLiveSessionBanner() : ''}

        <!-- Minute-by-Minute Schedule Builder -->
        <div class="bg-white dark:bg-[#201e1b] rounded-2xl p-6 sm:p-8 border border-stone-200/90 dark:border-stone-800 shadow-sm">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-100 dark:border-stone-800">
            <div>
              <h2 class="text-xl font-bold text-stone-900 dark:text-stone-100">Session Structure</h2>
              <p class="text-xs text-stone-500 dark:text-stone-400 mt-1">
                Total planned time: <strong class="text-orange-600 dark:text-orange-400 font-mono text-sm">${this.calculateTotalPlannedMinutes()} minutes</strong>
              </p>
            </div>
            <div class="flex items-center gap-2">
              <button 
                onclick="app.setQuickPreset(30)" 
                class="px-3 py-1.5 text-xs font-semibold rounded-lg bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300">
                30m quick
              </button>
              <button 
                onclick="app.setQuickPreset(60)" 
                class="px-3 py-1.5 text-xs font-semibold rounded-lg bg-orange-100 hover:bg-orange-200 dark:bg-orange-950/60 dark:hover:bg-orange-900 text-orange-700 dark:text-orange-300">
                60m classical
              </button>
              <button 
                onclick="app.setQuickPreset(90)" 
                class="px-3 py-1.5 text-xs font-semibold rounded-lg bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300">
                90m intensive
              </button>
            </div>
          </div>

          <!-- Activities Table / List -->
          <div class="divide-y divide-stone-100 dark:divide-stone-800 my-4">
            ${this.state.todayPlan.activities.map((act, idx) => `
              <div class="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div class="flex items-start gap-4">
                  <div class="w-8 h-8 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-xs font-mono font-bold text-stone-600 dark:text-stone-300 shrink-0">
                    ${idx + 1}
                  </div>
                  <div>
                    <div class="flex items-center gap-2">
                      <h4 class="text-base font-bold text-stone-900 dark:text-stone-100">${act.name}</h4>
                      <span class="px-2 py-0.5 text-xs font-mono font-medium rounded bg-stone-100 dark:bg-stone-800 text-stone-500">
                        ${act.durationMin} min
                      </span>
                    </div>
                    <p class="text-xs text-stone-500 dark:text-stone-400 mt-1">${act.description}</p>
                  </div>
                </div>

                <div class="flex items-center gap-2 pl-12 sm:pl-0">
                  <!-- Increase / Decrease runtime minutes -->
                  <button 
                    onclick="app.adjustActivityMinutes('${act.id}', -5)" 
                    class="w-7 h-7 rounded-md bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 flex items-center justify-center font-bold text-sm">
                    -
                  </button>
                  <span class="font-mono text-xs font-semibold w-12 text-center text-stone-800 dark:text-stone-200">${act.durationMin}m</span>
                  <button 
                    onclick="app.adjustActivityMinutes('${act.id}', 5)" 
                    class="w-7 h-7 rounded-md bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 flex items-center justify-center font-bold text-sm">
                    +
                  </button>
                  <button 
                    onclick="app.removeActivity('${act.id}')" 
                    class="p-1.5 text-stone-400 hover:text-red-500 rounded-md transition-all ml-2" 
                    title="Remove activity">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                  </button>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Add custom sub-activity button -->
          <div class="pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between">
            <button 
              onclick="app.openAddActivityModal()" 
              class="text-xs font-semibold text-orange-600 dark:text-orange-400 hover:underline flex items-center gap-1.5">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              Add another technique or ornament sub-activity
            </button>
          </div>
        </div>

        <!-- History of Earlier Sessions Section (Prompt #2 requirement) -->
        <div class="bg-white dark:bg-[#201e1b] rounded-2xl p-6 sm:p-8 border border-stone-200/90 dark:border-stone-800 shadow-sm">
          <div class="flex items-center justify-between pb-4 border-b border-stone-100 dark:border-stone-800">
            <div>
              <h2 class="text-xl font-bold text-stone-900 dark:text-stone-100">Riyaaz History</h2>
              <p class="text-xs text-stone-500 dark:text-stone-400 mt-0.5">Logs of all previous practice sessions and reflections</p>
            </div>
            <span class="text-xs font-mono text-stone-400">${this.state.sessionHistory.length} recorded</span>
          </div>

          <div class="divide-y divide-stone-100 dark:divide-stone-800/80 my-2">
            ${this.state.sessionHistory.map(sess => `
              <div class="py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div class="space-y-1">
                  <div class="flex items-center gap-2.5">
                    <span class="font-bold text-sm text-stone-900 dark:text-stone-100">${sess.date}</span>
                    <span class="text-xs text-stone-400">·</span>
                    <span class="text-xs font-mono text-stone-500">${sess.time}</span>
                    <span class="px-2 py-0.5 text-xs font-medium rounded-full bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300">
                      ${sess.fluteUsed}
                    </span>
                    <span class="px-2 py-0.5 text-xs font-medium rounded-full bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300">
                      ${sess.mood}
                    </span>
                  </div>
                  <div class="text-xs text-stone-600 dark:text-stone-300 flex flex-wrap gap-1.5 mt-1">
                    ${sess.techniques.map(t => `<span class="bg-stone-50 dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800 px-2 py-0.5 rounded text-[11px]">${t}</span>`).join('')}
                  </div>
                  <p class="text-xs text-stone-500 dark:text-stone-400 italic mt-1">${sess.notes}</p>
                </div>

                <div class="flex items-center gap-3 shrink-0">
                  <span class="font-mono font-bold text-base text-orange-600 dark:text-orange-400">${sess.durationMinutes} min</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // ==========================================
  // LIVE SESSION INTERACTIVE RUNTIME BANNER & MODAL
  // ==========================================
  renderLiveSessionBanner() {
    const session = this.state.liveSession;
    const activities = this.state.todayPlan.activities;
    const currentAct = activities[session.currentActivityIndex] || activities[0];
    const nextAct = activities[session.currentActivityIndex + 1] || null;

    const remainingMins = Math.floor(session.activityRemainingSeconds / 60);
    const remainingSecs = session.activityRemainingSeconds % 60;
    const timeFormatted = `${String(remainingMins).padStart(2, '0')}:${String(remainingSecs).padStart(2, '0')}`;

    const totalElapsedMins = Math.floor(session.totalElapsedSeconds / 60);
    const totalElapsedSecs = session.totalElapsedSeconds % 60;
    const elapsedFormatted = `${String(totalElapsedMins).padStart(2, '0')}:${String(totalElapsedSecs).padStart(2, '0')}`;

    const swMins = Math.floor(session.stopwatchSeconds / 60);
    const swSecs = session.stopwatchSeconds % 60;
    const stopwatchFormatted = `${String(swMins).padStart(2, '0')}:${String(swSecs).padStart(2, '0')}`;

    return `
      <div class="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-orange-500/40 relative overflow-hidden">
        <!-- Live status bar -->
        <div class="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-stone-700/60">
          <div class="flex items-center gap-3">
            <span class="flex h-3 w-3 relative">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
            </span>
            <span class="text-xs font-bold uppercase tracking-wider text-orange-400">LIVE RIYAAZ IN PROGRESS</span>
            <span id="live-session-elapsed-timer" class="text-xs text-stone-400 font-mono">Elapsed: ${elapsedFormatted}</span>
          </div>

          <!-- Runtime Accompaniment Quick Redirection -->
          <div class="flex items-center gap-2">
            <a href="${this.state.accompanimentLinks.tabla.url}" target="_blank" rel="noopener noreferrer" class="px-3 py-1 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-md text-xs font-medium inline-flex items-center gap-1">
              <span>🥁 Tabla website</span>
              <svg class="w-3 h-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>
            <a href="${this.state.accompanimentLinks.sitar.url}" target="_blank" rel="noopener noreferrer" class="px-3 py-1 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-md text-xs font-medium inline-flex items-center gap-1">
              <span>🪕 Sitar website</span>
              <svg class="w-3 h-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>
            <button onclick="app.toggleTanpura()" class="px-3 py-1 ${window.tanpura && window.tanpura.isPlaying ? 'bg-orange-600 text-white' : 'bg-stone-800 text-stone-300'} rounded-md text-xs font-medium">
              ${window.tanpura && window.tanpura.isPlaying ? 'Stop Drone' : 'Play Tanpura Drone'}
            </button>
          </div>
        </div>

        <!-- Technique Display: Current & Next -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <!-- Current Technique -->
          <div class="bg-stone-800/60 p-5 rounded-2xl border border-stone-700/80">
            <span class="text-xs font-bold uppercase tracking-wider text-orange-400">CURRENT TECHNIQUE</span>
            <div class="text-2xl font-black mt-1 text-white">${currentAct.name}</div>
            <p class="text-xs text-stone-300 mt-1">${currentAct.description}</p>
            
            <!-- Activity Countdown Timer -->
            <div class="mt-4 flex items-baseline gap-3">
              <span id="live-session-countdown-timer" class="text-4xl sm:text-5xl font-black font-mono text-orange-400">${timeFormatted}</span>
              <span class="text-xs text-stone-400">remaining for this technique</span>
            </div>
          </div>

          <!-- Next Technique -->
          <div class="bg-stone-800/40 p-5 rounded-2xl border border-stone-700/50 flex flex-col justify-between">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-stone-400">UP NEXT</span>
              ${nextAct ? `
                <div class="text-xl font-bold mt-1 text-stone-200">${nextAct.name}</div>
                <p class="text-xs text-stone-400 mt-1">${nextAct.description}</p>
                <div class="mt-3 text-xs font-mono text-orange-400">${nextAct.durationMin} minutes allocated</div>
              ` : `
                <div class="text-lg font-bold mt-1 text-stone-300">Final segment!</div>
                <p class="text-xs text-stone-400 mt-1">Concluding today's riyaaz with meditative closing notes.</p>
              `}
            </div>

            <div class="mt-4 pt-3 border-t border-stone-700/60 flex items-center justify-between text-xs text-stone-400">
              <span>Segment ${session.currentActivityIndex + 1} of ${activities.length}</span>
              ${nextAct ? `
                <button onclick="app.skipToNextActivity()" class="text-orange-400 hover:text-orange-300 font-semibold flex items-center gap-1">
                  Skip to next &rarr;
                </button>
              ` : ''}
            </div>
          </div>
        </div>

        <!-- Stopwatch for Long Notes Practice (Prompt #2 explicit request) -->
        <div class="p-5 rounded-2xl bg-stone-950/60 border border-stone-800 my-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 class="text-sm font-bold text-white flex items-center gap-2">
                <svg class="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                Long Notes Sustained Breath Stopwatch
              </h4>
              <p class="text-xs text-stone-400 mt-0.5">
                Measure individual sustained Sa breath holds. Target: 20s–30s stable tone without flutter.
              </p>
            </div>
            
            <div class="flex items-center gap-3">
              <span id="live-session-stopwatch-timer" class="font-mono text-3xl font-extrabold text-white">${stopwatchFormatted}</span>
              <button 
                onclick="app.toggleStopwatch()" 
                class="px-4 py-2 text-xs font-bold rounded-lg ${session.stopwatchRunning ? 'bg-amber-600 hover:bg-amber-700' : 'bg-orange-600 hover:bg-orange-700'} text-white transition-all">
                ${session.stopwatchRunning ? 'Stop & Record Hold' : 'Start Breath Hold'}
              </button>
              <button 
                onclick="app.resetStopwatch()" 
                class="px-3 py-2 text-xs font-semibold rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 transition-all">
                Reset
              </button>
            </div>
          </div>

          <!-- Recorded breath holds chips -->
          <div class="flex flex-wrap items-center gap-2 mt-3 pt-3 border-t border-stone-800/80">
            <span class="text-[11px] text-stone-400 uppercase font-mono">Today's holds:</span>
            ${session.recordedBreaths.map((s, idx) => `
              <span class="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-stone-800 text-orange-300 border border-stone-700">
                #${idx+1}: ${s}s
              </span>
            `).join('')}
            <span class="text-xs text-stone-400 ml-auto">Best: <strong class="text-white">${Math.max(...session.recordedBreaths, 0)}s</strong></span>
          </div>
        </div>

        <!-- Runtime Session Editing Controls (Prompt #2 requirement: "edit the session hour at runtime") -->
        <div class="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-stone-700/60">
          <div class="flex flex-wrap items-center gap-2">
            <span class="text-xs text-stone-400 font-medium">Runtime additions:</span>
            <button 
              onclick="app.addRuntimeMinutes(5)" 
              class="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-orange-400 text-xs font-bold border border-stone-700">
              +5 min to current
            </button>
            <button 
              onclick="app.addRuntimeMinutes(10)" 
              class="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-orange-400 text-xs font-bold border border-stone-700">
              +10 min
            </button>
            <button 
              onclick="app.openRuntimeAddActivityModal()" 
              class="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium border border-stone-700 flex items-center gap-1">
              <svg class="w-3.5 h-3.5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              Add new activity now
            </button>
          </div>

          <!-- Primary Session Flow Controls -->
          <div class="flex items-center gap-2">
            <button 
              onclick="app.togglePauseLiveSession()" 
              class="px-4 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-white text-xs font-semibold">
              ${session.isPaused ? 'Resume' : 'Pause'}
            </button>
            <button 
              onclick="app.finishLiveSession()" 
              class="px-5 py-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold shadow-md">
              Complete Session
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // ==========================================
  // 3. AUDIO RIYAAZ TAB (Matches Screenshot 2)
  // ==========================================
  getAudioRiyaazHTML() {
    const isTanpuraPlaying = window.tanpura && window.tanpura.isPlaying;
    const tanpuraScale = window.tanpura ? window.tanpura.scale : 'C';

    return `
      <div class="space-y-8 max-w-7xl mx-auto pb-16 fade-in">
        <!-- Title & Subtitle -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span class="text-xs font-bold tracking-wider uppercase text-orange-600 dark:text-orange-400">YOUR PERSONAL RIYAAZ STUDIO</span>
            <h1 class="text-3xl font-extrabold tracking-tight text-stone-900 dark:text-stone-50 mt-1">
              Find your accompaniment.
            </h1>
            <p class="text-stone-500 dark:text-stone-400 text-sm mt-1">
              Keep your favourite backing sources close, and your attention on the flute.
            </p>
          </div>
          <button 
            onclick="document.getElementById('form-source-name').focus(); document.getElementById('connect-source-box').scrollIntoView({behavior:'smooth'})" 
            class="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-sm font-semibold shadow-sm transition-all flex items-center gap-2 self-start md:self-auto">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            Add source
          </button>
        </div>

        <!-- Filter Pills -->
        <div class="flex items-center gap-2 text-xs font-medium">
          <button class="px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300 font-bold">
            All sources · ${this.state.audioSources.length}
          </button>
          <button class="px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400">
            Websites · ${this.state.audioSources.filter(s => s.category === 'website').length}
          </button>
          <button class="px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400">
            YouTube · ${this.state.audioSources.filter(s => s.category === 'youtube').length}
          </button>
        </div>

        <!-- Layout: Source Cards (7 cols) & Connect Source Form (5 cols) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <!-- Left: Accompaniment Sources Grid (7 cols) -->
          <div class="lg:col-span-7 space-y-4">
            ${this.state.audioSources.map(src => {
              const ytThumb = src.category === 'youtube' ? this.getYouTubeThumbnail(src.url) : null;
              return `
                <div class="bg-white dark:bg-[#201e1b] rounded-2xl p-5 border border-stone-200/90 dark:border-stone-800 shadow-sm hover:border-orange-500/40 transition-all flex flex-col justify-between">
                  <div>
                    <div class="flex items-start justify-between gap-3">
                      <div class="flex items-start gap-3.5">
                        <div class="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 flex items-center justify-center text-lg font-bold shrink-0">
                          ${src.category === 'youtube' ? '▶' : (src.name.includes('Tabla') ? '🥁' : '🪕')}
                        </div>
                        <div>
                          <h3 class="text-base font-bold text-stone-900 dark:text-stone-100">${src.name}</h3>
                          <p class="text-xs text-stone-500 dark:text-stone-400 mt-0.5">${src.description}</p>
                          <div class="text-xs font-mono text-stone-400 mt-1">Scale: ${src.scale}</div>
                        </div>
                      </div>
                      <button onclick="app.removeAudioSource('${src.id}')" class="text-stone-400 hover:text-stone-600 dark:hover:text-stone-300">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                      </button>
                    </div>

                    ${ytThumb ? `
                      <div class="mt-3 relative w-full aspect-video max-w-sm rounded-xl overflow-hidden group cursor-pointer shadow-xs border border-stone-200 dark:border-stone-800" onclick="app.openVideoModal('${src.name}', '${src.url}', '${src.description}')">
                        <img src="${ytThumb}" alt="${src.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                        <div class="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                          <span class="w-10 h-10 rounded-full bg-orange-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <svg class="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                          </span>
                        </div>
                      </div>
                    ` : ''}
                  </div>

                  <div class="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between">
                    <span class="text-xs text-stone-400 font-mono">${src.type}</span>
                    <div class="flex items-center gap-2">
                      ${src.category === 'youtube' ? `
                        <button 
                          onclick="app.openVideoModal('${src.name}', '${src.url}', '${src.description}')"
                          class="px-3.5 py-1.5 bg-orange-600 hover:bg-orange-700 text-white rounded-md text-xs font-semibold flex items-center gap-1.5 shadow-xs">
                          <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                          Play on website
                        </button>
                      ` : `
                        <a 
                          href="${src.url}" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          class="px-3.5 py-1.5 bg-stone-900 hover:bg-stone-800 dark:bg-stone-800 dark:hover:bg-stone-700 text-white rounded-md text-xs font-semibold flex items-center gap-1.5 shadow-xs">
                          <span>Open tool website</span>
                          <svg class="w-3 h-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                        </a>
                      `}
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <!-- Right: Connect a Source Form (5 cols) with Live Thumbnail Preview -->
          <div class="lg:col-span-5" id="connect-source-box">
            <div class="bg-white dark:bg-[#201e1b] rounded-2xl p-6 border border-stone-200/90 dark:border-stone-800 shadow-sm sticky top-24">
              <h3 class="text-base font-bold text-stone-900 dark:text-stone-100">Connect a source</h3>
              <p class="text-xs text-stone-500 dark:text-stone-400 mt-0.5">Keep a website or YouTube backing track in your library.</p>

              <form onsubmit="app.handleSaveSource(event)" class="mt-4 space-y-4">
                <div class="flex border-b border-stone-200 dark:border-stone-800 text-xs font-semibold">
                  <button type="button" onclick="app.setSourceTypeTab('website')" id="source-tab-website" class="pb-2 border-b-2 border-orange-600 text-orange-600 dark:text-orange-400 mr-4 font-bold">Website link</button>
                  <button type="button" onclick="app.setSourceTypeTab('youtube')" id="source-tab-youtube" class="pb-2 text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 font-semibold">YouTube link</button>
                </div>

                <input type="hidden" id="form-source-category" value="website">

                <div>
                  <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">Source name *</label>
                  <input type="text" id="form-source-name" placeholder="e.g. Spardha Tabla / Tanpura Drone" required class="w-full px-3.5 py-2 text-xs rounded-lg bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 focus:ring-1 focus:ring-orange-500">
                </div>

                <div>
                  <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1" id="form-source-link-label">Website link *</label>
                  <input 
                    type="url" 
                    id="form-source-url" 
                    placeholder="https://..." 
                    required 
                    oninput="app.previewYouTubeThumbnail(this.value, 'source-yt-thumb-preview')"
                    class="w-full px-3.5 py-2 text-xs rounded-lg bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 focus:ring-1 focus:ring-orange-500">
                  <div id="source-yt-thumb-preview"></div>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">Scale / Beats / Notes (optional)</label>
                  <input type="text" id="form-source-scale" placeholder="e.g. C natural, 60 BPM Teentaal" class="w-full px-3.5 py-2 text-xs rounded-lg bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100">
                </div>

                <div class="pt-2 flex justify-end">
                  <button type="submit" class="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-xs font-bold transition-all shadow-sm">
                    Save source
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // ==========================================
  // 4. LEARNING LIBRARY TAB (Matches Screenshot 3)
  // Techniques & Raags Subtabs
  // ==========================================
  getLearningLibraryHTML() {
    const isTechniques = this.state.learningSubtab === 'techniques';

    return `
      <div class="space-y-7 max-w-7xl mx-auto pb-16 fade-in">
        <!-- Title & Subtitle -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span class="text-xs font-bold tracking-wider uppercase text-orange-600 dark:text-orange-400">YOUR PERSONAL RIYAAZ STUDIO</span>
            <h1 class="text-3xl font-extrabold tracking-tight text-stone-900 dark:text-stone-50 mt-1">
              A practice that keeps unfolding.
            </h1>
            <p class="text-stone-500 dark:text-stone-400 text-sm mt-1">
              Build your understanding, one sound and one small discovery at a time.
            </p>
          </div>
          <button 
            onclick="app.openAddLearningItemModal()" 
            class="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 dark:bg-stone-800 dark:hover:bg-stone-700 text-white rounded-lg text-sm font-semibold transition-all flex items-center gap-2 self-start md:self-auto">
            <svg class="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            ${isTechniques ? 'Add technique' : 'Add Raag'}
          </button>
        </div>

        <!-- Subtabs: Techniques vs Raags (Prompt #4 explicit requirement) -->
        <div class="flex items-center gap-6 border-b border-stone-200 dark:border-stone-800 text-sm font-bold">
          <button 
            onclick="app.setLearningSubtab('techniques')" 
            class="pb-3 border-b-2 transition-all ${isTechniques ? 'border-orange-600 text-orange-600 dark:text-orange-400' : 'border-transparent text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'}">
            Techniques
          </button>
          <button 
            onclick="app.setLearningSubtab('raags')" 
            class="pb-3 border-b-2 transition-all ${!isTechniques ? 'border-orange-600 text-orange-600 dark:text-orange-400' : 'border-transparent text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'}">
            Raags
          </button>
        </div>

        ${isTechniques ? this.renderTechniquesView() : this.renderRaagsView()}
      </div>
    `;
  }

  // TECHNIQUES SUBTAB
  renderTechniquesView() {
    const activeTech = this.selectedTechnique || this.state.techniques[0];
    const techVideos = this.getTechniqueVideos(activeTech);

    return `
      <div>
        <!-- Notice box regarding why there is no Mastered option (Prompt #4 requirement!) -->
        <div class="mb-6 p-4 rounded-xl bg-orange-50/70 dark:bg-orange-950/30 border border-orange-200/50 dark:border-orange-900/40 text-xs text-stone-700 dark:text-stone-300 flex items-start gap-3">
          <span class="text-base">🪈</span>
          <div>
            <strong class="font-bold text-orange-900 dark:text-orange-300">A Sadhak’s Philosophy:</strong>
            Techniques like Meend, Gamak, and Komal Swars are lifelong journeys. In Indian Classical music, no technique is ever declared "mastered" or "completed" — only constantly deepened with awareness. Stages are strictly marked as <em>Learning</em> or <em>Not started</em>.
          </div>
        </div>

        <!-- Filter Count -->
        <div class="flex items-center gap-2 text-xs font-medium mb-4">
          <span class="px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300 font-bold">
            All · ${this.state.techniques.length}
          </span>
          <span class="px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400">
            Learning · ${this.state.techniques.filter(t => t.status === 'Learning').length}
          </span>
          <span class="px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400">
            Not started · ${this.state.techniques.filter(t => t.status === 'Not started').length}
          </span>
        </div>

        <!-- Layout: Techniques List (Left) & Active Detail + Video Tutorial (Right) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <!-- Left List (5 cols) -->
          <div class="lg:col-span-5 space-y-3">
            ${this.state.techniques.map(t => {
              const isSelected = activeTech && activeTech.id === t.id;
              return `
                <div 
                  onclick="app.selectTechnique('${t.id}')"
                  class="cursor-pointer p-4 rounded-xl border transition-all ${
                    isSelected 
                      ? 'bg-orange-50/60 dark:bg-orange-950/20 border-orange-300 dark:border-orange-800 shadow-sm' 
                      : 'bg-white dark:bg-[#201e1b] border-stone-200/90 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700'
                  }">
                  <div class="flex items-center justify-between">
                    <h3 class="text-base font-bold text-stone-900 dark:text-stone-100">${t.name}</h3>
                    <span class="px-2.5 py-0.5 text-xs font-semibold rounded-md ${
                      t.status === 'Learning'
                        ? 'bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300'
                        : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400'
                    }">
                      ${t.status}
                    </span>
                  </div>
                  <p class="text-xs text-stone-500 dark:text-stone-400 mt-1">${t.summary}</p>
                </div>
              `;
            }).join('')}
            <div class="text-[11px] text-stone-400 text-center py-2 italic">
              Techniques are ongoing. Return to them at any stage.
            </div>
          </div>

          <!-- Right Detail & YouTube In-App Preview (7 cols) -->
          <div class="lg:col-span-7">
            <div class="bg-white dark:bg-[#201e1b] rounded-2xl p-6 sm:p-8 border border-stone-200/90 dark:border-stone-800 shadow-sm space-y-6">
              <!-- Technique Header -->
              <div class="flex items-start justify-between gap-4">
                <div>
                  <h2 class="text-2xl font-black text-stone-900 dark:text-stone-50">${activeTech.name}</h2>
                  <div class="text-xs font-medium text-stone-500 dark:text-stone-400 mt-1">${activeTech.subtitle}</div>
                </div>

                <!-- Status Selector: STRICTLY Learning or Not started ONLY! -->
                <div class="flex items-center gap-1.5 bg-stone-100 dark:bg-stone-800 p-1 rounded-lg">
                  <button 
                    onclick="app.updateTechniqueStatus('${activeTech.id}', 'Learning')"
                    class="px-3 py-1 rounded text-xs font-bold transition-all ${
                      activeTech.status === 'Learning' 
                        ? 'bg-orange-600 text-white shadow-xs' 
                        : 'text-stone-600 dark:text-stone-300'
                    }">
                    Learning
                  </button>
                  <button 
                    onclick="app.updateTechniqueStatus('${activeTech.id}', 'Not started')"
                    class="px-3 py-1 rounded text-xs font-bold transition-all ${
                      activeTech.status === 'Not started' 
                        ? 'bg-stone-700 text-white shadow-xs' 
                        : 'text-stone-600 dark:text-stone-300'
                    }">
                    Not started
                  </button>
                </div>
              </div>

              <p class="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                ${activeTech.description}
              </p>

              <!-- Clear YouTube Tutorial Videos Section (Prompt #8: Multiple YouTube videos in each technique section) -->
              <div class="rounded-2xl bg-stone-50 dark:bg-[#1a1816] p-5 border border-stone-200/90 dark:border-stone-800 shadow-xs space-y-4">
                <!-- Section Header with Count and Add Video Button -->
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-stone-200 dark:border-stone-800">
                  <div class="flex items-center gap-2.5">
                    <h3 class="text-base font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                      <span>🎬</span>
                      <span>Tutorial Videos & Lessons</span>
                    </h3>
                    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300">
                      ${techVideos.length} ${techVideos.length === 1 ? 'lesson' : 'lessons'}
                    </span>
                  </div>

                  <!-- Button to Add Multiple Videos to This Technique -->
                  <button 
                    onclick="app.openAddVideoToTechniqueModal('${activeTech.id}')"
                    class="px-3.5 py-1.5 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all self-start sm:self-auto">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                    <span>Add YouTube video</span>
                  </button>
                </div>

                <!-- Video Cards Grid -->
                ${techVideos.length === 0 ? `
                  <div class="p-8 text-center bg-white dark:bg-[#201e1b] rounded-xl border border-dashed border-stone-300 dark:border-stone-800">
                    <span class="text-3xl">🎥</span>
                    <p class="text-xs font-medium text-stone-600 dark:text-stone-400 mt-2">No videos linked to ${activeTech.name} yet.</p>
                    <button 
                      onclick="app.openAddVideoToTechniqueModal('${activeTech.id}')" 
                      class="mt-3 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-xs font-bold shadow-xs">
                      + Add first video
                    </button>
                  </div>
                ` : `
                  <div class="grid grid-cols-1 ${techVideos.length > 1 ? 'sm:grid-cols-2' : ''} gap-4">
                    ${techVideos.map((vid, idx) => {
                      const thumbUrl = this.getYouTubeThumbnail(vid.url);
                      const safeTitle = (vid.title || `${activeTech.name} Lesson #${idx+1}`).replace(/'/g, "\\'");
                      const safeUrl = (vid.url || '').replace(/'/g, "\\'");
                      const safeTechName = activeTech.name.replace(/'/g, "\\'");
                      return `
                        <div class="bg-white dark:bg-[#201e1b] rounded-xl border border-stone-200/90 dark:border-stone-800 p-3.5 shadow-xs flex flex-col justify-between space-y-3">
                          <!-- 1. Whole Clear, Crisp Thumbnail (100% full opacity, no fading) -->
                          <div 
                            class="relative w-full aspect-video rounded-lg overflow-hidden bg-stone-900 group cursor-pointer shadow-xs border border-stone-200 dark:border-stone-800"
                            onclick="app.openVideoModal('${safeTitle}', '${safeUrl}', '${safeTechName}')">
                            ${thumbUrl ? `
                              <img src="${thumbUrl}" alt="${safeTitle}" class="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300">
                              <div class="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-colors"></div>
                            ` : `
                              <div class="w-full h-full bg-stone-900 flex items-center justify-center text-stone-500">
                                <span class="text-2xl">🪈</span>
                              </div>
                            `}
                            <!-- Center Play Icon -->
                            <div class="absolute inset-0 flex items-center justify-center">
                              <div class="w-11 h-11 rounded-full bg-orange-600 hover:bg-orange-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                <svg class="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                              </div>
                            </div>
                          </div>

                          <!-- 2. Video Info & Actions AT THE BOTTOM OF THE VIDEO (Never on top of the thumbnail) -->
                          <div class="space-y-2 pt-1">
                            <div>
                              <h4 class="text-xs font-bold text-stone-900 dark:text-stone-100 line-clamp-1" title="${vid.title}">
                                ${vid.title || `${activeTech.name} Lesson #${idx+1}`}
                              </h4>
                              ${vid.notes ? `
                                <p class="text-[11px] text-stone-500 dark:text-stone-400 line-clamp-1 mt-0.5">${vid.notes}</p>
                              ` : ''}
                            </div>

                            <!-- Buttons Row below thumbnail: Watch on website, YouTube link, Delete video -->
                            <div class="flex items-center justify-between gap-1.5 pt-1.5 border-t border-stone-100 dark:border-stone-800">
                              <button 
                                onclick="app.openVideoModal('${safeTitle}', '${safeUrl}', '${safeTechName}')"
                                class="px-3 py-1.5 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-[11px] font-bold flex items-center gap-1 shadow-xs transition-all">
                                <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                                <span>Watch on website</span>
                              </button>

                              <div class="flex items-center gap-1">
                                <a 
                                  href="${vid.url}" 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  class="p-1.5 text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 text-xs rounded hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors flex items-center gap-1"
                                  title="Open on YouTube">
                                  <span class="text-[11px] hidden sm:inline">YouTube</span>
                                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                                </a>

                                <button 
                                  onclick="app.deleteTechniqueVideo('${activeTech.id}', '${vid.id}')"
                                  class="p-1.5 text-stone-400 hover:text-red-600 dark:hover:text-red-400 rounded hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                                  title="Delete this video from technique">
                                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      `;
                    }).join('')}
                  </div>
                `}
              </div>

              <!-- My Practice Notes & Connected Intention -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-stone-100 dark:border-stone-800">
                <div>
                  <div class="flex items-center justify-between">
                    <h4 class="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100">My practice notes</h4>
                    <button onclick="app.openEditNotesModal('${activeTech.id}')" class="text-xs font-semibold text-orange-600 dark:text-orange-400 hover:underline">Edit</button>
                  </div>
                  <p class="text-xs text-stone-600 dark:text-stone-400 mt-2 leading-relaxed bg-stone-50 dark:bg-stone-900/60 p-3 rounded-xl border border-stone-100 dark:border-stone-800">
                    ${activeTech.notes || 'No personal notes added yet. Record your finger feel, breath pressure, and insights here.'}
                  </p>
                </div>

                <div>
                  <h4 class="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100">Connected intention</h4>
                  <div class="mt-2 p-3 rounded-xl bg-orange-50/70 dark:bg-orange-950/30 border border-orange-200/50 dark:border-orange-900/40">
                    <span class="inline-block px-2.5 py-0.5 text-xs font-bold rounded bg-orange-200/70 dark:bg-orange-900/70 text-orange-900 dark:text-orange-200 mb-1">
                      ${activeTech.connectedGoal || 'Daily practice'}
                    </span>
                    <p class="text-[11px] text-stone-500 dark:text-stone-400">
                      5 mindful minutes each day, through 31 Oct.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // RAAGS SUBTAB (Prompt #4 explicit requirement)
  renderRaagsView() {
    return `
      <div class="space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 class="text-xl font-bold text-stone-900 dark:text-stone-100">Raag Subtab · Indian Classical Repertoire</h2>
            <p class="text-xs text-stone-500 dark:text-stone-400">Aroha, Avroha, Vadi, Samvadi, and famous bansuri performances you can watch right here.</p>
          </div>
          <button 
            onclick="app.openAddRaagModal()" 
            class="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-xs font-bold shadow-sm transition-all flex items-center gap-1.5 self-start">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            Add new Raag
          </button>
        </div>

        <!-- Raag Cards Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          ${this.state.raags.map(raag => {
            const thumbUrl = this.getYouTubeThumbnail(raag.youtubeUrl);
            return `
            <div class="bg-white dark:bg-[#201e1b] rounded-2xl p-6 border border-stone-200/90 dark:border-stone-800 shadow-sm flex flex-col justify-between space-y-5">
              <div>
                <!-- Raag Header -->
                <div class="flex items-start justify-between gap-3">
                  <div>
                    <span class="px-2.5 py-0.5 text-[11px] font-bold uppercase rounded-md bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300">
                      Thaat: ${raag.thaat}
                    </span>
                    <h3 class="text-xl font-black text-stone-900 dark:text-stone-50 mt-1.5">${raag.name}</h3>
                    <div class="text-xs text-stone-500 dark:text-stone-400 mt-0.5 font-medium">${raag.prahar}</div>
                  </div>
                  <span class="text-xs px-2.5 py-1 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 font-medium">
                    ${raag.rasa}
                  </span>
                </div>

                <!-- YouTube Video Thumbnail Banner with Play Overlay -->
                <div class="relative w-full aspect-video rounded-xl overflow-hidden bg-stone-900 mt-4 group cursor-pointer shadow-xs border border-stone-100 dark:border-stone-800"
                     onclick="app.openVideoModal('${raag.name} – ${raag.flautist}', '${raag.youtubeUrl}', '${raag.prahar} · ${raag.rasa}')">
                  ${thumbUrl ? `
                    <img src="${thumbUrl}" alt="${raag.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                    <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                  ` : `<div class="w-full h-full bg-stone-900 flex items-center justify-center text-stone-600">🪈</div>`}
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="w-12 h-12 rounded-full bg-orange-600 hover:bg-orange-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-all">
                      <svg class="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                  <div class="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[11px] text-white/95 bg-black/70 backdrop-blur-xs px-2.5 py-1 rounded-md">
                    <span class="truncate font-semibold">${raag.flautist} · ${raag.performanceTitle || 'Classical Performance'}</span>
                    <span class="font-mono text-[10px] text-orange-300 shrink-0 ml-2">Watch here &rarr;</span>
                  </div>
                </div>

                <!-- Aroha & Avroha Swar Script -->
                <div class="mt-4 p-3.5 rounded-xl bg-stone-50 dark:bg-stone-900/60 border border-stone-100 dark:border-stone-800/80 space-y-2 text-xs">
                  <div>
                    <span class="font-bold text-stone-500 dark:text-stone-400 mr-2">Aroha:</span>
                    <span class="font-mono font-semibold text-stone-800 dark:text-stone-200">${raag.aroha}</span>
                  </div>
                  <div>
                    <span class="font-bold text-stone-500 dark:text-stone-400 mr-2">Avroha:</span>
                    <span class="font-mono font-semibold text-stone-800 dark:text-stone-200">${raag.avroha}</span>
                  </div>
                  <div class="flex items-center gap-6 pt-1 text-[11px] text-stone-500">
                    <span>Vadi: <strong class="text-orange-600 dark:text-orange-400 font-mono">${raag.vadi}</strong></span>
                    <span>Samvadi: <strong class="text-stone-700 dark:text-stone-300 font-mono">${raag.samvadi}</strong></span>
                  </div>
                  <div>
                    <span class="font-bold text-stone-500 dark:text-stone-400 mr-2">Pakad:</span>
                    <span class="font-mono text-stone-600 dark:text-stone-400">${raag.pakad}</span>
                  </div>
                </div>

                <p class="text-xs text-stone-600 dark:text-stone-400 mt-3 leading-relaxed">
                  ${raag.description}
                </p>
              </div>

              <!-- Famous Flautist Performance Video Embed / Preview (Prompt #4 explicit requirement) -->
              <div class="pt-4 border-t border-stone-100 dark:border-stone-800">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-bold text-stone-800 dark:text-stone-200 flex items-center gap-1.5">
                    <span class="text-orange-600 dark:text-orange-400">🪈</span>
                    ${raag.flautist} Performance
                  </span>
                  <a href="${raag.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="text-xs text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 flex items-center gap-1">
                    <span>YouTube</span>
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                  </a>
                </div>

                <div class="flex items-center gap-3">
                  <button 
                    onclick="app.openVideoModal('${raag.name} – ${raag.flautist}', '${raag.youtubeUrl}', '${raag.prahar} · ${raag.rasa}')"
                    class="w-full py-2.5 px-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-all">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    Watch performance on website
                  </button>
                </div>
            </div>
          `;
        }).join('')}
        </div>
      </div>
    `;
  }

  // ==========================================
  // 5. FLUTES & CARE TAB (Matches Screenshots 1 & 4)
  // ==========================================
  getFlutesCareHTML() {
    return `
      <div class="space-y-8 max-w-7xl mx-auto pb-16 fade-in">
        <!-- Title & Subtitle -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span class="text-xs font-bold tracking-wider uppercase text-orange-600 dark:text-orange-400">YOUR PERSONAL RIYAAZ STUDIO</span>
            <h1 class="text-3xl font-extrabold tracking-tight text-stone-900 dark:text-stone-50 mt-1">
              Care for the instruments you love.
            </h1>
            <p class="text-stone-500 dark:text-stone-400 text-sm mt-1">
              A small collection, a simple care rhythm, and a better sound every day.
            </p>
          </div>
          <button 
            onclick="app.openAddFluteModal()" 
            class="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-sm font-semibold shadow-sm transition-all flex items-center gap-2 self-start md:self-auto">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            Add flute
          </button>
        </div>

        <!-- Flute Inventory Cards (Left) & Add Flute Form (Right) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <!-- Left: Flute Cards Grid (8 cols) -->
          <div class="lg:col-span-8 space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              ${this.state.flutes.map(flute => `
                <div class="bg-white dark:bg-[#201e1b] rounded-2xl p-5 border border-stone-200/90 dark:border-stone-800 shadow-sm flex flex-col justify-between hover:border-orange-500/40 transition-all">
                  <div>
                    <!-- Badge & Options -->
                    <div class="flex items-center justify-between">
                      <span class="px-2.5 py-0.5 text-xs font-semibold rounded-md ${
                        flute.status === 'Care due' 
                          ? 'bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300 font-bold' 
                          : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300'
                      }">
                        ${flute.status}
                      </span>
                      <button onclick="app.removeFlute('${flute.id}')" class="text-stone-300 hover:text-red-500 transition-colors">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                      </button>
                    </div>

                    <!-- Flute Graphic Representation -->
                    <div class="my-5 flex items-center justify-center">
                      ${flute.type === 'Bamboo' ? `
                        <div class="flute-graphic-bamboo">
                          <span class="binding left"></span>
                          <div class="flute-hole"></div>
                          <div class="flute-hole"></div>
                          <div class="flute-hole"></div>
                          <div class="flute-hole"></div>
                          <div class="flute-hole"></div>
                          <div class="flute-hole"></div>
                          <span class="binding right"></span>
                        </div>
                      ` : `
                        <div class="flute-graphic-pvc">
                          <div class="flute-hole"></div>
                          <div class="flute-hole"></div>
                          <div class="flute-hole"></div>
                          <div class="flute-hole"></div>
                          <div class="flute-hole"></div>
                          <div class="flute-hole"></div>
                        </div>
                      `}
                    </div>

                    <h3 class="text-lg font-bold text-stone-900 dark:text-stone-100">${flute.name}</h3>
                    <div class="text-xs text-stone-500 dark:text-stone-400 mt-0.5">${flute.type} · ${flute.usage}</div>
                  </div>

                  <div class="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800 space-y-1 text-xs">
                    <div class="flex justify-between text-stone-400">
                      <span>LAST CLEANED</span>
                      <span class="font-mono text-stone-600 dark:text-stone-300">${flute.lastCleaned}</span>
                    </div>
                    <div class="flex justify-between ${flute.status === 'Care due' ? 'text-orange-600 dark:text-orange-400 font-semibold' : 'text-stone-400'}">
                      <span>NEXT CLEANING</span>
                      <span class="font-mono">${flute.nextCleaning}</span>
                    </div>

                    <div class="pt-2 flex items-center justify-between">
                      <button 
                        onclick="app.logQuickClean('${flute.id}')" 
                        class="text-xs font-semibold text-stone-700 dark:text-stone-300 hover:text-orange-600 dark:hover:text-orange-400">
                        Mark cleaned &rarr;
                      </button>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Care & Health Log Table (Matches Screenshot 1 & 4) -->
            <div class="bg-white dark:bg-[#201e1b] rounded-2xl p-6 border border-stone-200/90 dark:border-stone-800 shadow-sm">
              <div class="flex items-center justify-between pb-4 border-b border-stone-100 dark:border-stone-800">
                <div>
                  <h3 class="text-base font-bold text-stone-900 dark:text-stone-100">Care & health log</h3>
                  <p class="text-xs text-stone-500 dark:text-stone-400 mt-0.5">All flutes · Recent care records</p>
                </div>
                <button 
                  onclick="app.openLogCareModal()" 
                  class="text-xs font-semibold text-orange-600 dark:text-orange-400 hover:underline">
                  + Log care
                </button>
              </div>

              <div class="overflow-x-auto my-2">
                <table class="w-full text-left text-xs">
                  <thead>
                    <tr class="text-stone-400 uppercase font-mono tracking-wider border-b border-stone-100 dark:border-stone-800">
                      <th class="py-2.5 pr-4">Date</th>
                      <th class="py-2.5 px-4">Flute</th>
                      <th class="py-2.5 pl-4">Care & observations</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-stone-100 dark:divide-stone-800/80">
                    ${this.state.careLogs.map(log => `
                      <tr class="text-stone-700 dark:text-stone-300">
                        <td class="py-3 pr-4 font-mono text-stone-500 whitespace-nowrap">${log.date}</td>
                        <td class="py-3 px-4 font-semibold text-stone-900 dark:text-stone-100 whitespace-nowrap">${log.fluteName} · ${log.fluteType}</td>
                        <td class="py-3 pl-4 leading-relaxed">${log.observation}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>

              <!-- Bamboo Care Tip Box -->
              <div class="mt-4 p-3.5 rounded-xl bg-orange-50/70 dark:bg-orange-950/30 border border-orange-200/50 dark:border-orange-900/40 text-xs text-stone-700 dark:text-stone-300 flex items-start gap-2.5">
                <svg class="w-4 h-4 text-orange-600 dark:text-orange-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span>Bamboo prefers gentle care: dry after playing, avoid soaking and sudden temperature changes. Follow your maker's care advice.</span>
              </div>
            </div>
          </div>

          <!-- Right: Add a Flute Form (4 cols, Matches Screenshot 1 & 4) -->
          <div class="lg:col-span-4" id="add-flute-form-container">
            <div class="bg-white dark:bg-[#201e1b] rounded-2xl p-6 border border-stone-200/90 dark:border-stone-800 shadow-sm space-y-4 sticky top-24">
              <div>
                <h3 class="text-base font-bold text-stone-900 dark:text-stone-100">Add a flute</h3>
                <p class="text-xs text-stone-500 dark:text-stone-400 mt-0.5">Keep its details and care dates together.</p>
              </div>

              <form onsubmit="app.handleSaveFlute(event)" class="space-y-4">
                <div>
                  <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">Flute name</label>
                  <input type="text" id="flute-input-name" placeholder="e.g. E bass / C natural" required class="w-full px-3.5 py-2 text-sm rounded-lg bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 focus:ring-1 focus:ring-orange-500">
                </div>

                <!-- Flute Type selector (Bamboo vs PVC) -->
                <div>
                  <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1.5">Material</label>
                  <div class="flex items-center gap-3">
                    <label class="flex items-center gap-1.5 text-xs font-medium cursor-pointer">
                      <input type="radio" name="flute-type" value="Bamboo" checked class="text-orange-600 focus:ring-orange-500">
                      <span>Bamboo</span>
                    </label>
                    <label class="flex items-center gap-1.5 text-xs font-medium cursor-pointer">
                      <input type="radio" name="flute-type" value="PVC" class="text-orange-600 focus:ring-orange-500">
                      <span>PVC</span>
                    </label>
                  </div>
                </div>

                <!-- Scale -->
                <div>
                  <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">Scale</label>
                  <select id="flute-input-scale" class="w-full px-3.5 py-2 text-sm rounded-lg bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100">
                    <option value="C natural">C natural (Medium 19 inch)</option>
                    <option value="C# natural">C# natural (Medium 18 inch)</option>
                    <option value="D natural">D natural (Medium 17 inch)</option>
                    <option value="E bass">E bass (Bansuri 30 inch)</option>
                    <option value="F bass">F bass (Bansuri 28 inch)</option>
                    <option value="G bass">G bass (Deep Bass 25 inch)</option>
                    <option value="A natural">A natural (Bansuri 23 inch)</option>
                  </select>
                </div>

                <!-- Last Cleaned -->
                <div>
                  <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">Last cleaned</label>
                  <input type="date" id="flute-input-last-cleaned" value="2026-10-25" class="w-full px-3.5 py-2 text-sm rounded-lg bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100">
                </div>

                <!-- Next Cleaning -->
                <div>
                  <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">Next cleaning</label>
                  <input type="date" id="flute-input-next-cleaning" value="2026-11-01" class="w-full px-3.5 py-2 text-sm rounded-lg bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100">
                </div>

                <!-- Notes -->
                <div>
                  <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">Notes (optional)</label>
                  <textarea id="flute-input-notes" rows="2" placeholder="Maker, tone or anything to remember..." class="w-full px-3.5 py-2 text-sm rounded-lg bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100"></textarea>
                </div>

                <div class="pt-2 flex flex-col gap-2">
                  <button type="submit" class="w-full py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-xs font-bold transition-all shadow-sm">
                    Save flute
                  </button>
                  <button type="reset" class="w-full py-2 bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-600 dark:text-stone-300 rounded-lg text-xs font-semibold transition-all">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // ==========================================
  // 6. VIDEO HUB TAB (Prompt #6 requirement)
  // Synced Lists: Repertoire Wishlist & YouTube Tutorials
  // Direct In-App Playback WITHOUT Redirecting
  // ==========================================
  getVideoHubHTML() {
    return `
      <div class="space-y-8 max-w-7xl mx-auto pb-16 fade-in">
        <!-- Title & Subtitle -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span class="text-xs font-bold tracking-wider uppercase text-orange-600 dark:text-orange-400">SONG TUTORIALS & REPERTOIRE HUB</span>
            <h1 class="text-3xl font-extrabold tracking-tight text-stone-900 dark:text-stone-50 mt-1">
              Songs you love, waiting to be played.
            </h1>
            <p class="text-stone-500 dark:text-stone-400 text-sm mt-1">
              Watch full song tutorials directly on MurliSadhak without redirecting to YouTube. Track pending and learned songs.
            </p>
          </div>
          <button 
            onclick="app.openAddSongModal()" 
            class="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-sm font-semibold shadow-sm transition-all flex items-center gap-2 self-start md:self-auto">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            Add song to learn
          </button>
        </div>

        <!-- Filter Count -->
        <div class="flex flex-wrap items-center gap-2 text-xs font-medium">
          <button class="px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300 font-bold">
            All songs · ${this.state.songs.length}
          </button>
          <button class="px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300">
            Want to learn (Pending) · ${this.state.songs.filter(s => s.status === 'Want to learn').length}
          </button>
          <button class="px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300">
            Learning · ${this.state.songs.filter(s => s.status === 'Learning').length}
          </button>
          <button class="px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300">
            Learned · ${this.state.songs.filter(s => s.status === 'Learned').length}
          </button>
        </div>

        <!-- Songs Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${this.state.songs.map(song => {
            const thumbUrl = this.getYouTubeThumbnail(song.youtubeUrl);
            return `
            <div class="bg-white dark:bg-[#201e1b] rounded-2xl p-6 border border-stone-200/90 dark:border-stone-800 shadow-sm flex flex-col justify-between hover:border-orange-500/40 transition-all">
              <div>
                <!-- Top Status, Scale & Delete Option -->
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="px-2.5 py-0.5 text-xs font-bold rounded-md ${
                      song.status === 'Learned'
                        ? 'bg-stone-800 text-amber-300 font-bold'
                        : song.status === 'Learning'
                          ? 'bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300 font-bold'
                          : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300'
                    }">
                      ${song.status}
                    </span>
                    <span class="text-xs font-mono font-semibold text-stone-500">
                      Flute: ${song.scale}
                    </span>
                  </div>
                  <button 
                    onclick="app.deleteSong('${song.id}')" 
                    class="p-1.5 rounded-lg text-stone-400 hover:text-red-500 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                    title="Delete this song">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                  </button>
                </div>

                <!-- YouTube Video Thumbnail Banner with Play Overlay -->
                <div class="relative w-full aspect-video rounded-xl overflow-hidden bg-stone-900 mt-3 mb-2 group cursor-pointer shadow-xs border border-stone-100 dark:border-stone-800"
                     onclick="app.openVideoModal('${song.title}', '${song.youtubeUrl}', '${song.movie} · Scale: ${song.scale}')">
                  ${thumbUrl ? `
                    <img src="${thumbUrl}" alt="${song.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                    <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                  ` : `<div class="w-full h-full bg-stone-900 flex items-center justify-center text-stone-600">🎵</div>`}
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="w-11 h-11 rounded-full bg-orange-600/95 group-hover:bg-orange-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-all">
                      <svg class="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                  <div class="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[11px] text-white/95 bg-black/70 backdrop-blur-xs px-2.5 py-1 rounded-md">
                    <span class="truncate font-semibold">${song.movie}</span>
                    <span class="font-mono text-[10px] text-orange-300 shrink-0 ml-2">Watch tutorial &rarr;</span>
                  </div>
                </div>

                <h3 class="text-lg font-bold text-stone-900 dark:text-stone-100 mt-2">${song.title}</h3>
                <div class="text-xs text-stone-500 dark:text-stone-400 mt-0.5 font-medium">${song.movie}</div>

                <p class="text-xs text-stone-600 dark:text-stone-300 mt-3 p-3 bg-stone-50 dark:bg-stone-900/60 rounded-xl border border-stone-100 dark:border-stone-800/80 leading-relaxed">
                  ${song.notes}
                </p>
              </div>

              <!-- Watch In-App Controls (Prompt #6 explicit requirement) -->
              <div class="mt-5 pt-4 border-t border-stone-100 dark:border-stone-800 flex flex-col gap-2">
                <button 
                  onclick="app.openVideoModal('${song.title}', '${song.youtubeUrl}', '${song.movie} · Scale: ${song.scale}')"
                  class="w-full py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-all">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  Watch tutorial on website
                </button>

                <div class="flex items-center justify-between text-xs pt-1">
                  <!-- Quick status toggler -->
                  <select 
                    onchange="app.updateSongStatus('${song.id}', this.value)"
                    class="bg-transparent text-stone-600 dark:text-stone-300 font-medium text-xs border-none p-0 cursor-pointer focus:ring-0">
                    <option value="Want to learn" ${song.status === 'Want to learn' ? 'selected' : ''}>Want to learn</option>
                    <option value="Learning" ${song.status === 'Learning' ? 'selected' : ''}>Learning</option>
                    <option value="Learned" ${song.status === 'Learned' ? 'selected' : ''}>Learned (Completed)</option>
                  </select>

                  <a href="${song.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 text-xs flex items-center gap-1">
                    <span>YouTube</span>
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                  </a>
                </div>
              </div>
            </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  // ==========================================
  // 7. GOALS TAB (Prompt #7 requirement)
  // Target intentions (e.g. 15 days of Meend, Alankars speed)
  // ==========================================
  getGoalsHTML() {
    return `
      <div class="space-y-8 max-w-5xl mx-auto pb-16 fade-in">
        <!-- Title & Subtitle -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span class="text-xs font-bold tracking-wider uppercase text-orange-600 dark:text-orange-400">PRACTICE TARGETS & INTENTIONS</span>
            <h1 class="text-3xl font-extrabold tracking-tight text-stone-900 dark:text-stone-50 mt-1">
              Set your riyaaz milestones.
            </h1>
            <p class="text-stone-500 dark:text-stone-400 text-sm mt-1">
              Commit to 15 days of Meend, breath sustenance, or metronome clarity.
            </p>
          </div>
          <button 
            onclick="app.openAddGoalModal()" 
            class="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-sm font-semibold shadow-sm transition-all flex items-center gap-2 self-start md:self-auto">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            Create new goal
          </button>
        </div>

        <!-- Goals Cards List -->
        <div class="space-y-6">
          ${this.state.goals.map(goal => {
            const pct = Math.min(100, Math.round((goal.currentDays / goal.targetDays) * 100));
            return `
              <div class="bg-white dark:bg-[#201e1b] rounded-2xl p-6 sm:p-8 border border-stone-200/90 dark:border-stone-800 shadow-sm flex flex-col justify-between space-y-5">
                <div>
                  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span class="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
                        ${goal.linkedTechnique}
                      </span>
                      <h3 class="text-2xl font-bold text-stone-900 dark:text-stone-100 mt-1">${goal.title}</h3>
                    </div>
                    <div class="text-right">
                      <span class="text-xs font-mono text-stone-500">Target Date: <strong class="text-stone-800 dark:text-stone-200">${goal.targetDate}</strong></span>
                    </div>
                  </div>

                  <p class="text-sm text-stone-600 dark:text-stone-400 mt-2">${goal.description}</p>

                  <!-- Progress Bar -->
                  <div class="mt-6 space-y-2">
                    <div class="flex justify-between text-xs font-mono font-bold">
                      <span class="text-stone-900 dark:text-stone-100">Day ${goal.currentDays} of ${goal.targetDays}</span>
                      <span class="text-orange-600 dark:text-orange-400">${pct}% completed</span>
                    </div>
                    <div class="w-full bg-stone-100 dark:bg-stone-800 h-3 rounded-full overflow-hidden">
                      <div class="bg-orange-600 h-full rounded-full transition-all duration-500" style="width: ${pct}%;"></div>
                    </div>
                  </div>
                </div>

                <div class="pt-4 border-t border-stone-100 dark:border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <span class="text-xs text-stone-500 dark:text-stone-400 italic">${goal.log}</span>
                  <div class="flex items-center gap-2">
                    <button 
                      onclick="app.incrementGoalDay('${goal.id}')" 
                      class="px-4 py-2 bg-stone-900 hover:bg-stone-800 dark:bg-stone-800 dark:hover:bg-stone-700 text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1.5">
                      <svg class="w-3.5 h-3.5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                      Log today's riyaaz (+1 day)
                    </button>
                    <button 
                      onclick="app.removeGoal('${goal.id}')" 
                      class="p-2 text-stone-400 hover:text-red-500 transition-colors">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                    </button>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  // ==========================================
  // LIVE SESSION LOGIC & RUNTIME EDITING
  // ==========================================
  startLiveSession() {
    this.switchTab('session');
    const session = this.state.liveSession;
    session.isActive = true;
    session.isPaused = false;
    session.currentActivityIndex = 0;
    session.totalElapsedSeconds = 0;
    session.stopwatchRunning = false;
    session.stopwatchSeconds = 0;

    const currentAct = this.state.todayPlan.activities[0];
    session.activityRemainingSeconds = (currentAct ? currentAct.durationMin : 30) * 60;

    // Clear any existing intervals
    if (session.timerIntervalId) clearInterval(session.timerIntervalId);
    if (session.stopwatchIntervalId) clearInterval(session.stopwatchIntervalId);

    session.timerIntervalId = setInterval(() => this.tickLiveSession(), 1000);
    this.renderCurrentTab();
    this.showToast('Riyaaz session started. Focus your breath on Sa.', 'info');
  }

  tickLiveSession() {
    const session = this.state.liveSession;
    if (!session.isActive || session.isPaused) return;

    session.totalElapsedSeconds++;

    let activityChanged = false;
    if (session.activityRemainingSeconds > 0) {
      session.activityRemainingSeconds--;
    } else {
      // Advance to next activity if available
      if (session.currentActivityIndex < this.state.todayPlan.activities.length - 1) {
        session.currentActivityIndex++;
        const nextAct = this.state.todayPlan.activities[session.currentActivityIndex];
        session.activityRemainingSeconds = nextAct.durationMin * 60;
        this.showToast(`Transitioning to: ${nextAct.name}`, 'info');
        activityChanged = true;
      }
    }

    // Only re-render the full banner if the activity changed
    if (activityChanged) {
      this.renderCurrentTab();
      return;
    }

    // Targeted DOM update: strictly updates only the timer text, completely eliminating page blinking!
    const remainingMins = Math.floor(session.activityRemainingSeconds / 60);
    const remainingSecs = session.activityRemainingSeconds % 60;
    const timeFormatted = `${String(remainingMins).padStart(2, '0')}:${String(remainingSecs).padStart(2, '0')}`;

    const totalElapsedMins = Math.floor(session.totalElapsedSeconds / 60);
    const totalElapsedSecs = session.totalElapsedSeconds % 60;
    const elapsedFormatted = `${String(totalElapsedMins).padStart(2, '0')}:${String(totalElapsedSecs).padStart(2, '0')}`;

    const countdownEl = document.getElementById('live-session-countdown-timer');
    if (countdownEl) countdownEl.textContent = timeFormatted;

    const elapsedEl = document.getElementById('live-session-elapsed-timer');
    if (elapsedEl) elapsedEl.textContent = `Elapsed: ${elapsedFormatted}`;
  }

  togglePauseLiveSession() {
    this.state.liveSession.isPaused = !this.state.liveSession.isPaused;
    this.renderCurrentTab();
  }

  skipToNextActivity() {
    const session = this.state.liveSession;
    if (session.currentActivityIndex < this.state.todayPlan.activities.length - 1) {
      session.currentActivityIndex++;
      const nextAct = this.state.todayPlan.activities[session.currentActivityIndex];
      session.activityRemainingSeconds = nextAct.durationMin * 60;
      this.renderCurrentTab();
      this.showToast(`Switched to: ${nextAct.name}`, 'info');
    }
  }

  // Runtime minute addition (Prompt #2 explicit requirement!)
  addRuntimeMinutes(minutes) {
    const session = this.state.liveSession;
    session.activityRemainingSeconds += minutes * 60;
    // Also reflect in the activity definition
    const cur = this.state.todayPlan.activities[session.currentActivityIndex];
    if (cur) cur.durationMin += minutes;
    this.saveState();
    this.renderCurrentTab();
    this.showToast(`Added +${minutes} minutes to ${cur ? cur.name : 'current technique'}.`, 'success');
  }

  finishLiveSession() {
    const session = this.state.liveSession;
    if (session.timerIntervalId) clearInterval(session.timerIntervalId);
    if (session.stopwatchIntervalId) clearInterval(session.stopwatchIntervalId);

    const elapsedMinutes = Math.max(1, Math.round(session.totalElapsedSeconds / 60));
    
    // Log to history
    const newRecord = {
      id: 'sess-' + Date.now(),
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      durationMinutes: elapsedMinutes,
      fluteUsed: 'C natural Bamboo',
      techniques: this.state.todayPlan.activities.map(a => `${a.name} (${a.durationMin}m)`),
      notes: 'Completed session. Sustained breath holds recorded: ' + session.recordedBreaths.join(', ') + 's.',
      mood: 'Elevated'
    };

    this.state.sessionHistory.unshift(newRecord);
    this.state.user.weeklyLoggedMinutes += elapsedMinutes;
    session.isActive = false;

    this.saveState();
    this.renderCurrentTab();

    // Trigger celebration confetti
    if (typeof confetti === 'function') {
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    }

    this.showToast(`Dhanyawad! Riyaaz completed: ${elapsedMinutes} minutes logged.`, 'success');
  }

  // Stopwatch controls for Long Notes Breath Holds
  toggleStopwatch() {
    const session = this.state.liveSession;
    if (session.stopwatchRunning) {
      // Stop and record
      clearInterval(session.stopwatchIntervalId);
      session.stopwatchRunning = false;
      const holdTime = session.stopwatchSeconds;
      if (holdTime > 2) {
        session.recordedBreaths.push(holdTime);
        this.showToast(`Recorded breath hold: ${holdTime} seconds!`, 'success');
      }
      this.renderCurrentTab();
    } else {
      // Start
      session.stopwatchSeconds = 0;
      session.stopwatchRunning = true;
      this.renderCurrentTab(); // Render button state to "Stop & Record"
      session.stopwatchIntervalId = setInterval(() => {
        session.stopwatchSeconds++;
        const swMins = Math.floor(session.stopwatchSeconds / 60);
        const swSecs = session.stopwatchSeconds % 60;
        const stopwatchFormatted = `${String(swMins).padStart(2, '0')}:${String(swSecs).padStart(2, '0')}`;
        const swEl = document.getElementById('live-session-stopwatch-timer');
        if (swEl) swEl.textContent = stopwatchFormatted;
      }, 1000);
    }
  }

  resetStopwatch() {
    const session = this.state.liveSession;
    if (session.stopwatchIntervalId) clearInterval(session.stopwatchIntervalId);
    session.stopwatchRunning = false;
    session.stopwatchSeconds = 0;
    const swEl = document.getElementById('live-session-stopwatch-timer');
    if (swEl) swEl.textContent = '00:00';
    this.renderCurrentTab();
  }

  // ==========================================
  // Tanpura Web Audio Controls
  // ==========================================
  toggleTanpura() {
    if (window.tanpura) {
      window.tanpura.toggle();
      this.renderCurrentTab();
    }
  }

  changeTanpuraScale(scale) {
    if (window.tanpura) {
      window.tanpura.setScale(scale);
      this.showToast(`Tanpura drone root set to ${scale}.`, 'info');
    }
  }

  setDroneType(type) {
    if (window.tanpura) {
      window.tanpura.setDroneType(type);
      this.showToast(`First string changed to ${type}.`, 'info');
    }
  }

  // ==========================================
  // Helper Actions & Updates
  // ==========================================
  calculateTotalPlannedMinutes() {
    return this.state.todayPlan.activities.reduce((sum, a) => sum + (a.durationMin || 0), 0);
  }

  adjustActivityMinutes(id, delta) {
    const act = this.state.todayPlan.activities.find(a => a.id === id);
    if (act) {
      act.durationMin = Math.max(5, act.durationMin + delta);
      this.state.todayPlan.totalMinutes = this.calculateTotalPlannedMinutes();
      this.saveState();
      this.renderCurrentTab();
    }
  }

  removeActivity(id) {
    this.state.todayPlan.activities = this.state.todayPlan.activities.filter(a => a.id !== id);
    this.state.todayPlan.totalMinutes = this.calculateTotalPlannedMinutes();
    this.saveState();
    this.renderCurrentTab();
  }

  setQuickPreset(totalMin) {
    if (totalMin === 30) {
      this.state.todayPlan.activities = [
        { id: 'act-1', timeRange: '00–15', name: 'Long notes (Sa Sadhana)', description: 'Breath & warm tone stability', durationMin: 15, completed: false },
        { id: 'act-2', timeRange: '15–30', name: 'Alankars Permutations', description: 'Metronome 70 BPM', durationMin: 15, completed: false }
      ];
    } else if (totalMin === 60) {
      this.state.todayPlan.activities = [
        { id: 'act-1', timeRange: '00–30', name: 'Long notes', description: 'Breath, tone & a steady Sa', durationMin: 30, completed: false },
        { id: 'act-2', timeRange: '30–45', name: 'Alankars', description: 'Patterns 1–4 · slow and even', durationMin: 15, completed: false },
        { id: 'act-3', timeRange: '45–60', name: 'Ornaments', description: 'Meend / Gamak / Jhala', durationMin: 15, completed: false }
      ];
    } else if (totalMin === 90) {
      this.state.todayPlan.activities = [
        { id: 'act-1', timeRange: '00–30', name: 'Kharaj & Long notes', description: 'Mandra Saptak sustenance', durationMin: 30, completed: false },
        { id: 'act-2', timeRange: '30–50', name: 'Alankars permutation & speed', description: '3 speeds in Teentaal', durationMin: 20, completed: false },
        { id: 'act-3', timeRange: '50–70', name: 'Meend & Komal Swars', description: 'Micro-tonal finger glides', durationMin: 20, completed: false },
        { id: 'act-4', timeRange: '70–90', name: 'Raag Bandish & Dhun', description: 'Raag Yaman improvisation', durationMin: 20, completed: false }
      ];
    }
    this.state.todayPlan.totalMinutes = totalMin;
    this.saveState();
    this.renderCurrentTab();
    this.showToast(`Applied ${totalMin}-minute riyaaz blueprint.`, 'info');
  }

  setLearningSubtab(subtab) {
    this.state.learningSubtab = subtab;
    this.saveState();
    this.renderCurrentTab();
  }

  selectTechnique(id) {
    this.selectedTechnique = this.state.techniques.find(t => t.id === id);
    this.renderCurrentTab();
  }

  // STRICT RULE: Only 'Learning' or 'Not started' allowed!
  updateTechniqueStatus(id, newStatus) {
    if (newStatus !== 'Learning' && newStatus !== 'Not started') return;
    const tech = this.state.techniques.find(t => t.id === id);
    if (tech) {
      tech.status = newStatus;
      this.saveState();
      this.renderCurrentTab();
      this.showToast(`Technique ${tech.name} marked as ${newStatus}.`, 'info');
    }
  }

  updateSongStatus(id, status) {
    const song = this.state.songs.find(s => s.id === id);
    if (song) {
      song.status = status;
      this.saveState();
      this.renderCurrentTab();
      this.showToast(`Song status updated to "${status}".`, 'info');
    }
  }

  incrementGoalDay(id) {
    const goal = this.state.goals.find(g => g.id === id);
    if (goal) {
      goal.currentDays = Math.min(goal.targetDays, goal.currentDays + 1);
      goal.log = `${goal.currentDays} practice days logged towards ${goal.title}.`;
      this.saveState();
      this.renderCurrentTab();
      if (typeof confetti === 'function') confetti({ particleCount: 30, spread: 50 });
      this.showToast(`Progress logged! Day ${goal.currentDays} of ${goal.targetDays}.`, 'success');
    }
  }

  logQuickClean(fluteId) {
    const flute = this.state.flutes.find(f => f.id === fluteId);
    if (flute) {
      const today = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
      // Calculate next clean in 7 days
      const nextDate = new Date();
      nextDate.setDate(nextDate.getDate() + 7);
      const nextClean = nextDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

      flute.lastCleaned = today;
      flute.nextCleaning = nextClean;
      flute.status = 'Ready';

      this.state.careLogs.unshift({
        id: 'care-' + Date.now(),
        date: today,
        fluteName: flute.name,
        fluteType: flute.type,
        observation: 'Routine dry swab and bore inspection. Ready for practice.'
      });

      this.saveState();
      this.renderCurrentTab();
      this.showToast(`Logged care for ${flute.name}. Next cleaning due on ${nextClean}.`, 'success');
    }
  }

  removeFlute(id) {
    if (confirm('Remove this flute from your collection?')) {
      this.state.flutes = this.state.flutes.filter(f => f.id !== id);
      this.saveState();
      this.renderCurrentTab();
    }
  }

  removeAudioSource(id) {
    this.state.audioSources = this.state.audioSources.filter(s => s.id !== id);
    this.saveState();
    this.renderCurrentTab();
  }

  removeGoal(id) {
    if (confirm('Delete this goal intention?')) {
      this.state.goals = this.state.goals.filter(g => g.id !== id);
      this.saveState();
      this.renderCurrentTab();
    }
  }

  // ==========================================
  // Form Handlers & Modal Interactions
  // ==========================================
  handleSaveFlute(e) {
    e.preventDefault();
    const name = document.getElementById('flute-input-name').value;
    const type = document.querySelector('input[name="flute-type"]:checked').value;
    const scale = document.getElementById('flute-input-scale').value;
    const lastClean = document.getElementById('flute-input-last-cleaned').value;
    const nextClean = document.getElementById('flute-input-next-cleaning').value;
    const notes = document.getElementById('flute-input-notes').value;

    const newFlute = {
      id: 'flute-' + Date.now(),
      name: name,
      type: type,
      scale: scale,
      usage: 'Studio & riyaaz',
      lastCleaned: lastClean,
      nextCleaning: nextClean,
      status: 'Ready',
      notes: notes
    };

    this.state.flutes.push(newFlute);
    this.saveState();
    this.renderCurrentTab();
    e.target.reset();
    this.showToast(`Flute "${name}" added to your collection!`, 'success');
  }

  focusAddFluteForm() {
    this.switchTab('flutes');
    setTimeout(() => {
      const input = document.getElementById('flute-input-name');
      if (input) {
        input.focus();
        input.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  }

  setSourceTypeTab(type) {
    const webBtn = document.getElementById('source-tab-website');
    const ytBtn = document.getElementById('source-tab-youtube');
    const hiddenCat = document.getElementById('form-source-category');
    const linkLabel = document.getElementById('form-source-link-label');

    if (type === 'website') {
      webBtn.className = 'pb-2 border-b-2 border-orange-600 text-orange-600 dark:text-orange-400 mr-4 font-bold';
      ytBtn.className = 'pb-2 text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 font-semibold';
      hiddenCat.value = 'website';
      linkLabel.textContent = 'Website link';
    } else {
      ytBtn.className = 'pb-2 border-b-2 border-orange-600 text-orange-600 dark:text-orange-400 mr-4 font-bold';
      webBtn.className = 'pb-2 text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 font-semibold';
      hiddenCat.value = 'youtube';
      linkLabel.textContent = 'YouTube video link';
    }
  }

  handleSaveSource(e) {
    e.preventDefault();
    const category = document.getElementById('form-source-category').value;
    const name = document.getElementById('form-source-name').value;
    const url = document.getElementById('form-source-url').value;
    const scale = document.getElementById('form-source-scale').value || 'Universal';

    const newSource = {
      id: 'src-' + Date.now(),
      name: name,
      category: category,
      type: category === 'youtube' ? 'YouTube' : 'Website',
      description: category === 'youtube' ? 'YouTube backing accompaniment' : 'Online website backing',
      url: url,
      scale: scale
    };

    this.state.audioSources.push(newSource);
    this.saveState();
    this.renderCurrentTab();
    e.target.reset();
    this.showToast(`Accompaniment source "${name}" connected!`, 'success');
  }

  // ==========================================
  // BACKUP EXPORT & IMPORT (Prompt requirement)
  // ==========================================
  exportBackup() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.state, null, 2));
    const downloadAnchor = document.createElement('a');
    const dateStr = new Date().toISOString().slice(0, 10);
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `MurliSadhak-backup-${dateStr}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    this.showToast('Backup JSON exported successfully!', 'success');
  }

  triggerImportBackup() {
    const fileInput = document.getElementById('backup-file-input');
    if (fileInput) fileInput.click();
  }

  handleImportBackup(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target.result);
        if (imported && imported.flutes && imported.techniques) {
          this.state = imported;
          this.saveState();
          this.applyTheme(this.state.theme || 'light');
          this.renderNav();
          this.renderCurrentTab();
          this.showToast('MurliSadhak data restored successfully!', 'success');
        } else {
          alert('Invalid MurliSadhak backup file structure.');
        }
      } catch (err) {
        alert('Could not parse backup JSON file.');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  }

  resetToDefaultData() {
    if (confirm('Reset MurliSadhak to sample default data? Your custom additions will be restored to initial template.')) {
      this.state = JSON.parse(JSON.stringify(DEFAULT_STATE));
      this.saveState();
      this.applyTheme('light');
      this.renderNav();
      this.renderCurrentTab();
      this.showToast('Reset to initial sample template data.', 'info');
    }
  }

  // ==========================================
  // Modals Management
  // ==========================================
  openSettingsModal() {
    const modal = document.getElementById('settings-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }

  closeSettingsModal() {
    const modal = document.getElementById('settings-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }

  openAddLearningItemModal() {
    if (this.state.learningSubtab === 'techniques') {
      this.openAddTechniqueModal();
    } else {
      this.openAddRaagModal();
    }
  }

  openAddTechniqueModal() {
    this.openModal('add-technique-modal');
  }

  openAddRaagModal() {
    this.openModal('add-raag-modal');
  }

  openAddSongModal() {
    this.openModal('add-song-modal');
  }

  openAddActivityModal() {
    this.openModal('add-activity-modal');
  }

  openRuntimeAddActivityModal() {
    this.openModal('add-activity-modal');
  }

  openAddGoalModal() {
    this.openModal('add-goal-modal');
  }

  openAddFluteModal() {
    this.openModal('add-flute-modal');
  }

  openLogCareModal(fluteId = null) {
    const select = document.getElementById('care-form-flute');
    if (select) {
      select.innerHTML = this.state.flutes.map(f => `
        <option value="${f.name} (${f.type})" ${fluteId === f.id ? 'selected' : ''}>
          ${f.name} · ${f.type} (${f.scale})
        </option>
      `).join('');
    }
    const todayStr = new Date().toISOString().slice(0, 10);
    const dateInput = document.getElementById('care-form-date');
    if (dateInput) dateInput.value = todayStr;
    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + 7);
    const nextInput = document.getElementById('care-form-next-date');
    if (nextInput) nextInput.value = nextDate.toISOString().slice(0, 10);
    this.openModal('log-care-modal');
  }

  openEditNotesModal(techId) {
    const tech = this.state.techniques.find(t => t.id === techId);
    if (!tech) return;
    const idInput = document.getElementById('edit-notes-tech-id');
    const titleEl = document.getElementById('edit-notes-modal-title');
    const textarea = document.getElementById('edit-notes-textarea');
    if (idInput) idInput.value = tech.id;
    if (titleEl) titleEl.textContent = `Practice Notes · ${tech.name}`;
    if (textarea) textarea.value = tech.notes || '';
    this.openModal('edit-notes-modal');
  }

  openAddVideoToTechniqueModal(techId) {
    const tech = this.state.techniques.find(t => t.id === techId);
    if (!tech) return;
    const idInput = document.getElementById('tech-video-modal-tech-id');
    const headingEl = document.getElementById('tech-video-modal-heading');
    const subEl = document.getElementById('tech-video-modal-sub');
    const titleInput = document.getElementById('tech-video-modal-title');
    const urlInput = document.getElementById('tech-video-modal-url');
    const notesInput = document.getElementById('tech-video-modal-notes');
    const thumbBox = document.getElementById('tech-video-modal-thumb-preview');

    if (idInput) idInput.value = tech.id;
    if (headingEl) headingEl.textContent = `Add Tutorial Video · ${tech.name}`;
    if (subEl) subEl.textContent = `Attach a new YouTube lesson or masterclass to ${tech.name}`;
    if (titleInput) titleInput.value = '';
    if (urlInput) urlInput.value = '';
    if (notesInput) notesInput.value = '';
    if (thumbBox) thumbBox.innerHTML = '';

    this.openModal('add-technique-video-modal');
  }

  // Alias for backward compatibility
  openEditTechniqueVideoModal(techId) {
    this.openAddVideoToTechniqueModal(techId);
  }

  // ==========================================
  // Form Submit Handlers (All fields at once)
  // ==========================================
  handleSaveTechnique(e) {
    e.preventDefault();
    const name = document.getElementById('tech-form-name').value.trim();
    const subtitle = document.getElementById('tech-form-subtitle').value.trim() || 'Indian Classical Bansuri Technique';
    const summary = document.getElementById('tech-form-summary').value.trim();
    const desc = document.getElementById('tech-form-desc').value.trim() || summary;
    const status = document.getElementById('tech-form-status').value;
    const goal = document.getElementById('tech-form-goal').value.trim() || 'Daily Riyaaz';
    const ytUrl = document.getElementById('tech-form-video').value.trim() || 'https://www.youtube.com/watch?v=1F_qR3wQ98g';
    const notes = document.getElementById('tech-form-notes').value.trim() || 'Focus on relaxed breathing and clean articulation.';

    const newTech = {
      id: 'tech-' + Date.now(),
      name: name,
      subtitle: subtitle,
      summary: summary,
      description: desc,
      status: status, // Strictly "Learning" or "Not started" ONLY (Prompt #4 explicit requirement)
      connectedGoal: goal,
      youtubeUrl: ytUrl,
      videos: ytUrl ? [
        {
          id: 'v-' + Date.now(),
          title: `${name} Tutorial Lesson`,
          url: ytUrl,
          notes: 'Foundational practice lesson'
        }
      ] : [],
      notes: notes
    };

    this.state.techniques.push(newTech);
    this.selectedTechnique = newTech;
    this.saveState();
    this.closeModal('add-technique-modal');
    e.target.reset();
    const thumbBox = document.getElementById('tech-yt-thumb-preview');
    if (thumbBox) thumbBox.innerHTML = '';
    this.renderCurrentTab();
    this.showToast(`Technique "${name}" added to your sadhana!`, 'success');
  }

  handleSaveRaag(e) {
    e.preventDefault();
    const name = document.getElementById('raag-form-name').value.trim();
    const thaat = document.getElementById('raag-form-thaat').value;
    const prahar = document.getElementById('raag-form-prahar').value.trim();
    const aroha = document.getElementById('raag-form-aroha').value.trim();
    const avroha = document.getElementById('raag-form-avroha').value.trim();
    const vadi = document.getElementById('raag-form-vadi').value.trim() || 'Pa';
    const samvadi = document.getElementById('raag-form-samvadi').value.trim() || 'Sa';
    const rasa = document.getElementById('raag-form-rasa').value.trim() || 'Devotion & Peace';
    const pakad = document.getElementById('raag-form-pakad').value.trim() || aroha;
    const flautist = document.getElementById('raag-form-flautist').value.trim() || 'Pt. Hariprasad Chaurasia';
    const title = document.getElementById('raag-form-title').value.trim() || `${name} Flute Rendition`;
    const ytUrl = document.getElementById('raag-form-video').value.trim() || 'https://www.youtube.com/watch?v=Gk74iG0-X8k';

    const newRaag = {
      id: 'raag-' + Date.now(),
      name: name,
      thaat: thaat,
      prahar: prahar,
      aroha: aroha,
      avroha: avroha,
      vadi: vadi,
      samvadi: samvadi,
      pakad: pakad,
      rasa: rasa,
      description: `Classical raga belonging to ${thaat} thaat, played during ${prahar}. Expression of ${rasa}.`,
      flautist: flautist,
      performanceTitle: title,
      youtubeUrl: ytUrl
    };

    this.state.raags.push(newRaag);
    this.saveState();
    this.closeModal('add-raag-modal');
    e.target.reset();
    const thumbBox = document.getElementById('raag-yt-thumb-preview');
    if (thumbBox) thumbBox.innerHTML = '';
    this.renderCurrentTab();
    this.showToast(`Raag "${name}" added to your classical library!`, 'success');
  }

  handleSaveSong(e) {
    e.preventDefault();
    const title = document.getElementById('song-form-title').value.trim();
    const movie = document.getElementById('song-form-movie').value.trim() || 'Classical / Devotional';
    const scale = document.getElementById('song-form-scale').value.trim() || 'C natural';
    const diff = document.getElementById('song-form-difficulty').value;
    const status = document.getElementById('song-form-status').value;
    const ytUrl = document.getElementById('song-form-video').value.trim() || 'https://www.youtube.com/watch?v=1F_qR3wQ98g';
    const notes = document.getElementById('song-form-notes').value.trim() || 'Focus on smooth phrasing and authentic feel.';

    const newSong = {
      id: 'song-' + Date.now(),
      title: title,
      movie: movie,
      scale: scale,
      difficulty: diff,
      status: status, // Want to learn, Learning, or Learned
      youtubeUrl: ytUrl,
      notes: notes
    };

    this.state.songs.unshift(newSong);
    this.saveState();
    this.closeModal('add-song-modal');
    e.target.reset();
    const thumbBox = document.getElementById('song-yt-thumb-preview');
    if (thumbBox) thumbBox.innerHTML = '';
    this.renderCurrentTab();
    this.showToast(`Song "${title}" added to your repertoire wishlist!`, 'success');
  }

  handleSaveActivity(e) {
    e.preventDefault();
    const name = document.getElementById('act-form-name').value.trim();
    const duration = parseInt(document.getElementById('act-form-duration').value, 10) || 15;
    const desc = document.getElementById('act-form-desc').value.trim() || 'Mindful riyaaz practice';

    const newAct = {
      id: 'act-' + Date.now(),
      timeRange: 'Scheduled',
      name: name,
      description: desc,
      durationMin: duration,
      completed: false
    };

    this.state.todayPlan.activities.push(newAct);
    this.state.todayPlan.totalMinutes = this.calculateTotalPlannedMinutes();
    this.saveState();
    this.closeModal('add-activity-modal');
    e.target.reset();
    this.renderCurrentTab();
    this.showToast(`Added "${name}" (${duration} min) to today's session!`, 'success');
  }

  handleSaveGoal(e) {
    e.preventDefault();
    const title = document.getElementById('goal-form-title').value.trim();
    const targetDays = parseInt(document.getElementById('goal-form-target-days').value, 10) || 15;
    const targetDate = document.getElementById('goal-form-target-date').value.trim() || 'Next month';
    const tech = document.getElementById('goal-form-technique').value.trim() || 'Bansuri Milestone';
    const desc = document.getElementById('goal-form-desc').value.trim() || 'Daily conscious commitment to sound quality';

    const newGoal = {
      id: 'goal-' + Date.now(),
      title: title,
      description: desc,
      targetDays: targetDays,
      currentDays: 0,
      targetDate: targetDate,
      linkedTechnique: tech,
      completed: false,
      log: 'Started new practice intention.'
    };

    this.state.goals.push(newGoal);
    this.saveState();
    this.closeModal('add-goal-modal');
    e.target.reset();
    this.renderCurrentTab();
    this.showToast(`New goal "${title}" established!`, 'success');
  }

  handleSaveCareLog(e) {
    e.preventDefault();
    const fluteSelect = document.getElementById('care-form-flute').value;
    const dateVal = document.getElementById('care-form-date').value || new Date().toISOString().slice(0, 10);
    const nextVal = document.getElementById('care-form-next-date').value || '';
    const obs = document.getElementById('care-form-obs').value.trim();

    const formattedDate = new Date(dateVal).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

    this.state.careLogs.unshift({
      id: 'care-' + Date.now(),
      date: formattedDate,
      fluteName: fluteSelect,
      fluteType: fluteSelect.toLowerCase().includes('pvc') ? 'PVC' : 'Bamboo',
      observation: obs
    });

    const matchingFlute = this.state.flutes.find(f => fluteSelect.includes(f.name));
    if (matchingFlute) {
      matchingFlute.lastCleaned = formattedDate;
      if (nextVal) {
        matchingFlute.nextCleaning = new Date(nextVal).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
      }
      matchingFlute.status = 'Ready';
    }

    this.saveState();
    this.closeModal('log-care-modal');
    e.target.reset();
    this.renderCurrentTab();
    this.showToast('Care and observation record logged!', 'success');
  }

  handleSaveEditedNotes(e) {
    e.preventDefault();
    const techId = document.getElementById('edit-notes-tech-id').value;
    const notes = document.getElementById('edit-notes-textarea').value.trim();
    const tech = this.state.techniques.find(t => t.id === techId);
    if (tech) {
      tech.notes = notes;
      this.saveState();
      this.closeModal('edit-notes-modal');
      this.renderCurrentTab();
      this.showToast(`Practice notes for "${tech.name}" saved!`, 'success');
    }
  }

  handleSaveTechniqueVideo(e) {
    e.preventDefault();
    const techId = document.getElementById('tech-video-modal-tech-id').value;
    const title = document.getElementById('tech-video-modal-title').value.trim();
    const url = document.getElementById('tech-video-modal-url').value.trim();
    const notes = document.getElementById('tech-video-modal-notes').value.trim();

    const tech = this.state.techniques.find(t => t.id === techId);
    if (tech) {
      if (!Array.isArray(tech.videos)) {
        tech.videos = this.getTechniqueVideos(tech);
      }
      const newVideo = {
        id: 'vid-' + Date.now(),
        title: title || `${tech.name} Tutorial Lesson`,
        url: url,
        notes: notes || ''
      };
      tech.videos.push(newVideo);
      tech.youtubeUrl = url; // keep latest as main URL fallback

      this.saveState();
      this.closeModal('add-technique-video-modal');
      e.target.reset();
      const thumbBox = document.getElementById('tech-video-modal-thumb-preview');
      if (thumbBox) thumbBox.innerHTML = '';
      this.renderCurrentTab();
      this.showToast(`New tutorial video added to "${tech.name}"!`, 'success');
    }
  }

  deleteTechniqueVideo(techId, vidId) {
    const tech = this.state.techniques.find(t => t.id === techId);
    if (!tech) return;
    if (!Array.isArray(tech.videos)) {
      tech.videos = this.getTechniqueVideos(tech);
    }
    if (confirm(`Remove this tutorial video from "${tech.name}"?`)) {
      tech.videos = tech.videos.filter(v => v.id !== vidId);
      if (tech.videos.length > 0) {
        tech.youtubeUrl = tech.videos[0].url;
      }
      this.saveState();
      this.renderCurrentTab();
      this.showToast(`Video removed from "${tech.name}".`, 'info');
    }
  }

  // Alias for backward compatibility
  handleSaveEditedVideo(e) {
    this.handleSaveTechniqueVideo(e);
  }

  handleSaveFluteModal(e) {
    e.preventDefault();
    const name = document.getElementById('modal-flute-name').value.trim();
    const type = document.getElementById('modal-flute-type').value;
    const scale = document.getElementById('modal-flute-scale').value;
    const lastClean = document.getElementById('modal-flute-last-cleaned').value;
    const nextClean = document.getElementById('modal-flute-next-cleaning').value;
    const notes = document.getElementById('modal-flute-notes').value.trim();

    const formattedLast = lastClean ? new Date(lastClean).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : 'Today';
    const formattedNext = nextClean ? new Date(nextClean).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : 'Next week';

    const newFlute = {
      id: 'flute-' + Date.now(),
      name: name,
      type: type,
      scale: scale,
      usage: 'Studio & riyaaz',
      lastCleaned: formattedLast,
      nextCleaning: formattedNext,
      status: 'Ready',
      notes: notes
    };

    this.state.flutes.push(newFlute);
    this.saveState();
    this.closeModal('add-flute-modal');
    e.target.reset();
    this.renderCurrentTab();
    this.showToast(`Flute "${name}" (${type}) added to your collection!`, 'success');
  }

  showToast(message, type = 'info') {
    const toast = document.getElementById('app-toast');
    const toastMsg = document.getElementById('toast-message');
    if (!toast || !toastMsg) return;

    toastMsg.textContent = message;
    toast.classList.remove('hidden', 'translate-y-12', 'opacity-0');
    toast.classList.add('flex', 'translate-y-0', 'opacity-100');

    if (this.toastTimeout) clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      toast.classList.add('translate-y-12', 'opacity-0');
      setTimeout(() => toast.classList.add('hidden'), 300);
    }, 3800);
  }

  deleteSong(songId) {
    const song = this.state.songs.find(s => s.id === songId);
    if (!song) return;
    if (confirm(`Are you sure you want to delete "${song.title}" from your repertoire wishlist?`)) {
      this.state.songs = this.state.songs.filter(s => s.id !== songId);
      this.saveState();
      this.renderCurrentTab();
      this.showToast(`Deleted "${song.title}" from Video Hub.`, 'info');
    }
  }

  openProfileModal() {
    const user = this.state.user || {
      name: 'Aarav Sharma',
      initials: 'AS',
      level: 'Madhyamik (Intermediate)',
      primaryFlute: 'E bass (30 inch) & C natural',
      motto: 'Sur, Laya, and Shanti — a little every day.'
    };

    const nameInput = document.getElementById('profile-form-name');
    const initialsInput = document.getElementById('profile-form-initials');
    const levelInput = document.getElementById('profile-form-level');
    const fluteInput = document.getElementById('profile-form-flute');
    const mottoInput = document.getElementById('profile-form-motto');
    const badgeInitial = document.getElementById('profile-modal-badge-initials');

    if (nameInput) nameInput.value = user.name || '';
    if (initialsInput) initialsInput.value = user.initials || 'AS';
    if (levelInput) levelInput.value = user.level || 'Madhyamik (Intermediate)';
    if (fluteInput) fluteInput.value = user.primaryFlute || 'E bass (30 inch) & C natural';
    if (mottoInput) mottoInput.value = user.motto || '';
    if (badgeInitial) badgeInitial.textContent = user.initials || 'AS';

    // Live studio counts
    const statsSongs = document.getElementById('profile-stat-songs');
    const statsFlutes = document.getElementById('profile-stat-flutes');
    const statsGoals = document.getElementById('profile-stat-goals');
    if (statsSongs) statsSongs.textContent = this.state.songs.length;
    if (statsFlutes) statsFlutes.textContent = this.state.flutes.length;
    if (statsGoals) statsGoals.textContent = this.state.goals.length;

    this.openModal('profile-modal');
  }

  handleSaveProfile(e) {
    e.preventDefault();
    const name = document.getElementById('profile-form-name').value.trim() || 'Sadhak';
    let initials = document.getElementById('profile-form-initials').value.trim().toUpperCase();
    if (!initials) {
      const parts = name.split(' ').filter(Boolean);
      initials = parts.length > 1 ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase() : name.slice(0, 2).toUpperCase();
    }
    const level = document.getElementById('profile-form-level').value;
    const flute = document.getElementById('profile-form-flute').value.trim();
    const motto = document.getElementById('profile-form-motto').value.trim();

    if (!this.state.user) this.state.user = {};
    this.state.user.name = name;
    this.state.user.initials = initials;
    this.state.user.level = level;
    this.state.user.primaryFlute = flute;
    this.state.user.motto = motto;

    this.saveState();
    this.updateUserInitialsBadge();
    this.closeModal('profile-modal');
    this.renderCurrentTab();
    this.showToast(`Sadhak profile updated for ${name}!`, 'success');
  }

  updateUserInitialsBadge() {
    const initials = (this.state.user && this.state.user.initials) ? this.state.user.initials : 'AS';
    const badge = document.getElementById('nav-user-initials');
    if (badge) badge.textContent = initials;
    const modalBadge = document.getElementById('profile-modal-badge-initials');
    if (modalBadge) modalBadge.textContent = initials;
  }

  setupGlobalEvents() {
    // ESC key closes modals
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeVideoModal();
        this.closeSettingsModal();
        const modals = [
          'profile-modal',
          'add-technique-modal',
          'add-raag-modal',
          'add-song-modal',
          'add-activity-modal',
          'add-goal-modal',
          'add-flute-modal',
          'log-care-modal',
          'edit-notes-modal',
          'edit-technique-video-modal'
        ];
        modals.forEach(id => this.closeModal(id));
      }
    });
  }
}

// Instantiate and launch
window.app = new MurliSadhakApp();
document.addEventListener('DOMContentLoaded', () => {
  window.app.init();
});
