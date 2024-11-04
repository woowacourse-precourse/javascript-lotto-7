import { MissionUtils } from '@woowacourse/mission-utils';
import { LOTTO_RANK_MAP, OUTPUT_MESSAGE } from '../lib/constants.js';

class OutputController {
  static print(message) {
    MissionUtils.Console.print(message);
  }

  static printPurchaseHistory(lottos) {
    const purchasedLottosCountOutput = `${lottos.length}${OUTPUT_MESSAGE.PURCHASE_COUNT}`;

    this.print(purchasedLottosCountOutput);

    lottos.forEach((lotto) => {
      const purchasedLottoOutput = `[${lotto.numbers.join(', ')}]`;

      this.print(purchasedLottoOutput);
    });
  }

  static printLottoResult(lottoResult) {
    this.print(OUTPUT_MESSAGE.WINNING_STATICS);

    Object.entries(LOTTO_RANK_MAP).forEach(([rawRank, lottoInfo]) => {
      const rank = Number(rawRank);
      const { winningCount, prizeMoney } = lottoInfo;
      const winningLottoCount = lottoResult.getWinningCount(rank);

      const bonusNumberString = this.#getBonusNumberString(rank);
      const winningLottoOutput = `${winningCount}개 일치${bonusNumberString} (${prizeMoney.toLocaleString(
        'ko-KR',
      )}원) - ${winningLottoCount}개`;

      this.print(winningLottoOutput);
    });
  }

  static #getBonusNumberString(rank) {
    if (rank === 2) return ', 보너스 볼 일치';
    return '';
  }

  static printRateOfReturn(rateOfReturn) {
    const rateOfReturnSetence = `총 수익률은 ${rateOfReturn.toLocaleString(
      'ko-KR',
    )}%입니다.`;

    this.print(rateOfReturnSetence);
  }
}

export default OutputController;
