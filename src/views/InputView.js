import { MissionUtils } from '@woowacourse/mission-utils';

import { USER_MONEY_PROMPT } from '../constants/prompts';
import { INPUT_ERROR_MESSAGE } from '../constants/message';

export async function getUserMoney() {
  try {
    const userMoney = await MissionUtils.Console.readLineAsync(USER_MONEY_PROMPT);
    return userMoney;
  } catch (error) {
    throw new Error(INPUT_ERROR_MESSAGE);
  }
}
