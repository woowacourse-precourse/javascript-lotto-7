import { DELIMETER, InputMessages } from '../resources/Constants.js';
import winningNumberValidator from '../validation/winningNumberValidator.js';
import Input from '../utils/Input.js';

class Lotto {
  #numbers;

  constructor(input) {
    this.init(input);
  }

  init(input) {
    let joinedString = input;

    if (Array.isArray(input)) {
      joinedString = input.join(DELIMETER);
      winningNumberValidator(joinedString);
      this.#numbers = Lotto.ascendingNumbers(input);
    } else if (typeof input === 'string') {
      const numbers = input.split(DELIMETER).map((number) => Number(number));
      this.#numbers = Lotto.ascendingNumbers(numbers);
    }
  }

  async #validate(joinedString) {
    try {
      winningNumberValidator(joinedString);
      return joinedString;
    } catch (error) {
      return Input.promptRetry(
        InputMessages.WINNING_NUMBERS,
        winningNumberValidator,
        error.message,
      );
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  static ascendingNumbers(numbers) {
    return numbers.slice().sort((a, b) => a - b);
  }

  static async createLotto() {
    const input = await Input.promptRetry(
      InputMessages.WINNING_NUMBERS,
      winningNumberValidator,
    );
    const lotto = new Lotto(input);

    return lotto;
  }
}

export default Lotto;
