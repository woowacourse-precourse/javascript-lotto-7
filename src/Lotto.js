import VALUES from './constants/Values.js';
import validator from './utils/Validator.js';

class Lotto {
  #numbers;

  #state;

  constructor(numbers) {
    validator.validateLottoNumbers(numbers);
    this.#numbers = numbers;
    this.#state = {
      matchCount: 0,
      matchBonus: false,
    };
  }

  getNumber() {
    return this.#numbers;
  }

  #drawWinningNumber(winningNumbers) {
    const matchCount = this.#numbers.filter((number) => winningNumbers.includes(number)).length;
    this.#state.matchCount = matchCount;
  }

  #drawBonusNumber(bonusNumber) {
    this.#state.matchBonus = this.#numbers.includes(bonusNumber);
  }

  draw(winningNumbers, bonusNumber) {
    this.#drawWinningNumber(winningNumbers);
    if (this.#state.matchCount === VALUES.matchBonusCount) this.#drawBonusNumber(bonusNumber);
    return this.#state;
  }
}

export default Lotto;
