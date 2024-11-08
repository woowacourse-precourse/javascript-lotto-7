import { Console } from '@woowacourse/mission-utils';
import { LOTTO_MESSAGE } from '../constants/constants.js';

export async function getWinningNumbers() {
  const winningNumbers = await Console.readLineAsync(
    LOTTO_MESSAGE.LOTTO_WINNING_NUMBER_MESSAGE,
  );

  const numbers = winningNumbers
    .split(',')
    .map((number) => Number(number.trim()));
  return numbers;
}

export async function getBonusWinningNumber() {
  const bonusWinningNumber = await Console.readLineAsync(
    LOTTO_MESSAGE.LOTTO_BONUS_WINNING_NUMBER_MESSAGE,
  );
  return Number(bonusWinningNumber);
}
