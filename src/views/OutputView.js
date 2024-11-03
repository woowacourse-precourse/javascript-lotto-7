import { Console } from '@woowacourse/mission-utils';
import { LOTTO_PRIZE } from '../constant.js';

class OutputView {
  static printErrorMessage(errorMessage) {
    Console.print(errorMessage);
  }

  printLottoCount(lottoCount) {
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
  }

  printMyLotto(myLottos) {
    myLottos.forEach((myLotto) =>
      Console.print(`[${myLotto.toString().split(',').join(', ')}]`)
    );
  }

  printLottoResult(lottoResult) {
    Console.print('\n당첨 통계\n---');
    for (let i = 0; i < LOTTO_PRIZE.length; i++) {
      const outputCountString = `${LOTTO_PRIZE[i].MATCH_NUMBER}개 일치`;
      const outputBonusString = ', 보너스 볼 일치';
      const outputPrizeString = ` (${LOTTO_PRIZE[
        i
      ].PRIZE.toLocaleString()}원) - ${lottoResult[i]}개`;

      if (i === 3) {
        Console.print(
          outputCountString + outputBonusString + outputPrizeString
        );
      } else {
        Console.print(outputCountString + outputPrizeString);
      }
    }
  }

  printLottoProfit(profitRate) {
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default OutputView;
