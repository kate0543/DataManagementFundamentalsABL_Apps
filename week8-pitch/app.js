const questions = [
  { category: "Foundations", icon: "🧱", prompt: "Which statement best describes data?", options: ["Raw facts or observations that can be recorded and processed", "A finished business decision", "Only numbers stored in a spreadsheet"], answer: 0, why: "Data is recorded facts, observations or measurements. Information is data interpreted in context." },
  { category: "Foundations", icon: "🗃️", prompt: "What is a database?", options: ["An organised collection of data managed for storage, retrieval and updates", "A backup power supply for a server", "A presentation slide containing charts"], answer: 0, why: "A database stores related data in a structured way and supports controlled access and querying." },
  { category: "Architecture", icon: "🏛️", prompt: "What is a data warehouse mainly designed for?", options: ["Analytical reporting using integrated, historical and structured data", "Storing every raw file without any organisation", "Replacing all operational applications"], answer: 0, why: "Warehouses are optimised for analytics, reporting and decision-making rather than day-to-day transactions." },
  { category: "Architecture", icon: "🌊", prompt: "What is a data lake?", options: ["A scalable store for raw structured, semi-structured and unstructured data", "A relational table containing only clean customer records", "A diagram showing network cables"], answer: 0, why: "A data lake keeps data in varied formats, often retaining it in raw form until it is needed." },
  { category: "Architecture", icon: "🧩", prompt: "What does a data model describe?", options: ["Data entities, attributes, relationships and business rules", "The monthly price of a cloud subscription", "The colour scheme for a dashboard"], answer: 0, why: "A data model provides a shared blueprint for how data is structured and related." },
  { category: "Pipeline", icon: "🔄", prompt: "What does ETL or data transformation involve?", options: ["Extracting data, changing it into a useful format and loading it into a target system", "Encrypting every file and deleting the original", "Hiring a team to enter data manually"], answer: 0, why: "Transformation can standardise formats, remove duplicates, validate fields and prepare data for use." },
  { category: "Sources", icon: "📥", prompt: "Which is an example of a data source?", options: ["A point-of-sale system, survey, sensor, API or paper form", "Only a cloud data centre", "A password policy by itself"], answer: 0, why: "Sources are where data originates. A proposal should explain collection method, ownership and quality risks." },
  { category: "Flows", icon: "🗺️", prompt: "What does a DFD (Data Flow Diagram) show?", options: ["How data moves between external entities, processes and data stores", "The visual identity of a company", "Only the physical location of laptops"], answer: 0, why: "A DFD helps analyse information flows, boundaries, inputs, outputs and storage points." },
  { category: "Cloud", icon: "☁️", prompt: "Which cloud service model provides a ready-to-use application?", options: ["SaaS", "PaaS", "IaaS"], answer: 0, why: "SaaS provides software managed by the provider. PaaS provides a development platform; IaaS provides virtualised infrastructure." },
  { category: "Cloud", icon: "🪣", prompt: "Which option best fits photos, videos and large file archives?", options: ["Cloud object storage", "A primary key column", "A CPU cache"], answer: 0, why: "Object storage is suited to unstructured files and can scale using buckets, metadata and lifecycle rules." },
  { category: "Governance", icon: "🧭", prompt: "What is data governance?", options: ["The roles, policies, standards and controls used to manage data responsibly", "A decision to put every file in the public cloud", "A chart showing sales growth"], answer: 0, why: "Governance defines accountability, ownership, quality, access, retention and acceptable use." },
  { category: "Ethics", icon: "⚖️", prompt: "Which action demonstrates ethical data management?", options: ["Collect only what is needed, explain the purpose and assess possible harm", "Collect everything because storage is cheap", "Hide automated decisions from affected people"], answer: 0, why: "Ethical practice considers fairness, transparency, minimisation, inclusion, consent and the effects on people." },
  { category: "UK law", icon: "🇬🇧", prompt: "Which UK rules are central when handling personal data?", options: ["UK GDPR and the Data Protection Act 2018", "Only copyright law", "Only the Companies Act"], answer: 0, why: "A UK proposal should address lawful basis, rights, security, minimisation, retention and accountability under UK GDPR and the DPA 2018." },
  { category: "EU law", icon: "🇪🇺", prompt: "What does EU GDPR generally regulate?", options: ["Processing and protection of personal data relating to people in the EU/EEA, with rights and accountability duties", "Only data stored on EU-owned laptops", "Only government databases"], answer: 0, why: "EU GDPR can apply to organisations offering services to, or monitoring, people in the EU/EEA. Location alone is not the whole test." },
  { category: "Compliance", icon: "🔐", prompt: "Which is a sensible compliance control for a new cloud system?", options: ["Role-based access, encryption, retention rules, audit logs and a documented risk assessment", "One shared administrator password", "Keeping data forever in case it becomes useful"], answer: 0, why: "Controls should be proportionate and demonstrable. Access, security, retention and risk decisions should be documented." },
  { category: "Assessment", icon: "🎤", prompt: "What makes a strong transformation recommendation?", options: ["It links a current problem to a realistic solution, benefits, limits, costs, risks and implementation steps", "It lists fashionable technologies without analysing suitability", "It promises that cloud migration removes every risk"], answer: 0, why: "The final assessment rewards evidence-based recommendations that fit the organisation and acknowledge trade-offs." },
  { category: "Quality", icon: "✅", prompt: "Which set contains common data-quality dimensions?", options: ["Accuracy, completeness, consistency, validity, uniqueness and timeliness", "Colour, font, animation and screen size", "Revenue, profit, tax and interest only"], answer: 0, why: "Quality is multi-dimensional. Define measurable checks that match the organisation’s purpose and risk." },
  { category: "Metadata", icon: "🏷️", prompt: "What is metadata?", options: ["Data about data, such as its meaning, owner, format, source and update date", "A second copy of every database", "A legal contract with a cloud supplier"], answer: 0, why: "Metadata makes data discoverable and understandable. A catalogue can record definitions, owners, lineage and sensitivity." },
  { category: "Governance", icon: "🧑‍💼", prompt: "What is the difference between a data owner and a data steward?", options: ["An owner is accountable for decisions; a steward helps apply standards and maintain quality", "They are two names for the same database table", "A steward is always the cloud provider"], answer: 0, why: "Clear accountability prevents data governance becoming nobody’s responsibility." },
  { category: "Architecture", icon: "⭐", prompt: "What is master data?", options: ["Shared core entities such as Customer, Product or Supplier used consistently across systems", "Temporary log files created during a server restart", "A dashboard’s largest number"], answer: 0, why: "Master data management reduces conflicting versions of important business entities." },
  { category: "Integration", icon: "🔌", prompt: "Why might an organisation use an API?", options: ["To let systems exchange defined data and services in a controlled, reusable way", "To physically connect two buildings with a cable", "To replace data protection policies"], answer: 0, why: "APIs support integration, but need authentication, authorisation, validation, rate limits and monitoring." },
  { category: "Modelling", icon: "🔑", prompt: "What do primary and foreign keys help establish?", options: ["Unique records and relationships between tables", "The legal basis for processing personal data", "The size of a cloud invoice"], answer: 0, why: "Keys support referential integrity and reliable joins in relational data models." },
  { category: "Modelling", icon: "🧼", prompt: "Why is normalisation used in relational design?", options: ["To reduce unnecessary duplication and update anomalies by organising related data", "To make every table contain every possible field", "To turn all structured data into video files"], answer: 0, why: "Normalisation improves consistency, although analytical models may deliberately denormalise for performance." },
  { category: "Lifecycle", icon: "♻️", prompt: "What does data lifecycle management cover?", options: ["Creation or collection, use, sharing, storage, retention, archiving and secure disposal", "Only the moment a spreadsheet is first created", "Only buying a larger hard drive"], answer: 0, why: "Lifecycle rules align business value, legal duties, cost, security and deletion requirements." },
  { category: "Lineage", icon: "🧵", prompt: "What does data lineage help you understand?", options: ["Where data came from, how it changed and where it is used", "Which employee has the newest laptop", "How to make a chart colourful"], answer: 0, why: "Lineage supports trust, impact analysis, troubleshooting, auditability and regulatory responses." },
  { category: "Resilience", icon: "🛟", prompt: "What do RTO and RPO mean?", options: ["Recovery Time Objective and Recovery Point Objective", "Raw Table Output and Record Processing Order", "Regional Transfer Office and Public Organisation"], answer: 0, why: "RTO is the target recovery time; RPO is the acceptable amount of data loss measured in time." },
  { category: "Privacy", icon: "🕵️", prompt: "What is privacy by design?", options: ["Building privacy safeguards into systems and processes from the beginning, not adding them later", "Publishing all data openly by default", "Using privacy notices instead of security controls"], answer: 0, why: "Privacy by design supports minimisation, access controls, secure defaults, transparency and accountability." },
  { category: "Risk", icon: "📝", prompt: "When is a DPIA useful?", options: ["Before processing likely to create high risk to people’s rights and freedoms", "Only after a data breach has finished", "Whenever a company buys office furniture"], answer: 0, why: "A Data Protection Impact Assessment identifies risks, safeguards and whether processing is proportionate." },
  { category: "Security", icon: "🎟️", prompt: "What does least privilege mean?", options: ["Give each person or system only the access needed for its task and no more", "Give all staff administrator rights for convenience", "Allow access without logging it"], answer: 0, why: "Least privilege limits accidental and malicious harm and should be reviewed as roles change." },
  { category: "Consulting", icon: "🗣️", prompt: "What is a good first question in a data consultancy interview?", options: ["What business decision or outcome must the data support, and what is happening today?", "Which technology is most fashionable this year?", "How can we collect the maximum amount of data?"], answer: 0, why: "Start with outcomes, users, current process and constraints before selecting architecture or tools." },
  { category: "Flows", icon: "🗺️", prompt: "What is a DFD (Data Flow Diagram)?", options: ["A diagram showing how data moves between external entities, processes and data stores", "A database table containing every field in an organisation", "A cloud invoice showing data-transfer costs"], answer: 0, why: "A DFD maps inputs, transformations, outputs and storage. Use it to discover silos, duplicated entry, missing controls and unclear ownership." },
  { category: "Pipelines", icon: "📤", prompt: "What does ETL mean?", options: ["Extract, Transform, Load: change data before loading it into the target store", "Encrypt, Transfer, Lock: secure a file before deleting it", "Evaluate, Test, Launch: release a new application"], answer: 0, why: "ETL transforms data before loading it, which is useful when the target warehouse needs clean, standardised structures." },
  { category: "Pipelines", icon: "📥", prompt: "What does ELT mean?", options: ["Extract, Load, Transform: load raw data first and transform it inside the target platform", "Encrypt, Log, Transfer: copy an encrypted backup", "Evaluate, Link, Test: connect two dashboards"], answer: 0, why: "ELT uses the target warehouse or lakehouse to transform data after loading. It can preserve raw data and scale transformation using cloud compute." },
  { category: "Data types", icon: "🔢", prompt: "What is structured data?", options: ["Data organised into a predictable schema, such as rows and columns in a relational table", "Only photographs and audio recordings", "Data that has never been collected"], answer: 0, why: "Structured data is easy to query with a defined schema. Examples include orders, accounts and inventory records." },
  { category: "Data types", icon: "🧾", prompt: "What is semi-structured data?", options: ["Data with tags or flexible fields, such as JSON, XML or event records", "Data with no meaning or context", "Only data printed on paper"], answer: 0, why: "Semi-structured data has useful organisation without a rigid table schema, so ingestion and validation still need careful design." },
  { category: "Data types", icon: "🎥", prompt: "What is unstructured data?", options: ["Content without a fixed tabular schema, such as documents, images, video, audio and emails", "A table with a primary key", "A validated numerical measure"], answer: 0, why: "Unstructured content often needs object storage, metadata, search, classification or specialist processing." },
  { category: "Databases", icon: "⚙️", prompt: "What is OLTP?", options: ["Online Transaction Processing for reliable day-to-day operations such as orders and payments", "Online Long-Term Presentation for board slides", "A data-lake file format"], answer: 0, why: "OLTP systems prioritise fast, consistent transactions. They are different from analytical OLAP systems." },
  { category: "Databases", icon: "📈", prompt: "What is OLAP?", options: ["Online Analytical Processing for exploring large, historical data across dimensions", "Online Login Access Protection", "A method for collecting paper forms"], answer: 0, why: "OLAP supports reporting and analysis such as trends by month, region, product or customer segment." },
  { category: "Databases", icon: "🧮", prompt: "What is SQL used for?", options: ["Defining, querying, updating and controlling access to relational data", "Designing only the colours of a website", "Encrypting a hard drive without a key"], answer: 0, why: "SQL supports operations such as SELECT, INSERT, UPDATE, DELETE, joins, grouping and permissions." },
  { category: "Databases", icon: "🌐", prompt: "When might NoSQL be suitable?", options: ["When flexible schema, high scale or specialised access patterns fit better than a relational model", "Whenever data quality does not matter", "Only when an organisation has no users"], answer: 0, why: "NoSQL includes document, key-value, column-family and graph databases. Choose it for a justified workload, not because it is fashionable." },
  { category: "Databases", icon: "🔒", prompt: "What does ACID protect in a transaction?", options: ["Atomicity, Consistency, Isolation and Durability", "Access, Cloud, Internet and Devices", "Accuracy, Charts, Images and Dashboards"], answer: 0, why: "ACID properties help transactions remain reliable, especially when several users or systems work at once." },
  { category: "Analytics", icon: "📊", prompt: "What is business intelligence (BI)?", options: ["Using data, reports and dashboards to support monitoring and business decisions", "A single database backup", "A replacement for data governance"], answer: 0, why: "BI turns trusted data into useful information. A dashboard should show purpose, definitions, context and limitations." },
  { category: "Analytics", icon: "🎯", prompt: "What is a KPI?", options: ["A Key Performance Indicator linked to an important objective and measured consistently", "A key used to encrypt every database", "A type of cloud storage bucket"], answer: 0, why: "Good KPIs have a clear definition, owner, target, time period and reliable source." },
  { category: "Analytics", icon: "🔮", prompt: "How do descriptive, predictive and prescriptive analytics differ?", options: ["What happened; what may happen; and what action could be recommended", "Data, database and dashboard only", "Storage, networking and hardware"], answer: 0, why: "The three levels move from understanding the past to anticipating outcomes and supporting action." },
  { category: "Integration", icon: "🔁", prompt: "What is interoperability?", options: ["The ability of different systems or organisations to exchange and use data meaningfully", "The speed of a single laptop", "A rule that prevents systems sharing anything"], answer: 0, why: "Interoperability needs compatible formats, identifiers, definitions, interfaces and agreed governance." },
  { category: "Integration", icon: "⚡", prompt: "What is the difference between batch and streaming data?", options: ["Batch processes data in groups; streaming processes events continuously or with low delay", "Batch is always secure; streaming is always insecure", "Batch is only paper; streaming is only video"], answer: 0, why: "Choose based on business latency: payroll may be batch, while fraud alerts may need streaming." },
  { category: "Security", icon: "🪪", prompt: "What is the difference between authentication and authorisation?", options: ["Authentication verifies who you are; authorisation decides what you may access", "Authentication deletes data; authorisation backs it up", "They are identical terms"], answer: 0, why: "Strong access design uses identity, roles, least privilege, reviews and logging." },
  { category: "Security", icon: "🔏", prompt: "How is hashing different from encryption?", options: ["Hashing is designed as a one-way integrity or password function; encryption is reversible with a key", "Hashing is always reversible; encryption is never reversible", "They are two names for compression"], answer: 0, why: "Use the control for the purpose: hashing can verify integrity or protect passwords; encryption protects confidentiality." },
  { category: "Privacy", icon: "🎭", prompt: "What is pseudonymisation?", options: ["Replacing direct identifiers with a separate code so data is harder to link to a person", "Making personal data public", "Deleting every record permanently"], answer: 0, why: "Pseudonymised data can still be personal data if re-identification is possible. Protect the additional information separately." },
  { category: "Privacy", icon: "🧹", prompt: "What is data minimisation?", options: ["Collecting and using only personal data that is adequate, relevant and necessary for the purpose", "Collecting every possible field for future use", "Deleting data before it can be validated"], answer: 0, why: "Minimisation reduces privacy risk, storage cost and unnecessary exposure while supporting a defined purpose." },
  { category: "Privacy", icon: "⚖️", prompt: "What is a lawful basis under UK or EU GDPR?", options: ["A documented legal reason for processing personal data, such as consent, contract or legitimate interests", "A type of database index", "Permission automatically created by using cloud storage"], answer: 0, why: "Select and document the appropriate basis before processing; consent is not the only possible basis and must be genuine." },
  { category: "Regulation", icon: "🧑‍⚖️", prompt: "What is the difference between a data controller and processor?", options: ["The controller decides purposes and means; the processor handles data on the controller’s instructions", "The processor always owns the data; the controller only stores it", "They are both names for a backup system"], answer: 0, why: "Contracts, instructions, security duties and accountability should reflect the controller-processor relationship." },
  { category: "Cloud", icon: "🌍", prompt: "What is data residency or sovereignty?", options: ["The legal or policy requirements about where data is stored, processed and subject to jurisdiction", "The number of rows in a table", "A method of compressing images"], answer: 0, why: "Check location, transfer mechanisms, supplier terms, access by other jurisdictions and the organisation’s risk appetite." },
  { category: "Cloud", icon: "🔗", prompt: "What is vendor lock-in?", options: ["Difficulty, cost or risk involved in moving away from a provider’s services or formats", "A physical lock on a server room", "A type of multi-factor authentication"], answer: 0, why: "Assess portability, open standards, exit plans, contract terms, skills and migration costs before choosing a platform." },
  { category: "Resilience", icon: "💾", prompt: "What makes a backup strategy reliable?", options: ["Tested, protected and recoverable copies with suitable retention, access controls and recovery objectives", "One untested copy beside the production laptop", "A promise that cloud systems never fail"], answer: 0, why: "Backups need testing, isolation, monitoring and clear RPO/RTO targets. Availability is a shared responsibility." },
  { category: "Consulting", icon: "📐", prompt: "What is a target operating model for data?", options: ["A picture of future people, processes, technology, governance and capabilities needed to manage data", "A list of software logos with no implementation plan", "A report containing only historic sales"], answer: 0, why: "A target operating model connects the solution to responsibilities, processes, skills, controls and a realistic roadmap." },
];

let current = 0;
let score = 0;
let answers = [];
let pitchStep = 0;
let pitchScore = 0;
const flipped = new Set();
const vocabSeen = new Set();
const vocabKnown = new Set();
const pitchSteps = [
  { title: "1. Open with the organisation’s problem", icon: "🔎", prompt: "Choose the strongest opening card.", cards: [
    ["📋 Disconnected spreadsheets, paper records and standalone systems create silos, quality issues and slow decisions.", 3],
    ["💻 The organisation should buy the newest technology because modern tools are always better.", 0],
    ["✨ Data is interesting and every department should collect as much as possible.", 0],
  ] },
  { title: "2. Prove the problem with evidence", icon: "📊", prompt: "Which evidence makes the diagnosis convincing?", cards: [
    ["🧾 Show a simple DFD, examples of duplicate records and the impact on staff, customers and decisions.", 3],
    ["📣 Say that competitors use the cloud, without checking this organisation’s needs.", 0],
    ["🎨 Use a colourful slide with no source or explanation.", 0],
  ] },
  { title: "3. Recommend a realistic data solution", icon: "🏗️", prompt: "Select the strongest transformation proposal.", cards: [
    ["☁️ Introduce governed cloud services, an appropriate data model, quality controls and integration in manageable stages.", 3],
    ["🚀 Move every system to the cloud immediately and remove all local processes.", 0],
    ["🗄️ Store every file in one shared folder and call it a data strategy.", 0],
  ] },
  { title: "4. Make the recommendation responsible", icon: "⚖️", prompt: "Which closing card demonstrates professional practice?", cards: [
    ["🔐 Include UK GDPR/DPA 2018 or EU GDPR considerations, access control, retention, ethics, risks, costs and implementation steps.", 3],
    ["🛡️ Promise that encryption means the organisation has no remaining risk.", 0],
    ["📦 Keep personal data forever so the organisation can use it later.", 0],
  ] },
];
const app = document.querySelector("#app");

function render() {
  const question = questions[current];
  const percent = Math.round((current / questions.length) * 100);
  app.innerHTML = `<section class="card glass p-6 sm:p-8">
    <div class="flex flex-wrap items-start justify-between gap-4">
      <div><p class="font-bold uppercase tracking-widest text-fuchsia-600">Mission 08 · Final assessment readiness</p><p class="mt-1 text-sm font-bold text-slate-500">Question ${current + 1} of ${questions.length} · ${question.category}</p></div>
      <div class="rounded-full border border-fuchsia-200 bg-fuchsia-50 px-4 py-2 font-black text-fuchsia-700">⭐ ${score} points</div>
    </div>
    <div class="mt-5 h-3 overflow-hidden rounded-full bg-slate-200"><div class="h-full rounded-full bg-fuchsia-500 transition-all" style="width:${percent}%"></div></div>
    <div class="mt-8 flex items-start gap-4"><span class="text-5xl">${question.icon}</span><div><h1 class="text-2xl font-black sm:text-3xl">${question.prompt}</h1><p class="mt-2 text-slate-600 dark:text-slate-300">Choose the best consultant answer.</p></div></div>
    <div class="mt-6 grid gap-3">${question.options.map((option, index) => `<button class="answer-option rounded-2xl border-2 border-slate-200 p-4 text-left font-bold transition hover:-translate-y-0.5 hover:border-fuchsia-400 dark:border-slate-700" data-answer="${index}">${String.fromCharCode(65 + index)}. ${option}</button>`).join("")}</div>
    <div id="feedback" class="mt-5 min-h-16 rounded-2xl bg-slate-100 p-4 text-sm leading-relaxed dark:bg-slate-800">Your answer will reveal the explanation and assessment tip.</div>
    <div class="mt-6 flex flex-wrap items-center justify-between gap-3"><span class="text-sm font-bold text-slate-500">Topics include architecture, cloud, governance, ethics and UK/EU compliance.</span><button id="next" class="hidden rounded-xl bg-fuchsia-600 px-5 py-3 font-black text-white">Next challenge →</button></div>
  </section>`;
  document.querySelectorAll("[data-answer]").forEach((button) => {
    button.onclick = () => answer(Number(button.dataset.answer), question);
  });
}

function renderDictionary() {
  app.innerHTML = `<section class="card glass p-6 sm:p-8">
    <div class="flex flex-wrap items-start justify-between gap-4">
      <div><p class="font-bold uppercase tracking-widest text-fuchsia-600">Mission 08 · Data dictionary deck</p><h1 class="mt-2 text-3xl font-black">Flip the vocabulary cards 🃏</h1><p class="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">Click a card to reveal its meaning. Read the example, then mark whether you know it or need to review it before the final assessment.</p></div>
      <div class="flex flex-wrap items-center justify-end gap-2"><div id="vocab-progress" class="rounded-full border border-fuchsia-200 bg-fuchsia-50 px-4 py-2 font-black text-fuchsia-700">0/${questions.length} explored</div><button id="skip-pitch" class="rounded-full bg-fuchsia-600 px-4 py-2 text-sm font-black text-white">Skip to pitch →</button></div>
    </div>
    <div class="dictionary-grid mt-8">${questions.map((question, index) => `<article class="dictionary-card ${flipped.has(index) ? "is-flipped" : ""} ${vocabKnown.has(index) ? "card-known" : ""}" data-card="${index}" tabindex="0" role="button" aria-label="Flip ${question.category} vocabulary card"><div class="dictionary-card-inner"><div class="dictionary-face dictionary-front"><span class="dictionary-star">${vocabKnown.has(index) ? "⭐" : ""}</span><span class="text-4xl">${question.icon}</span><small>${question.category}</small><h2>${question.prompt.replace(/^Which statement best describes |^What is |^What does |^Which is |^What does a |^Which option best fits |^What is an |^What makes /i, "").replace("?", "")}</h2><span class="dictionary-hint">Click to flip ↻</span></div><div class="dictionary-face dictionary-back"><span class="text-3xl">${question.icon}</span><small>${question.category}</small><h2>${dictionaryTerm(question, index)}</h2><p>${question.why}</p><div class="dictionary-actions"><button class="dictionary-rate know" data-known="${index}">⭐ Know it</button><button class="dictionary-rate review" data-review="${index}">💡 Review</button></div></div></div></article>`).join("")}</div>
    <div class="mt-8 flex flex-wrap items-center justify-between gap-3"><span class="text-sm font-bold text-slate-500">Explore every card to unlock your self-check result.</span><button id="dictionary-complete" class="hidden rounded-xl bg-fuchsia-600 px-5 py-3 font-black text-white">See vocabulary result →</button></div>
  </section>`;
  document.querySelectorAll("[data-card]").forEach((card) => {
    const flip = () => { const index = Number(card.dataset.card); flipped.has(index) ? flipped.delete(index) : flipped.add(index); card.classList.toggle("is-flipped"); vocabSeen.add(index); updateDictionaryProgress(); };
    card.onclick = (event) => { if (!event.target.closest("button")) flip(); };
    card.onkeydown = (event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); flip(); } };
  });
  document.querySelectorAll("[data-known]").forEach((button) => button.onclick = (event) => {
    event.stopPropagation();
    const index = Number(button.dataset.known);
    vocabSeen.add(index);
    vocabKnown.add(index);
    score = vocabKnown.size;
    const card = button.closest(".dictionary-card");
    card.classList.add("card-known");
    card.querySelector(".dictionary-star").textContent = "⭐";
    updateDictionaryProgress();
  });
  document.querySelectorAll("[data-review]").forEach((button) => button.onclick = (event) => {
    event.stopPropagation();
    const index = Number(button.dataset.review);
    vocabSeen.add(index);
    vocabKnown.delete(index);
    score = vocabKnown.size;
    button.closest(".dictionary-card").classList.add("card-review");
    showReviewPopup(questions[index], index);
    updateDictionaryProgress();
  });
  document.querySelector("#skip-pitch").onclick = () => { pitchStep = 0; pitchScore = 0; renderPitch(); };
  updateDictionaryProgress();
}

function showReviewPopup(question, index) {
  document.querySelector("#review-popup")?.remove();
  const popup = document.createElement("div");
  popup.id = "review-popup";
  popup.className = "review-popup";
  popup.innerHTML = `<div class="review-dialog" role="dialog" aria-modal="true" aria-labelledby="review-title"><button class="review-close" aria-label="Close review explanation">×</button><div class="text-5xl">💡</div><p class="mt-2 text-xs font-black uppercase tracking-widest text-fuchsia-600">${question.category}</p><h2 id="review-title" class="mt-1 text-2xl font-black">${dictionaryTerm(question, index)}</h2><p class="mt-3 leading-relaxed">${question.why}</p><p class="mt-3 rounded-xl bg-fuchsia-50 p-3 text-sm font-bold text-fuchsia-900">Interview tip: explain what this concept does, why it matters to the organisation and what risk it helps you manage.</p><button class="review-close mt-5 w-full rounded-xl bg-fuchsia-600 px-4 py-3 font-black text-white">Back to cards</button></div>`;
  document.body.appendChild(popup);
  popup.querySelectorAll(".review-close").forEach((close) => close.onclick = () => popup.remove());
}

function dictionaryTerm(question, index) {
  const terms = ["Data", "Database", "Data warehouse", "Data lake", "Data model", "Data transformation", "Data source", "DFD", "SaaS", "Object storage", "Data governance", "Data ethics", "UK GDPR and DPA 2018", "EU GDPR", "Compliance controls", "Digital transformation proposal", "Data quality", "Metadata", "Data owner and steward", "Master data", "API", "Primary and foreign keys", "Normalisation", "Data lifecycle", "Data lineage", "RTO and RPO", "Privacy by design", "DPIA", "Least privilege", "Consultancy discovery", "DFD", "ETL", "ELT", "Structured data", "Semi-structured data", "Unstructured data", "OLTP", "OLAP", "SQL", "NoSQL", "ACID", "Business intelligence", "KPI", "Analytics types", "Interoperability", "Batch vs streaming", "Authentication vs authorisation", "Hashing vs encryption", "Pseudonymisation", "Data minimisation", "Lawful basis", "Controller vs processor", "Data residency", "Vendor lock-in", "Backup strategy", "Target operating model"];
  return terms[index] || question.category;
}

function updateDictionaryProgress() {
  const progress = document.querySelector("#vocab-progress");
  const complete = document.querySelector("#dictionary-complete");
  if (!progress || !complete) return;
  progress.textContent = `${vocabSeen.size}/${questions.length} explored · ${vocabKnown.size} known`;
  complete.classList.toggle("hidden", vocabSeen.size !== questions.length);
  complete.onclick = () => { answers = questions.map((question, index) => ({ category: question.category, correct: vocabKnown.has(index) })); renderResult(); };
}

function answer(choice, question) {
  if (document.querySelector("#next").classList.contains("hidden") === false) return;
  const correct = choice === question.answer;
  if (correct) score += 1;
  answers.push({ category: question.category, correct });
  document.querySelectorAll("[data-answer]").forEach((button) => {
    button.disabled = true;
    if (Number(button.dataset.answer) === question.answer) button.classList.add("border-emerald-500", "bg-emerald-50");
    if (Number(button.dataset.answer) === choice && !correct) button.classList.add("border-red-500", "bg-red-50");
  });
  document.querySelector("#feedback").innerHTML = `<b>${correct ? "✅ Correct — strong consultant thinking." : "🧠 Not quite — use this as a revision clue."}</b><br>${question.why}`;
  const next = document.querySelector("#next");
  next.classList.remove("hidden");
  next.onclick = () => { current += 1; if (current === questions.length) renderResult(); else render(); };
}

function renderResult() {
  const percentage = Math.round((score / questions.length) * 100);
  const readiness = percentage >= 85 ? ["🏆 Assessment ready", "You can explain the vocabulary and connect it to a realistic recommendation."] : percentage >= 65 ? ["🧭 Nearly ready", "Review the topics below before building your final presentation."] : ["🧰 Keep practising", "Return to the earlier missions and strengthen the foundations before the assessment."];
  const gaps = [...new Set(answers.filter((answer) => !answer.correct).map((answer) => answer.category))];
  app.innerHTML = `<section class="card glass p-6 sm:p-8"><p class="font-bold uppercase tracking-widest text-fuchsia-600">Mission complete · readiness report</p><div class="mt-6 text-center"><div class="text-6xl">${readiness[0].split(" ")[0]}</div><h1 class="mt-3 text-3xl font-black">${readiness.slice(1).join(" ")}</h1><p class="mt-3 text-lg text-slate-600 dark:text-slate-300">${score}/${questions.length} correct · ${percentage}%</p></div><div class="mt-8 grid gap-3 sm:grid-cols-3"><div class="rounded-2xl bg-fuchsia-50 p-4 text-center"><b class="block text-2xl">${score}</b><span>Correct answers</span></div><div class="rounded-2xl bg-fuchsia-50 p-4 text-center"><b class="block text-2xl">${questions.length - score}</b><span>Revision clues</span></div><div class="rounded-2xl bg-fuchsia-50 p-4 text-center"><b class="block text-2xl">${percentage}%</b><span>Readiness score</span></div></div><div class="mt-6 rounded-2xl border border-fuchsia-200 bg-fuchsia-50 p-5"><h2 class="font-black">Assessment checklist</h2><p class="mt-2 text-sm leading-relaxed">Use the case study to analyse the current organisation, then recommend data collection, storage, transformation, governance, cloud infrastructure, security, ethics and regulation improvements. Support claims with academic or industry evidence and explain benefits, limitations, risks and implementation.</p><p class="mt-3 font-bold">${gaps.length ? `Revision focus: ${gaps.join(", ")}.` : "Excellent coverage: revisit your notes and practise explaining each concept aloud."}</p></div><div class="mt-6 flex flex-wrap gap-3"><button id="pitch" class="rounded-xl bg-fuchsia-600 px-5 py-3 font-black text-white">Build a convincing story →</button><button id="copy" class="rounded-xl border px-5 py-3 font-black">Copy readiness report</button><button id="restart" class="rounded-xl border px-5 py-3 font-black">Try again</button></div></section>`;
  document.querySelector("#pitch").onclick = () => { pitchStep = 0; pitchScore = 0; renderPitch(); };
  document.querySelector("#copy").onclick = () => {
    const text = `Data Quest Mission 08 — Vocabulary readiness\nScore: ${score}/${questions.length} (${percentage}%)\nStatus: ${readiness.slice(1).join(" ")}\nRevision focus: ${gaps.join(", ") || "None identified"}\nAssessment checklist: analyse the current organisation; recommend data collection, storage, transformation, governance, cloud infrastructure, security, ethics and regulation improvements; support recommendations with evidence.`;
    navigator.clipboard.writeText(text);
    document.querySelector("#copy").textContent = "Copied ✓";
  };
  document.querySelector("#restart").onclick = () => { current = 0; score = 0; answers = []; render(); };
}

function renderPitch() {
  if (pitchStep === pitchSteps.length) return renderPitchResult();
  const step = pitchSteps[pitchStep];
  app.innerHTML = `<section class="card glass p-6 sm:p-8"><p class="font-bold uppercase tracking-widest text-fuchsia-600">Pitch simulator · Build the story</p><div class="mt-4 flex items-center justify-between gap-3"><h1 class="text-2xl font-black">${step.icon} ${step.title}</h1><span class="rounded-full border px-3 py-1 text-sm font-black">${pitchStep + 1}/${pitchSteps.length}</span></div><p class="mt-3 text-slate-600 dark:text-slate-300">${step.prompt}</p><div class="mt-6 grid gap-3">${step.cards.map((card, index) => `<button class="pitch-card rounded-2xl border-2 border-slate-200 p-5 text-left font-bold transition hover:-translate-y-0.5 hover:border-fuchsia-400 dark:border-slate-700" data-pitch="${index}">${card[0]}</button>`).join("")}</div><div id="pitch-feedback" class="mt-5 min-h-14 rounded-2xl bg-slate-100 p-4 text-sm dark:bg-slate-800">Choose one card to add to your presentation.</div></section>`;
  document.querySelectorAll("[data-pitch]").forEach((button) => {
    button.onclick = () => {
      const selected = step.cards[Number(button.dataset.pitch)];
      pitchScore += selected[1];
      document.querySelectorAll("[data-pitch]").forEach((card) => { card.disabled = true; });
      button.classList.add(selected[1] ? "border-emerald-500" : "border-amber-400");
      document.querySelector("#pitch-feedback").innerHTML = `<b>${selected[1] ? "✅ Strong story choice." : "🧠 This needs strengthening."}</b><br>${selected[1] ? "It links the case study to a realistic, evidence-based recommendation." : "A convincing consultant story must be specific, evidence-based and realistic."}<br><button id="next-pitch" class="mt-3 rounded-lg bg-fuchsia-600 px-4 py-2 font-black text-white">Continue →</button>`;
      document.querySelector("#next-pitch").onclick = () => { pitchStep += 1; renderPitch(); };
    };
  });
}

function renderPitchResult() {
  const percent = Math.round((pitchScore / (pitchSteps.length * 3)) * 100);
  const title = percent === 100 ? "🏆 Boardroom-ready story" : percent >= 50 ? "🧭 Convincing foundations" : "🧰 Keep refining the argument";
  app.innerHTML = `<section class="card glass p-6 text-center sm:p-8"><p class="font-bold uppercase tracking-widest text-fuchsia-600">Pitch simulator complete</p><div class="mt-6 text-6xl">${title.split(" ")[0]}</div><h1 class="mt-3 text-3xl font-black">${title.slice(2)}</h1><p class="mt-3 text-lg">${pitchScore}/${pitchSteps.length * 3} story points · ${percent}%</p><div class="mx-auto mt-6 max-w-2xl rounded-2xl border border-fuchsia-200 bg-fuchsia-50 p-5 text-left"><h2 class="font-black">Your persuasive structure</h2><p class="mt-2 text-sm leading-relaxed">Problem → evidence → realistic data and cloud solution → governance, ethics, regulation and implementation. This structure directly supports the final assessment.</p></div><div class="mt-6 flex flex-wrap justify-center gap-3"><button id="pitch-again" class="rounded-xl bg-fuchsia-600 px-5 py-3 font-black text-white">Build again</button><a href="../" class="rounded-xl border px-5 py-3 font-black">Return to hub</a></div></section>`;
  document.querySelector("#pitch-again").onclick = () => { pitchStep = 0; pitchScore = 0; renderPitch(); };
}

renderDictionary();
