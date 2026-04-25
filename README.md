# 🏀 Hoop Culture Tactical Board

A full-featured basketball coaching board built for the **Hoop Culture Network** — GTA open men's leagues. Draw plays, animate movement, save formations, and export diagrams as PNG.

---

## Features

- **Full & Half Court** — toggle between views with NBA regulation dimensions
- **Drawing Tools** — straight arrows, dashed cuts, curved paths, screens/picks, zone areas, plain lines, text labels
- **Player Chips** — place and drag 5 offense + 5 defense players; right-click to remove
- **Formations** — one-click setups: 5-Out, Motion, 2-3 Zone, 1-3 Zone, 1-4 High, Full Press
- **Animation Mode** — record player movement as you drag, then play it back in a loop
- **Save / Load Plays** — up to 30 plays stored in browser localStorage, loaded by name
- **Export PNG** — download the current board state as an image
- **Undo / Redo** — full 60-step history
- **Keyboard Shortcuts** — `V` select, `A` arrow, `D` dashed, `C` curve, `L` line, `S` screen, `Z` zone, `T` text, `E` eraser, `Ctrl+Z` undo, `Ctrl+Y` redo, `Ctrl+S` export

---

## Deploy to GitHub + Render

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit — Hoop Culture Board"
git remote add origin https://github.com/YOUR_USERNAME/hoop-culture-board.git
git push -u origin main
```

### 2. Deploy on Render (Free)

1. Go to [render.com](https://render.com) and sign in with GitHub
2. Click **New → Web Service**
3. Connect your `hoop-culture-board` repository
4. Render will auto-detect the `render.yaml` config
5. Click **Deploy** — your board will be live in ~2 minutes

Your URL will be:
```
https://hoop-culture-board.onrender.com
```

### Local Development

```bash
npm install
npm start
# Open http://localhost:3000
```

---

## File Structure

```
hoop-culture-board/
├── server.js          # Express server (serves public/)
├── package.json
├── render.yaml        # Render deployment config
├── .gitignore
└── public/
    └── index.html     # Entire app — single file, no build step
```

---

## Customization

- **Team colors** — edit `COLORS` array in `index.html`
- **Formations** — add entries to the `FORMATIONS` object (x/y in court feet)
- **Court dimensions** — edit the `NBA` constants at the top of the script

---

Built for the Hoop Culture Network · Greater Toronto Area
