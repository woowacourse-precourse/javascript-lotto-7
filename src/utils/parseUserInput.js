function toPurchaseAmountNumber(amout) {
  return Number(amout);
}

function parseWinningNumbersWithBonus(numbers, bonus) {
  const winningNumbers = numbers.split(',').map((e) => Number(e.trim()));

  return [...winningNumbers, Number(bonus)];
}

export { toPurchaseAmountNumber, parseWinningNumbersWithBonus };
