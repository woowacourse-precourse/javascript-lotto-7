export function sortArrayAscending(array) {
  return [...array].sort((a, b) => a - b);
}

export function sort2DArrayAscending(array) {
  return array.map(sortArrayAscending);
}
