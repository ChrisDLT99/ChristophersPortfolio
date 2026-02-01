
/* Portfolio data + renderer (no frameworks) */
const projects = [
  {
    slug: "Custom Connector",
    title: "Custom Connector",
    role: "Product Design / Mechanical",
    year: "2025",
    tags: ["Connectors","Mechanical"],
    summary: "Designed side-spring contacts targeting 1.5–2.0 N force, achieving 50 N retention with ~8 N insertion through geometry optimization.",
    thumb: "assets/images/Connector1.png",
    url: "projects/custom-connector.html"
  },
  {
    slug: "Instron Tools",
    title: "Instron Tooling ",
    role: "Reliability Engineering",
    year: "2025",
    tags: ["Packaging","Simulation","Testing"],
    summary: "Created Instron Tools/Bits to allow for accurate testing on unique dimensions.",
    thumb: "assets/images/Instron4.png",
    url: "projects/instron-tooling.html"
  },
  {
    slug: "Senior Project",
    title: "Senior Project - Push'N Cushion",
    role: "Project Management",
    year: "2022",
    tags: ["Automation","Fixtures","Project Mangement"],
    summary: " Managed and Engineered a specialized seat fixture for elderly individuals and those with mobility challenges, featuring a mechanical seat lift.",
    thumb: "assets/images/PushNCushion3.png",thumbClass: "contain-thumb" ,
    url: "projects/pushn-cushion.html" 
  }
];

const state = {
  search: "",
  tag: "All"

  
};

function uniqueTags(){
  const t = new Set();
  projects.forEach(p => p.tags.forEach(x => t.add(x)));
  return ["All", ...Array.from(t).sort()];
}

function renderTags(){
  const bar = document.getElementById("tagbar");
  bar.innerHTML = "";
  uniqueTags().forEach(t => {
    const btn = document.createElement("button");
    btn.className = "chip";
    btn.setAttribute("aria-pressed", state.tag === t ? "true" : "false");
    btn.textContent = t;
    btn.addEventListener("click", () => { state.tag = t; render(); });
    bar.appendChild(btn);
  });
}

function renderCards(){
  const grid = document.getElementById("grid");
  grid.innerHTML = "";
  const q = state.search.trim().toLowerCase();
  const filtered = projects.filter(p => {
    const tagOK = state.tag === "All" || p.tags.includes(state.tag);
    const text = (p.title + " " + p.role + " " + p.summary + " " + p.tags.join(" ")).toLowerCase();
    const qOK = !q || text.includes(q);
    return tagOK && qOK;
  });
  if (!filtered.length){
    const div = document.createElement("div");
    div.style.gridColumn = "span 12";
    div.innerHTML = "<p class='summary'>No projects match your filters.</p>";
    grid.appendChild(div);
    return;
  }
  filtered.forEach(p => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <a href="${p.url}" aria-label="${p.title}">
        <img class="thumb" src="${p.thumb}" alt="">

        <div class="meta">
          <div class="title">${p.title}</div>
          <div class="badges">
            <span class="badge">${p.role}</span>
            <span class="badge">${p.year}</span>
            ${p.tags.map(t => `<span class="badge">${t}</span>`).join("")}
          </div>
          <p class="summary">${p.summary}</p>
        </div>
      </a>
    `;
    grid.appendChild(card);
  });
}

function attachSearch(){
  const input = document.getElementById("search");
  input.addEventListener("input", (e) => { state.search = e.target.value; renderCards(); });
  const form = document.getElementById("search-form");
  form.addEventListener("submit", (e) => e.preventDefault());
}

function render(){ renderTags(); renderCards(); }

document.addEventListener("DOMContentLoaded", () => {
  attachSearch();
  render();
});
// ===== Avatar lightbox =====
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("avatarBtn");
  const box = document.getElementById("avatarLightbox");
  const close = document.getElementById("avatarClose");

  if (!btn || !box || !close) return;

  const open = () => {
    box.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  };

  const shut = () => {
    box.classList.add("hidden");
    document.body.style.overflow = "";
  };

  btn.addEventListener("click", open);
  close.addEventListener("click", shut);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") shut();
  });
});

