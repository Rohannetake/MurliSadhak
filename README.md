# 🪈 MurliSadhak – Personal Bansuri Riyaaz Studio

> *"A little every day. A lifetime of music."*

**MurliSadhak** is an Indian Classical Bansuri (flute) practice and accompaniment studio built by a flute sadhak for flute sadhaks. It unifies daily session planning, real-time accompaniment, sustained breath hold tracking, multiple tutorial video lessons, flute care management, and classical raag exploration into a single distraction-free workspace.

---

## 📖 The Story Behind MurliSadhak

As a Bansuri practitioner, daily riyaaz is sacred. But practicing consistently always came with a fragmented and chaotic digital workflow:
- 10+ browser tabs open at once: one tab for an online tabla player, another for a tanpura drone, and scattered YouTube tabs for technique drills.
- Juggling a phone stopwatch while practicing sustained *Sa* notes, breaking embouchure and mindfulness.
- Bamboo flutes drying up or cracking because cleaning and oiling dates were forgotten.
- Modern apps treating music with superficial checkmarks like *"You have mastered Meend!"* — completely ignoring the Indian Classical philosophy that techniques like *Meend*, *Gamak*, and *Komal Swars* are lifelong journeys of awareness, never "mastered".

**MurliSadhak** was created to solve these exact riyaaz friction points: one dedicated, serene, and functional sanctuary for daily Bansuri sadhana.

---

## ✨ Features

### 1. 🎛️ Studio Dashboard & Riyaaz Rhythm
- **Weekly & Monthly Practice Metrics:** Live tally of weekly hours, total sessions, active streak, and songs in progress.
- **Today's Session Blueprint:** Real-time overview of scheduled segments with a one-click session launcher.
- **Instrument Health Tracker:** Real-time alerts for flutes due for swabbing, drying, or oiling.
- **Accompaniment Quick Redirections:** Direct 1-click access to:
  - **Tabla:** [Spardha Online Tabla Beats](https://www.spardhaschoolofmusic.com/tools/tabla)
  - **Tanpura / Shruti Box:** [Spardha Online Shruti Box](https://www.spardhaschoolofmusic.com/tools/tanpura)
- **Interactive Sadhak Profile:** Customize your Sadhak Name, Initials badge, Skill Level (Sadhak / Shishya), Primary Bansuri scale, and personal Practice Motto.

### 2. ⏱️ Riyaaz Planner & Interactive Live Studio
- **Minute-by-Minute Session Planner:** Build customized riyaaz sessions dividing time precisely across Long Notes, Alankars, and Ornaments (*Meend*, *Gamak*, *Jhala*).
- **Interactive Live Session Room:**
  - Displays **Current Technique** and **Next Technique** with real-time countdown.
  - **Long Notes Breath Stopwatch:** Integrated breath-hold stopwatch to measure sustained *Sa* lung capacity with real-time logging and personal best counter.
  - **Runtime Session Adjustments:** Add +5 min or +10 min to the active technique, or inject an entirely new sub-activity on the fly without stopping your riyaaz.
  - Accompaniment bar with instant links to Tabla, Sitar, and native Tanpura drone.
  - Automatically saves finished sessions to **Riyaaz History** with logged techniques, mood, and breath records.

### 3. 🎶 Audio Riyaaz & Native Tanpura Drone
- **Built-in Web Audio Acoustic Tanpura:** Zero-latency procedural Indian classical drone synthesized using Web Audio API:
  - Root notes in all scales: **C, C#, D, D#, E, F, F#, G, G#, A, A#, B**.
  - Classical first string tuning options: **Pa-Sa (Standard)**, **Ma-Sa (Yaman / Madhyam)**, and **Ni-Sa (Marwa / Puriya)**.
  - Realistic natural harmonics, gentle tremolo, and jawari resonance.
- **Soundwave Visualizer:** Live pulsating acoustic animation responsive to audio playback.
- **Accompaniment Source Manager:** Add and store custom backing tracks from websites or YouTube with scale tagging.

### 4. 📚 Learning Library: Techniques & Raags
- **Multiple YouTube Tutorial Videos per Technique:**
  - Attach multiple video lessons, drills, and masterclasses to any technique (e.g., *Meend Fundamentals*, *Mandra Saptak Meend*, *Alankar Speed Building*).
  - **100% Crisp, Clear Thumbnails:** Full visual clarity with centered play buttons.
  - **Action Controls at the Bottom:** Dedicated *"Watch on website"* in-app modal player (no YouTube redirects), *"YouTube ↗"* external tab link, and individual video deletion.
  - Add new YouTube videos to any technique anytime with live URL thumbnail verification.
- **Indian Classical Sadhana Philosophy:**
  - Technique stages are strictly **Learning** or **Not started**. In accordance with classical traditions, techniques are never marked as "completed" or "mastered".
  - Dedicated personal practice notes per technique.
- **Raags Subtab:**
  - Deep classical repertoire reference: *Raag Yaman, Raag Bhupali, Raag Bhairav, Raag Bageshri, Raag Darbari Kanada*, and more.
  - Complete classical theory: Thaat, Prahar (Time of day), Aroha, Avroha, Vadi, Samvadi, Pakad, and Rasa.
  - Curated master performances by legends (*Pt. Hariprasad Chaurasia, Pt. Ronu Majumdar, Pt. Pravin Godkhindi, Pt. Pannalal Ghosh*) streamable in-app.

### 5. 🪵 Flute Collection & Care Log
- **Bamboo & PVC Instrument Inventory:** Visual representation of flutes with material, scale, and current status.
- **Care Scheduling:** Track Last Cleaned and Next Due dates with automatic "Ready" vs "Care due" status indicators.
- **1-Click Quick Clean:** Log routine dry swabbing or oiling in seconds.
- **Care Observations Log:** Detailed maintenance diary for recording bore dryness, oiling, thread binding, and acoustic tone evolution.

### 6. 🎬 Video Hub & Repertoire Wishlist
- Curated repository of bansuri song tutorials and performances.
- Two-way synced wishlist tracking: *Want to learn*, *Learning*, and *Learned*.
- In-app video playback so you never lose your practice groove.
- Add and delete custom songs easily.

### 7. 🎯 Practice Goals & Intentions
- Define long-term milestones (e.g. *15 days of Meend practice*, *Steady 25s Sa on G Bass*, *7 Basic Alankars at 120 BPM*).
- Interactive **+1 Day Check-in** button with celebration confetti animation.

### 8. 🎨 Design, Themes & Data Portability
- **Classical Aesthetic:** Crisp white background with Indian Saffron / Terracotta Orange (`#ea580c`), obsidian charcoal elements, and serene typography.
- **Dark Mode Support:** Deep ebony slate theme (`#151413`) for peaceful night riyaaz.
- **Zero Blue & Zero Green Buttons:** Strict adherence to classical warm earthy design principles.
- **100% Private & Local:** All riyaaz data is stored securely in your browser's `localStorage`.
- **Backup Export & Import:** Export your entire studio as a JSON file and restore it anytime on any computer.

---

## 🛠️ Tech Stack

- **Frontend:** Pure Modern Vanilla JavaScript (ES6+ Modules)
- **Styling:** Tailwind CSS (via CDN) + Custom CSS (`styles.css`)
- **Audio Synthesis:** Native Web Audio API (`tanpura.js`) for the acoustic drone generator
- **Animations & FX:** Canvas Confetti for riyaaz milestones
- **Architecture:** Zero bloated build tools or heavy `node_modules` — runs natively in any modern browser

---

## 🚀 How to Run Locally

### Option 1: Native Node Server (Recommended)
```bash
# Start the lightweight zero-dependency local server
node server.js
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### Option 2: Open Directly
Double-click **`index.html`** or open it directly in Google Chrome, Microsoft Edge, Brave, or Safari.

---

## 🪈 External Accompaniment Credits
- [Spardha Online Tabla Beats](https://www.spardhaschoolofmusic.com/tools/tabla)
- [Spardha Online Shruti Box & Tanpura](https://www.spardhaschoolofmusic.com/tools/tanpura)

---

## 📜 License
MIT License · Built with devotion for Indian Classical Music.
