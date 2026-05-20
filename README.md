# 🏀 Hoop Tactical Pro (v2026.4)

An ultra-premium, glassmorphic basketball coaching playbook and tactical board built for modern **NBA & NCAA** coaching setups. Features real-time spacing heatmaps, synthesized coaching whistles, high-fidelity timeline keyframe animations, professional court themes, an interactive **Coaching Guide HUD**, a **Game Time Mode**, and a high-precision **Non-Linear Spacing Engine**.

---

## ✨ Modern 2026 Features

### 🎨 Professional Glassmorphic Aesthetics
* **Visual Wow-Factor**: Deep space background with harmoniously glowing card elements, translucent sidebars, custom-designed sliders, and vibrant visual states.
* **Curated Court Flooring Themes**:
  * **NCAA Final Four** ⭐ *(Default)*: Oak planks with classic royal blue collegiate borders.
  * **Stealth Slate**: Deep cobalt charcoal oak wood flooring with neon orange boundaries.
  * **Classic Oak Hardwood**: Light oak natural planks with clean vector overlays.
  * **NBA Vegas Cup**: Sleek navy-black court featuring a bold center-striping and neon blue keys.
* **Modern Regulation Markings**: Regulation college/pro lines, wider **NCAA Arc widths**, deep **4-Point lines**, and defensive **Spacing Hashmarks**.

### 📱 Progressive Web App (PWA) — Tablet & Mobile Install
* **Install to Home Screen**: A persistent **📱 Install App** button in the header lets coaches install the board directly to their iPad or Android tablet home screen.
  * **Android/Chrome**: Triggers the native install prompt automatically.
  * **Apple iPad/iPhone**: Provides step-by-step Safari "Add to Home Screen" instructions.
* **Full Screen Launch**: Once installed, the app launches in strict fullscreen mode (no browser chrome) for maximum court visibility.
* **Premium App Icon**: A custom-designed glassmorphic neon-orange basketball + coaching clipboard icon used across all install surfaces.
* **⛶ Full Screen Button**: Available at all times in the header to enter fullscreen mode without installing.

### ⏱️ Game Time Mode
* **One-Click Focus Mode**: The **⏱️ Game Time** button strips away all editor noise — drawing tools, left toolbar, analytics, brush settings, and bottom timeline all auto-hide.
* **Maximum Board Real Estate**: The tactical court canvas expands to fill 100% of the available screen for crystal-clear visibility courtside.
* **Full/Half Court Toggle**: The court mode switcher remains accessible in Game Time for quick mid-game transitions.
* **📋 Show Panel Toggle**: A dedicated purple toggle button reveals/hides the right panel (Roster + Playbook + Sequence Frames) on demand without leaving Game Time.
* **Auto-Reset**: Panel resets to hidden every time Game Time is activated for a clean experience.

### 📥 One-Click Roster Deploy
* **Drop All Players on Court**: A single button instantly places all 5 offensive (green) and 5 defensive (red) players on the court in a balanced formation, with the ball auto-snapped to the point guard.
* **Context-Aware Scaling**: Automatically recalculates player positions for both Full Court and Half Court modes.
* **Undo Support**: The deploy is fully integrated with the undo/redo history stack.

### 📈 High-Precision Spacing Engine (v2026.4)
* **Non-Linear Court Remapping**: Dynamic coordinate transformation that gracefully projects half-court plays into real-world proportions.
* **Man-to-Man Defender Basket Alignment**: Automatically forces defenders to stand on the correct basket-side of their matchup.
* **Selective Zone & Inbound Space Protection**: Detects zone defenses and inbound plays to lock defenders in designed strategic zones.
* **Translucent Reach Bubbles**: Projects defensive threat zones beneath defenders in real-time.
* **Neon Spacing Aura**: Offensive players glow **neon green** when wide-open and **neon red** when contested.
* **Floating Spacing HUD**: Outputs an instant **Spacing Score** (e.g. *Pristine*, *Decent*, or *Congested*).

### 📖 Interactive Coaching Guide HUD
* **Tactical Concepts**: Displays coaching philosophy and tactical theory for every playbook.
* **Coaching Instructions**: Step-by-step frame instructions synchronized with timeline animations.
* **Full-Court Press Auto-Switching**: Automatically toggles board layout based on play's tactical scale.

### 🎬 Keyframe Timeline Animation Ticker
* **Multi-Frame Sequencing**: Build player positions, add keyframes, and hit playback.
* **FastBuild Engine**: Teleports players to the ends of drawn action paths and auto-generates the next frame.
* **Cubic Easing Interpolator**: Organic ease-out transitions using $t = 1 - (1 - \text{progress})^3$.
* **Standalone Game Ball**: Drag independently or snap to nearest player on release.

### 🔊 Dual-Frequency Web Audio Whistle
* Synthesized coaching whistle — no asset files required.
* Blends `sine` (2450 Hz) + `triangle` (2480 Hz) oscillators with `55 Hz` flutter modulation.

### 👥 Double-Click Jersey Tag Customizer
* Custom-label any player jersey with roles like `PG`, `SG`, `SF`, `PF`, `C`, or custom initials.

---

## 🏀 Expanded Catalog: 33 Premium Playbooks

### 🔥 Modern Offense Series
1. **Delay 5-Out Offense** | 2. **Spain Pick & Roll** | 3. **Pistol (21) Action** | 4. **Zoom Set Action**
5. **Flow Motion** | 6. **Chicago Action** | 7. **Delay Flare Screen** | 8. **Delay Keep Action**
9. **Spain P&R Leak** | 10. **Spain P&R Hammer** | 11. **Zoom Double Action** | 12. **Zoom Pitch Action**

### 🎯 Classic & Tactical Series
13. **Horns Flare Set** | 14. **Horns Flex Action** | 15. **Horns Rub Handoff** | 16. **Princeton Chin**
17. **Princeton Point** | 18. **Triangle Post Entry** | 19. **Triangle Pinch Post** | 20. **Triangle Blind Pig**

### 📥 Special Inbound Sets (BLOB & SLOB)
21. **BLOB Stack Inbound** | 22. **BLOB Box Screen** | 23. **BLOB Line Inbound**
24. **SLOB Diamond Action** | 25. **SLOB Elevator Play**

### 🛡️ Defensive Systems
26. **Pack-Line Defense** | 27. **1-3-1 Press Trap** | 28. **2-3 Zone Motion** | 29. **3-2 Zone Defense**
30. **Box-and-One** | 31. **Triangle-and-Two** | 32. **2-2-1 Press Trap** | 33. **Run-and-Double**

---

## ⌨️ Tactical Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `[V]` | Move & Select |
| `[A]` | Straight Pass / Run Arrow |
| `[D]` | Dashed Cut Arrow |
| `[C]` | Curved Run Arrow |
| `[S]` | Screen Pick Block |
| `[Z]` | Defensive Zone Box |
| `[T]` | Text Label Modal |
| `[E]` | Sponge Eraser Tool |
| `[W]` | Blow Coach Whistle |

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
* **`index.html`** — Self-contained single-page application containing HTML, CSS tokens, and JavaScript physics engine.
* **`sw.js`** — Service Worker enabling true offline capability and asset caching.
* **`manifest.json`** — PWA manifest enabling tablet/mobile installation.
* **`icons/app-icon.png`** — Premium glassmorphic app icon for home screen installs.
* **`package.json`** — Project metadata and scripts.
* **`render.yaml`** — Render PaaS automatic host setup.

---

## 📝 Release Notes

### v2026.4 *(Current)*
* **True Offline PWA Support**: Full offline capability via a Service Worker (`sw.js`), allowing the app to launch and run seamlessly without an internet connection.
* **Game Time Mode**: Full-board distraction-free view with auto-hiding panels, roster, playbook, and a 📋 Show Panel toggle for on-demand access.
* **One-Click Roster Deploy**: Drop all 10 players (5 offense + 5 defense) onto the court instantly with a single button.
* **PWA Install Support**: Tablet and mobile installation via `📱 Install App` button with a premium app icon.
* **Fullscreen Mode**: Native browser fullscreen toggle for maximum court visibility.
* **NCAA Default Theme**: App now opens on the NCAA Final Four Blue/Gold court by default.
* **Branding Consistency**: Top-left header logo updated to match the premium PWA app icon.
* **Full/Half Court in Game Time**: Court mode toggle remains accessible during Game Time.
* **Sequence Frames Auto-Hide**: Timeline frames hide in Game Time and restore with Show Panel.

### v2026.3
* **FastBuild Engine**: Teleport players to the end of action lines instantly when building playbook frames.
* **Premium Legibility**: Upgraded court annotations and text labels to stark white text over a dark translucent slate pill.
* **In-App Quick Guide**: Embedded a comprehensive onboarding User Guide directly into the board.
* **Playbook Scalability**: Expanded playbook sets with deeper 'What-If' scenarios and fixed off-court bounds logic for SLOB/BLOB inbounds and Full-Court press alignments.

---

Built with ❤️ for the Hoop Culture Network · Modern basketball playmaking.
