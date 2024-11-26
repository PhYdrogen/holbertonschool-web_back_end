import fs from 'fs/promises';

export default function readDatabase(path) {
  return new Promise((resolve, rejet) => {
    fs.readFile(path, 'utf8').then((data) => {
      let nb = 0;
      const arrStr = [];
      const dict = new Map();

      data.split('\n').forEach((line, idx) => {
        if (idx === 0) return;
        if (line.length === 0) return;
        nb += 1;
        const arr = line.split(',');
        // arrStr.push(arr[0]);
        const entry = dict.get(arr[3]);
        dict.set(arr[3], [...entry || [], arr[0]]);
      });
      arrStr.push(`Number of students: ${nb}`);
      for (const [k, v] of dict.entries()) {
        arrStr.push(`Number of students in ${k}: ${v.length}. List: ${v.join(', ')}`);
        // arrStr.push(v[0]);
      }
      resolve(arrStr.join('\n'));
      // resolve(arrStr);
    }).catch((e) => {
      rejet(new Error(`Cannot load the database ${e}`));
    });
  });
}
