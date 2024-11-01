import { MissionUtils } from '@woowacourse/mission-utils';

import { USER_MONEY_PROMPT, WINNING_NUMBER_PROMPT, BONUS_NUMBER_PROMPT } from '../constants/prompts.js';
import { INPUT_ERROR_MESSAGE } from '../constants/message.js';

export async function getUserMoney() {
  try {
    const userMoney = await MissionUtils.Console.readLineAsync(USER_MONEY_PROMPT);
    return userMoney;
  } catch (error) {
    throw new Error(INPUT_ERROR_MESSAGE);
  }
}

export async function getWinningNumbers() {
  try {
    const winningNumber = await MissionUtils.Console.readLineAsync(USER_MONEY_PROMPT);
    return winningNumber;
  } catch (error) {
    throw new Error(INPUT_ERROR_MESSAGE);
  }
}

export async function getBonusNumber() {
  try {
    const bonusNumber = await MissionUtils.Console.readLineAsync(USER_MONEY_PROMPT);
    return bonusNumber;
  } catch (error) {
    throw new Error(INPUT_ERROR_MESSAGE);
  }
}
