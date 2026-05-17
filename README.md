# 🏀 Hoop Tactical Pro (v2026.1)

An ultra-premium, glassmorphic basketball coaching playbook and tactical board built for modern **NBA & NCAA** coaching setups. Features real-time spacing heatmaps, synthesized coaching whistles, high-fidelity timeline keyframe animations, and professional court themes (including the NBA Cup Vegas theme!).

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

### 📊 Real-Time Spacing & Threat Analytics
* **Translucent Reach Bubbles**: Projects defensive threat zones (`radius * 3.5`) beneath defenders in real-time.
* **Neon Spacing Aura**: Offensive players glow **neon green** when wide-open, and contour in **neon red** when contested within a defender's reach bubble.
* **Floating Spacing HUD**: Monitors spacing distance offsets between active offensive players to output an instant **Spacing Score** (e.g. *Pristine*, *Decent*, or *Congested*).

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

## 🏀 Preloaded 2026 Playbook Animations

### 1. 1-3-1 Press Trap (Defensive Press)
* **Frame 1 (Setup)**: Deploys defenders in a 1-3-1 full-court trap zone. The app **automatically switches to Full Court mode** instantly. `D5` stands deep as safety near the opposite baseline, and `D3` stands in the middle of the court.
* **Frame 2 (Trap steering)**: The offense PG passes to the right sideline wing SF. Defender `D1` and `D4` sprint in tandem to box SF in a tight V-shaped trap, while `D3` rotates to deny the easy middle release. `D5` guards the long deep pass.
* **Frame 3 (Interception)**: SF tries to make a desperate cross-court pass back to PG, but middle safety `D3` leaps in front to intercept the pass and score!

### 2. 2-3 Zone Buster (Offense vs 2-3 Zone)
* **Frame 1 (Setup)**: Deploys defenders in a strict **2-3 Zone** (two guards high, three forwards low) inside half-court. Offense aligns in a zone-busting overload with Center `C` at the high post elbow.
* **Frame 2 (High Post Entry)**: `PG` enters the ball to `C` at the high post, causing all five zone defenders to collapse inward to protect the paint. Concurrently, `SF` cuts baseline towards the right corner.
* **Frame 3 (Corner Kickout)**: `C` quickly kicks a dashed pass to `SF` in the deep corner. Bottom-right defender `D5` attempts a desperate scramble close-out, but `SF` is wide-open for a clean corner 3!

### 3. Pass & Cut Motion (Simple Motion Play)
* **Frame 1 (Setup)**: Deploys in standard Delay 5-Out spacing at half-court.
* **Frame 2 (Pass & Cut)**: PG passes to SF on the wing, and immediately cuts hard down the center of the key.
* **Frame 3 (Layup finish)**: SF delivers a crisp bounce-pass to PG under the rim for an open layup.

### 4. BLOB Stack Inbound (Inbound Play)
* **Frame 1 (Setup)**: Deploys an out-of-bounds inbounder (PG) along the baseline with a tight vertical elbow stack.
* **Frame 2 (Break Stack)**: Wing shooters split wide to corners, while the PF screens down on the center's defender, freeing the C to curl along the baseline.
* **Frame 3 (Score)**: PG delivers a perfect inbound pass to C under the rim for an easy baseline layup.

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
   # Operates on http://localhost:4000 (Port 3000 alternate)
   ```

### Push to GitHub

```bash
# Add all modernized assets and logic
git add .
git commit -m "Upgrade to Hoop Tactical Pro v2026.1: Glassmorphism, synthesized whistle, keyframe timeline, and corrected 1-3-1 & 2-3 Zone plays"

# Push to your repository
git push origin main
```

### Deploy to Render

The workspace contains a `render.yaml` configuration out-of-the-box.
1. Connect your repository on [Render.com](https://render.com).
2. Create a new **Web Service**.
3. Deploy! Render will auto-detect the Express node server configuration.

---

## 📂 File Architecture

* **`server.js`** — Lightweight Express asset host.
* **`index.html`** — Self-contained single-page application containing the HTML structural grids, visual CSS tokens, and JavaScript gameplay physics engine.
* **`package.json`** — Project metadata and scripts.
* **`render.yaml`** — Render PaaS automatic host setup.

---

Built with ❤️ for the Hoop Culture Network · Modern basketball playmaking.
