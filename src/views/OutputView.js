import { Console } from '@woowacourse/mission-utils';
import drawLottery from '../utils/RandomLottery.js';
import MagicNumber from '../constants/MagicNumber.js';

class OutputView {
  static printLotto(input) {
    const lottery = input / MagicNumber.PURCHASE_UNIT;
    Console.print(`\n${lottery}개를 구매했습니다.`);
    for (let i = 0; i < lottery; i += 1) {
      Console.print(drawLottery().draw);
    }
  }

  static printStatistics() {
    Console.print('\n당첨 통계\n---');
    Console.print(`3개 일치 (5,000원) - ${}개`);
  }
}

export default OutputView;
