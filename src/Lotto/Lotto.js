import LOTTO_CONFIG from '../constants/lottoConfig.js';
import ERROR_MESSAGE from '../constants/errorMessage.js';
import printString from '../output/printString.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_CONFIG.NUMBER_COUNT) {
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBER_OVER_COUNT);
    }
    const numbersSet = new Set(numbers);

    if (numbersSet.size !== LOTTO_CONFIG.NUMBER_COUNT) {
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBER_DUPLICATE);
    }
    numbersSet.forEach(number => {
      if(typeof number !== 'number' || Number.isNaN(number)) {
        throw new Error(ERROR_MESSAGE.LOTTO_NUMBER_IMPOSSIBLE);
      }
      if (!Number.isInteger(number)) {
        throw new Error(ERROR_MESSAGE.LOTTO_NUMBER_NOT_INTEGER);
      }
      if (number < LOTTO_CONFIG.MIN_NUMBER) {
        throw new Error(ERROR_MESSAGE.LOTTO_NUMBER_TOO_SMALL);
      }
      if (number > LOTTO_CONFIG.MAX_NUMBER) {
        throw new Error(ERROR_MESSAGE.LOTTO_NUMBER_TOO_LARGE);
      }
    });
  }

  print(){
    printString(`[${this.#numbers.join(', ')}]`);
    }
  // TODO: 추가 기능 구현
}

export default Lotto;
