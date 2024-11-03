import { Console } from '@woowacourse/mission-utils';
import { DELIMETER, InputPrompts } from '../resources/Constants.js';
import winningNumberValidator from '../validation/winningNumberValidator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    const joinedString = numbers.join(DELIMETER);
    winningNumberValidator(joinedString);
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

  static async createLotto() {
    try {
      const input = await Console.readLineAsync(InputPrompts.winningNumbers);

      winningNumberValidator(input);

      const numbers = input.split(DELIMETER).map((number) => Number(number));
      const sortedNumbers = Lotto.ascendingNumbers(numbers);

      return new Lotto(sortedNumbers);
    } catch (error) {
      Console.print(error.message);
      return this.createLotto();
    }
  }
}

export default Lotto;
