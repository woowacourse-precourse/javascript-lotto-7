import { Console } from "@woowacourse/mission-utils";

async function getPurchase() {
  try {
    const USER_INPUT = await Console.readLineAsync('로또 구입 금액을 입력해 주세요(1,000원 단위)\n');
    return USER_INPUT;
  } catch (error) {
    const ERROR_MESSAGE = '[ERROR] 구입 금액 입력 중에 예상치 못한 에러가 발생 했습니다.';
    throw new Error(ERROR_MESSAGE);
  }
};

async function getWinNumber() {
  /** TODO : 
   * 1. 쉼표(,)로 구분된 6개의 숫자를 입력 받는다.
   * 2. 입력 받은 문자열을 반환 한다. 
   */
}

export default getPurchase;