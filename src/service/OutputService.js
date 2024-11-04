import { Console } from '@woowacourse/mission-utils';
import { IOMessage } from '../constants/IOMessage.js';
import { matchLottoNums } from '../util/matchLottoNums.js';
import calProfitRate from '../util/calProfitRate.js';
import { calTotalPrize } from '../util/calTotalPrize.js';
import formatNum from '../util/formatNum.js';

export class OutputService {
  static printResults(purchasedLottoInfo, winningLotto, bonusNum) {
    Console.print(IOMessage.WIN_STATISTICS);
    const results = matchLottoNums(
      purchasedLottoInfo.purchasedLottoNumbers,
      winningLotto.getNumbers(),
      bonusNum,
    );

    for (const [key, count] of Object.entries(results)) {
      Console.print(IOMessage[key](count));
    }

    const profitRate = calProfitRate(calTotalPrize(results), purchasedLottoInfo.lottoPrice);
    Console.print(IOMessage.PROFIT_RATE(formatNum(profitRate)));
  }
}
