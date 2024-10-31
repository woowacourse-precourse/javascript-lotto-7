import { Console } from '@woowacourse/mission-utils';

const OUTPUT_MESSAGE = Object.freeze({
  COUNTER: '개를 구매했습니다.',
  STATICS: '\n당첨 통계\n---',
  RANK: {
    FIFTH_RANK: '3개 일치 (5,000원) - ',
    FOURTH_RANK: '4개 일치 (50,000원) - ',
    THIRD_RANK: '5개 일치 (1,500,000원) - ',
    SECOND_RANK: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
    FIRST_RANK: '6개 일치 (2,000,000,000원) - ',
  },
  RANK_SUFFIX: '개',
  PROFIT: {
    PREFIX: '총 수익률은 ',
    SUFFIX: '%입니다.',
  },
});

class OutputView {
  static printLottoCounter(counter) {
    Console.print(`\n${counter}개를 구매했습니다.`);
  }

  static printLottoStatics(rankCounter, profit) {
    Console.print(OUTPUT_MESSAGE.STATICS);
    this.#printEntireLottoRank(rankCounter);
    this.#printProfit(profit);
  }

  static #printEntireLottoRank(rankCounter) {
    rankCounter.forEach((rank, index) => {
      this.#printLottoRank(rank, index);
    });
  }

  static #printLottoRank(rank, index) {
    Console.print(
      Object.values(OUTPUT_MESSAGE.RANK)[index] +
        rank +
        OUTPUT_MESSAGE.RANK_SUFFIX,
    );
  }

  static #printProfit(profit) {
    Console.print(
      OUTPUT_MESSAGE.PROFIT.PREFIX + profit + OUTPUT_MESSAGE.PROFIT.SUFFIX,
    );
  }
}

export default OutputView;
