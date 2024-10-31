import {
  getPurchaseAmount,
  getWinningNumbers,
  getBonusNumber,
} from './getUserInput';

function toPurchaseAmountNumber() {
  return Number(getPurchaseAmount());
}

function parseWinningNumbersWithBonus() {
  const winningNumbers = getWinningNumbers()
    .split(',')
    .map((e) => Number(e.trim()));

  return [...winningNumbers, Number(getBonusNumber())];
}

export { toPurchaseAmountNumber, parseWinningNumbersWithBonus };
