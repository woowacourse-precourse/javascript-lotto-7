export function checkNumbersRange(numbers) {
  for (const number of numbers) {
    if (number < 1 || number > 45) {
      return false;
    }
  }

  return true;
}
