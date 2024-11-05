import { LOTTO_CONFIG } from '../constants/lottoConfig.js';

export default class LottoResult {
  #START_PRICE = 0;
  #INIT_COUNT = 0;
  #resultPrice;
  #earningRate;
  #result;

  constructor() {
    this.#result = Object.keys(LOTTO_CONFIG.WINNING_PRIZE_MAP)
      .reduce(
        (acc, key) => {
          acc[key] = this.#INIT_COUNT;
          return acc;
        },
        {},
      );
    this.#resultPrice = this.#START_PRICE;
  }

  getResult() {
    return this.#result;
  }

  getEarningRate() {
    return this.#earningRate;
  }

  setEarningRate(earningRate) {
    this.#earningRate = earningRate;
  }

  getResultPrice() {
    return this.#resultPrice;
  }

  saveResult(matchCount, isBonusNumberMatch) {
    const matchStandards = Object.keys(LOTTO_CONFIG.WINNING_CONDITIONS)
      .map(
        Number,
      );
    if (matchStandards.includes(matchCount)) {
      const matchKey =
        LOTTO_CONFIG.WINNING_CONDITIONS[matchCount]?.[isBonusNumberMatch];

      if (matchKey && this.#result.hasOwnProperty(matchKey)) {
        this.#result[matchKey]++;
        this.#resultPrice += LOTTO_CONFIG.WINNING_PRIZE_MAP[matchKey];
      }
    }
  }
}
