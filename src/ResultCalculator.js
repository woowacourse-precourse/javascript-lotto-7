import { Console } from '@woowacourse/mission-utils';

class LottoResult {
  static PRIZE_RANKS = {
    FIRST: {
      match: 6,
      bonus: false,
      prize: 2_000_000_000,
      description: '6개 일치',
    },
    SECOND: {
      match: 5,
      bonus: true,
      prize: 30_000_000,
      description: '5개 일치, 보너스 볼 일치',
    },
    THIRD: {
      match: 5,
      bonus: false,
      prize: 1_500_000,
      description: '5개 일치',
    },
    FOURTH: { match: 4, bonus: false, prize: 50_000, description: '4개 일치' },
    FIFTH: { match: 3, bonus: false, prize: 5_000, description: '3개 일치' },
  };

  #results;
  #purchaseAmount;

  constructor(purchaseAmount) {
    this.#purchaseAmount = purchaseAmount;
    this.#results = new Map(
      Object.values(LottoResult.PRIZE_RANKS).map((rank) => [
        this.#createKey(rank.match, rank.bonus),
        { count: 0, ...rank },
      ])
    );
  }

  #createKey(matchCount, hasBonus) {
    return `${matchCount}-${hasBonus}`;
  }

  addResult(matchCount, matchBonus) {
    const key = this.#createKey(matchCount, matchBonus);
    const result = this.#results.get(key);

    if (result) {
      result.count += 1;
    }
  }

  getTotalPrize() {
    return Array.from(this.#results.values()).reduce(
      (sum, result) => sum + result.count * result.prize,
      0
    );
  }

  getProfitRate() {
    const totalPrize = this.getTotalPrize();
    return Number(((totalPrize / this.#purchaseAmount) * 100).toFixed(1));
  }

  print() {
    Console.print('\n당첨 통계\n---');

    const sortedRanks = Object.values(LottoResult.PRIZE_RANKS).sort(
      (a, b) => a.prize - b.prize
    );

    sortedRanks.forEach((rank) => {
      const result = this.#results.get(this.#createKey(rank.match, rank.bonus));
      const message = `${
        result.description
      } (${result.prize.toLocaleString()}원) - ${result.count}개`;
      Console.print(message);
    });

    Console.print(`총 수익률은 ${this.getProfitRate()}%입니다.`);
  }
}
export default LottoResult;
