import Lotto from "./Lotto.js";

export function validateWinningNumbers(input) {
  const numbers = input.split(",").map(Number);
  Lotto.validateWinningNumbers(numbers);
  return numbers;
}
