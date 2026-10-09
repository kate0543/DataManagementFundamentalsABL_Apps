const scenarios = [
  {
    title: "🐈 The cat with the crown 👑",
    data: "🤴👸🏰📖 The kingdom’s guest book",
    story: "Prince 🤴 Leo and Princess 👸 Rose keep a royal guest book 📖 at the castle 🏰. It has no guarded entrance 🚪. The palace cat 🐈 jumps onto the keyboard ⌨️, opens the keeper’s desk 🪑🗄️ and scratches away every guest record ✍️.",
    clue: "Every visitor 🧑‍🤝‍🧑—and every curious cat 🐈—can enter the records room 🏰 and use the same powerful key 🗝️.",
    safety: "access",
    safetyOptions: [
      ["access", "🚪 Lock the guest book in the dungeon and give Prince, Princess and each keeper one key", "Access control and least privilege stop a random visitor or pet reaching every record."],
      ["open", "🏰 Leave the dungeon door open to the whole castle", "Without access control, anyone who reaches the book can change or delete guest records."],
      ["cat", "🐈 Get the palace cat to guard the guest book", "A familiar visitor is still not an authorised keeper—and cats are poor access-control systems."],
    ],
    rescue: [
      ["isolate", "🔒 Seal the dungeon and carry the cat away from the keyboard", "This stops more accidental or malicious changes while the guards investigate."],
      ["backup", "📜 Restore yesterday’s clean copy of the guest book", "A verified backup gives the kingdom a safe recovery point."],
      ["delete", "🔥 Set a fire to burn the remaining guest book", "More destruction would make the incident worse."],
    ],
    fix: "Use named accounts 👤, role-based permissions 🎫, MFA 🔐 and tested backups 💾. Never give every castle visitor 🏰 the master key 🗝️.",
  },
  {
    title: "🐦 The little bird’s secret 🤫",
    data: "🤴👸💎🏴‍☠️ Keys to the kingdom’s treasure room",
    story: "Prince 🤴 Leo and Princess 👸 Rose guard a treasure room 💎🏰. The wizard 🧙 writes every treasure password 🔑 on a scroll 📜. A little bird 🐦 reads it, then sings 🎶 every secret 🤫 to the pirate 🏴‍☠️ and the whole forest 🌲.",
    clue: "The password scroll 📜 is readable 👀, reusable 🔁 and copied into the bird’s notebook 📓 beside the treasure map 🗺️.",
    safety: "hash",
    safetyOptions: [
      ["hash", "🧙 Turn each treasure password into a salted magical hash", "Hashing makes the stored value difficult to turn back into the original password."],
      ["sing", "🐦 Ask the little bird to promise not to sing", "A promise does not protect a readable password scroll if it is copied."],
      ["note", "📜 Pin one master key on the castle noticeboard", "A public key makes every treasure room easier to enter."],
    ],
    rescue: [
      ["reset", "🗝️ Change every exposed treasure key and add a second magical lock", "New credentials and a second factor reduce the chance of account takeover."],
      ["audit", "🦉 Ask the castle owls to check who entered the treasure room", "Logs help identify which accounts may have been entered."],
      ["share", "📣 Shout the old password scroll across the village square", "Sharing an exposed secret increases the damage."],
    ],
    fix: "Hash and salt passwords 🧂, use a password manager 🔑, require MFA 🔐 and never write readable treasure keys 📜 on a public scroll 📣.",
  },
  {
    title: "🔥 The matchstick castle 🏰",
    data: "🤴👸📜🔥 The kingdom’s emergency and payment scrolls",
    story: "Prince 🤴 Leo and Princess 👸 Rose warn the mayor 👑 that a dragon 🐉 may attack. He says it only happens in faraway lands 🗺️. No one watches the skies 🔭, repairs the old drawbridge 🌉 or practises an emergency plan 🛡️. One spark 🔥 catches the matchsticks 🪵 and sets the castle 🏰 alight.",
    clue: "The seers’ warnings 🔮 were ignored 🙉, the old gates 🚪 were never repaired 🛠️ and nobody knew which knight 🧑‍🚒 should respond 🚨.",
    safety: "predict",
    safetyOptions: [
      ["predict", "🔭 Hire seers to watch for the dragon, repair the gates and practise the fire drill", "Threat prediction and preparation reduce the chance that one incident becomes a disaster."],
      ["wish", "✨ Wish that dragons choose another kingdom", "Hope is not a security control."],
      ["wait", "🕰️ Wait until the flames reach the castle before finding the fire brigade", "Late reaction gives an attacker more time to spread."],
    ],
    rescue: [
      ["isolate", "🧯 Raise the drawbridge, ring the castle alarm and send the knights", "Containment limits spread and gives the response team clear roles."],
      ["restore", "📜 Rebuild the important scrolls from a clean backup chest", "Recovery from trusted copies helps the kingdom resume safely."],
      ["spread", "🔥 Light every other matchstick house as a warning", "Duplicating the damage does not contain an attack."],
    ],
    fix: "Use threat intelligence 🔭, patch management 🛠️, monitoring 👁️, rehearsed fire drills 🧯 and a tested incident-response plan 📋.",
  },
  {
    title: "🌉 The unlocked troll bridge 👹",
    data: "🤴👸✉️🌉 Secret messages travelling between village and castle",
    story: "Prince 🤴 Leo and Princess 👸 Rose send private messages ✉️ between the village 🏘️ and castle 🏰 across an unguarded troll bridge 🌉. The troll 👹 reads them 👀, changes the delivery address 🏷️ and sends them onward 📨.",
    clue: "Messages ✉️ cross the bridge 🌉 without a protective spell ✨, so anyone watching the route 👁️ can read 📖 or alter ✏️ them.",
    safety: "encrypt",
    safetyOptions: [
      ["encrypt", "🛡️ Place each royal message inside an enchanted locked box", "Encryption protects messages while they travel and helps detect tampering."],
      ["troll", "👹 Ask the bridge troll not to read the messages", "Trusting an unknown observer does not protect the information."],
      ["shout", "📢 Shout the secret across the bridge", "Making a secret louder exposes it to more listeners."],
    ],
    rescue: [
      ["rotate", "🔑 Melt the exposed keys and forge new ones", "Replacing compromised secrets prevents continued access."],
      ["verify", "✅ Check the royal seal and resend from a trusted messenger", "Verification catches altered data before it reaches the recipient."],
      ["forward", "📨 Send the troll’s altered messages to every village", "Forwarding unverified content spreads the attacker’s changes."],
    ],
    fix: "Use encryption in transit 🔒, certificate checks 📜✅, key rotation 🔄 and message-seal validation 🕯️.",
  },
  {
    title: "😴 The sleepy watchtower 🗼",
    data: "🤴👸💎☁️ The royal cloud vault",
    story: "Prince 🤴 Leo and Princess 👸 Rose store their treasure 💎 in the royal cloud vault ☁️. The watchtower guard 🛡️ falls asleep 😴 at the desk 🪑. The vault 🏦 sends no magical warning 🔔, keeps no scroll 📜 of visitors and nobody notices a pirate 🏴‍☠️ carrying files 📁 away all night 🌙.",
    clue: "There is no lookout rule 👁️ for unusual downloads 📥 and no named guard 🧑‍✈️ responsible for raising the alarm 🚨.",
    safety: "monitor",
    safetyOptions: [
      ["monitor", "👁️ Put a seeing stone in the watchtower, watch the desk and keep a visitor scroll", "Monitoring can reveal unusual behaviour while there is still time to respond."],
      ["sleep", "😴 Turn off the magical alarm so the guard can rest", "Silence hides attacks instead of preventing them."],
      ["hide", "🧺 Hide the vault behind a curtain and hope nobody finds it", "Obscurity is not a substitute for access control and monitoring."],
    ],
    rescue: [
      ["block", "🧱 Close the treasure vault and banish the suspicious pirate", "Stopping the active session limits further downloads."],
      ["logs", "📚 Save the visitor scrolls and investigate what was carried away", "Evidence helps measure impact and improve the defence."],
      ["erase", "🧽 Burn the visitor scrolls to hide the embarrassment", "Deleting evidence prevents a useful investigation."],
    ],
    fix: "Set up central logging 📚, anomaly alerts 🚨, named watchkeepers 🧑‍✈️, regular reviews 🔎 and clear escalation routes 🛡️.",
  },
  {
    real: true,
    title: "The Friday ransomware attack",
    data: "🧑‍🔬👩‍🔧 A science company’s research and customer files",
    story: "At 16:45 on Friday, a scientist 🧑‍🔬 opens a convincing invoice attachment 📎. Minutes later, an engineer 👩‍🔧 sees several shared research folders 📁 become unreadable and a ransom note 💸 appears. The team must respond without spreading the attack.",
    clue: "The message used urgency ⏰, the attachment came from an unexpected sender 📧 and unusual file activity ⚠️ appeared across several devices 💻.",
    safety: "contain",
    safetyOptions: [
      ["contain", "🧯 Ask the engineer to isolate the affected device and activate the response plan", "Fast containment can limit spread while the scientist and team investigate safely."],
      ["pay", "💰 Pay immediately and keep the incident secret", "Payment does not guarantee recovery and hiding an incident delays the right response."],
      ["open", "📂 Open the ransom note on every computer to compare it", "Opening or spreading suspicious files can increase the damage."],
    ],
    rescue: [
      ["report", "📞 Scientist and engineer notify the security lead and preserve evidence", "A coordinated response helps assess impact, meet reporting duties and avoid destroying evidence."],
      ["restore", "💾 Recover priority services from clean, tested backups", "Known-good backups provide a safer recovery route than relying on the attacker."],
      ["wipe", "🧽 Wipe every device before collecting logs", "Erasing devices first can destroy evidence and make the investigation harder."],
    ],
    fix: "Train scientists and engineers to spot phishing 🎓, use endpoint protection 🛡️ and MFA 🔐, separate networks 🧱, test backups 💾, keep logs 📚 and rehearse the ransomware response plan 📋.",
  },
];

let scenarioIndex = 0;
let stage = "safety";
let selectedSafety = null;
let rescued = [];
let alarms = 0;
let score = 0;
const app = document.querySelector("#app");

function render() {
  const current = scenarios[scenarioIndex];
  if (!current) return renderComplete();
  const progress = `${scenarioIndex + 1} / ${scenarios.length}`;
  const stageLabel = stage === "safety" ? "Evaluate the threat" : "Rescue the data";
  const stageNumber = stage === "safety" ? "1" : "2";
  const content = stage === "safety" ? renderSafety(current) : renderRescue(current);
  app.innerHTML = `<section class="card glass ransom-quest p-5 sm:p-8"><div class="ransom-header"><div><p class="ransom-kicker">MISSION 06 · DATA DEFENCE</p><p class="ransom-step">SCENARIO ${progress} · STAGE ${stageNumber}: ${stageLabel}</p></div><div class="alarm-counter ${alarms ? "has-alarm" : ""}">${alarms ? `🚨 ${alarms}` : "🛡️ 0 alarms"}</div></div><h1 class="ransom-title">The Ransom Escape Room <span>🔒</span></h1><div class="ransom-progress"><span style="width:${(scenarioIndex / scenarios.length) * 100}%"></span></div>${content}</section>`;
  bind();
}

function renderSafety(current) {
  return `<div class="ransom-brief"><div class="data-hostage">${current.data}</div><div><p class="ransom-kicker">${current.real ? "⚠️ REAL-WORLD INCIDENT" : "🚨 INCOMING INCIDENT"}</p><h2>${current.title}</h2><p>${current.story}</p></div></div><div class="threat-note">🔎 <b>Intel:</b> ${current.clue}</div><h3 class="ransom-question">Which safety decision protects the data first?</h3><div class="ransom-options">${current.safetyOptions.map((option, index) => `<button class="ransom-option" data-safety="${index}"><b>${option[1]}</b><small>SECURITY DECISION</small></button>`).join("")}</div><div id="feedback" class="ransom-feedback">Choose carefully. One unsafe decision will trigger the alarm.</div>`;
}

function renderRescue(current) {
  return `<div class="rescue-banner"><span>🔓</span><div><p class="ransom-kicker">SAFETY GATE PASSED</p><h2>The data is contained—but not safe yet.</h2><p>Choose both rescue actions to stabilise the system and recover the data.</p></div></div><div class="data-hostage rescue-data">${current.data}</div><h3 class="ransom-question">Pick the two actions that help rescue it:</h3><div class="ransom-options">${current.rescue.map((option, index) => `<button class="ransom-option rescue-option ${rescued.includes(index) ? "chosen" : ""}" data-rescue="${index}" ${rescued.includes(index) ? "disabled" : ""}><b>${option[1]}</b><small>${rescued.includes(index) ? "ACTION COMPLETE ✓" : "RECOVERY ACTION"}</small></button>`).join("")}</div><div id="feedback" class="ransom-feedback">${rescued.length ? `${rescued.length}/2 rescue actions complete.` : "Two correct actions unlock the repair plan."}</div>`;
}

function bind() {
  document.querySelectorAll("[data-safety]").forEach((button) => {
    button.onclick = () => chooseSafety(Number(button.dataset.safety));
  });
  document.querySelectorAll("[data-rescue]").forEach((button) => {
    button.onclick = () => chooseRescue(Number(button.dataset.rescue));
  });
}

function chooseSafety(choice) {
  const current = scenarios[scenarioIndex];
  const selected = current.safetyOptions[choice];
  const feedback = document.querySelector("#feedback");
  if (selected[0] !== current.safety) {
    alarms += 1;
    gameAudio.wrong();
    feedback.classList.add("alarm-flash");
    feedback.innerHTML = `<b>🚨 ALARM TRIGGERED</b><br><span>${selected[2]}</span><br><small>Contain the mistake and try another security decision.</small>`;
    return;
  }
  score += 20;
  selectedSafety = selected;
  stage = "rescue";
  gameAudio.correct();
  render();
}

function chooseRescue(choice) {
  const current = scenarios[scenarioIndex];
  const selected = current.rescue[choice];
  const feedback = document.querySelector("#feedback");
  if (choice === 2) {
    alarms += 1;
    gameAudio.wrong();
    feedback.classList.add("alarm-flash");
    feedback.innerHTML = `<b>🚨 RESCUE ERROR</b><br><span>${selected[2]}</span>`;
    return;
  }
  if (!rescued.includes(choice)) {
    rescued.push(choice);
    score += 25;
    gameAudio.correct();
  }
  if (rescued.length === 2) {
    feedback.innerHTML = `<b>✅ DATA RECOVERED</b><br><span>${current.fix}</span><br><button id="next" class="next-scenario">Continue to next incident →</button>`;
    document.querySelectorAll("[data-rescue]").forEach((button) => { button.disabled = true; });
    document.querySelector("#next").onclick = () => {
      scenarioIndex += 1;
      stage = "safety";
      selectedSafety = null;
      rescued = [];
      render();
    };
  } else {
    render();
  }
}

function renderComplete() {
  const rank = alarms === 0 ? "🛡️ Silent Shield" : alarms <= 3 ? "🔐 Incident Responder" : "🚨 Security Trainee";
  app.innerHTML = `<section class="card glass ransom-quest p-5 sm:p-8"><div class="complete-lock">🔓</div><p class="ransom-kicker">MISSION COMPLETE · SIX DATA HOSTAGES SAFE</p><h1 class="ransom-title">${rank}</h1><p class="complete-copy">You evaluated five fairy-tale threats and one real-world ransomware incident, protected vulnerable data and practised recovery without treating ransom payment as a solution.</p><div class="score-board"><div><span>SECURITY SCORE</span><b>${score}</b><small>points</small></div><div><span>ALARMS</span><b>${alarms}</b><small>unsafe choices</small></div><div><span>RECOVERIES</span><b>6</b><small>data scenarios</small></div></div><div class="repair-card"><h2>🧰 Your defence toolkit</h2><p>🎫 Access control and least privilege</p><p>🔒 Salted password hashes and MFA</p><p>🛡️ Encryption in transit and integrity checks</p><p>🔭 Threat prediction, patching and response plans</p><p>💾 Clean, offline and tested backups</p><p>👁️ Monitoring, logs and alert ownership</p></div><button id="restart" class="restart-button">↺ Run the escape room again</button></section>`;
  document.querySelector("#restart").onclick = () => {
    scenarioIndex = 0; stage = "safety"; selectedSafety = null; rescued = []; alarms = 0; score = 0; render();
  };
}

render();
