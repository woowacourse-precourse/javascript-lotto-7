import { MissionUtils } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE, LOTTO_INFORMATION_ARRAY } from './lib/constants.js';

class OutputManager {
  static printPurchaseHistory(lottoArray) {
    const purchaseLottoCount = lottoArray.length;

    MissionUtils.Console.print(
      `${purchaseLottoCount}${OUTPUT_MESSAGE.PURCHASE_COUNT}`,
    );
    lottoArray.forEach(({ numbers }) =>
      MissionUtils.Console.print(`[${numbers.join(', ')}]`),
    );
  }

  static printWinningStatics(rankCountMap) {
    MissionUtils.Console.print(OUTPUT_MESSAGE.WINNING_STATICS);

    LOTTO_INFORMATION_ARRAY.forEach(({ winningCount, prizeMoney, rank }) => {
      let bonusNumberString = '';
      if (rank === 2) bonusNumberString = ', 보너스 볼 일치';

      MissionUtils.Console.print(
        `${winningCount}개 일치${bonusNumberString} (${prizeMoney.toLocaleString(
          'ko-KR',
        )}원) - ${rankCountMap.get(rank)}개`,
      );
    });
  }

  static printRateOfReturn(rateOfReturn) {
    MissionUtils.Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  }
}

export default OutputManager;
