import { MissionUtils } from '@woowacourse/mission-utils';

import Lotto from '../Lotto.js';

import { validateUserMoney, validateNumber } from '../validators/InputValidator.js';

import parseWinningNumbers from '../utils/parsedWinningNumbers.js';

import { USER_MONEY_PROMPT, WINNING_NUMBER_PROMPT, BONUS_NUMBER_PROMPT } from '../constants/prompts.js';

export async function getUserMoney() {
  const userMoney = await MissionUtils.Console.readLineAsync(USER_MONEY_PROMPT);
  validateNumber(userMoney);
  validateUserMoney(userMoney);
  return parseInt(userMoney, 10);
}

export async function getWinningNumbers() {
  const winningNumbers = await MissionUtils.Console.readLineAsync(WINNING_NUMBER_PROMPT);
  new Lotto(winningNumbers);
  return parseWinningNumbers(winningNumbers);
}

export async function getBonusNumber() {
  const bonusNumber = await MissionUtils.Console.readLineAsync(BONUS_NUMBER_PROMPT);
  validateNumber(bonusNumber);
  return parseInt(bonusNumber, 10);
}
