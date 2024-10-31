import { Console } from '@woowacourse/mission-utils';

class Print {
  static printTimes(times) {
    Console.print(`${times}개를 구매했습니다.`);
  }

  static printLottosNumber(numbers) {
    Console.print(numbers);
  }
}

export default Print;
