import { MissionUtils } from '@woowacourse/mission-utils';

import { validateUserMoney, validateNumber } from '../validators/InputValidator.js';

import parseWinningNumbers from '../utils/parsedWinningNumbers.js';

import { USER_MONEY_PROMPT, WINNING_NUMBER_PROMPT, BONUS_NUMBER_PROMPT } from '../constants/prompts.js';
import { INPUT_ERROR_MESSAGE } from '../constants/message.js';

export async function getUserMoney() {
  const userMoney = await MissionUtils.Console.readLineAsync(USER_MONEY_PROMPT);
  validateNumber(userMoney);
  validateUserMoney(userMoney);
  return parseInt(userMoney, 10);
}

export async function getWinningNumbers() {
  try {
    const winningNumbers = await MissionUtils.Console.readLineAsync(WINNING_NUMBER_PROMPT);
    return parseWinningNumbers(winningNumbers);
  } catch (error) {
    throw new Error(INPUT_ERROR_MESSAGE);
  }
}

export async function getBonusNumber() {
  try {
    const bonusNumber = await MissionUtils.Console.readLineAsync(BONUS_NUMBER_PROMPT);
    validateNumber(bonusNumber);
    return parseInt(bonusNumber, 10);
  } catch (error) {
    throw new Error(INPUT_ERROR_MESSAGE);
  }
}
