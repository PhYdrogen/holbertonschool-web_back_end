export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    let task = false;
    let task2 = true;

    task = '';
    task2 += task;
    task = task2;
  }

  return [task, task2];
}
