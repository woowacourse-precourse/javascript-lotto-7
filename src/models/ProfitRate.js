import { prize } from '../constants/lottoResult.js';

class ProfitRate {
  #profitRate;
  #winLotto;
  #amount;
  #totalPrize = 0;

  constructor(winLotto, amount) {
    this.#winLotto = winLotto.getWinLotto();
    this.#amount = amount.getAmount();
    this.#profitRate = this.#calculate();
  }

  getProfitRate() {
    return this.#profitRate;
  }

  #calculate() {
    this.#setTotalPrize();
    const profit = (this.#totalPrize / this.#amount) * 100;
    return Math.round(profit * 10) / 10;
  }

  #setTotalPrize() {
    this.#winLotto.forEach((count, key) => this.#calculatePrize(key, count));
  }

  #calculatePrize(key, count) {
    this.#totalPrize += this.#getPrize(key) * count;
  }

  #getPrize(key) {
    return Number(prize[key].replace(/[^0-9]/g, ''));
  }
}

export default ProfitRate;
