import { lottoConfig } from './lottoConfig.js';

export default class LottoResult {
  #resultPrice;
  #earningRate;
  #result;

  constructor() {
    this.#result = Object.keys(lottoConfig.WINNING_PRIZE_MAP).reduce(
      (acc, key) => {
        acc[key] = 0;
        return acc;
      },
      {}
    );
    this.#resultPrice = 0;
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
    const matchStandards = Object.keys(lottoConfig.WINNING_CONDITIONS).map(
      Number
    );
    if (matchStandards.includes(matchCount)) {
      const matchKey =
        lottoConfig.WINNING_CONDITIONS[matchCount]?.[isBonusNumberMatch];

      if (matchKey && this.#result.hasOwnProperty(matchKey)) {
        this.#result[matchKey]++;
        this.#resultPrice += lottoConfig.WINNING_PRIZE_MAP[matchKey];
      }
    }
  }
}
