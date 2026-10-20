"""Builds projects.json and the project table in the root README from the day folders.

Usage (from the repo root or this folder):  python 100-Challenge-Showcase/generate.py
Python 3.9+, standard library only.
"""
import json
import re
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
HERE = Path(__file__).resolve().parent
REPO = "https://github.com/gorkemsandikci/100days100projects"
PAGES = "https://gorkemsandikci.github.io/100days100projects"
README_START = "<!-- projects:start -->"
README_END = "<!-- projects:end -->"
IMAGE_EXT = (".png", ".jpg", ".jpeg", ".gif", ".webp")
# Days whose README does not describe the project (e.g. an untouched framework template)
OVERRIDES = {
    1: {"title": "Project Page", "description": "First page of the challenge, a Vue 3 + TypeScript app set up with Vite."},
    100: {"description": "This page: every project of the challenge with live demos, filters and search."},
}


def tracked_files(folder: str) -> list:
    out = subprocess.run(["git", "ls-files", folder], cwd=ROOT, capture_output=True, text=True, check=True).stdout
    return [line for line in out.splitlines() if "node_modules/" not in line]


def read(path: Path) -> str:
    try:
        return path.read_text(encoding="utf-8", errors="replace")
    except OSError:
        return ""


def detect_tech(folder: str, files: list) -> list:
    names = [f.lower() for f in files]
    texts = "\n".join(read(ROOT / f) for f in files if f.lower().endswith((".html", ".js", ".json", ".cjs")))
    tech = []
    if any(n.endswith(".vue") for n in names) or re.search(r"vue(@\d|\.global|\.min\.js|\.js\b)|unpkg\.com/vue", texts, re.I):
        tech.append("Vue")
    if any(n.endswith((".jsx", ".tsx")) for n in names):
        tech.append("React")
    if any(n.endswith((".ts", ".tsx")) and not n.endswith(".d.ts") for n in names):
        tech.append("TypeScript")
    if re.search(r"three(\.module)?(\.min)?\.js|from ['\"]three['\"]", texts, re.I):
        tech.append("Three.js")
    if re.search(r"tailwind", texts, re.I):
        tech.append("Tailwind")
    if any(n == f"{folder.lower()}/package.json" for n in names) and "socket.io" in texts:
        tech.append("Node.js")
    if any(n == f"{folder.lower()}/package.json" for n in names) and re.search(r'"vite"', texts):
        tech.append("Vite")
    return tech or ["JavaScript"]


def has_static_demo(folder: str, files: list) -> bool:
    index = f"{folder}/index.html"
    if index not in files:
        return False
    # Vite projects load /src/main.* as a module and need a build step first
    return not re.search(r'<script[^>]+type="module"[^>]+src="/src/', read(ROOT / index))


def description(text: str) -> str:
    """First plain sentence of the README (skips headings, lists, images and link-only lines)."""
    for line in text.splitlines():
        s = line.strip()
        if not s or s.startswith(("#", "*", "-", "!", "|", ">", "<", "```")) or re.match(r"^\[.*\]\(.*\)$", s):
            continue
        if s.lower().rstrip(":").startswith(("here we have", "screenshot")):
            continue
        s = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", s)
        s = re.sub(r"[*_`]", "", s)
        s = re.sub(r"^In this project,? (we )?developed\s+", "", s, flags=re.I)
        s = s[:1].upper() + s[1:]
        return s if len(s) <= 180 else s[:177].rsplit(" ", 1)[0] + "…"
    return ""


def title(folder: str, readme: str) -> str:
    for line in readme.splitlines():
        m = re.match(r"^#{2,3}\s+(.+)", line.strip())
        if m:
            return m.group(1).strip()
        m = re.match(r"^#\s+Day\s*#?\d+\s*[-–:]\s*(.+)", line.strip())
        if m:
            return m.group(1).strip()
    return folder.split("-", 1)[1].replace("-", " ")


def image(folder: str, files: list) -> str:
    images = sorted(f for f in files if f.lower().endswith(IMAGE_EXT) and "screenshot" in f.lower())
    if not images:
        images = sorted(f for f in files if f.lower().endswith(IMAGE_EXT) and "/public/" not in f
                        and "/assets/" not in f.lower() and "/src/" not in f)
    return f"{PAGES}/{images[0]}" if images else ""


def project(folder: str) -> dict:
    files = tracked_files(folder)
    readme = read(ROOT / folder / "README.md")
    item = {
        "day": int(folder[:3]),
        "folder": folder,
        "title": title(folder, readme),
        "description": description(readme),
        "tech": detect_tech(folder, files),
        "demo": f"{PAGES}/{folder}/" if has_static_demo(folder, files) else "",
        "code": f"{REPO}/tree/main/{folder}",
        "image": image(folder, files),
    }
    item.update(OVERRIDES.get(item["day"], {}))
    if folder == HERE.name:
        item["demo"] = f"{PAGES}/{folder}/"
    return item


def readme_table(projects: list) -> str:
    rows = ["| Day | Project | Tech | Demo |", "|---:|---|---|---|"]
    for p in projects:
        demo = f"[Live]({p['demo']})" if p["demo"] else "—"
        rows.append(f"| {p['day']} | [{p['title']}]({p['folder']}) | {', '.join(p['tech'])} | {demo} |")
    return "\n".join(rows)


def main() -> None:
    folders = sorted(p.name for p in ROOT.iterdir() if p.is_dir() and re.match(r"^\d{3}-", p.name))
    projects = [project(f) for f in folders]
    data = {
        "id": "js",
        "title": "100 Days of JavaScript",
        "subtitle": "One project a day, from 26 July 2023: vanilla JS, Vue, React, TypeScript, Three.js and Node.js.",
        "repo": REPO,
        "projects": projects,
    }
    (HERE / "projects.json").write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    readme_path = ROOT / "README.md"
    readme = read(readme_path)
    block = f"{README_START}\n{readme_table(projects)}\n{README_END}"
    if README_START in readme:
        readme = re.sub(re.escape(README_START) + r".*?" + re.escape(README_END), lambda _: block, readme, flags=re.S)
    else:
        readme = readme.rstrip() + "\n\n# Projects\n\n" + block + "\n"
    readme_path.write_text(readme, encoding="utf-8")
    print(f"{len(projects)} projects, {sum(1 for p in projects if p['demo'])} with a live demo")


if __name__ == "__main__":
    main()
