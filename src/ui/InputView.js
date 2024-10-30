import { MissionUtils } from '@woowacourse/mission-utils';

const USER_MONEY_PROMPT = '구입금액을 입력해 주세요.';

export async function getUserMoney() {
  try {
    const userMoney = await MissionUtils.Console.readLineAsync(USER_MONEY_PROMPT);
    return userMoney;
  } catch (error) {
  }
}

export function aa() {}
