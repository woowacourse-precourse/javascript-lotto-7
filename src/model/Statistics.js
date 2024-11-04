import { PROFITS } from '../constants/won.js';

class Statistics {
  #three = 0;
  #four = 0;
  #five = 0;
  #fiveBonus = 0;
  #six = 0;
  #profit = 0;

  constructor(winning, lottos, amount, bonus) {
    this.winning = winning;
    this.lottos = lottos;
    this.amount = amount;
    this.bonus = bonus;
    this.#makeStatistics();
    this.#calculateProfit();
  }

  getStatistics() {
    return [this.#three, this.#four, this.#five, this.#fiveBonus, this.#six];
  }

  getProfit() {
    return this.#profit;
  }

  #makeStatistics() {
    const winningNumbers = this.winning.getNumbers();

    this.lottos.forEach((lotto) => {
      const numbers = lotto.getNumbers();
      let cnt = numbers.filter((num) => winningNumbers.includes(num)).length;

      this.#cntFilter(cnt, numbers);
    });
  }

  #cntFilter(cnt, numbers) {
    if (cnt === 3) {
      this.#three++;
    } else if (cnt === 4) {
      this.#four++;
    } else if (cnt === 5) {
      if (numbers.includes(Number(this.bonus))) {
        this.#fiveBonus++;
      } else {
        this.#five++;
      }
    } else if (cnt === 6) {
      this.#six++;
    }
  }

  #calculateProfit() {
    const totalProfit =
      this.#three * PROFITS.THREE +
      this.#four * PROFITS.FOUR +
      this.#five * PROFITS.FIVE +
      this.#fiveBonus * PROFITS.FIVE_BONUS +
      this.#six * PROFITS.SIX;

    this.#profit = Math.round((totalProfit / this.amount) * 10000) / 100;
  }
}

export default Statistics;
