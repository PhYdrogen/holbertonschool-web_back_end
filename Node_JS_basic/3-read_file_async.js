const fs = require('node:fs/promises');

module.exports = function countStudents(path) {
  return new Promise((resolve, rejet) => {
    try {
      fs.readFile(path, 'utf8').then((data) => {
        let nb = 0;
        const arrStr = [];
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
        arrStr.push(`Number of students: ${nb}`);
        for (const [k, v] of dict.entries()) {
          console.log(`Number of students in ${k}: ${v.length}. List: ${v.join(', ')}`);
          arrStr.push(`Number of students in ${k}: ${v.length}. List: ${v.join(', ')}`);
        }
        resolve(arrStr.join('\n'));
      }).catch(() => {
        rejet(new Error('Cannot load the database'));
      });
    } catch (err) {
      rejet(new Error('Cannot load the database'));
    }
  });
};
