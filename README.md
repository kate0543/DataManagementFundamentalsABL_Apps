# Data Management Fundamentals: Gamification Hub
Eight small, browser-only workshop games for Level 4 Data Management Fundamentals.

## Run locally

Open `index.html` directly, or serve the repository with any static web server:

```text
python -m http.server 8000
```

Then visit `http://localhost:8000/`. Every weekly activity is available at its
own route (`week1-persona/` through `week8-pitch/`) and can be embedded in a
VLE with an iframe. The apps use Tailwind's CDN build and Chart.js from a CDN;
no build step or backend is required.

Week 1 persona reveals use friendly emoji avatars, so the static app has no
character model or avatar image dependency.