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

// TODO: [예외사항] 중간 띄어쓰기

export { toPurchaseAmountNumber, parseWinningNumbersWithBonus };
