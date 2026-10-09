const levels = [
  {
    icon: "🎩🎩🎩",
    title: "The three-hat guest",
    story: "At the party, the same guest has been recorded three times wearing three hats. It looks like one person has become three rows!",
    clue: "One person appears more than once.",
    answer: "duplicate",
    bubbles: ["👥 Duplicate data", "❓ Missing data", "❌ Wrong data"],
    tip: "Duplicate data repeats the same record. Keep one trusted copy and merge or remove the extras.",
    points: 30,
  },
  {
    icon: "🍔🔢",
    title: "Real data: 1,000 burgers",
    story: "A McDonald's order says quantity: 1,000 burgers. The number is present, but it may be an accidental extra zero.",
    clue: "The quantity looks far outside a sensible order range.",
    answer: "wrong",
    bubbles: ["❌ Check the quantity and confirm it", "✅ Ship 1,000 automatically", "🗑️ Delete the whole customer"],
    tip: "A range check or confirmation step can catch an unusually large quantity before it is processed.",
    points: 50,
  },
  {
    icon: "🧍🦶",
    title: "The guest with no shoes",
    story: "Everyone is ready for the dance, but one guest has no shoes. The shoe detail was left blank on the record.",
    clue: "An important value has been left blank.",
    answer: "missing",
    bubbles: ["❓ Missing data", "👥 Duplicate data", "❌ Wrong data"],
    tip: "Missing data is an empty field. A required-field check can stop the record being saved unfinished.",
    points: 25,
  },
  {
    icon: "📅❓",
    title: "Real data: client is 5 metres tall",
    story: "A client record says height: 5 metres. The value is present, but it is not realistic for a person.",
    clue: "The number is outside a sensible human-height range.",
    answer: "wrong",
    bubbles: ["❌ Check the height and confirm the unit", "✅ Accept 5 metres without checking", "🧁 Change the height to cake size"],
    tip: "A range and unit check can catch an impossible height, such as centimetres entered as metres.",
    points: 50,
  },
  {
    icon: "🩱💼",
    title: "The swimsuit at work",
    story: "Everyone is dressed for the office except one person wearing a swimming costume. The value does not fit the situation.",
    clue: "A value is present, but it is not suitable or correct.",
    answer: "wrong",
    bubbles: ["❌ Wrong data", "❓ Missing data", "👥 Duplicate data"],
    tip: "Wrong data is present but inaccurate or unsuitable. A format, range or accuracy check can catch it.",
    points: 50,
  },
  {
    icon: "📅❌",
    title: "Real data: impossible date",
    story: "The spreadsheet contains the date 32/13/2026. A date can be present and still be wrong.",
    clue: "The date format or calendar value is invalid.",
    answer: "wrong",
    bubbles: ["❌ Wrong data", "❓ Missing data", "👥 Duplicate data"],
    tip: "A date format and range check rejects impossible days and months.",
    points: 50,
  },
  {
    icon: "🎁📦",
    title: "The empty present",
    story: "A birthday present has a beautiful box—but nothing inside. The gift value is blank.",
    clue: "The record exists, but the value inside it is missing.",
    answer: "missing",
    bubbles: ["❓ Missing data", "❌ Wrong data", "👥 Duplicate data"],
    tip: "An empty box is a useful way to remember missing data: the field exists, but its value has not been supplied.",
    points: 25,
  },
  {
    icon: "📞❌",
    title: "Real data: pizza with zero toppings",
    story: "A customer orders a pizza with zero extra toppings. Is this automatically dirty data?",
    clue: "Zero can be a real choice, not an error.",
    answer: "wrong",
    bubbles: ["✅ Accept 0 if plain pizza is allowed", "❌ Force the customer to add a topping", "🗑️ Delete the pizza order"],
    tip: "Good validation should not reject a legitimate zero. Check the business rule first: a plain pizza may be perfectly valid.",
    points: 50,
  },
  {
    icon: "🍰🍰🍰🍰🍰",
    title: "Five cakes from five friends",
    story: "Five friends bring the exact same cake and the party list records five identical cake entries. Delicious—but the list is counting one cake idea repeatedly.",
    clue: "The same item has been recorded again and again.",
    answer: "duplicate",
    bubbles: ["👥 Duplicate data", "❌ Wrong data", "❓ Missing data"],
    tip: "Repeated identical records are duplicates. A unique ID or duplicate check helps keep one clean entry.",
    points: 30,
  },
  {
    icon: "🪪👥",
    title: "Real data: sandwich sent abroad",
    story: "A local sandwich shop receives an order with a delivery address in another country.",
    clue: "The address may not match the service area or delivery-country rule.",
    answer: "wrong",
    bubbles: ["❌ Check the country and delivery address", "✅ Send the sandwich overseas automatically", "🧳 Change the sandwich into a passport"],
    tip: "A country and service-area check can catch an address that does not match the shop's delivery rules.",
    points: 50,
  },
  {
    icon: "🎬👻",
    title: "The spooky movie list",
    story: "A scary horror film has appeared in a cheerful children’s cartoon list. The title is present, but it is in the wrong category.",
    clue: "The value exists, but it does not belong in this list.",
    answer: "wrong",
    bubbles: ["❌ Wrong data", "👥 Duplicate data", "❓ Missing data"],
    tip: "A value in the wrong category is inaccurate data. A category or validation rule can catch it.",
    points: 50,
  },
  {
    icon: "🧾👥",
    title: "Real data: invalid email",
    story: "A customer email is recorded as alex.example.com. It is missing the usual @ part.",
    clue: "The value does not match a basic email format.",
    answer: "wrong",
    bubbles: ["❌ Ask for a correctly formatted email", "✅ Send the receipt to alex.example.com", "📮 Treat it as a postcode"],
    tip: "An email-format check can catch a missing @ or domain separator before sending a receipt.",
    points: 50,
  },
  {
    icon: "📮❌",
    title: "Real data: invalid postcode",
    story: "A delivery postcode is recorded as 12345XYZ, but the shop expects a local postcode pattern.",
    clue: "The postcode has the wrong structure for this delivery area.",
    answer: "wrong",
    bubbles: ["❌ Ask for a postcode in the expected format", "✅ Deliver without checking", "🎨 Change the postcode colour"],
    tip: "A postcode format and area check can catch values that do not match the expected delivery pattern.",
    points: 50,
  },
  {
    icon: "🎂🔢",
    title: "Real data: customer is 250 years old",
    story: "A customer record says age: 250. The number is present, but it is outside a realistic human-age range.",
    clue: "The age value is outside a sensible range.",
    answer: "wrong",
    bubbles: ["❌ Check the age and confirm the date of birth", "✅ Accept 250 without checking", "🎂 Add 250 candles"],
    tip: "A range check can flag an impossible age and prompt the organisation to verify the date of birth.",
    points: 50,
  },
  {
    icon: "💷➖",
    title: "Real data: negative product price",
    story: "A shop product has been saved with a price of -£10. The price field is present, but a normal product cannot cost less than zero.",
    clue: "The price breaks the shop's business rule.",
    answer: "wrong",
    bubbles: ["❌ Check the price is zero or higher", "✅ Charge the customer -£10", "🛍️ Give every product away"],
    tip: "A minimum-value check can reject negative prices while still allowing a genuine free item priced at £0.",
    points: 50,
  },
];

const funSceneTitles = new Set([
  "The three-hat guest",
  "The guest with no shoes",
  "The swimsuit at work",
  "The empty present",
  "Five cakes from five friends",
  "The spooky movie list",
]);
const realChoices = {
  "Real data: 1,000 burgers": {
    question: "What should the cleaner do with this unusually large quantity?",
    options: ["Check the quantity and confirm it", "Ship 1,000 automatically", "Delete the whole customer"],
    answer: 0,
    explanation: "A range check or confirmation step can catch an accidental extra zero before the order is processed.",
  },
  "Real data: client is 5 metres tall": {
    question: "What should happen to the 5-metre height?",
    options: ["Check the height and confirm the unit", "Accept 5 metres without checking", "Change the height to cake size"],
    answer: 0,
    explanation: "A range and unit check can catch an impossible height, such as centimetres entered as metres.",
  },
  "Real data: impossible date": {
    question: "Which date could replace 32/13/2026?",
    options: ["31/12/2026", "32/13/2026", "99/99/2026"],
    answer: 0,
    explanation: "There is no month 13 or day 32. A valid date must use a real month and day.",
  },
  "Real data: pizza with zero toppings": {
    question: "What should happen when a customer orders zero extra toppings?",
    options: ["Accept 0 if a plain pizza is allowed", "Force the customer to add a topping", "Delete the pizza order"],
    answer: 0,
    explanation: "Zero can be a legitimate choice. Good validation checks the business rule instead of rejecting every zero.",
  },
  "Real data: sandwich sent abroad": {
    question: "What should the shop check about this sandwich order?",
    options: ["Check the country and delivery address", "Send the sandwich overseas automatically", "Change the sandwich into a passport"],
    answer: 0,
    explanation: "A country and service-area check can catch an address that does not match the shop's delivery rules.",
  },
  "Real data: invalid email": {
    question: "What should happen to alex.example.com?",
    options: ["Ask for a correctly formatted email", "Send the receipt to alex.example.com", "Treat it as a postcode"],
    answer: 0,
    explanation: "The value is missing the usual @ part, so an email-format check should reject it.",
  },
  "Real data: invalid postcode": {
    question: "What should happen to postcode 12345XYZ?",
    options: ["Ask for a postcode in the expected format", "Deliver without checking", "Change the postcode colour"],
    answer: 0,
    explanation: "A postcode format and area check can catch a value that does not match the expected delivery pattern.",
  },
  "Real data: customer is 250 years old": {
    question: "What should happen to the age value 250?",
    options: ["Check the age and confirm the date of birth", "Accept 250 without checking", "Add 250 candles"],
    answer: 0,
    explanation: "A range check can flag an impossible age and prompt verification of the date of birth.",
  },
  "Real data: negative product price": {
    question: "What should happen to the product price -£10?",
    options: ["Check the price is zero or higher", "Charge the customer -£10", "Give every product away"],
    answer: 0,
    explanation: "A minimum-value rule rejects negative prices while still allowing a genuine free item priced at £0.",
  },
};
levels.sort((first, second) => {
  const firstIsReal = Number(!funSceneTitles.has(first.title));
  const secondIsReal = Number(!funSceneTitles.has(second.title));
  return firstIsReal - secondIsReal;
});

let levelIndex = 0;
let score = 0;
let mistakes = 0;
let combo = 0;
const app = document.querySelector("#app");

function render() {
  if (levelIndex >= levels.length) {
    renderReport();
    return;
  }
  const level = levels[levelIndex];
  const isRealData = !funSceneTitles.has(level.title);
  const phaseLabel = isRealData ? "Real data round" : "Fun scene round";
  const phaseHint = isRealData
    ? "Now apply the same idea to a real spreadsheet example."
    : "First, learn the idea through a funny everyday scene.";
  const realChoice = realChoices[level.title];
  const choices = realChoice ? realChoice.options : level.bubbles;
  app.innerHTML = `
    <section class="card glass p-6 fade-in">
      <p class="font-bold uppercase tracking-widest text-emerald-600">Mission 04 · The Hopscotch Experiment</p>
      <h1 class="mt-2 text-4xl font-black">Spot the silly data! 🐟</h1>
      <p class="mt-3 max-w-2xl text-lg">We have two rounds: six funny scenes first, then real spreadsheet challenges. Look carefully at what is unusual, then choose the best data-quality decision.</p>
      <div class="mt-5 flex flex-wrap gap-2 text-sm font-bold">
        <span class="rounded-full bg-emerald-200 px-3 py-1 text-emerald-900">${phaseLabel} · ${levelIndex + 1}/${levels.length}</span>
        <span class="rounded-full bg-slate-900 px-3 py-1 text-white">⭐ ${score} points</span>
        <span class="rounded-full bg-amber-100 px-3 py-1 text-amber-900">🔥 Combo x${Math.max(1, combo)}</span>
        <span class="rounded-full bg-rose-100 px-3 py-1 text-rose-800">💧 ${mistakes} splashes</span>
      </div>
      <div class="data-sky mt-6">
        <div class="sky-cloud cloud-one">☁️</div><div class="sky-cloud cloud-two">☁️</div>
        <div class="sky-fish" aria-hidden="true">🐟</div>
        <div class="sky-platform platform-one">1</div><div class="sky-platform platform-two">2</div><div class="sky-platform platform-three">3</div>
        <div class="sky-player">🧑‍🔬<small>DATA CLEANER</small></div>
        <div class="sky-rain">✦ ❓ ✦ ❌ ✦ 👥 ✦ ✅ ✦</div>
      </div>
      <article class="mt-5 rounded-3xl border-2 border-emerald-300 bg-emerald-50 p-6 text-center dark:border-emerald-900 dark:bg-emerald-950/20">
        <div class="text-7xl" aria-label="Silly data scene">${level.icon}</div>
        <h2 class="mt-3 text-2xl font-black">${level.title}</h2>
        <p class="mx-auto mt-2 max-w-xl text-lg">${level.story}</p>
        <p class="mx-auto mt-3 max-w-xl rounded-xl bg-white/70 p-3 text-sm font-bold dark:bg-slate-900/50">🔎 Clue: ${level.clue}</p>
        <p class="mt-3 text-sm font-bold text-emerald-700 dark:text-emerald-300">${phaseHint}</p>
      </article>
      <h3 class="mt-6 text-xl font-black">${realChoice ? realChoice.question : "What kind of data problem is this?"}</h3>
      <p class="mt-1 text-sm">${realChoice ? "Choose the best data-cleaning decision." : "Catch the right label before it splashes into the dataset!"}</p>
      <div class="mt-3 grid gap-3 sm:grid-cols-3">${choices.map((choice, index) => `<button class="data-bubble rounded-2xl border-2 border-sky-200 bg-sky-50 p-4 text-left text-lg transition hover:-translate-y-1 hover:border-emerald-500 dark:border-sky-900 dark:bg-slate-800" data-bubble="${index}">${choice}</button>`).join("")}</div>
      <div id="reaction" class="mt-5 min-h-20 rounded-2xl bg-slate-100 p-4 text-center dark:bg-slate-800"><span class="text-4xl">🐟</span><p class="mt-1 text-sm font-bold">${realChoice ? "Read the record and choose the best correction." : "Read the scene and choose a data-quality label!"}</p></div>
    </section>`;
  document.querySelectorAll("[data-bubble]").forEach((button) => {
    button.onclick = () => catchBubble(Number(button.dataset.bubble), level);
  });
}

function catchBubble(choice, level) {
  const realChoice = realChoices[level.title];
  if (realChoice) {
    if (choice !== realChoice.answer) {
      mistakes += 1;
      combo = 0;
      gameAudio.wrong();
      document.querySelector("#reaction").innerHTML = `<span class="text-4xl">💦</span><p class="mt-1 text-sm font-bold">Not quite. ${realChoice.explanation}</p>`;
      const sky = document.querySelector(".data-sky");
      sky.classList.remove("shake-wrong");
      void sky.offsetWidth;
      sky.classList.add("shake-wrong");
      return;
    }
    score += level.points * Math.max(1, combo);
    combo += 1;
    gameAudio.correct();
    document.querySelector("#reaction").innerHTML = `<span class="text-4xl">✨📊✨</span><p class="mt-1 text-sm font-bold">Correct! ${realChoice.explanation}</p>`;
    document.querySelectorAll("[data-bubble]").forEach((button) => {
      button.disabled = true;
      button.classList.add("opacity-60");
    });
    window.setTimeout(() => {
      levelIndex += 1;
      render();
    }, 950);
    return;
  }
  const selected = level.bubbles[choice];
  const isCorrect = selected.startsWith(level.answer === "missing" ? "❓" : level.answer === "wrong" ? "❌" : "👥");
  if (!isCorrect) {
    mistakes += 1;
    combo = 0;
    gameAudio.wrong();
    document.querySelector("#reaction").innerHTML = `<span class="text-4xl">💦</span><p class="mt-1 text-sm font-bold">Splash! That label does not match the scene. ${level.tip}</p>`;
    const sky = document.querySelector(".data-sky");
    sky.classList.remove("shake-wrong");
    void sky.offsetWidth;
    sky.classList.add("shake-wrong");
    return;
  }
  score += level.points * Math.max(1, combo);
  combo += 1;
  gameAudio.correct();
  document.querySelector("#reaction").innerHTML = `<span class="text-4xl">✨🐟✨</span><p class="mt-1 text-sm font-bold">Clean catch! +${level.points * Math.max(1, combo)} points. ${level.tip}</p>`;
  document.querySelectorAll("[data-bubble]").forEach((button) => {
    button.disabled = true;
    button.classList.add("opacity-60");
  });
  window.setTimeout(() => {
    levelIndex += 1;
    render();
  }, 950);
}

function renderReport() {
  const quality = Math.max(0, Math.round((levels.length / (levels.length + mistakes)) * 100));
  const rank = mistakes <= 1 ? "Sky Data Champion 🏆" : mistakes <= 3 ? "Rising Data Cleaner 🌤️" : "Trainee Data Swimmer 🐟";
  const evidence = `Data Quest Mission 04\nScore: ${score}\nQuality: ${quality}%\nRank: ${rank}\nI practised recognising missing, wrong and duplicate data.`;
  app.innerHTML = `<section class="card glass p-8 text-center fade-in"><div class="text-7xl">🌈🐟📊</div><h1 class="mt-4 text-4xl font-black">Data sky cleaned!</h1><p class="mt-3 text-2xl font-black text-emerald-700">${rank}</p><p class="mt-3 text-lg">Score: ${score} · Quality: ${quality}% · Splashes: ${mistakes}</p><div class="mx-auto mt-6 max-w-md rounded-2xl bg-slate-900 p-5 text-left text-white"><p class="font-black text-emerald-300">📊 Data report card</p><p class="mt-2">Completeness ✅ Missing values recognised</p><p>Accuracy ✅ Wrong values recognised</p><p>Uniqueness ✅ Duplicate records recognised</p></div><button id="copy" class="mt-7 rounded-xl bg-emerald-600 px-5 py-3 font-bold text-white">Copy OneNote evidence</button></section>`;
  document.querySelector("#copy").onclick = async () => {
    await navigator.clipboard.writeText(evidence);
    document.querySelector("#copy").textContent = "Evidence copied ✓";
  };
}

render();
