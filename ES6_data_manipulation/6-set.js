export default function setFromArray(numbers) {
  const set = new Set();
  for (let i = 0; i < numbers.length; i++) {
    set.add(numbers[i]);
  }
  return set;
}