'use strict';

const TYPES = [
  ['Customer surname', 'Nominal'],
  ['Satisfaction rating (1–5 stars)', 'Ordinal'],
  ['Temperature in °C', 'Interval'],
  ['Order total in £', 'Ratio'],
  ['Postcode', 'Nominal'],
  ['T-shirt size (S/M/L)', 'Ordinal']
];
const LEVELS = ['Nominal', 'Ordinal', 'Interval', 'Ratio'];

const QUALITY_HEAD = ['StudentID', 'Name', 'Email', 'Age'];
const QUALITY_ROWS = [
  ['S001', 'Amy Ali', 'amy@uni.ac.uk', '19'],
  ['S002', 'Ben Cole', '', '20'],
  ['S003', 'Cara Dent', 'cara.dent@@uni', '21'],
  ['S001', 'Dev Rao', 'dev@uni.ac.uk', '22'],
  ['S005', 'Eve Fox', 'eve@uni.ac.uk', '-4']
];
// "row,col" -> expected dimension
const QUALITY_ANSWERS = {
  '1,2': 'Completeness',
  '2,2': 'Validity',
  '3,0': 'Uniqueness',
  '4,3': 'Validity'
};

const KEYS_HEAD = ['OrderID', 'CustomerID', 'CustomerName', 'ProductID', 'ProductName'];
const KEYS_ROWS = [
  ['1', 'C1', 'Amy', 'P1', 'Pen'],
  ['2', 'C1', 'Amy', 'P2', 'Ink'],
  ['3', 'C2', 'Ben', 'P1', 'Pen']
];
const KEYS_QS = [
  ['Which column is the best primary key for this table?', ['OrderID', 'CustomerID', 'ProductID'], 'OrderID'],
  ['Which problem does repeating CustomerName show?', ['Redundancy', 'Missing data', 'Encryption'], 'Redundancy'],
  ['A sensible fix is to…', ['Delete column headers', 'Split into Customer, Product and Order tables', 'Merge all rows into one'], 'Split into Customer, Product and Order tables']
];

const $ = (id) => document.getElementById(id);

function makeSelect(options) {
  const s = document.createElement('select');
  ['-- choose --', ...options].forEach((o, i) => {
    const opt = document.createElement('option');
    opt.value = i ? o : '';
    opt.textContent = o;
    s.appendChild(opt);
  });
  return s;
}

function renderTable(table, head, rows) {
  table.replaceChildren();
  const tr = table.insertRow();
  head.forEach((h) => { const th = document.createElement('th'); th.textContent = h; tr.appendChild(th); });
  rows.forEach((r) => {
    const row = table.insertRow();
    r.forEach((c) => { row.insertCell().textContent = c; });
  });
}

function summary(el, score, total) {
  el.textContent = `Score: ${score}/${total}` + (score === total ? ' – well done!' : ' – discuss with your group and try again.');
  el.className = 'result ' + (score === total ? 'good' : 'warn');
}

// Tabs
document.querySelectorAll('#tabs button').forEach((b) => b.addEventListener('click', () => {
  document.querySelectorAll('#tabs button').forEach((x) => x.setAttribute('aria-selected', String(x === b)));
  document.querySelectorAll('.panel').forEach((p) => { p.hidden = p.id !== b.dataset.tab; });
}));

// Activity 1
const typeSelects = TYPES.map(([label]) => {
  const row = document.createElement('div');
  row.className = 'row';
  const item = document.createElement('span');
  item.className = 'item';
  item.textContent = label;
  const sel = makeSelect(LEVELS);
  row.append(item, sel);
  $('types-list').appendChild(row);
  return sel;
});
$('types-check').addEventListener('click', () => {
  let score = 0;
  typeSelects.forEach((s, i) => { if (s.value === TYPES[i][1]) score++; });
  summary($('types-result'), score, TYPES.length);
});

// Activity 2
renderTable($('quality-table'), QUALITY_HEAD, QUALITY_ROWS);
const marks = {};
let selected = null;
[...$('quality-table').rows].slice(1).forEach((tr, r) => {
  [...tr.cells].forEach((td, c) => {
    td.addEventListener('click', () => {
      if (selected) selected.classList.remove('sel');
      selected = td;
      td.classList.add('sel');
      $('quality-dim').value = marks[`${r},${c}`] || '';
    });
    td.dataset.pos = `${r},${c}`;
  });
});
$('quality-dim').addEventListener('change', (e) => {
  if (!selected) return;
  const pos = selected.dataset.pos;
  if (e.target.value) marks[pos] = e.target.value; else delete marks[pos];
  selected.title = marks[pos] || '';
});
$('quality-check').addEventListener('click', () => {
  let score = 0;
  document.querySelectorAll('#quality-table td').forEach((td) => {
    const pos = td.dataset.pos;
    td.classList.remove('ok', 'bad');
    if (marks[pos]) {
      const good = QUALITY_ANSWERS[pos] === marks[pos];
      td.classList.add(good ? 'ok' : 'bad');
      if (good) score++;
    }
  });
  const wrong = Object.keys(marks).filter((p) => QUALITY_ANSWERS[p] !== marks[p]).length;
  const total = Object.keys(QUALITY_ANSWERS).length;
  summary($('quality-result'), wrong ? Math.max(0, score - wrong) : score, total);
});

// Activity 3
renderTable($('keys-table'), KEYS_HEAD, KEYS_ROWS);
const keySelects = KEYS_QS.map(([q, opts]) => {
  const row = document.createElement('div');
  row.className = 'row';
  const item = document.createElement('span');
  item.className = 'item';
  item.textContent = q;
  const sel = makeSelect(opts);
  row.append(item, sel);
  $('keys-list').appendChild(row);
  return sel;
});
$('keys-check').addEventListener('click', () => {
  let score = 0;
  keySelects.forEach((s, i) => { if (s.value === KEYS_QS[i][2]) score++; });
  summary($('keys-result'), score, KEYS_QS.length);
});

// Activity 4
const STORE = 'dmf-reflection';
const fields = [...document.querySelectorAll('[data-key]')];
let saved = {};
try { saved = JSON.parse(localStorage.getItem(STORE)) || {}; } catch (e) { saved = {}; }
fields.forEach((f) => {
  if (saved[f.dataset.key] !== undefined) f.value = saved[f.dataset.key];
  f.addEventListener('input', () => {
    saved[f.dataset.key] = f.value;
    try { localStorage.setItem(STORE, JSON.stringify(saved)); } catch (e) { /* storage unavailable */ }
  });
});
$('reflect-clear').addEventListener('click', () => {
  saved = {};
  try { localStorage.removeItem(STORE); } catch (e) { /* ignore */ }
  fields.forEach((f) => { f.value = f.type === 'range' ? '3' : ''; });
});
$('reflect-export').addEventListener('click', () => {
  const text = fields.map((f) => `${f.closest('label').firstChild.textContent.trim()}\n${f.value}\n`).join('\n');
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([text], { type: 'text/plain' }));
  a.download = 'reflection.txt';
  a.click();
  URL.revokeObjectURL(a.href);
});
