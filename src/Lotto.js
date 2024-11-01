import { MissionUtils } from '@woowacourse/mission-utils';
import { errorMessage } from './constant/errorMessage.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(`${errorMessage.prefix} ${errorMessage.invalidLotto}`);
    }
  }

  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
