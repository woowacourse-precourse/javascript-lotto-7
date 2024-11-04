import { VALUES } from './constants/Values.js';
import validator from './utils/Validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    validator.validateLottoNumbers(numbers);
    this.#numbers = numbers;
  }

  getNumber() {
    return this.#numbers;
  }

  #drawWinningNumber(winningNumbers) {
    const matchCount = this.#numbers.filter((number) => winningNumbers.includes(number)).length;
    return matchCount;
  }

  #drawBonusNumber(bonusNumber) {
    return bonusNumber
      .map((number) => {
        return this.#numbers.includes(number);
      })
      .every(Boolean);
  }

  draw(winningNumbers, bonusNumber) {
    const state = {
      matchCount: this.#drawWinningNumber(winningNumbers),
      matchBonus: false,
    };
    if (state.matchCount === VALUES.matchBonusCount)
      state.matchBonus = this.#drawBonusNumber(bonusNumber);
    return state;
  }
}

export default Lotto;
