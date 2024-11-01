import { basicValidation, winningNumberValidation } from './Validation.js';
import { LOTTO_NUMBER_STANDARD, PRIZE } from './Constants/Constant.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validateNumbers(numbers);
    this.#numbers = numbers;
  }

  #validateNumbers(numbers) {
    winningNumberValidation.validateInputOverlap(numbers);
    basicValidation.validateInputLength(numbers, LOTTO_NUMBER_STANDARD.length);
  }

  getNumbers() {
    return this.#numbers;
  }

  calculateWinningLotto(winningNumbers) {
    return this.#numbers.filter((number) => winningNumbers.includes(number))
      .length;
  }

  compareMatchNumber(matchNumberCount, bonusNumber) {
    const resultTable = {
      [PRIZE[1].match]: PRIZE[1].rank,
      [PRIZE[2].match]: this.#numbers.includes(bonusNumber)
        ? PRIZE[2].rank
        : PRIZE[3].rank,
      [PRIZE[4].match]: PRIZE[4].rank,
      [PRIZE[5].match]: PRIZE[5].rank,
    };

    return resultTable[matchNumberCount] || PRIZE[0].rank;
  }

  calculateLottoResult(winningNumbers, bonusNumber) {
    const matchNumberCount = this.calculateWinningLotto(winningNumbers);
    const lottoresult = this.compareMatchNumber(matchNumberCount, bonusNumber);
    return lottoresult;
  }
}

export default Lotto;
