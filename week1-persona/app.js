const questions = [
  ["You buy a pizza online. Which of the following is an example of data? 🍕", [
    "The manager decides to hire another delivery driver.",
    "\"Pepperoni Pizza, £12.99, Order #45821\"",
    "Sales increased by 25% this month.",
    "A report showing the busiest delivery times.",
  ], 1],
  ["Which statement best describes information? 📊", [
    "Raw facts with no meaning.",
    "Data that has been organised and interpreted.",
    "A computer database.",
    "A collection of random numbers.",
  ], 1],
  ["Spotify notices you listen to lots of rock music and recommends a new band. What is Spotify using? 🎵", [
    "Guesswork",
    "A lucky prediction",
    "Data to support a decision",
    "A data breach",
  ], 2],
  ["Which of these is most likely to happen if an organisation has poor data quality? 🚨", [
    "Better decisions",
    "Faster internet",
    "Incorrect decisions",
    "More customers automatically",
  ], 2],
  ["What is the main goal of data management? 🗂️", [
    "Delete as much data as possible",
    "Keep data organised, accurate and accessible",
    "Collect data and never use it",
    "Replace all employees with computers",
  ], 1],
  ["Which of the following is an example of data literacy? 🔍", [
    "Being able to build computer hardware",
    "Understanding and using data to make decisions",
    "Writing code all day",
    "Designing websites",
  ], 1],
  ["Imagine a university loses access to student records for one day. Which area would be affected? 🎓", [
    "Student enrolment",
    "Timetabling",
    "Assessment records",
    "All of the above",
  ], 3],
  ["Which of these is NOT usually considered a component of an information system? 🖥️", [
    "People",
    "Processes",
    "Technology",
    "Weather",
  ], 3],
  ["Netflix recommends a film based on your viewing history. What type of data is it using? 🎬", [
    "Historical user data",
    "Weather data",
    "Geological data",
    "Traffic data",
  ], 0],
  ["What could happen if a supermarket's stock data is inaccurate? 🛒", [
    "Products may run out unexpectedly",
    "Customers may not find what they need",
    "Managers may make poor decisions",
    "All of the above",
  ], 3],
  ["Which activity demonstrates good data management? ✅", [
    "Storing customer records in multiple places with no backup",
    "Keeping accurate records and regularly updating them",
    "Sharing sensitive data with everyone in the company",
    "Ignoring incorrect records",
  ], 1],
  ["In an information system, who are the people? 👥", [
    "Employees, customers and managers who interact with the system",
    "Only IT staff",
    "Only managers",
    "Computers and servers",
  ], 0],
  ["Which of these best describes a process in an information system? ⚙️", [
    "A customer placing an order online",
    "A laptop computer",
    "Customer data stored in a database",
    "An internet connection",
  ], 0],
  ["Your bank detects unusual spending and temporarily blocks your card. What is the bank doing? 💳", [
    "Ignoring data",
    "Making a data-driven decision",
    "Deleting data",
    "Replacing customer service",
  ], 1],
  ["🏆 Final Boss: A company has accurate customer data, well-trained staff, reliable technology and clear business processes. What is the MOST likely result?", [
    "Better decisions and improved services",
    "More paperwork",
    "Less information available",
    "More data errors",
  ], 0],
];

const feedback = [
  "That is raw data: a recorded fact before it has been interpreted.",
  "Information is data organised so it has meaning and can support understanding.",
  "Spotify is using your listening data to make a recommendation.",
  "Poor data quality can lead people to make incorrect decisions.",
  "Good data management keeps data organised, accurate, secure and available when needed.",
  "Data literacy means being able to understand and use data in everyday decisions.",
  "All three areas rely on student records, so all of the above is correct.",
  "People, processes and technology are core components; weather is not usually one of them.",
  "Netflix is using historical user data: your viewing history.",
  "All of the above can happen when stock information is inaccurate.",
  "Accurate records should be maintained and updated regularly.",
  "People include anyone who interacts with the information system.",
  "A process is a set of actions, such as a customer placing an order.",
  "The bank is using evidence to make a data-driven decision.",
  "When all four work together, organisations can make better decisions and improve services.",
];

const personas = [
  ["The Data Scientist", "🧙‍♀️", "You spot patterns and ask brilliant questions.", "Try turning a real-world question into a simple chart or prediction.", "violet"],
  ["The Data Analyst", "🔮", "You turn messy numbers into clear findings people can act on.", "Create a small dashboard that answers one useful business question.", "blue"],
  ["The Data Consultant", "🧝‍♂️", "You explain confusing problems and help people choose a useful solution.", "Practise explaining one data idea in plain English.", "sky"],
  ["The Data Engineer", "🧑‍🔬", "You like building reliable systems that make data flow.", "Sketch how messy data could be cleaned and moved into a useful table.", "orange"],
  ["The Cloud Engineer", "🧚‍♀️", "You connect services and imagine what technology could automate next.", "Design a cloud or API solution to remove one manual task.", "cyan"],
  ["The Database Administrator", "🧙‍♂️", "You keep databases organised, available and ready for people to use.", "Design a simple backup and access plan for a student database.", "indigo"],
  ["The Data Support Specialist", "🧝‍♀️", "You stay calm, solve practical problems and help users get unstuck.", "Write a troubleshooting checklist someone else could follow.", "emerald"],
  ["The Cybersecurity Analyst", "🥷", "You notice suspicious activity and protect systems from harm.", "Identify three warning signs of an unsafe login or data request.", "slate"],
  ["The Security Guardian", "🛡️", "You care about privacy, safe access and making responsible choices.", "Create three rules for keeping a dataset safe and trustworthy.", "rose"],
  ["The Data Quality Analyst", "🕵️‍♀️", "You ask the most important question: can we trust this data?", "Audit a messy spreadsheet and propose one validation rule.", "green"],
  ["The Data Architect", "👑", "You design the structures and relationships that help data make sense.", "Sketch a simple data model with clear tables and keys.", "amber"],
  ["The Product Manager", "🧚‍♂️", "You connect user needs, business goals and technology into a useful product.", "Write one measurable data feature that would improve a service.", "fuchsia"],
];

const sortingQuestions = [
  ["The Sorting Hat is looking at your future desk. Which scene feels most exciting?", [
    ["A wall of charts revealing a surprising pattern 📊", [0, 1]],
    ["A team asking you to solve a tricky business problem 🗣️", [2, 11]],
    ["A glowing screen showing data flowing through a pipeline ⚙️", [3, 4]],
    ["A control room protecting important systems 🔐", [6, 8]],
  ]],
  ["You find a mysterious spreadsheet. Your first instinct is to…", [
    ["Explore it and look for a story 🔎", [0, 1]],
    ["Ask who created it and what decision it supports 💬", [2, 11]],
    ["Organise the columns and repair the structure 🧱", [3, 5, 10]],
    ["Check who should be allowed to open it 🛡️", [6, 8]],
  ]],
  ["Pick your ideal superpower:", [
    ["See patterns other people miss 🧠", [0, 1]],
    ["Make complicated ideas easy to understand ✨", [2, 11]],
    ["Build invisible systems that never let people down 🛠️", [3, 4, 5]],
    ["Spot risks before they become disasters 🚨", [6, 8, 9]],
  ]],
  ["A teammate says, “The system is broken!” You would rather…", [
    ["Investigate the evidence like a detective 🕵️", [0, 1, 9]],
    ["Listen to the person and understand the real need 👂", [2, 11]],
    ["Trace the technical steps until you find the fault 🔧", [3, 4, 5, 6]],
    ["Check the rules, permissions and safeguards ✅", [8, 9, 10]],
  ]],
  ["Choose a magical data artefact for your toolkit:", [
    ["A crystal ball that predicts future trends 🔮", [0, 1]],
    ["A translator that makes data speak human 🗣️", [2, 11]],
    ["A portal that connects every system ☁️", [3, 4]],
    ["A shield that keeps information safe 🛡️", [6, 8, 9]],
  ]],
  ["What would make you feel proud at the end of a project?", [
    ["Discovering an insight nobody expected 🌟", [0, 1]],
    ["Seeing people use your recommendation confidently 🤝", [2, 11]],
    ["Watching a reliable solution run smoothly ⚙️", [3, 4, 5, 10]],
    ["Knowing the data is accurate, private and trusted 🔒", [6, 8, 9]],
  ]],   
];

let questionIndex = 0;
let score = 0;
let quizScore = 0;
let sortingIndex = 0;
const sortingVotes = Array(personas.length).fill(0);
const avatarPreferences = { skin: "#f6c7a5", hair: "short", presentation: "classic" };
let answered = false;
const app = document.querySelector("#app");

function renderIntro() {
  app.innerHTML = `<section class="ceremony-card fade-in">
    <div class="ceremony-stars" aria-hidden="true">✦ · ✧ · ✦ · ✧ · ✦</div>
    <div class="hat-orb">🎩</div>
    <p class="ceremony-kicker">WELCOME TO THE DATA QUEST CEREMONY</p>
    <h1 class="ceremony-title">The Sorting Hat is ready.</h1>
    <p class="ceremony-copy">First, prove your data instincts in a quick beginner challenge. Then the Hat will study your choices and reveal the data career that matches your natural style.</p>
    <div class="ceremony-buddies"><span>🟡</span><span>🩷</span><span>🩵</span><span>🟢</span></div>
    <button id="begin" class="ceremony-button">Enter the Sorting Studio ✨</button>
    <p class="ceremony-note">There are no wrong personality choices. The Hat is curious, not judgemental.</p>
  </section>`;
  document.querySelector("#begin").onclick = () => {
    gameAudio.correct();
    renderQuestion();
  };
}

function renderQuestion() {
  const [prompt, options, correct] = questions[questionIndex];
  app.innerHTML = `<section class="card glass fade-in p-7">
    <div class="flex items-start justify-between gap-4">
      <div><p class="font-bold uppercase tracking-widest text-violet-600">Mission 01 · Data foundations</p>
      <h1 class="mt-2 text-4xl font-black">Warm-up challenge</h1></div>
      <span class="rounded-full bg-violet-100 px-3 py-2 text-sm font-black text-violet-700 dark:bg-violet-950 dark:text-violet-200">${questionIndex + 1}/${questions.length}</span>
    </div>
    <div class="mt-5 h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700"><div class="h-full rounded-full bg-violet-600 transition-all" style="width:${((questionIndex + 1) / questions.length) * 100}%"></div></div>
    <p class="mt-8 text-xl font-bold">${prompt}</p>
    <div class="mt-5 grid gap-3">${options.map((option, index) => `<button class="choice rounded-2xl border-2 border-slate-200 p-4 text-left font-semibold dark:border-slate-700" data-option="${index}"><span class="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-sm dark:bg-slate-800">${index + 1}</span>${option}</button>`).join("")}</div>
    <p id="feedback" class="mt-5 min-h-12 rounded-xl p-3 font-bold"></p>
  </section>`;
  document.querySelectorAll("[data-option]").forEach((button) => {
    button.onclick = () => answerQuestion(Number(button.dataset.option), correct);
  });
}

function answerQuestion(selected, correct) {
  if (answered) return;
  answered = true;
  const isCorrect = selected === correct;
  const buttons = document.querySelectorAll("[data-option]");
  buttons[correct].classList.add("border-emerald-500", "bg-emerald-50", "dark:bg-emerald-950");
  if (isCorrect) {
    score++;
    gameAudio.correct();
  } else {
    buttons[selected].classList.add("border-rose-500", "bg-rose-50", "dark:bg-rose-950");
    gameAudio.wrong();
  }
  const message = document.querySelector("#feedback");
  message.className = `mt-5 min-h-12 rounded-xl p-3 font-bold ${isCorrect ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200" : "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200"}`;
  message.textContent = isCorrect ? `✅ Correct! ${feedback[questionIndex]}` : `💡 Not quite. ${feedback[questionIndex]}`;
  message.insertAdjacentHTML("afterend", `<button id="next" class="mt-3 rounded-xl bg-violet-600 px-5 py-3 font-bold text-white">${questionIndex === questions.length - 1 ? "Reveal my data career →" : "Next question →"}</button>`);
  document.querySelector("#next").onclick = () => {
    questionIndex++;
    answered = false;
    if (questionIndex === questions.length) renderSortingHat();
    else renderQuestion();
  };
}

function renderSortingHat() {
  const [prompt, choices] = sortingQuestions[sortingIndex];
  app.innerHTML = `<section class="card glass fade-in p-7">
    <p class="font-bold uppercase tracking-widest text-fuchsia-600">Career sorting ceremony · ${sortingIndex + 1}/${sortingQuestions.length}</p>
    <h1 class="mt-2 text-4xl font-black">The Data Sorting Hat 🎩</h1>
    <p class="mt-3 text-slate-600 dark:text-slate-300">The Hat is listening. Choose the answer that feels most like you.</p>
    <p class="mt-8 text-xl font-bold">${prompt}</p>
    <div class="mt-5 grid gap-3 sm:grid-cols-2">${choices.map(([text], index) =>
      `<button class="choice rounded-2xl border-2 border-slate-200 p-5 text-left font-semibold dark:border-slate-700" data-sort="${index}">${text}</button>`
    ).join("")}</div>
    <p id="hat-reaction" class="mt-5 min-h-12 rounded-xl p-3 font-bold"></p>
    <p class="mt-2 text-sm text-slate-500">The hat is sorting your interests, not judging your ability.</p>
  </section>`;
  document.querySelectorAll("[data-sort]").forEach((button) => {
    button.onclick = () => {
      if (button.disabled) return;
      document.querySelectorAll("[data-sort]").forEach((choice) => { choice.disabled = true; });
      const choice = choices[Number(button.dataset.sort)];
      choice[1].forEach((personaIndex) => sortingVotes[personaIndex]++);
      if (choice[2]) {
        Object.assign(avatarPreferences, choice[2]);
        if (avatarPreferences.skin === "random") avatarPreferences.skin = ["#f6c7a5", "#d99b72", "#8d5524"][Math.floor(Math.random() * 3)];
        if (avatarPreferences.hair === "random") avatarPreferences.hair = ["#3f2a20", "#24170f", "#78350f", "#111827"][Math.floor(Math.random() * 4)];
      }
      gameAudio.correct();
      const reactions = [
        "Ooooh, interesting choice… the Hat is taking notes! 🎩",
        "A strong instinct! I can already hear a career door creaking open… 🚪",
        "The Hat has opinions about that one — in a good way! ✨",
        "Fascinating! Your data-career energy is getting stronger… ⚡",
      ];
      const reaction = document.querySelector("#hat-reaction");
      reaction.className = "mt-5 min-h-12 rounded-xl bg-fuchsia-100 p-3 font-bold text-fuchsia-800 dark:bg-fuchsia-950 dark:text-fuchsia-200";
      reaction.textContent = reactions[sortingIndex % reactions.length];
      button.classList.add("border-fuchsia-500", "bg-fuchsia-50", "dark:bg-fuchsia-950");
      reaction.insertAdjacentHTML("afterend", `<button id="hat-next" class="mt-3 rounded-xl bg-fuchsia-600 px-5 py-3 font-bold text-white">${sortingIndex === sortingQuestions.length - 1 ? "Let the Hat reveal my role →" : "Next sorting choice →"}</button>`);
      document.querySelector("#hat-next").onclick = () => {
        sortingIndex++;
        if (sortingIndex === sortingQuestions.length) showPersona();
        else renderSortingHat();
      };
    };
  });
}

function showPersona() {
  quizScore = score;
  const highestVote = Math.max(...sortingVotes);
  const personaIndex = sortingVotes.findIndex((votes) => votes === highestVote);
  const persona = personas[personaIndex];
  app.innerHTML = `<section class="card glass fade-in p-8 text-center">
    ${createAvatar(persona, avatarPreferences)}
    <p class="mt-5 font-bold uppercase tracking-widest text-violet-600">Your data career persona</p>
    <h1 class="mt-2 text-4xl font-black">${persona[0]}</h1>
    <p class="mx-auto mt-3 max-w-2xl text-xl font-bold">${persona[2]}</p>
    <p class="mt-6 text-lg">You scored <b>${score}/${questions.length}</b>. Your next quest: ${persona[3]}</p>
    <button id="continue" class="mt-7 rounded-xl bg-violet-600 px-5 py-3 font-bold text-white">Continue to System Pillar challenge →</button>
  </section>`;
  document.querySelector("#continue").onclick = () => renderPillar(persona);
}

const pillars = [
  ["A delivery address was stored against the wrong customer.", "Data"],
  ["Two teams use different names for the same status.", "Process"],
  ["No one knows who approves a new data field.", "People"],
  ["The scanner cannot send its reading to the database.", "Technology"],
];
let pillarIndex = 0;

function renderPillar(persona) {
  app.innerHTML = `<section class="card glass fade-in p-7">
    <p class="font-bold uppercase tracking-widest text-amber-600">Mission 01 · System pillar challenge</p>
    <h2 class="mt-2 text-3xl font-black">Can your ${persona[0].replace("The ", "")} persona diagnose the failure?</h2>
    <p class="mt-3">${pillars[pillarIndex][0]}</p>
    <div class="mt-5 grid grid-cols-2 gap-3">${["People", "Process", "Technology", "Data"].map((item) => `<button class="choice rounded-xl border-2 border-slate-200 p-4 font-bold dark:border-slate-700" data-pillar="${item}">${item}</button>`).join("")}</div>
    <p id="feedback" class="mt-5 min-h-6 font-bold"></p>
  </section>`;
  document.querySelectorAll("[data-pillar]").forEach((button) => {
    button.onclick = () => {
      const correct = button.dataset.pillar === pillars[pillarIndex][1];
      correct ? gameAudio.correct() : gameAudio.wrong();
      document.querySelector("#feedback").textContent = correct
        ? pillarPraise[pillars[pillarIndex][1]]
        : `Not quite — this one is a ${pillars[pillarIndex][1]} problem. Look for the first thing that went wrong.`;
      if (correct) {
        score++;
        pillarIndex++;
        if (pillarIndex === pillars.length) setTimeout(() => showComplete(persona), 450);
        else setTimeout(() => renderPillar(persona), 450);
      }
    };
  });
}

function showComplete(persona) {
  const evidence = `Data Quest Mission 01
Career persona: ${persona[0]} ${persona[1]}
Quiz score: ${quizScore}/${questions.length}
Profile: ${persona[2]}
Next quest: ${persona[3]}`;
  app.innerHTML = `<section class="card glass fade-in p-8 text-center">
    ${createAvatar(persona, avatarPreferences)}
    <p class="mt-4 font-bold uppercase tracking-widest text-violet-600">Mission complete</p>
    <h1 class="mt-2 text-4xl font-black">${persona[0]}</h1>
    <p class="mt-3 text-lg">You completed the quiz and diagnosed all four system pillars.</p>
    <label class="mt-7 block text-left font-bold" for="reflection">Your reflection or evidence</label>
    <textarea id="reflection" class="mt-2 min-h-28 w-full rounded-xl border p-3 dark:border-slate-700 dark:bg-slate-900" placeholder="What surprised you? Add an example, source or comment…"></textarea>
    <label class="mt-4 block text-left font-bold" for="sources">Sources or supporting files</label>
    <input id="sources" class="mt-2 w-full rounded-xl border p-3 dark:border-slate-700" type="file" multiple>
    <button id="copy" class="mt-7 rounded-xl bg-violet-600 px-5 py-3 font-bold text-white">Copy submission for OneNote</button>
    <a class="ml-3 font-bold text-violet-600" href="../">Back to hub</a>
  </section>`;
  document.querySelector("#copy").onclick = async () => {
    const reflection = document.querySelector("#reflection").value || "[No reflection added]";
    const files = [...document.querySelector("#sources").files].map((file) => file.name).join(", ") || "[No files attached]";
    await navigator.clipboard.writeText(`${evidence}
Reflection: ${reflection}
Supporting files: ${files}`);
    document.querySelector("#copy").textContent = "Submission copied ✓";
  };
}

const pillarPraise = {
  People: "OMG, how did you know? 👏 This is a people problem — unclear ownership caused the failure.",
  Process: "Great detective work! 🕵️ This is a process problem — the teams are following inconsistent steps.",
  Technology: "You cracked it! 🔧 This is a technology problem — the tools cannot connect or work as expected.",
  Data: "Surprise, surprise — it is a data problem! 🎯 The stored information is incorrect or linked to the wrong record.",
};

function createAvatar(persona, preferences = {}) {
  const styles = { violet: ["#7c3aed", "#ede9fe"], blue: ["#2563eb", "#dbeafe"], sky: ["#0284c7", "#e0f2fe"], orange: ["#ea580c", "#ffedd5"], cyan: ["#0891b2", "#cffafe"], indigo: ["#4f46e5", "#e0e7ff"], emerald: ["#059669", "#d1fae5"], slate: ["#475569", "#e2e8f0"], rose: ["#e11d48", "#ffe4e6"], green: ["#16a34a", "#dcfce7"], amber: ["#d97706", "#fef3c7"], fuchsia: ["#c026d3", "#fae8ff"] };
  const archetypes = { "The Data Scientist": ["🧙‍♀️", "Wizard"], "The Data Analyst": ["🔮", "Oracle"], "The Data Consultant": ["🧝‍♂️", "Elf Guide"], "The Data Engineer": ["🧑‍🔬", "Alchemist"], "The Cloud Engineer": ["🧚‍♀️", "Sky Fairy"], "The Database Administrator": ["🧙‍♂️", "Rune Keeper"], "The Data Support Specialist": ["🧝‍♀️", "Healer"], "The Cybersecurity Analyst": ["🥷", "Shadow Ninja"], "The Security Guardian": ["🛡️", "Knight"], "The Data Quality Analyst": ["🕵️‍♀️", "Detective"], "The Data Architect": ["👑", "Royal Architect"], "The Product Manager": ["🧚‍♂️", "Quest Guide"] };
  const [accent, background] = styles[persona[4]] || styles.violet;
  const [icon, archetype] = archetypes[persona[0]] || ["✨", "Hero"];
  return `<div class="persona-avatar persona-emoji" style="background:${background};border-color:${accent}" role="img" aria-label="${persona[0]} ${archetype} emoji avatar"><span class="persona-emoji-icon">${icon}</span><span class="persona-emoji-badge">${archetype}</span></div>`;
}

renderIntro();
