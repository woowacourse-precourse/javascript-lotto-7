import Lotto from './Lotto.js';

export default class LottoResultCalculator {
  #lottos;

  #winningLotto;

  #result = new Map([
    [1, { count: 0, prize: 2_000_000_000 }],
    [2, { count: 0, prize: 30_000_000 }],
    [3, { count: 0, prize: 1_500_000 }],
    [4, { count: 0, prize: 50_000 }],
    [5, { count: 0, prize: 5_000 }],
  ]);

  constructor(lottos, winningLotto) {
    this.#lottos = lottos;
    this.#winningLotto = winningLotto;
  }

  calculateResults() {
    this.#lottos.forEach((lotto) => {
      const rank = this.#winningLotto.calculateRank(lotto.getNumbers());
      if (rank) {
        this.#result.get(rank).count += 1;
      }
    });

    return this.#result;
  }

  calculateProfitRate() {
    const purchaseAmount = this.#lottos.length * Lotto.PRICE;
    const totalPrize = Array.from(this.#result.values()).reduce(
      (acc, { count, prize }) => acc + count * prize,
      0,
    );

    const profitRate = (totalPrize / purchaseAmount) * 100;
    return Number(profitRate.toFixed(2));
  }
}
