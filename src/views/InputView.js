import { MissionUtils } from '@woowacourse/mission-utils';

import Lotto from '../Lotto.js';

import { validateUserMoney, validateNumber, validateBonusNumber } from '../validators/InputValidator.js';

import parseWinningNumbers from '../utils/parsedWinningNumbers.js';

import { USER_MONEY_PROMPT, WINNING_NUMBER_PROMPT, BONUS_NUMBER_PROMPT } from '../constants/prompts.js';

import { RADIX_TEN } from '../constants/config.js';

export async function getUserMoney() {
  try {
    const userMoney = await MissionUtils.Console.readLineAsync(USER_MONEY_PROMPT);
    validateNumber(userMoney);
    validateUserMoney(userMoney);
    return parseInt(userMoney, RADIX_TEN);
  } catch (error) {
    MissionUtils.Console.print(error.message);
    throw error;
  }
}

export async function getWinningNumbers() {
  try {
    const winningNumbers = await MissionUtils.Console.readLineAsync(WINNING_NUMBER_PROMPT);
    const parsedWinningNumbers = parseWinningNumbers(winningNumbers);
    new Lotto(parsedWinningNumbers);
    return parsedWinningNumbers;
  } catch (error) {
    MissionUtils.Console.print(error.message);
    return getWinningNumbers();
  }
}

export async function getBonusNumber(winningNumbers) {
  try {
    const bonusNumber = await MissionUtils.Console.readLineAsync(BONUS_NUMBER_PROMPT);
    validateNumber(bonusNumber);
    validateBonusNumber(parseInt(bonusNumber, RADIX_TEN), winningNumbers);
    return parseInt(bonusNumber, RADIX_TEN);
  } catch (error) {
    MissionUtils.Console.print(error.message);
    return getBonusNumber(winningNumbers);
  }
}
