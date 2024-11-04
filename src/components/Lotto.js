import { Console } from '@woowacourse/mission-utils';
import { DELIMETER, InputMessages } from '../resources/Constants.js';
import winningNumberValidator from '../validation/winningNumberValidator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    const joinedString = numbers.join(DELIMETER);
    winningNumberValidator(joinedString);
    this.#numbers = numbers;
  }

  getNumbers() {
    return this.#numbers;
  }

  static ascendingNumbers(numbers) {
    return numbers.slice().sort((a, b) => a - b);
  }

  static async createLotto() {
    try {
      const input = await Console.readLineAsync(InputMessages.WINNING_NUMBERS);

      winningNumberValidator(input);

      const numbers = input.split(DELIMETER).map((number) => Number(number));
      const sortedNumbers = Lotto.ascendingNumbers(numbers);

      return new Lotto(sortedNumbers);
    } catch (error) {
      Console.print(`${error.message}\n`);
      return this.createLotto();
    }
  }
}

export default Lotto;
