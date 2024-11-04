import { printResult } from './util/missionUtil.js';

const OUTPUT_MESSAGE = Object.freeze({
  buyLotto: (money) => `\n${money}개를 구매했습니다.`,
  lottoNumbers: (number) => `[${number.join(', ')}]`,
  winningStatistics: '\n당첨 통계\n---',
  collect3: (count) => `3개 일치 (5,000원) - ${count}개`,
  collect4: (count) => `4개 일치 (50,000원) - ${count}개`,
  collect5: (count) => `5개 일치 (1,500,000원) - ${count}개`,
  collect5WithBonus: (count) =>
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
  collect6: (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
  income: (percentage) => `총 수익률은 ${percentage}%입니다.`,
});

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
