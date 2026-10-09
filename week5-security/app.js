const businesses = [
  { id: "cafe", icon: "☕", name: "Pixel Bean Café", base: 18, needs: "orders, a menu and backup photos", hint: "small + local" },
  { id: "shop", icon: "🛍️", name: "Moonlight Fashion", base: 42, needs: "customer orders, images and worldwide pages", hint: "global + visual" },
  { id: "clinic", icon: "🩺", name: "Northstar Clinic", base: 65, needs: "private records, UK hosting and backups", hint: "sensitive + local" },
  { id: "studio", icon: "🎮", name: "Nebula Game Studio", base: 90, needs: "large files, global players and AI experiments", hint: "global + AI" },
];

const competitorProfiles = {
  cafe: {
    rival: "Bubble Burst Tea",
    title: "The bubble-tea rival",
    story: "You are investigating Bubble Burst Tea, a nearby drinks shop. Discover how they store orders, menus and customer photos before designing Pixel Bean Café.",
    clues: [["🧋", "Lots of custom drink orders"], ["📸", "A growing menu-photo library"], ["👥", "A small local team"]],
    answer: "starter",
    options: [
      ["starter", "🪣 Use object storage + a small managed database", "This balances menu photos with searchable drink orders without overbuilding."],
      ["ai", "🤖 Rent a GPU AI cluster", "The clues show drinks and photos, not a demanding AI workload."],
      ["edge", "📍 Put every order on edge devices", "Edge delivery helps global content, not the core order records here."],
    ],
    badge: "🧋 Rival Researcher",
    lesson: "Small businesses often combine object storage for images with a managed database for searchable orders.",
  },
  shop: {
    rival: "Thread & Thimble",
    title: "The handmade fashion rival",
    story: "You are investigating Thread & Thimble, an online handmade craft shop. Their clues reveal how they handle product images, worldwide shoppers and stock.",
    clues: [["🧵", "Thousands of product photos"], ["🌍", "Orders from several countries"], ["📦", "Stock and delivery records"]],
    answer: "global",
    options: [
      ["global", "📍 Use object storage + a database + CDN delivery", "This supports image-heavy products, searchable stock and faster global pages."],
      ["local", "🇬🇧 Keep everything on one UK server", "One location may make pages slower for distant shoppers."],
      ["ai", "🤖 Buy an AI service first", "AI might be useful later, but it does not solve the main evidence."],
    ],
    badge: "🧵 Craft Cloud Scout",
    lesson: "A global shop may need storage for media, a database for transactions and a CDN to bring pages closer to shoppers.",
  },
  clinic: {
    rival: "Zen Nest Wellbeing",
    title: "The Zen mental-wellness rival",
    story: "You are investigating Zen Nest Wellbeing, a mental-wellness practice. Their clues show why location and careful records matter.",
    clues: [["🩺", "Private appointment notes"], ["🇬🇧", "Clients and staff based in the UK"], ["🔐", "Strict access and backup checks"]],
    answer: "protected",
    options: [
      ["protected", "🇬🇧 Use a UK region + managed database + secure backups", "Sensitive records need controlled access, reliable recovery and a suitable location."],
      ["global", "🌍 Spread private notes across random regions", "Unplanned locations make governance and access harder."],
      ["storage", "🪣 Save everything in one shared photo bucket", "A shared bucket alone is not a safe records system."],
    ],
    badge: "🔐 Careful Cloud Guardian",
    lesson: "Sensitive records need more than storage: location, access controls, a managed database and reliable backups all matter.",
  },
  studio: {
    rival: "HoloForge XR",
    title: "The VR/XR studio rival",
    story: "You are investigating HoloForge XR, a virtual and extended-reality studio. Find out how they serve huge 3D files and players around the world.",
    clues: [["🥽", "Large 3D world files"], ["🌍", "Players in many countries"], ["🤖", "AI-generated character experiments"]],
    answer: "xr",
    options: [
      ["xr", "🤖 Use AI cloud compute + object storage + edge delivery", "This combination fits experiments, large assets and a global player base."],
      ["local", "🇬🇧 Use only one small UK server", "A single location is a poor fit for global players and heavy files."],
      ["database", "🗄️ Buy only a managed database", "A database alone cannot store and deliver all the 3D media workload."],
    ],
    badge: "🥽 XR Cloud Tracker",
    lesson: "A global XR studio may combine AI compute, object storage for large assets and edge delivery for players.",
  },
};

const services = [
  { id: "region", icon: "🇬🇧", name: "UK cloud region", cost: 24, text: "Nearby servers for UK customers", tags: ["local", "sensitive"] },
  { id: "storage", icon: "🪣", name: "Object storage", cost: 12, text: "Photos, documents and backups", tags: ["small", "global", "sensitive"] },
  { id: "database", icon: "🗄️", name: "Managed database", cost: 38, text: "Searchable orders and records", tags: ["orders", "sensitive", "global"] },
  { id: "microsoft", icon: "☁️", name: "Microsoft cloud tools", cost: 20, text: "Familiar files and collaboration", tags: ["small", "sensitive"] },
  { id: "ai", icon: "🤖", name: "AI cloud service", cost: 85, text: "Models or GPU capability", tags: ["AI"] },
  { id: "edge", icon: "📍", name: "Edge/CDN delivery", cost: 45, text: "Content closer to global users", tags: ["global"] },
];

let phase = "business";
let business = null;
let competitorIndex = 0;
let activeCompetitorCases = [];
let competitorAnswers = [];
let selectedServices = [];
let revealedClues = [];
let xp = 0;
let badges = [];
const app = document.querySelector("#app");

function render() {
  if (phase === "business") return renderBusiness();
  if (phase === "competitor") return renderCompetitor();
  if (phase === "design") return renderDesign();
  renderBudget();
}

function progress(current, label) {
  const steps = ["Choose a quest", "Track the clues", "Build your cloud", "Review your build"];
  const index = steps.indexOf(label);
  return `<div class="quest-top"><div><span class="quest-kicker">MISSION 05 · CLOUD ACADEMY</span><span class="xp-pill">⭐ ${xp} XP</span></div><div class="quest-track">${steps.map((step, i) => `<span class="${i <= index ? "active" : ""}">${i < index ? "✓" : i + 1} ${step}</span>`).join("")}</div></div>`;
}

function shell(content, label) {
  app.innerHTML = `<section class="cloud-quest card glass p-5 sm:p-8">${progress(phase, label)}<h1 class="quest-title">Cloud Academy <span>☁️</span></h1>${content}</section>`;
}

function renderBusiness() {
  shell(`<div class="quest-hero"><div class="quest-mascot">🕵️‍♀️</div><div><p class="quest-eyebrow">CHAPTER 1 · YOUR NEW ADVENTURE</p><h2>Welcome, cloud apprentice!</h2><p>Every great digital business needs a home for its data. Pick a business, investigate rival companies and build a cloud base that fits—not just the most expensive one.</p></div></div><div class="quest-callout">🎯 <b>Your mission:</b> earn badges by spotting clues, then spend your imaginary credits wisely.</div><h3 class="quest-section-title">Choose your starting world</h3><div class="business-grid">${businesses.map((item) => `<button class="business-choice" data-business="${item.id}"><span class="business-icon">${item.icon}</span><span><b>${item.name}</b><small>${item.needs}</small></span><em>${item.hint}</em></button>`).join("")}</div>`, "Choose a quest");
  document.querySelectorAll("[data-business]").forEach((button) => {
    button.onclick = () => {
      business = businesses.find((item) => item.id === button.dataset.business);
      activeCompetitorCases = [competitorProfiles[business.id]];
      phase = "competitor";
      xp += 10;
      render();
    };
  });
}

function renderCompetitor() {
  const current = activeCompetitorCases[competitorIndex];
  const cluesFound = revealedClues.length;
  shell(`<div class="chapter-heading"><div><p class="quest-eyebrow">CHAPTER 2 · INVESTIGATE YOUR RIVAL</p><h2>${current.title}</h2><p>${current.story}</p></div><div class="badge-counter">🏅 ${badges.length}</div></div><div class="rival-label">🕵️ CASE FILE: <b>${current.rival}</b></div><div class="clue-board"><p class="board-label">🔎 Search the rival’s digital office: reveal ${3 - cluesFound} more clue${3 - cluesFound === 1 ? "" : "s"} to unlock the deduction.</p><div class="clue-grid">${current.clues.map((clue, index) => `<button class="clue-card ${revealedClues.includes(index) ? "found" : ""}" data-clue="${index}"><span>${revealedClues.includes(index) ? clue[0] : "?"}</span><b>${revealedClues.includes(index) ? clue[1] : "Hidden clue"}</b>${revealedClues.includes(index) ? "<small>CLUE FOUND +10 XP</small>" : "<small>CLICK TO SEARCH</small>"}</button>`).join("")}</div></div>${cluesFound === 3 ? `<div class="deduction-panel"><p class="quest-eyebrow">EVIDENCE UNLOCKED</p><h3>What cloud setup is <b>${current.rival}</b> probably using?</h3><div class="option-grid">${current.options.map((option, index) => `<button class="cloud-option" data-choice="${index}">${option[1]}</button>`).join("")}</div><div id="feedback" class="feedback">🧠 Make your deduction from the evidence.</div></div>` : `<div class="locked-panel">🔒 <b>Deduction locked</b><span>Find every clue to open the answer choices.</span></div>`}`, "Track the clues");
  document.querySelectorAll("[data-clue]").forEach((button) => {
    button.onclick = () => {
      const index = Number(button.dataset.clue);
      if (!revealedClues.includes(index)) {
        revealedClues.push(index);
        xp += 10;
        gameAudio.correct();
        render();
      }
    };
  });
  document.querySelectorAll("[data-choice]").forEach((button) => {
    button.onclick = () => solveCompetitor(Number(button.dataset.choice), current);
  });
}

function solveCompetitor(choice, current) {
  const selected = current.options[choice];
  const feedback = document.querySelector("#feedback");
  if (selected[0] !== current.answer) {
    gameAudio.wrong();
    feedback.innerHTML = `<b>🧐 Not quite.</b><br><span>${selected[2]}</span>`;
    return;
  }
  competitorAnswers.push(selected[1]);
  badges.push(current.badge);
  xp += 35;
  gameAudio.correct();
  feedback.innerHTML = `<b>🔓 Case solved! +35 XP</b><br><span>${current.lesson}</span>`;
  document.querySelectorAll("[data-choice]").forEach((button) => { button.disabled = true; button.classList.add("answered"); });
  window.setTimeout(() => {
    competitorIndex += 1;
    revealedClues = [];
    if (competitorIndex === activeCompetitorCases.length) phase = "design";
    render();
  }, 900);
}

function renderDesign() {
  const chosen = new Set(selectedServices);
  const recommended = services.filter((service) => service.tags.includes(business.hint.split(" + ")[0]) || service.tags.includes(business.hint.split(" + ")[1]));
  shell(`<div class="chapter-heading"><div><p class="quest-eyebrow">CHAPTER 3 · BUILD YOUR BASE</p><h2>Design your cloud base</h2><p>You solved the rival case. Now make your own call for <b>${business.icon} ${business.name}</b>. A competitor’s choice is a clue, not a rule.</p></div><div class="badge-counter">⭐ ${xp} XP</div></div><div class="quest-callout">💡 <b>Architect’s hint:</b> ${business.name} is ${business.hint}. Look for services that match those needs.</div><div class="service-grid">${services.map((service) => `<button class="service-card ${chosen.has(service.id) ? "selected" : ""}" data-service="${service.id}"><span class="service-icon">${service.icon}</span><span><b>${service.name}</b><small>${service.text}</small></span><strong>${service.cost} <small>XP credits</small></strong>${chosen.has(service.id) ? "<i>✓ ADDED</i>" : recommended.includes(service) ? "<i class=\"suggested\">SUGGESTED</i>" : ""}</button>`).join("")}</div><div class="build-dock"><div><p>YOUR CLOUD LOADOUT</p><b>${selectedServices.length ? selectedServices.map((id) => services.find((service) => service.id === id).icon).join(" ") : "Empty launch pad"}</b></div><button id="budget" ${selectedServices.length ? "" : "disabled"}>Review my build →</button></div>`, "Build your cloud");
  document.querySelectorAll("[data-service]").forEach((button) => {
    button.onclick = () => {
      const id = button.dataset.service;
      selectedServices = selectedServices.includes(id) ? selectedServices.filter((item) => item !== id) : [...selectedServices, id];
      xp += 2;
      render();
    };
  });
  document.querySelector("#budget").onclick = () => { phase = "budget"; xp += 20; render(); };
}

function renderBudget() {
  const total = business.base + selectedServices.reduce((sum, id) => sum + services.find((service) => service.id === id).cost, 0);
  const rank = xp >= 220 ? "☁️ Cloud Architect" : xp >= 150 ? "🔍 Cloud Investigator" : "🌱 Cloud Apprentice";
  const competitorSummary = competitorAnswers.join(" · ");
  const evidence = `Data Quest Mission 05\nBusiness: ${business.name}\nCloud rank: ${rank}\nCompetitor conclusions: ${competitorSummary}\nChosen services: ${selectedServices.map((id) => services.find((service) => service.id === id).name).join(", ")}\nEstimated classroom budget: ${total} credits/month`;
  shell(`<div class="final-banner"><div class="quest-mascot">🏆</div><div><p class="quest-eyebrow">CHAPTER COMPLETE · BUILD REVIEW</p><h2>${rank}</h2><p>You turned evidence into an architecture for ${business.icon} ${business.name}.</p></div></div><div class="score-card"><span>FINAL XP</span><b>${xp}</b><small>${badges.length} badges collected</small></div><div class="badge-row">${badges.map((badge) => `<span>${badge}</span>`).join("")}</div><div class="budget-card"><p class="quest-eyebrow">MONTHLY CLASSROOM CREDITS</p><strong>${total}</strong><span>credits / month</span><hr><p>Business starter cost <b>${business.base}</b></p>${selectedServices.map((id) => { const service = services.find((item) => item.id === id); return `<p>${service.icon} ${service.name} <b>${service.cost}</b></p>`; }).join("")}<hr><p class="total-line">Estimated total <b>${total}</b></p></div><div class="quest-callout">🧭 <b>Your detective conclusion:</b> Competitor evidence helped you learn, but your own business needs decided the final plan. Prices here are fictional credits for comparison, not real provider quotes.</div><button id="copy" class="copy-button">📋 Copy investigation to OneNote</button><button id="restart" class="restart-button">↺ Start a new cloud quest</button>`, "Review your build");
  document.querySelector("#copy").onclick = async () => {
    const button = document.querySelector("#copy");
    try {
      await navigator.clipboard.writeText(evidence);
      button.textContent = "Investigation copied ✓";
    } catch (error) {
      button.textContent = "Copy unavailable — select the summary manually";
      console.error("Could not copy the investigation summary.", error);
    }
  };
  document.querySelector("#restart").onclick = () => {
    phase = "business"; business = null; competitorIndex = 0; activeCompetitorCases = []; competitorAnswers = []; selectedServices = []; revealedClues = []; xp = 0; badges = []; render();
  };
}

render();
