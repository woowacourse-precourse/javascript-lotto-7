export function parseToNumber(userInput) {
  return Number(userInput.trim());
}

export function parseWinningNumbers(userInputWinningNumbers) {
  return userInputWinningNumbers
    .split(',')
    .map(number => Number(number.trim()));
}
