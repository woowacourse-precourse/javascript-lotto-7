import { MissionUtils } from '@woowacourse/mission-utils';
import { INPUT_ERROR_MESSAGE } from '../constant/errorMessage';
import { isCorrectLength, isNoOverlap } from '../util/validate';

class Lotto {
  #numbers;

  static MIN = 1;
  static MAX = 45;
  static COUNT = 6;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (isCorrectLength(Lotto.COUNT)) {
      throw new Error(`[ERROR] ${INPUT_ERROR_MESSAGE.CORRECT_NUMBERS}`);
    }
    if (isNoOverlap) {
      throw new Error(`[ERROR] ${INPUT_ERROR_MESSAGE.NO_OVERLAP}`);
    }
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }

  static makeLotto() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(
      Lotto.MIN,
      Lotto.MAX,
      Lotto.COUNT,
    ).sort();

    return new Lotto(numbers);
  }
}

export default Lotto;
