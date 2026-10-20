// Renders a challenge (projects.json) as a filterable card grid. No dependencies.
(function () {
  "use strict";

  var SOURCE = "projects.json";
  var state = { data: null, tech: "All", query: "", demoOnly: false };
  var $ = function (id) { return document.getElementById(id); };

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function techCounts(projects) {
    var counts = {};
    projects.forEach(function (p) {
      p.tech.forEach(function (t) { counts[t] = (counts[t] || 0) + 1; });
    });
    return Object.keys(counts).sort(function (a, b) { return counts[b] - counts[a] || a.localeCompare(b); })
      .map(function (t) { return { name: t, count: counts[t] }; });
  }

  function renderHeader(data) {
    document.title = data.title + " — Gorkem Sandikci";
    $("title").textContent = data.title;
    $("subtitle").textContent = data.subtitle || "";
    if (data.repo) $("repo-link").href = data.repo;

    var projects = data.projects;
    var stats = [
      [projects.length, "projects"],
      [projects.filter(function (p) { return p.demo; }).length, "live demos"],
      [techCounts(projects).length, "technologies"]
    ];
    var dl = $("stats");
    stats.forEach(function (s) {
      var box = el("div", "stat");
      box.appendChild(el("dt", null, s[1]));
      box.appendChild(el("dd", null, String(s[0])));
      dl.appendChild(box);
    });

    var chips = $("chips");
    [{ name: "All", count: projects.length }].concat(techCounts(projects)).forEach(function (t) {
      var b = el("button", "chip", t.name + " ");
      b.type = "button";
      b.dataset.tech = t.name;
      b.setAttribute("aria-pressed", String(t.name === state.tech));
      b.appendChild(el("span", "chip-n", String(t.count)));
      b.addEventListener("click", function () {
        state.tech = t.name;
        chips.querySelectorAll(".chip").forEach(function (c) {
          c.setAttribute("aria-pressed", String(c.dataset.tech === state.tech));
        });
        renderGrid();
      });
      chips.appendChild(b);
    });
  }

  function card(p) {
    var li = el("li", "card");
    var shot = el("div", "shot");
    if (p.image) {
      var img = el("img");
      img.src = p.image;
      img.alt = "";
      img.loading = "lazy";
      img.decoding = "async";
      img.addEventListener("error", function () { shot.classList.add("no-img"); img.remove(); });
      shot.appendChild(img);
    } else {
      shot.classList.add("no-img");
    }
    shot.appendChild(el("span", "day", "Day " + p.day));
    li.appendChild(shot);

    var body = el("div", "body");
    body.appendChild(el("h2", null, p.title));
    if (p.description) body.appendChild(el("p", "desc", p.description));
    var tags = el("ul", "tags");
    p.tech.forEach(function (t) { tags.appendChild(el("li", null, t)); });
    body.appendChild(tags);

    var actions = el("div", "actions");
    if (p.demo) {
      var demo = el("a", "btn btn-main", "Live demo");
      demo.href = p.demo;
      demo.target = "_blank";
      demo.rel = "noopener";
      actions.appendChild(demo);
    } else {
      actions.appendChild(el("span", "btn btn-off", "Needs a build"));
    }
    var code = el("a", "btn", "Code");
    code.href = p.code;
    code.target = "_blank";
    code.rel = "noopener";
    actions.appendChild(code);
    body.appendChild(actions);
    li.appendChild(body);
    return li;
  }

  function matches(p) {
    if (state.demoOnly && !p.demo) return false;
    if (state.tech !== "All" && p.tech.indexOf(state.tech) === -1) return false;
    if (!state.query) return true;
    var hay = (p.title + " " + p.description + " " + p.tech.join(" ") + " day " + p.day).toLowerCase();
    return state.query.split(/\s+/).every(function (w) { return hay.indexOf(w) !== -1; });
  }

  function renderGrid() {
    var list = state.data.projects.filter(matches);
    var grid = $("grid");
    grid.replaceChildren.apply(grid, list.map(card));
    $("count").textContent = list.length === state.data.projects.length
      ? list.length + " projects" : list.length + " of " + state.data.projects.length + " projects";
    $("empty").hidden = list.length > 0;
  }

  function setupTheme() {
    var root = document.documentElement;
    $("theme").addEventListener("click", function () {
      var next = root.dataset.theme === "light" ? "dark" : "light";
      root.dataset.theme = next;
      try { localStorage.setItem("gs.theme", next); } catch (_) {}
    });
  }

  function setupControls() {
    var timer;
    $("search").addEventListener("input", function (e) {
      clearTimeout(timer);
      timer = setTimeout(function () { state.query = e.target.value.trim().toLowerCase(); renderGrid(); }, 120);
    });
    $("demo-only").addEventListener("change", function (e) { state.demoOnly = e.target.checked; renderGrid(); });
  }

  setupTheme();
  fetch(SOURCE)
    .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(function (data) {
      state.data = data;
      renderHeader(data);
      setupControls();
      renderGrid();
    })
    .catch(function () {
      $("count").textContent = "Could not load the project list.";
    });
})();
