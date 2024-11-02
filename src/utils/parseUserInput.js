import { LOTTO } from './constants.js';

function toPurchaseAmountNumber(amount) {
  return Number(amount);
}

function parseWinningNumbers(numbers) {
  const winningNumbers = numbers
    .split(LOTTO.SEPARATOR)
    .map((e) => Number(e.trim()));

  return [...winningNumbers];
}

function parseBonusNumber(bonus) {
  return Number(bonus);
}

export { toPurchaseAmountNumber, parseWinningNumbers, parseBonusNumber };
