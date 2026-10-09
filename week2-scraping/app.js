let mode = "human";
let score = 0;
let captchaRound = 0;
let journeyRound = 0;
const journeySelected = new Set();
let mistakes = 0;
let simulatedRequests = 0;
let botTimer;
let holdTimer;
let botPattern = "";

const journeyRounds = [
  { title: "Online shopping", prompt: "What is the correct data journey when buying a product online?", options: ["Browse product → add to basket → pay → order confirmation", "Order confirmation → browse product → pay → add to basket", "Pay → delete the basket → browse product → confirmation"], answer: 0, explanation: "A shopping journey captures browsing and basket data, processes payment, then records and confirms the order." },
  { title: "Cinema visit", prompt: "What is the correct data journey when booking a cinema ticket?", options: ["Choose film and seats → enter details → pay → receive ticket", "Receive ticket → choose seats → pay → search for a film", "Pay twice → choose seats → delete booking → enter details"], answer: 0, explanation: "The booking system captures choices, validates customer and payment data, then issues a ticket." },
  { title: "Bus journey", prompt: "What is the correct data journey when tapping onto a bus?", options: ["Tap travel card → validate journey → record trip → update balance", "Update balance → lose the card → validate journey → tap on", "Record trip → tap off first → issue a cinema ticket → validate"], answer: 0, explanation: "The reader captures the tap, the system validates it, records the trip and updates travel data." },
  { title: "Food delivery", prompt: "What is the correct data journey when ordering food?", options: ["Choose food → place order → payment check → restaurant and rider updates", "Rider update → choose food → cancel payment → place order", "Payment check → invent an address → choose food → delete order"], answer: 0, explanation: "The service connects customer choices, payment, address and live delivery updates." },
  { title: "Data lifecycle", prompt: "Which sequence best describes a general data journey?", options: ["Capture → store → use or analyse → share an outcome", "Share publicly → capture later → guess the source → store", "Delete everything → analyse → capture → ask for permission"], answer: 0, explanation: "A responsible data journey starts with purposeful capture and includes secure storage, useful analysis and appropriate sharing." },
];
const rounds = [
  {
    title: "Wave 1 · Vehicle check",
    prompt: "Select all vehicles.",
    tiles: ["🍕", "🚗", "🐶", "7️⃣", "🚲", "📦", "✈️", "🍎", "🐙", "3️⃣", "🎸", "🌳"],
    targets: ["🚗", "🚲", "✈️"],
    explanation: "CAPTCHA-style classification tests whether a user can identify a category rather than blindly clicking.",
  },
  {
    title: "Wave 2 · Food check",
    prompt: "Select all food.",
    tiles: ["🐱", "🍕", "🚲", "🍎", "8️⃣", "🎧", "🍔", "✈️", "🐢", "📚", "2️⃣", "🌈"],
    targets: ["🍕", "🍎", "🍔"],
    explanation: "A useful data category helps a scraper filter relevant records from irrelevant noise.",
  },
  {
    title: "Wave 3 · Animal check",
    prompt: "Select all animals.",
    tiles: ["📱", "🐶", "4️⃣", "🍩", "🐙", "🚕", "🎁", "🐢", "🍓", "9️⃣", "🎨", "☁️"],
    targets: ["🐶", "🐙", "🐢"],
    explanation: "Consistent labels reduce errors when data moves through a pipeline.",
  },
  {
    title: "Wave 4 · Number check",
    prompt: "Select all numbers.",
    tiles: ["🎲", "7️⃣", "🌟", "🍪", "3️⃣", "🐰", "📊", "2️⃣", "🚀", "🍋", "🎒", "🧩"],
    targets: ["7️⃣", "3️⃣", "2️⃣"],
    explanation: "Structured values can move into fields, tables and dashboards reliably.",
  },
  {
    title: "Wave 5 · Data object check",
    prompt: "Select all objects that could carry or present data.",
    tiles: ["🌈", "📱", "🐼", "🍉", "💻", "🚲", "📊", "5️⃣", "🦄", "🍿", "⚽", "🌙"],
    targets: ["📱", "💻", "📊"],
    explanation: "Devices and dashboards are part of a responsible data journey; collection still needs consent and a lawful purpose.",
  },
];

const app = document.querySelector("#app");

function render() {
  app.innerHTML = `
    <section class="card glass p-7">
      <p class="font-bold uppercase tracking-widest text-sky-600">Mission 02 · Responsible journeys</p>
      <h1 class="mt-2 text-4xl font-black">Bot vs CAPTCHA simulator</h1>
      <p class="mt-3 max-w-3xl">Unlock the classroom evidence locker through five escalating CAPTCHA waves. Select every matching emoji, avoid the decoys and learn how automated systems classify data.</p>
      <div class="mt-6 grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
        <div class="rounded-2xl border-2 border-sky-200 bg-white/70 p-5 dark:border-sky-900 dark:bg-slate-900/60">
          <div class="flex items-center justify-between gap-3">
            <h2 class="text-2xl font-black">Human or bot?</h2>
            <span class="rounded-full bg-slate-900 px-3 py-1 text-sm font-bold text-white">Score ${score} · Mistakes ${mistakes}</span>
          </div>
          <p class="mt-2 text-sm">Choose a mode, then try the challenge. The bot mode demonstrates why rate limits and CAPTCHA gates appear.</p>
          <div class="mt-4 flex flex-wrap gap-3">
            <button id="human" class="rounded-xl px-4 py-3 font-bold ${mode === "human" ? "bg-sky-600 text-white" : "border border-slate-300"}">👤 Human tap</button>
            <button id="bot" class="rounded-xl px-4 py-3 font-bold ${mode === "bot" ? "bg-rose-600 text-white" : "border border-slate-300"}">🤖 Bot script</button>
          </div>
          <div class="mt-5 rounded-xl bg-sky-50 p-4 dark:bg-slate-800">
            <p class="font-bold">${mode === "human" ? "Human pace detected" : "Bot pattern detected · simulated rate limit triggered"}</p>
            <p class="mt-1 text-sm">${mode === "human" ? "Take your time. Consent, purpose and reasonable pacing matter." : `${simulatedRequests} rapid requests simulated · ${botPattern}. No external requests are sent by this game.`}</p>
          </div>
          <div id="captcha" class="mt-5 rounded-2xl border border-dashed border-sky-300 p-4"></div>
          <p id="captcha-feedback" class="mt-3 min-h-6 font-bold"></p>
        </div>
        <aside class="rounded-2xl bg-slate-900 p-5 text-white">
          <p class="text-sm font-bold uppercase tracking-widest text-sky-300">What the gate teaches</p>
          <ul class="mt-4 space-y-3 text-sm text-slate-200">
            <li>🔍 Behaviour signals can identify automation.</li>
            <li>⏱️ Rate limits protect services from overload.</li>
            <li>📜 Ethical scraping needs a lawful, respectful purpose.</li>
            <li>🛡️ CAPTCHA is a control, not permission to ignore privacy.</li>
            <li>🔓 Five waves unlock the evidence locker.</li>
          </ul>
        </aside>
      </div>
      <hr class="my-8 border-slate-200 dark:border-slate-700">
      <h2 class="text-2xl font-black">Data Journey Quiz CAPTCHA</h2>
      <p class="mt-2">Pass five everyday data journey questions. Choose the correct sequence before the next gate unlocks.</p>
      <div class="mt-4 rounded-2xl border-2 border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/20">${renderJourney()}</div>
      <p id="feedback" class="mt-4 min-h-6 font-bold"></p>
    </section>`;

  document.querySelector("#human").onclick = () => { mode = "human"; render(); };
  document.querySelector("#bot").onclick = () => startBotPattern();
  renderCaptcha();
  document.querySelectorAll("[data-journey-option]").forEach((button) => {
    button.onclick = () => selectJourneyOption(+button.dataset.journeyOption);
  });
}

function startBotPattern() {
  window.clearInterval(botTimer);
  mode = "bot";
  simulatedRequests = 0;
  botPattern = ["repeat one tile", "sweep across every button", "move in a circle", "bulk-select the matching answers"][Math.floor(Math.random() * 4)];
  gameAudio.wrong();
  render();
  const tiles = [...document.querySelectorAll("#captcha .captcha-tile")];
  if (!tiles.length) return;
  let position = 0;
  const circlePath = [0, 1, 2, 3, 7, 11, 10, 9, 8, 4, 0, 1];
  botTimer = window.setInterval(() => {
    simulatedRequests += 1;
    const currentTiles = [...document.querySelectorAll("#captcha .captcha-tile")];
    if (!currentTiles.length) return;
    let targets = [];
    if (botPattern === "repeat one tile") targets = [currentTiles[0]];
    if (botPattern === "sweep across every button") targets = [currentTiles[position % currentTiles.length]];
    if (botPattern === "move in a circle") targets = [currentTiles[circlePath[position % circlePath.length] % currentTiles.length]];
    if (botPattern === "bulk-select the matching answers") {
      const round = rounds[captchaRound];
      targets = currentTiles.filter((tile) => round.targets.includes(round.tiles[+tile.dataset.tile]));
    }
    targets.forEach((tile) => {
      tile.classList.remove("bot-click");
      void tile.offsetWidth;
      tile.classList.add("bot-click");
      tile.textContent = "🤖";
    });
    position += 1;
    if (simulatedRequests >= 12) {
      window.clearInterval(botTimer);
      render();
      document.querySelector("#captcha-feedback").textContent = `Bot pattern stopped: it tried to ${botPattern}, without understanding the CAPTCHA task.`;
    }
  }, botPattern === "sweep across every button" ? 110 : 240);
}

function renderJourney() {
  if (journeyRound >= journeyRounds.length) {
    return `<div class="text-center"><div class="text-5xl">🗺️</div><h3 class="mt-2 text-xl font-black">Journey mapped!</h3><p class="mt-1 text-sm">You connected shopping, cinema, bus, delivery and lifecycle data. Ethical scraping also needs consent, limited rate and a lawful purpose.</p></div>`;
  }
  const round = journeyRounds[journeyRound];
  return `<div class="flex flex-wrap items-center justify-between gap-2"><p class="text-sm font-bold uppercase tracking-widest text-amber-700">Gate ${journeyRound + 1}/${journeyRounds.length} · ${round.title}</p><span class="rounded-full bg-amber-200 px-3 py-1 text-xs font-bold text-amber-900">Sequence check</span></div><h3 class="mt-2 text-xl font-black">${round.prompt}</h3><div class="mt-4 grid gap-3">${round.options.map((option, index) => `<button class="rounded-xl border-2 border-slate-200 bg-white p-4 text-left transition hover:-translate-y-1 hover:border-amber-500 dark:border-slate-700 dark:bg-slate-800" data-journey-option="${index}"><span class="mr-2 font-black text-amber-600">${String.fromCharCode(65 + index)}.</span>${option}</button>`).join("")}</div><p class="mt-3 text-xs text-slate-600 dark:text-slate-300">Choose one sequence. A wrong answer sends this gate back for another attempt.</p>`;
}

function selectJourneyOption(index) {
  const round = journeyRounds[journeyRound];
  if (index !== round.answer) {
    mistakes += 1;
    gameAudio.wrong();
    render();
    document.querySelector("#feedback").textContent = `CAPTCHA miss. ${round.explanation}`;
    return;
  }
  score += 1;
  journeyRound += 1;
  gameAudio.correct();
  render();
  document.querySelector("#feedback").textContent = `Gate cleared! ${round.explanation}`;
  render();
}

function renderCaptcha() {
  const panel = document.querySelector("#captcha");
  if (captchaRound >= rounds.length) {
    panel.innerHTML = `<div class="text-center"><div class="text-5xl">✅</div><h3 class="mt-2 text-xl font-black">Human check complete</h3><p class="mt-1 text-sm">You spotted the difference between a thoughtful interaction and a repeated script.</p></div>`;
    return;
  }
  const round = rounds[captchaRound];
  panel.innerHTML = `<p class="text-sm font-bold uppercase tracking-widest text-sky-600">${round.title} · ${captchaRound + 1}/${rounds.length}</p><h3 class="mt-2 text-xl font-black">${round.prompt}</h3><div class="captcha-grid mt-4">${round.tiles.map((tile, index) => `<button class="captcha-tile rounded-xl border-2 border-slate-200 bg-white p-4 text-center text-2xl transition hover:-translate-y-1 hover:border-sky-500 dark:border-slate-700 dark:bg-slate-800" data-tile="${index}" aria-label="CAPTCHA tile ${index + 1}">${tile}</button>`).join("")}</div><p class="mt-3 text-xs text-slate-500">Accuracy matters more than speed. This is a learning simulation, not a real security barrier.</p>`;
  document.querySelectorAll(".captcha-tile").forEach((button) => {
    button.onclick = () => {
      const tile = round.tiles[+button.dataset.tile];
      if (round.targets.includes(tile) && mode !== "bot") {
        button.classList.add("border-emerald-500", "bg-emerald-100");
        button.disabled = true;
        const selected = [...document.querySelectorAll(".captcha-tile.border-emerald-500")].map((item) => round.tiles[+item.dataset.tile]);
        if (round.targets.every((target) => selected.includes(target))) answerCaptcha();
      } else {
        answerCaptcha("wrong");
      }
    };
  });
}

function answerCaptcha(answer) {
  const feedback = document.querySelector("#captcha-feedback");
  const round = rounds[captchaRound];
  if (answer === "wrong" || mode === "bot") {
    gameAudio.wrong();
    mistakes += 1;
    feedback.textContent = mode === "bot" ? `Simulated rate limit: ${simulatedRequests} rapid requests would be slowed or challenged. Switch to Human tap and try again.` : `Try again. ${round.explanation}`;
    return;
  }
  score += 1;
  captchaRound += 1;
  gameAudio.correct();
  feedback.textContent = `Good choice! ${round.explanation}`;
  renderCaptcha();
}

render();
