import { MissionUtils } from '@woowacourse/mission-utils';

const USER_MONEY_PROMPT = '구입금액을 입력해 주세요.';
const USER_MONEY_INPUT_ERROR_MESSAGE = '[ERROR] 구입금액을 받는 도중에 에러가 발생했습니다.';

export async function getUserMoney() {
  try {
    const userMoney = await MissionUtils.Console.readLineAsync(USER_MONEY_PROMPT);
    return userMoney;
  } catch (error) {
    throw new Error(USER_MONEY_INPUT_ERROR_MESSAGE);
  }
}

export function aa() {}
