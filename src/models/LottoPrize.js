import ObservableModel from "./ObservableModel.js";

class LottoPrize extends ObservableModel {
  static PRIZE_KEYS = ["first", "second", "third", "forth", "fifth"];

  #lottoChecker;

  #prize;

  #returnRate;

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
    this.#returnRate = 0;
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

  #formatPrize() {
    const formattedPrize = LottoPrize.PRIZE_KEYS.map((rank) => {
      const { condition, money, count } = this.#prize[rank];
      return {
        condition,
        money: money.toLocaleString(),
        count,
        isBonus: rank === "second",
      };
    });
    return formattedPrize;
  }

  #formatReturnRate() {
    const rate = this.#returnRate.toFixed(1);
    const [integer, decimal] = rate.split(".");
    return `${Number(integer).toLocaleString()}.${decimal}%`;
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

    this.#returnRate = (totalPrize / money) * 100;
    return this.#returnRate;
  }

  getResult(lottos, money) {
    this.getPrize(lottos);
    this.getReturnRate(money);

    this.notify({
      prizeKeys: LottoPrize.PRIZE_KEYS,
      prize: this.#formatPrize(),
      returnRate: this.#formatReturnRate(),
    });
  }
}

export default LottoPrize;
