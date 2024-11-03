import { Console } from '@woowacourse/mission-utils';
import { DELIMETER, InputPrompts } from '../resources/Constants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  static ascendingNumbers(numbers) {
    return numbers.slice().sort((a, b) => a - b);
  }

  static async promptLotto() {
    const input = await Console.readLineAsync(InputPrompts.winningNumbers);
    const numbers = input.split(DELIMETER).map((number) => Number(number));

    const sortedNumbers = Lotto.ascendingNumbers(numbers);
    return new Lotto(sortedNumbers);
  }
}

export default Lotto;
