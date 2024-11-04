import OutputView from "../view/OutputView.js";
import { LOTTO_SETTINGS } from "../constants/lottoSettings.js";

class LottoResult {
  #result;
  #price;

  constructor(price) {
    this.#result = this.#initialResult();
    this.#price = price;
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

  calculateResult() {
    let prizeMoney = 0;

    Object.entries(this.#result).forEach(([key, value]) => {
      prizeMoney += LOTTO_SETTINGS.prizeMoney[key] * value;
    });

    const rateOfReturn = this.#getRateOfReturn(prizeMoney, this.#price);
    console.log(this.#result);

    OutputView.printStatisticsLine();
    OutputView.printStatisticsResult(this.#result, rateOfReturn);
  }

  #getRateOfReturn(money, price) {
    const result = (money / price) * 100;
    return result.toFixed(1);
  }

  getResult() {
    return this.#result;
  }
}

export default LottoResult;
