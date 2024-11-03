import { Console } from '@woowacourse/mission-utils';
import PRIZES from './constants.js';

class Print {
  static printTimes(times) {
    Console.print(`${times}개를 구매했습니다.`);
  }

  static printLottosNumber(numbers) {
    Console.print(`[${numbers.join(', ')}]`);
  }

  static printStats(prizedNum, earningRate) {
    Console.print('당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (${PRIZES[5]}원) - ${prizedNum.get('5')}개`);
    Console.print(`4개 일치 (${PRIZES[4]}원) - ${prizedNum.get('4')}개`);
    Console.print(`5개 일치 (${PRIZES[3]}원) - ${prizedNum.get('3')}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (${PRIZES[2]}원) - ${prizedNum.get('2')}개`,
    );
    Console.print(`6개 일치 (${PRIZES[1]}원) - ${prizedNum.get('1')}개`);
    Console.print(`총 수익률은 ${earningRate}%입니다.`);
  }
}

export default Print;
