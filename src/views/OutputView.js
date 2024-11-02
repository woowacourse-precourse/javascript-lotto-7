import { Console } from '@woowacourse/mission-utils';
import drawLottery from '../utils/RandomLottery.js';
import MagicNumber from '../constants/MagicNumber.js';

class OutputView {
  static printLotto(input) {
    const lottery = input / MagicNumber.PURCHASE_UNIT;
    Console.print(`\n${lottery}개를 구매했습니다.`);
    for (let i = 0; i < lottery; i += 1) {
      Console.print(drawLottery());
    }
  }
}

export default OutputView;
