import { MissionUtils } from '@woowacourse/mission-utils';
import { errorMessage } from './constant/errorMessage';

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
}

export default Lotto;
