import { ConsoleIO } from '../io/index.js';
import { LottoValidator } from '../services/index.js';

class Lotto {
  #numbers;
  #matchCount;
  #isBonusMatch;
  #ranking;

  constructor(numbers) {
    LottoValidator.validate(numbers);
    this.#numbers = numbers;
    this.#printNumbers();
  }

  matchNumbers({ mainNumbers, bonusNumber }) {
    this.#matchCount = this.#numbers.reduce((acc, cur) => acc + Number(mainNumbers.includes(cur)), 0);
    this.#isBonusMatch = this.#numbers.includes(bonusNumber);
  }

  #printNumbers() {
    ConsoleIO.print(`[${this.#numbers.join(', ')}]`);
  }

  getMatchCount() {
    return this.#matchCount;
  }

  isBonusMatch() {
    return this.#isBonusMatch;
  }

  getMatchData() {
    return {
      matchCount: this.#matchCount,
      isBonusMatch: this.#isBonusMatch,
    };
  }

  getRanking() {
    return this.#ranking;
  }

  setRanking(ranking) {
    this.#ranking = ranking;
  }
}

export default Lotto;
