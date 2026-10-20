# Day #100 - Challenge Showcase

## Project Overview
The last day of the challenge: one page that lists all 100 projects with a screenshot, the technologies used,
a live demo link (GitHub Pages) and the source code. Projects can be filtered by technology, searched, and narrowed
to the ones with a live demo. Light and dark themes.

The page is plain HTML, CSS and JavaScript with no dependencies. It renders `projects.json`, so the same page can show
other challenges by swapping the data file.

## Files
- `index.html`, `style.css`, `app.js`: the page
- `projects.json`: generated project list
- `generate.py`: builds `projects.json` and the project table in the root README from the day folders
  (title from each README, technologies from the source files, demo link when the folder runs without a build step)

## Update the list
```bash
python 100-Challenge-Showcase/generate.py
```

## Run locally
```bash
python -m http.server 8000
# open http://localhost:8000/100-Challenge-Showcase/
```
