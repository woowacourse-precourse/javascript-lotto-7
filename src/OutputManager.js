import { MissionUtils } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE, LOTTO_INFORMATIONS } from './lib/constants.js';

class OutputManager {
  static print(message) {
    MissionUtils.Console.print(message);
  }

  static printPurchaseHistory(lottos) {
    const purchasedLottosCount = lottos.length;
    const purchasedLottosCountOutput = `${purchasedLottosCount}${OUTPUT_MESSAGE.PURCHASE_COUNT}`;

    this.print(purchasedLottosCountOutput);

    lottos.forEach(({ numbers }) => {
      const purchasedLottoOutput = `[${numbers.join(', ')}]`;

      this.print(purchasedLottoOutput);
    });
  }

  static printWinningStatics(rankCountMap) {
    this.print(OUTPUT_MESSAGE.WINNING_STATICS);

    LOTTO_INFORMATIONS.forEach(({ winningCount, prizeMoney, rank }) => {
      const bonusNumberString = this.#getBonusNumberString(rank);
      const winningLottoOutput = `${winningCount}개 일치${bonusNumberString} (${prizeMoney.toLocaleString(
        'ko-KR',
      )}원) - ${rankCountMap.get(rank)}개`;

      this.print(winningLottoOutput);
    });
  }

  static #getBonusNumberString(rank) {
    if (rank === 2) return ', 보너스 볼 일치';
    return '';
  }

  static printRateOfReturn(rateOfReturn) {
    const rateOfReturnSetence = `총 수익률은 ${rateOfReturn}%입니다.`;

    this.print(rateOfReturnSetence);
  }
}

export default OutputManager;
