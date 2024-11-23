const fs = require('node:fs');

module.exports = function countStudents(path) {
  let data;
  let nb = 0;
  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  const dict = new Map();
  data.split('\n').forEach((line, idx) => {
    if (idx === 0) return;
    if (line.length === 0) return;
    nb += 1;
    const arr = line.split(',');
    const entry = dict.get(arr[3]);
    dict.set(arr[3], [...entry || [], arr[0]]);
  });
  console.log(`Number of students: ${nb}`);
  const ok = {};
  for (const [k, v] of dict.entries()) {
    console.log(`Number of students in ${k}: ${v.length}. List: ${v.join(', ')}`);
    ok[k] = v;
  }
};
