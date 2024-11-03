import { Console } from '@woowacourse/mission-utils';
import DrawLottery from '../utils/RandomLottery.js';
import MagicNumber from '../constants/MagicNumber.js';

class OutputView {
  static printError(error) {
    Console.print(`[ERROR]${error.message}`);
  }

  static printLotto(input) {
    const lottery = input / MagicNumber.PURCHASE_UNIT;
    Console.print(`\n${lottery}개를 구매했습니다.`);
    for (let i = 0; i < lottery; i += 1) {
      const numbers = DrawLottery.drawLottery().getNumbers();
      Console.print(`[${numbers.join(', ')}]`);
    }
  }

  static printStatistics(prizeCounts) {
    Console.print('\n당첨 통계\n---');
    Console.print(`3개 일치 (5,000원) - ${prizeCounts[0]}개`);
    Console.print(`4개 일치 (50,000원) - ${prizeCounts[1]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${prizeCounts[2]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${prizeCounts[3]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${prizeCounts[4]}개`);
  }

  static printReturnOnInvestment(returnOnInvestment) {
    Console.print(`총 수익률은 ${returnOnInvestment.toFixed(1)}%입니다.`); // 소수점 둘째 자리까지 출력
  }
}

export default OutputView;
