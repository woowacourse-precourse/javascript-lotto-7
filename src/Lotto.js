import { checkWinNumbers } from './validation.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    checkWinNumbers(numbers);
  }

  sortLottoNumbers() {
    this.#numbers.sort((a, b) => a - b);
  }

  getlottoList() {
    this.sortLottoNumbers();
    return this.#numbers;
  }

  getWinResult(winNumbers, bonusNumber) {
    let matchCount = 0;
    this.#numbers.forEach(number => {
      if (winNumbers.includes(number)) {
        matchCount++;
      }
    });
    if (matchCount === 6) {
      return 1; // 1등
    }
    if (matchCount === 5 && this.#numbers.includes(bonusNumber)) {
      return 2; // 2등
    }
    return 8 - matchCount; // 3등 ~ 5등
  }
}

export default Lotto;