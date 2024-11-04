import { LOTTO_MIN_NUMBER, LOTTO_MAX_NUMBER, LOTTO_NUMBERS } from './constants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validateLottoNumbers(numbers);
    this.validateLottoDuplicate(numbers);
    this.validateLottoRange(numbers);
    this.#numbers = numbers;
  }

  validateLottoNumbers(numbers) {
    if (numbers.length !== LOTTO_NUMBERS) {
      throw new Error(`[ERROR] 로또 번호는 ${LOTTO_NUMBERS}개여야 합니다.`);
    }
  }

  validateLottoDuplicate(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error("[ERROR] 중복되는 숫자를 입력하실 수 없습니다.");
    }
  }

  validateLottoRange(numbers) {
    if (numbers.some((num) => num < LOTTO_MIN_NUMBER || num > LOTTO_MAX_NUMBER)) {
      throw new Error(`[ERROR] 로또 번호는 ${LOTTO_MIN_NUMBER}부터 ${LOTTO_MAX_NUMBER} 사이의 숫자여야 합니다.`);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
