import { LOTTO_SETTINGS } from "../constants/lottoSettings.js";

class LottoResult {
  #result;

  constructor(lottoList, lottoWinner) {
    this.#result = this.#initialResult();
    this.lottoList = lottoList;
    this.lottoWinner = lottoWinner;
    this.checkLottoNumber(lottoList, lottoWinner);
  }

  #initialResult() {
    return {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    }
  }

  checkLottoNumber() {
    this.lottoList.forEach((lotto) => {
      const rank = this.lottoWinner.matchRate(lotto);
      if (rank === 0) {
        return;
      }
      this.#result[rank] += 1;
    });
  }

  calculateResult() {
    let prizeMoney = 0;

    Object.entries(this.#result).forEach(([key, value]) => {
      prizeMoney += LOTTO_SETTINGS.prizeMoney[key] * value;
    });

    const purchaseMoney = this.lottoList.length * LOTTO_SETTINGS.money;

    return this.#getRateOfReturn(prizeMoney, purchaseMoney);
  }

  getResult() {
    return this.#result;
  }

  #getRateOfReturn(money, price) {
    const result = (money / price) * 100;
    return result.toFixed(1);
  }
}

export default LottoResult;
