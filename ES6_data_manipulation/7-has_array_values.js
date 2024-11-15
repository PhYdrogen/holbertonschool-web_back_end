export default function hasValuesFromArray(set, array) {
  return array.filter((nb) => set.has(nb)).length === array.length;
}
