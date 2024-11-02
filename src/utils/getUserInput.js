import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from './constants.js';

async function getPurchaseAmount() {
  return await Console.readLineAsync(MESSAGES.INPUT_AMOUT);
}

async function getWinningNumbers() {
  return await Console.readLineAsync(MESSAGES.INPUT_WINNING_NUMBERS);
}

async function getBonusNumber() {
  return await Console.readLineAsync(MESSAGES.INPUT_BONUS_NUMBER);
}

export { getPurchaseAmount, getWinningNumbers, getBonusNumber };
