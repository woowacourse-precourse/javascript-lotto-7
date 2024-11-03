import { OUTPUT_MESSAGE } from './util/constant.js';
import { printResult } from './util/missionUtil.js';

const RANK_MESSAGE_MAP = Object.freeze({
  5: OUTPUT_MESSAGE.collect3,
  4: OUTPUT_MESSAGE.collect4,
  3: OUTPUT_MESSAGE.collect5,
  2: OUTPUT_MESSAGE.collect5WithBonus,
  1: OUTPUT_MESSAGE.collect6,
});

class OutputView {
  static async printLottoCount(count) {
    const lottoCount = count / 1000;
    await printResult(OUTPUT_MESSAGE.buyLotto(lottoCount));
  }

  static async printLottoNumbers(lottos) {
    lottos.forEach(async (lotto) => {
      const number = lotto.getNumbers();
      await printResult(OUTPUT_MESSAGE.lottoNumbers(number));
    });
  }

  static async printRankResult(rankResult) {
    await printResult(OUTPUT_MESSAGE.winningStatistics);
    Object.keys(RANK_MESSAGE_MAP)
      .sort((a, b) => b - a)
      .forEach(async (rankIdx) => {
        const message = RANK_MESSAGE_MAP[rankIdx];
        await printResult(message(rankResult[rankIdx]));
      });
  }

  static printIncomeResult(income) {
    printResult(OUTPUT_MESSAGE.income(income));
  }
}

export default OutputView;
