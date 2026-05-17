# 🏀 Hoop Tactical Pro (v2026.2)

An ultra-premium, glassmorphic basketball coaching playbook and tactical board built for modern **NBA & NCAA** coaching setups. Features real-time spacing heatmaps, synthesized coaching whistles, high-fidelity timeline keyframe animations, professional court themes (including the NBA Cup Vegas theme!), an interactive **Coaching Guide HUD**, and a high-precision **Non-Linear Spacing Engine**.

---

## ✨ Modern 2026 Features

### 🎨 Professional Glassmorphic Aesthetics
* **Visual Wow-Factor**: Deep space background with harmoniously glowing card elements, translucent sidebars, custom-designed sliders, and vibrant visual states.
* **Curated Court Flooring Themes**:
  * **Stealth Slate**: Deep cobalt charcoal oak wood flooring with neon orange boundaries (Default).
  * **Classic Oak Hardwood**: Light oak natural planks with clean vector overlays.
  * **NBA Vegas Cup**: Sleek navy-black court featuring a bold center-striping and neon blue keys.
  * **NCAA Final Four**: Oak planks with classic royal blue collegiate borders.
* **Modern Regulation Markings**: Regulation college/pro lines, wider **NCAA Arc widths**, deep **4-Point lines**, and defensive **Spacing Hashmarks**.

### 📈 High-Precision Spacing Engine (v2026.2)
* **Non-Linear Court Remapping**: Dynamic coordinate transformation that gracefully projects half-court plays into real-world proportions:
  * **Paint and Post Areas** (`x <= 12`) are preserved with **100% precision** to maintain realistic screen, cut, and post-up locations.
  * **Perimeter Spacing** (`x > 12`) is non-linearly stretched to align players exactly outside the 23.75-foot NBA/NCAA three-point arc.
  * **Sideline Corners** are expanded wider (`y = 1.8` and `y = 48.2`) to position shooters perfectly in the deep corner baseline pockets.
* **Man-to-Man Defender Basket Alignment**: Automatically forces defenders to stand on the **correct basket-side** of their matchup (exactly between the offense and the left hoop) instead of trailing behind.
* **Selective Zone & Inbound Space Protection**: Detects zone defenses (2-3 Zone, 3-2 Zone, Pack-Line) and inbound plays (BLOB/SLOB) to lock defenders in their designed strategic zone spaces, preventing defensive alignment breakdown.
* **Translucent Reach Bubbles**: Projects defensive threat zones (`radius * 3.5`) beneath defenders in real-time.
* **Neon Spacing Aura**: Offensive players glow **neon green** when wide-open, and contour in **neon red** when contested within a defender's reach bubble.
* **Floating Spacing HUD**: Monitors spacing distance offsets between active offensive players to output an instant **Spacing Score** (e.g. *Pristine*, *Decent*, or *Congested*).

### 📖 Interactive Coaching Guide HUD
* **Tactical Concepts**: Instantly displays the coaching philosophy, tactical theory, and standard applications for every playbook.
* **Coaching Instructions**: Outputs step-by-step frame instructions in the side control panel, synchronizing with active timeline animations.
* **Full-Court Press Auto-Switching**: Automatically toggles the board between half-court and full-court rendering depending on the play's tactical scale.

### 🎬 Keyframe Timeline Animation Ticker
* **Multi-Frame Sequencing**: Set up player and ball positions, click `+ Add Keyframe`, adjust positions, and hit playback.
* **Cubic Easing Interpolator**: Players and ball transition organically on playback using realistic $t = 1 - (1 - \text{progress})^3$ ease-out speed dampening.
* **Standalone Game Ball**: Orange ball token with black grooves that can be dragged independently or snapped to the nearest player's hands on release.

### 🔊 Dual-Frequency Web Audio Whistle
* **Synthesized coaching whistle** that operates immediately without large asset files.
* Blends a `sine` oscillator (2450 Hz) and a `triangle` oscillator (2480 Hz) with a `55 Hz` frequency modulation flutter and rapid gain decay curves to recreate a realistic metallic coaching whistle.

### 👥 Double-Click Jersey Tag Customizer
* Click the gear next to any player in the sidebar to custom-label their jersey with roles like `PG`, `SG`, `SF`, `PF`, `C`, or custom role initials (e.g., `6TH`, `SC`, `KD`). These sync dynamically to active chips.

---

## 🏀 Expanded Catalog: 33 Premium Playbooks

The catalog has been expanded to **33 elite NBA and NCAA playbook sets**, divided into four specialized tactical categories:

### 🔥 Modern Offense Series
1. **Delay 5-Out Offense**: Modern spacing set designed to clear the paint for direct backdoor cuts.
2. **Spain Pick & Roll**: Relentless central pick-and-roll with a back-screen on the roll defender.
3. **Pistol (21) Action**: Early transition attack using handoffs and quick downhill wing drives.
4. **Zoom Set Action**: Pin-down screen into a handoff for dynamic rim pressure.
5. **Flow Motion**: Continuous passing and cutting designed to break standard man-to-man alignments.
6. **Chicago Action**: Pin-down screen directly into a handoff for immediate three-point shooters.
7. **Delay Flare Screen**: Secondary break action setting a flare screen for the inbounder.
8. **Delay Keep Action**: Handoff fake resulting in a direct quarterback keeper drive.
9. **Spain P&R Leak**: Spain pick-and-roll variation leaking the back-screener to the opposite wing.
10. **Spain P&R Hammer**: Roll action triggering a weakside hammer screen for a corner shooter.
11. **Zoom Double Action**: Double handoff sequence to overload the top-of-key.
12. **Zoom Pitch Action**: Drag screen followed by an immediate pitch-back release.

### 🎯 Classic & Tactical Series
13. **Horns Flare Set**: Elbow spacing with dual screens and a high shooter flare release.
14. **Horns Flex Action**: Flex screen from high elbow opening a cutter underneath the basket.
15. **Horns Rub Handoff**: Handoff fake to clear a shooter along the key lane.
16. **Princeton Chin Offense**: Backdoor-focused NCAA spacing with high post elbows and backdoor cuts.
17. **Princeton Point Series**: Guard-to-guard entry triggering an elbow split cut sequence.
18. **Triangle Post Entry**: Phil Jackson-style triple post spacing focused on low post mismatch entry.
19. **Triangle Pinch Post**: Handoff off the high elbow to clear baseline drives.
20. **Triangle Blind Pig**: Inside backdoor cutter play utilizing quick elbow handoffs.

### 📥 Special Inbound Sets (BLOB & SLOB)
21. **BLOB Stack Inbound**: Baseline out-of-bounds stack set utilizing cross screens to open a layup.
22. **BLOB Box Screen Set**: Traditional box-set screen alignment creating corner and post options.
23. **BLOB Line Inbound**: Linear baseline stack forcing split directions.
24. **SLOB Diamond Action**: Sideline out-of-bounds diamond formation using a curl screen for shooters.
25. **SLOB Elevator Play**: Double screen closing shut behind the shooter at the top of the key.

### 🛡️ Defensive Systems
26. **Pack-Line Defense**: Packed interior paint defense forcing deep contested shots.
27. **1-3-1 Press Trap**: Multi-frame trapping full-court press (with `D5` deep safety and `D3` middle).
28. **2-3 Zone Motion**: Classic 2-3 Zone defense structure defending high-post overload motion.
29. **3-2 Zone Defense**: Perimeter-denial zone designed to lock down hot three-point shooting teams.
30. **Box-and-One Defense**: Shadow defense locking one star player while the other four defend in a zone box.
31. **Triangle-and-Two**: Extreme shadow defense locking two star shooters while the other three defend in a low triangle.
32. **2-2-1 Press Trap**: Three-quarter court press designed to trap the ball handler at the sidelines.
33. **Run-and-Double Defense**: Relentless full-court trapping defense forcing immediate turnovers.

---

## ⌨️ Tactical Keyboard Shortcuts

* **`[W]`** Blow Referee Whistle
* **`[V]`** Move & Select
* **`[A]`** Straight Pass / Run Arrow
* **`[D]`** Dashed Cut Arrow
* **`[C]`** Curved Run Arrow
* **`[S]`** Screen Pick Block
* **`[Z]`** Defensive Zone Box
* **`[T]`** Text Label Modal
* **`[E]`** Sponge Eraser Tool

---

## 🚀 Quick Start & Deployment

### Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start the Dev Server**:
   ```bash
   npm start
   ```

---

## 📂 File Architecture

* **`server.js`** — Lightweight Express asset host.
* **`index.html`** — Self-contained single-page application containing the HTML structural grids, visual CSS tokens, and JavaScript gameplay physics engine.
* **`package.json`** — Project metadata and scripts.
* **`render.yaml`** — Render PaaS automatic host setup.

---

## 📝 Release Notes (v2026.2)
* **Fixed coordinate drift:** Corrected baseline corner and wing player coordinates on half-court, aligning them elegantly outside the 3-point arc.
* **Fixed defender trailing:** Implemented dynamic defender alignment to keep defenders on the hoop-side of the ball.
* **Zone defense isolation:** Protected zone defenses (like 2-3 Zone) and inbounds (BLOB/SLOB) from scaling to maintain paint coverage.
* **Added 33 playbooks:** Fully detailed coaching instructions for all premium sets.

Built with ❤️ for the Hoop Culture Network · Modern basketball playmaking.
