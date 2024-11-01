function toPurchaseAmountNumber(amout) {
  return Number(amout);
}

function parseWinningNumbers(numbers) {
  const winningNumbers = numbers.split(',').map((e) => Number(e.trim()));

  return [...winningNumbers];
}

function parseBonusNumber(bonus) {
  return Number(bonus);
}

export { toPurchaseAmountNumber, parseWinningNumbers, parseBonusNumber };
