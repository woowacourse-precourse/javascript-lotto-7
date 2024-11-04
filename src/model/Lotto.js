import { MissionUtils } from '@woowacourse/mission-utils';
import { INPUT_ERROR_MESSAGE } from '../constant/errorMessage.js';
import {
  isCorrectLength,
  isCorrectRange,
  isNoOverlap,
} from '../util/validate.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (isCorrectLength(numbers.length)) {
      throw new Error(`[ERROR] ${INPUT_ERROR_MESSAGE.CORRECT_NUMBERS}`);
    }
    const validate = numbers.every((number) => isCorrectRange(number));
    if (validate) {
      throw new Error(`[ERROR] ${INPUT_ERROR_MESSAGE.CORRECT_RANGE}`);
    }
    if (isNoOverlap(numbers)) {
      throw new Error(`[ERROR] ${INPUT_ERROR_MESSAGE.NO_OVERLAP}`);
    }
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }

  static makeLotto() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);

    return new Lotto(numbers);
  }
}

export default Lotto;
