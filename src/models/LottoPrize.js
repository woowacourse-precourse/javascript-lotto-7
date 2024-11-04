import ObservableModel from "./ObservableModel.js";

class LottoPrize extends ObservableModel {
  static PRIZE_KEYS = ["first", "second", "third", "forth", "fifth"];

  #lottoChecker;

  #prize;

  constructor(lottoChecker) {
    super();
    this.#lottoChecker = lottoChecker;
    this.#prize = {
      first: { condition: 6, money: 2000000000, count: 0 },
      second: { condition: 5, money: 30000000, count: 0 },
      third: { condition: 5, money: 1500000, count: 0 },
      forth: { condition: 4, money: 50000, count: 0 },
      fifth: { condition: 3, money: 5000, count: 0 },
    };
  }

  /**
   *
   * @param {"first"|"second"|"third"|"forth"|"fifth"} rank - 등수
   */
  #updateRanks(rank) {
    this.#prize[rank].count += 1;
    return rank;
  }

  /**
   *
   * @param {number[]} lotto - 로또 배열
   */
  getRank(lotto) {
    const { winningCount, isMatchBonus } = this.#lottoChecker.checkLotto(lotto);

    const rank = LottoPrize.PRIZE_KEYS.find((key) => {
      const { condition } = this.#prize[key];
      return winningCount === condition && (key !== "second" || isMatchBonus);
    });

    if (!rank) return false;
    return this.#updateRanks(rank);
  }

  /**
   *
   * @param {number[][]} lottos
   */
  getPrize(lottos) {
    lottos.forEach((lotto) => {
      this.getRank(lotto);
    });

    return this.#prize;
  }

  getReturnRate(money) {
    const totalPrize = Object.values(this.#prize)
      .reduce((acc, cur) => acc + cur.count * cur.money, 0);

    return (totalPrize / money) * 100;
  }

  getResult(lottos, money) {
    this.notify({
      prizeKeys: LottoPrize.PRIZE_KEYS,
      prize: this.getPrize(lottos),
      returnRate: this.getReturnRate(money).toFixed(1),
    });
  }
}

export default LottoPrize;
