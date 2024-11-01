export function checkDuplication(numbers) {
  return new Set(numbers).size !== numbers.length;
}
