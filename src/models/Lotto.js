import { ERROR_MESSAGE } from "../constants/errorMessage.js";

export default class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  getNumbers() {
    return this.#numbers;
  }

  #validate(numbers) {
    this.#checkLottoCount(numbers);
    this.#checkNumberDuplication(numbers);
  }

  #checkLottoCount(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.LOTTO.INVALID_LOTTO_NUMBER_COUNT);
    }
  }

  #checkNumberDuplication(numbers) {
    const lottoSet = new Set();
    
    numbers.forEach((number) => {
      if (lottoSet.has(number)) {
        throw new Error(ERROR_MESSAGE.LOTTO.NUMBER_DUPLICATION);
      }
      lottoSet.add(number);
    });
  }  
}
