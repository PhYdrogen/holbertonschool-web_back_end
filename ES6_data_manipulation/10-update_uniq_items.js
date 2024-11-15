export default function updateUniqueItems(map) {
  if (typeof map !== Map) {
    throw Error('Cannot process');
  }
  map.forEach((v, k) => {
    if (v === 1) {
      map.set(k, 100);
    }
  });
}
