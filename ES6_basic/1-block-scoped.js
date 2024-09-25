export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    task = false;
    task2 = true;
  }

  return [task, task2];
}
