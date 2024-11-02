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

  setEarningRate(earningRate){
    this.#earningRate= earningRate
  }

  getResultPrice() {
    return this.#resultPrice;
  }

  saveResult(matchCount, isBonusNumberMatch) {
    if (lottoConfig.WIN_MATCH_COUNTS.includes(matchCount)) {
      let matchKey;

      if (matchCount === 5 && isBonusNumberMatch) {
        matchKey = '5개 일치, 보너스 볼 일치';
      } else if (lottoConfig.WIN_MATCH_COUNTS.includes(matchCount)) {
        matchKey = `${matchCount}개 일치`;
      }

      if (matchKey && this.#result.hasOwnProperty(matchKey)) {
        this.#result[matchKey]++;
        this.#resultPrice += lottoConfig.WINNING_PRIZE_MAP[matchKey]
      }
    }
  }
}
