const rounds = [
  {
    icon: "🍕", title: "🍕 Pizza Palace",
    story: "The pizza chef makes Margherita and Pepperoni. Each recipe gets its own special label so the kitchen can find it again tomorrow.",
    prompt: "Which clue should go on the pizza recipe card?",
    options: ["🍕 PizzaID: P01", "🍍 Pineapple on everything", "🦕 A dinosaur"],
    answer: 0, successEmoji: "🧀",
    successText: "Cheese clue unlocked! 🧀 PizzaID identifies one pizza recipe.",
    tip: "PizzaID is a primary key: it identifies one recipe. Toppings describe it, but the ID finds the exact record.",
  },
  {
    icon: "🥪", title: "🥪 Sandwich Station",
    story: "An egg sandwich uses toast and mayo. Other sandwiches can use those same ingredients, so the chef keeps useful labels on the recipe cards.",
    prompt: "Which pair describes one sandwich ingredient pairing?",
    options: ["🥪 SandwichID + 🧂 IngredientID", "🧙‍♂️ A magic spell", "🎈 Balloon colour"],
    answer: 0, successEmoji: "🥚",
    successText: "Egg clue unlocked! 🥚 The two sandwich labels work together.",
    tip: "Together, the two IDs form a composite or joint key: they tell us which ingredient belongs in which sandwich.",
  },
  {
    icon: "🌮", title: "🌮 Taco Truck",
    story: "The taco truck serves crunchy and soft tacos. The same salsa can appear in lots of orders, so each taco recipe needs a clear link.",
    prompt: "What should the order card link back to?",
    options: ["🌮 TacoID", "🐙 Octopus birthday", "🎨 Hat colour"],
    answer: 0, successEmoji: "🌶️",
    successText: "Salsa clue unlocked! 🌶️ TacoID links an order back to its taco recipe.",
    tip: "TacoID is a foreign key when it appears on an order card and points to the taco recipe.",
  },
  {
    icon: "🌯", title: "🌯 Burrito Builder",
    story: "A burrito can contain rice, beans and salsa. One order may contain several burritos, so the kitchen needs a label for each order.",
    prompt: "Which clue identifies one burrito order?",
    options: ["🌯 BurritoOrderID", "🪄 A magic spell", "🦖 Dinosaur size"],
    answer: 0, successEmoji: "🫘",
    successText: "Bean clue unlocked! 🫘 BurritoOrderID identifies one order.",
    tip: "A primary key gives each order its own identity, even when the same customer orders again.",
  },
  {
    icon: "🍣", title: "🍣 Conveyor Belt Sushi",
    story: "Salmon sushi, rice and seaweed appear on many plates. The chef stores each ingredient once and connects it to the dishes that use it.",
    prompt: "Why keep seaweed in its own ingredient list?",
    options: ["♻️ Many sushi dishes can reuse it", "🔒 It belongs to one plate only", "👽 AlienID + SpaceshipID"],
    answer: 0, successEmoji: "🍣",
    successText: "Sushi clue unlocked! 🍣 One ingredient can be linked to many dishes.",
    tip: "A junction table connects each sushi dish with its ingredients without copying details repeatedly.",
  },
  {
    icon: "🍜", title: "🍜 Ramen Kitchen",
    story: "The ramen kitchen stores each noodle bowl once, but lots of orders can ask for the same bowl. Each order needs a link back to it.",
    prompt: "What should the order link do?",
    options: ["🔗 Point to the ramen record", "🎨 Make the broth colourful", "🗑️ Eat every duplicate"],
    answer: 0, successEmoji: "🍜",
    successText: "Ramen clue unlocked! 🍜 The link connects an order to its bowl.",
    tip: "That link is a foreign key. It can repeat because many orders may point to the same ramen record.",
  },
  {
    icon: "🧋", title: "🧋 Bubble Tea Counter",
    story: "Mina buys bubble tea today and next week. Her name appears twice, so the counter writes a fresh number on every order.",
    prompt: "Which clue should identify each bubble-tea order?",
    options: ["🧋 OrderID", "👩 Mina's name", "🫧 Bubble size only"],
    answer: 0, successEmoji: "🫧",
    successText: "Bubble clue unlocked! 🫧 OrderID gives each order its own identity.",
    tip: "A primary key identifies one order. A customer can place many orders, so a name is not unique enough.",
  },
  {
    icon: "🍰", title: "🍰 Cake Shop",
    story: "The bakery sells strawberry cake in small and large sizes. Each size card needs a path back to the cake recipe.",
    prompt: "Which clue should the size card carry?",
    options: ["🍰 CakeID", "💷 Price only", "🧙‍♀️ A wizard password"],
    answer: 0, successEmoji: "🍓",
    successText: "Strawberry clue unlocked! 🍓 CakeID links each size back to its cake.",
    tip: "CakeID is a foreign key: it points back to the cake record that owns the size option.",
  },
  {
    icon: "🍦", title: "🍦 Ice Cream Sundae Lab",
    story: "Two strawberry sundaes have different sizes and prices. The lab wants each size option to be easy to tell apart.",
    prompt: "Which pair could identify one sundae option?",
    options: ["🍦 SundaeID + 📏 Size", "🍓 Flavour only", "💷 Price only"],
    answer: 0, successEmoji: "🍨",
    successText: "Sundae clue unlocked! 🍨 SundaeID plus Size identifies the option.",
    tip: "The same sundae can have several sizes, so the two clues work together as a composite key.",
  },
  {
    icon: "🥔", title: "🥔 Crisps Snack Shelf",
    story: "One snack box can contain many crisp flavours, and one flavour can appear in many boxes. A little list connects both sides.",
    prompt: "Which table is useful for connecting boxes and flavours?",
    options: ["🗂️ BoxFlavours", "🎨 ColourChoices", "🦄 UnicornRoster"],
    answer: 0, successEmoji: "🥔",
    successText: "Crisp clue unlocked! 🥔 BoxFlavours joins snack boxes and flavours together.",
    tip: "A junction table represents a many-to-many relationship without repeating all the food details.",
  },
];

const wrongReactions = [
  [
    "🍍 Pineapple has joined the topping party, but it cannot identify the recipe!",
    "🦕 The dinosaur stomped into the kitchen, but it is not a useful recipe label!",
  ],
  [
    "🧙‍♂️ The spell made the sandwich magical, but it did not identify the ingredient pairing!",
    "🎈 A balloon floated away from the sandwich board. Try the two food labels together!",
  ],
  [
    "🐙 Octopus birthday noted! It still cannot link this taco to its recipe.",
    "🎨 Hat colour is stylish, but the taco truck needs its recipe ID!",
  ],
  [
    "🪄 The burrito magic fizzled. We need a label for the order, not a spell!",
    "🦖 The dinosaur took the burrito, but it cannot identify the order!",
  ],
  [
    "🔒 Seaweed cannot belong to only one plate—it is shared by lots of sushi dishes!",
    "👽 The alien pairing flew away. Look for the ingredient clue that can be reused!",
  ],
  [
    "🎨 Colourful broth is fun, but it does not point to the ramen record!",
    "🗑️ The duplicate-eating plan is too hungry. We need a link to the bowl!",
  ],
  [
    "👩 Mina's name appears on more than one order, so it cannot identify just one bubble tea!",
    "🫧 Bubble size can change, but it cannot identify the whole order!",
  ],
  [
    "💷 Price can change when the bakery updates its menu, so it is not the best link!",
    "🧙‍♀️ The wizard password is mysterious, but CakeID is the useful bakery clue!",
  ],
  [
    "🍓 Flavour alone is not enough when the same sundae comes in different sizes!",
    "💷 Price alone cannot tell two sundae options apart. Use the sundae and size together!",
  ],
  [
    "🎨 Colour choices do not connect a crisp box to its flavours!",
    "🦄 The unicorn roster is magical, but BoxFlavours is the useful joining list!",
  ],
];

let roundIndex = 0;
let score = 0;
let mistakes = 0;
let collectedClues = [];
const app = document.querySelector("#app");

function render() {
  if (roundIndex >= rounds.length) {
    renderComplete();
    return;
  }
  const round = rounds[roundIndex];
  const shuffledOptions = round.options
    .map((text, index) => ({ text, index }))
    .sort(() => Math.random() - 0.5);
  const hearts = `${"❤️".repeat(Math.max(0, 3 - mistakes))}${"🖤".repeat(Math.min(3, mistakes))}`;
  app.innerHTML = `
    <section id="mystery-card" class="card glass p-7 fade-in">
      <p class="font-bold uppercase tracking-widest text-amber-600">Mission 03 · Food Database Detective</p>
      <h1 class="mt-2 text-4xl font-black">Tasty clues 🕵️</h1>
      <p class="mt-3 max-w-2xl text-lg">Solve ten food mysteries, collect delicious clues and discover how databases keep recipes organised!</p>
      <div class="mt-6 flex flex-wrap gap-2 text-sm font-bold">
        <span class="rounded-full bg-amber-200 px-3 py-1 text-amber-900">Food mystery ${roundIndex + 1}/${rounds.length}</span>
        <span class="rounded-full bg-slate-900 px-3 py-1 text-white">⭐ ${score} points</span>
        <span class="rounded-full bg-rose-100 px-3 py-1 text-rose-800" aria-label="${Math.max(0, 3 - mistakes)} hearts remaining">💖 ${hearts}</span>
        <span class="rounded-full bg-violet-100 px-3 py-1 text-violet-800">🍽️ ${collectedClues.length ? collectedClues.join(" ") : "Empty clue tray"}</span>
      </div>
      <article class="mt-6 rounded-3xl border-2 border-amber-300 bg-amber-50 p-6 text-center dark:border-amber-900 dark:bg-amber-950/20">
        <div class="text-7xl">${round.icon}</div>
        <h2 class="mt-3 text-3xl font-black">${round.title}</h2>
        <p class="mx-auto mt-3 max-w-xl text-lg">${round.story}</p>
      </article>
      <article class="mt-6 rounded-2xl border border-slate-200 bg-white/80 p-5 dark:border-slate-700 dark:bg-slate-900/70">
        <h3 class="text-2xl font-black">${round.prompt}</h3>
        <div class="mt-4 grid gap-3">${shuffledOptions.map((option, index) => `<button class="choice rounded-2xl border-2 border-slate-200 bg-white p-4 text-left text-lg transition hover:-translate-y-1 hover:border-amber-500 dark:border-slate-700 dark:bg-slate-800" data-answer="${option.index}">${String.fromCharCode(65 + index)}. ${option.text}</button>`).join("")}</div>
        <div id="reaction" class="mt-5 min-h-20 rounded-2xl bg-amber-100 p-4 text-center dark:bg-amber-950/40"><span class="text-5xl">🕵️</span><p class="mt-1 text-sm font-bold">Choose a food clue!</p></div>
        <p id="feedback" class="mt-4 min-h-8 font-bold"></p>
      </article>
      <div class="mt-5 rounded-2xl bg-slate-900 p-5 text-white">
        <p class="font-black text-amber-300">Tiny detective rule 🔎</p>
        <p class="mt-1 text-sm text-slate-200"><b>Primary key</b> identifies a row. <b>Foreign key</b> points to a row in another table. <b>Joint key</b> uses two clues together.</p>
      </div>
    </section>`;
  document.querySelectorAll("[data-answer]").forEach((button) => {
    button.onclick = () => answer(+button.dataset.answer, round);
  });
}

function answer(choice, round) {
  const feedback = document.querySelector("#feedback");
  if (choice !== round.answer) {
    mistakes += 1;
    gameAudio.wrong();
    const mysteryCard = document.querySelector("#mystery-card");
    mysteryCard.classList.remove("shake-wrong");
    void mysteryCard.offsetWidth;
    mysteryCard.classList.add("shake-wrong");
    const reactionText = wrongReactions[roundIndex][choice - 1] || "😲 That clue went on a tasty detour. Try another one!";
    document.querySelector("#reaction").innerHTML = `<span class="text-5xl">😲</span><p class="mt-1 text-sm font-bold">${reactionText}</p>`;
    feedback.textContent = `Nearly there! 💛 ${round.tip}`;
    return;
  }
  score += 1;
  collectedClues.push(round.successEmoji);
  gameAudio.correct();
  document.querySelector("#mystery-card").classList.add("pulse-success");
  document.querySelector("#reaction").innerHTML = `<span class="clue-pop inline-block text-5xl">${round.successEmoji}</span><p class="mt-1 text-sm font-bold">${round.successText}</p>`;
  feedback.textContent = `Brilliant detective work! 🎉 ${round.tip}`;
  document.querySelectorAll("[data-answer]").forEach((button) => {
    button.disabled = true;
    button.classList.add("opacity-60");
  });
  window.setTimeout(() => {
    roundIndex += 1;
    render();
  }, 900);
}

function renderComplete() {
  const rank = mistakes <= 2 ? "Master Data Sleuth 🕵️‍♂️" : mistakes <= 5 ? "Junior Investigator 🔎" : "Detective Trainee 🥐";
  const evidence = `Data Quest Mission 03\nScore: ${score}/${rounds.length}\nRank: ${rank}\nFood clues: ${collectedClues.join(" ")}\nI practised database keys through pizza, sandwiches, tacos, burritos, sushi, ramen, bubble tea, cake, ice cream and crisps.`;
  app.innerHTML = `<section class="card glass p-8 text-center fade-in"><div class="text-7xl">🎉🕵️‍♀️</div><h1 class="mt-4 text-4xl font-black">Food mysteries solved!</h1><p class="mt-3 text-2xl font-black text-violet-700">${rank}</p><p class="mt-3 text-lg">You earned ${score}/${rounds.length} points with ${mistakes} retries.</p><p class="mt-4 text-3xl" aria-label="Collected food clues">${collectedClues.join(" ")}</p><p class="mt-3 text-sm">Your food clue tray is full! One key identifies, one key links, and sometimes two clues work together.</p><button id="copy" class="mt-7 rounded-xl bg-amber-500 px-5 py-3 font-bold text-white">Copy OneNote evidence</button></section>`;
  document.querySelector("#copy").onclick = async () => {
    await navigator.clipboard.writeText(evidence);
    document.querySelector("#copy").textContent = "Evidence copied ✓";
  };
}

render();
