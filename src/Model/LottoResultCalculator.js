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
      this.#result.get(rank).count += 1;
    });

    return this.#result;
  }
}
