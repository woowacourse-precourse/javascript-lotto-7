import { MissionUtils } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE, LOTTO_INFORMATIONS } from './lib/constants.js';

class OutputManager {
  static print(message) {
    MissionUtils.Console.print(message);
  }

  static printPurchaseHistory(lottos) {
    const purchaseLottoCount = lottos.length;

    this.print(`${purchaseLottoCount}${OUTPUT_MESSAGE.PURCHASE_COUNT}`);
    lottos.forEach(({ numbers }) => this.print(`[${numbers.join(', ')}]`));
  }

  static printWinningStatics(rankCountMap) {
    this.print(OUTPUT_MESSAGE.WINNING_STATICS);

    LOTTO_INFORMATIONS.forEach(({ winningCount, prizeMoney, rank }) => {
      const bonusNumberString = this.#getBonusNumberString(rank);
      const winningLottoSentence = `${winningCount}개 일치${bonusNumberString} (${prizeMoney.toLocaleString(
        'ko-KR',
      )}원) - ${rankCountMap.get(rank)}개`;

      this.print(winningLottoSentence);
    });
  }

  static #getBonusNumberString(rank) {
    if (rank === 2) return ', 보너스 볼 일치';
    return '';
  }

  static printRateOfReturn(rateOfReturn) {
    this.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  }
}

export default OutputManager;
