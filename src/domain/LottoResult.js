import { LOTTO_SETTINGS } from "../constants/lottoSettings.js";

class LottoResult {
  #result;

  constructor(lotto, winner) {
    this.#result = this.#initialResult();
    this.lotto = lotto;
    this.winner = winner;
    this.checkLottoNumber(lotto, winner);
  }

  #initialResult() {
    return {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      0: 0,
    }
  }

  checkLottoNumber() {
    const rank = this.winner.matchRate(this.lotto);

    const matchCount = this.lotto.filter((lottoNumber) =>
      this.lotto.includes(lottoNumber)).length;

    this.#result[rank] += 1;
    return this.#result;
  }

  calculateResult() {
    let prizeMoney = 0;

    Object.entries(this.#result).forEach(([key, value]) => {
      prizeMoney += LOTTO_SETTINGS.prizeMoney[key] * value;
    });

    const lottoCount = this.lotto.length;

    return this.#getRateOfReturn(prizeMoney, lottoCount);
  }

  #getRateOfReturn(money, price) {
    const result = (money / price) * 100;
    return result.toFixed(1);
  }
}

export default LottoResult;
