const roles = [
  ["chair", "🧑‍⚖️ Chair", "Keeps the board fair, independent and focused on its duties."],
  ["ceo", "🤵 CEO", "Sets the direction and asks what decision the data supports."],
  ["cfo", "💼 CFO", "Presents financial performance, capital and liquidity."],
  ["cro", "🛡️ CRO", "Explains the bank’s risk profile and risk appetite."],
  ["secretary", "📜 CoSec", "Guards the agenda, quorum, minutes and legal process."],
  ["audit", "🔍 Internal Audit", "Reports independently on controls and risk management."],
  ["mlro", "🚨 MLRO", "Leads anti-money-laundering oversight and escalation."],
  ["technology", "👩‍💻 CTO / COO", "Checks technology, operations and operational resilience."],
];

const rounds = [
  {
    title: "The boss asks: are sales really rising?",
    icon: "🤵📊",
    table: [["Month", "Orders", "Revenue"], ["Jan", "100", "£4,000"], ["Feb", "105", "£4,100"], ["Mar", "108", "£4,250"]],
    prompt: "Poker round 1: reveal your evidence and choose the honest answer.",
    options: [
      ["trend", "📈 Show a line chart with the full time trend", "A line chart makes change over time visible without pretending a tiny rise is a huge jump."],
      ["pie", "🥧 Use a 3D pie chart", "A pie chart is not the best way to show a month-by-month trend."],
      ["claim", "💰 Tell the boss revenue has doubled", "The table shows a modest increase, not a doubling."],
    ],
    reward: 30,
  },
  {
    title: "The cash drawer is nervous",
    icon: "💵🕶️",
    table: [["Channel", "Sales", "Cost"], ["App", "£8,000", "£7,600"], ["Shop", "£5,000", "£2,000"], ["Social", "£2,000", "£1,800"]],
    prompt: "Poker round 2: place your money tokens on the useful comparison.",
    options: [
      ["profit", "🏦 Compare profit, not sales alone", "The shop has the strongest margin; high sales do not automatically mean high profit."],
      ["sales", "💸 Pick the channel with the biggest sales number", "Revenue without cost hides whether the channel is worthwhile."],
      ["glasses", "🥂 Celebrate every channel equally", "A dashboard should reveal differences that support a decision."],
    ],
    reward: 35,
  },
  {
    title: "The engineer spots a data leak",
    icon: "👩‍🔧🔍",
    table: [["Dashboard tile", "Value", "Warning"], ["Customers", "1,200", "✅"], ["Customers", "1,200", "⚠️ Duplicate"], ["Returns", "—", "❓ Missing"]],
    prompt: "Poker round 3: listen to the engineer before the boss spends cash.",
    options: [
      ["quality", "🛠️ Pause the decision and investigate duplicates and missing values", "Poor-quality data can make a confident dashboard answer unsafe."],
      ["spend", "💳 Spend £10,000 immediately", "Money should not be committed before checking the data problem."],
      ["hide", "🧹 Delete the warning tiles", "Hiding a warning does not fix the underlying data."],
    ],
    reward: 40,
  },
  {
    title: "The board chooses an honest story",
    icon: "👔🎲",
    table: [["KPI", "This quarter", "Target"], ["On-time delivery", "82%", "90%"], ["Complaints", "48", "30"], ["Returns", "6%", "5%"]],
    prompt: "Poker round 4: make your final board recommendation.",
    options: [
      ["honest", "🗣️ Show the gap to target and recommend an improvement plan", "A useful dashboard shows performance, target and the action needed."],
      ["green", "🟢 Colour every tile green", "Colour should communicate evidence, not disguise a missed target."],
      ["winner", "🏆 Announce the company is already perfect", "The KPIs show clear gaps that the board needs to address."],
    ],
    reward: 50,
  },
  {
    title: "The incident reaches the board",
    icon: "⚖️📰🏛️",
    table: [["Action", "Status", "Risk"], ["Regulator report", "Not sent", "Possible legal deadline"], ["Lawyer review", "Not started", "Unclear wording"], ["Public update", "Draft needed", "Customer trust"]],
    prompt: "Poker round 5: the dashboard shows a serious incident. What should the board do next?",
    options: [
      ["governance", "⚖️ Report to the government, ask a lawyer to review and update the news page", "A serious incident needs coordinated regulatory, legal and public communication."],
      ["hide", "🙈 Keep quiet until somebody asks", "Silence can miss reporting duties and damage trust."],
      ["post", "📣 Publish an unverified story immediately", "Public communication should be accurate, reviewed and coordinated."],
    ],
    reward: 60,
  },
];

let phase = "roles";
let chosenRole = null;
let roundIndex = 0;
let score = 0;
let cash = 100;
let correctRounds = 0;
const app = document.querySelector("#app");

function render() {
  if (phase === "roles") return renderRoles();
  if (phase === "board") return renderBoard();
  renderEnd();
}

function shell(content, label) {
  app.innerHTML = `<section class="board-game card glass p-5 sm:p-8"><div class="board-header"><div><p class="board-kicker">MISSION 07 · THE DATA BOARDROOM</p><p class="board-round">${label}</p></div><div class="board-bank">🏦 💵 ${cash}</div></div><h1 class="board-title">The Dashboard Board Game 🎲</h1>${content}</section>`;
}

function renderRoles() {
  shell(`<div class="board-hero"><div class="boss-avatar">🤵</div><div><p class="board-kicker">WELCOME TO THE BOARDROOM</p><h2>The boss has a decision to make.</h2><p>Choose your role at the table. Then use dashboard evidence, poker-style conversation rounds and a limited cash pile to advise the boss.</p></div></div><div class="table-legend">🕶️ Conversation • 📊 Dashboard • 🛠️ Engineers • 💵 Cash • 🏦 Bank • 🥂 Boardroom confidence</div><div class="empty-table"><div class="table-centre">🏦<small>EMPTY BOARD TABLE</small></div>${roles.map((role, index) => `<button class="table-chair chair-${index}" data-role="${role[0]}" aria-label="Choose ${role[1]}"><span>🪑</span><b>${role[1]}</b></button>`).join("")}</div><p class="chair-help">Choose a chair to take your role.</p><section class="role-guide"><h3>Role guide</h3><p>Read each responsibility before choosing your seat.</p><div class="role-guide-grid">${roles.map((role) => `<article><b>${role[1]}</b><span>${role[2]}</span></article>`).join("")}</div></section>`, "Choose a role to start");
  document.querySelectorAll("[data-role]").forEach((button) => {
    button.onclick = () => { chosenRole = roles.find((role) => role[0] === button.dataset.role); phase = "board"; render(); };
  });
}

function renderBoard() {
  const round = rounds[roundIndex];
  const seatedRoles = roles.filter((role) => role[0] !== chosenRole[0]);
  const roleEmoji = chosenRole[1].split(" ")[0];
  const roleTitle = chosenRole[1].slice(roleEmoji.length).trim();
  shell(`<div class="player-strip"><span>YOUR ROLE: <b>${chosenRole[1]}</b></span><span>🎲 ROUND ${roundIndex + 1}/${rounds.length}</span><span>⭐ ${score} XP</span></div><div class="poker-heading"><span class="poker-chip">♠️</span><div><p class="board-kicker">POKER CONVERSATION ROUND ${roundIndex + 1}</p><h2>${round.icon} ${round.title}</h2><p>${round.prompt}</p></div></div><div class="seated-board"><div class="player-seat"><span>${roleEmoji}</span><b>YOU · ${roleTitle}</b></div>${seatedRoles.map((role, index) => { const emoji = role[1].split(" ")[0]; const title = role[1].slice(emoji.length).trim(); return `<div class="expert-seat expert-${index}"><span>🪑 ${emoji}</span><small>${title}</small></div>`; }).join("")}<div class="board-table"><div class="dashboard-panel"><h3>📊 Dashboard evidence</h3><table>${round.table.map((row, index) => `<tr>${row.map((cell) => `<${index === 0 ? "th" : "td"}>${cell}</${index === 0 ? "th" : "td"}>`).join("")}</tr>`).join("")}</table></div><div class="cash-stack">💵 💵 💵<small>TEAM CASH: ${cash}</small></div></div></div><h3 class="board-question">What do you say at the table?</h3><div class="decision-grid">${round.options.map((option, index) => `<button class="decision-card" data-decision="${index}"><b>${option[1]}</b><small>PLAY YOUR HAND</small></button>`).join("")}</div><div id="board-feedback" class="board-feedback">Choose carefully: a confident story still needs honest evidence.</div>`, `Round ${roundIndex + 1} of ${rounds.length}`);
  document.querySelectorAll("[data-decision]").forEach((button) => { button.onclick = () => decide(Number(button.dataset.decision), round); });
}

function decide(choice, round) {
  const selected = round.options[choice];
  const feedback = document.querySelector("#board-feedback");
  if (selected[0] !== ["trend", "profit", "quality", "honest", "governance"][roundIndex]) {
    cash = Math.max(0, cash - 10);
    gameAudio.wrong();
    document.querySelector(".board-bank").textContent = `🏦 💵 ${cash}`;
    document.querySelector(".cash-stack small").textContent = `TEAM CASH: ${cash}`;
    feedback.innerHTML = `<b>🃏 Weak hand — the boss challenges your claim.</b><br>${selected[2]}<br><small>💵 -10 team cash for a costly wrong turn. Try again.</small>`;
    return;
  }
  score += round.reward;
  cash += 15;
  correctRounds += 1;
  gameAudio.correct();
  feedback.innerHTML = `<b>🥂 Strong play! +${round.reward} XP and 💵 +15 cash.</b><br>${selected[2]}<br><button id="next-round" class="next-round">${roundIndex === rounds.length - 1 ? "Count the final score →" : "Deal the next round →"}</button>`;
  document.querySelectorAll("[data-decision]").forEach((button) => { button.disabled = true; });
  document.querySelector("#next-round").onclick = () => { roundIndex += 1; phase = roundIndex === rounds.length ? "end" : "board"; render(); };
}

function renderEnd() {
  const title = correctRounds === rounds.length ? "🏆 Boardroom Legend" : "📊 Data Table Apprentice";
  shell(`<div class="end-trophy">🏆🥂💵</div><p class="board-kicker">FINAL BOARD VOTE</p><h2 class="end-title">${title}</h2><p class="end-copy">You played as ${chosenRole[1]}, held ${correctRounds}/${rounds.length} strong hands and helped the boss make decisions from evidence.</p><div class="final-board"><div><span>XP</span><b>${score}</b></div><div><span>TEAM CASH</span><b>💵 ${cash}</b></div><div><span>HONEST ROUNDS</span><b>${correctRounds}/${rounds.length}</b></div></div><div class="board-callout">🕶️ The winning boardroom habit: ask what the data really shows, listen to the engineer, check the dashboard design and explain the decision honestly.</div><button id="restart-board" class="restart-button">↺ Start a new board game</button>`, "Game complete");
  document.querySelector("#restart-board").onclick = () => { phase = "roles"; chosenRole = null; roundIndex = 0; score = 0; cash = 100; correctRounds = 0; render(); };
}

render();
