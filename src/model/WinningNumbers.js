import Lotto from '../Lotto.js';
import intersect from '../utils/intersect.js';

class WinningNumbers {
  #winningLotto;
  #bonus;

  constructor (numbers) {
    WinningNumbers.#validate(numbers);
    this.#winningLotto = new Lotto(numbers);
  }

  static #validate (numbers) {
    new Lotto(numbers);
  }

  test (lotto) {
    const { length } = intersect(lotto.numbers, [...this.#winningLotto.numbers]);
    const bonusMatch = lotto.has(this.#bonus.value);
    return { matched: length, bonusMatch };
  }

  setBonus (bonus) {
    this.#bonus = bonus;
  }

  has (number) {
    return this.#winningLotto.has(number);
  }

}

export default WinningNumbers;
