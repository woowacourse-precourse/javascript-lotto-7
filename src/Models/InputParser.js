import validator from '../Validators/Validator.js';
import {
  DEFAULT_RULES,
  PURCHASE_AMOUNT_RULES,
  LOTTO_NUMBER_LIST_RULES,
  LOTTO_NUMBER_RULES,
  BONUS_NUMBER_RULES,
} from '../Validators/Rules.js';

class InputParser {
  static #SEPARATOR = ',';

  static #default(input) {
    validator(input, DEFAULT_RULES);
    const trimInput = input.trim();
    return trimInput;
  }

  static #winningNumber(number) {
    validator(number, LOTTO_NUMBER_RULES);
    const winningNumber = parseInt(number, 10);
    return winningNumber;
  }

  // input을 ,로 split하고 중복값 발생시 오류 방지를 위해 값들을 trim() 해줌 (ex: '  1' !== ' 1  ')
  static #splitter(input) {
    const splitInput = input
      .split(this.#SEPARATOR)
      .map((value) => value.trim());

    return splitInput;
  }

  static purchaseAmount(input) {
    const trimInput = this.#default(input);
    validator(trimInput, PURCHASE_AMOUNT_RULES);

    const purchaseAmount = parseInt(trimInput, 10);
    return purchaseAmount;
  }

  static winningNumbers(input) {
    const trimInput = this.#default(input);
    const splitInput = this.#splitter(trimInput);
    validator(splitInput, LOTTO_NUMBER_LIST_RULES);

    const winningNumbers = splitInput.map((number) => {
      return this.#winningNumber(number);
    });
    return winningNumbers;
  }

  static bonusNumber(lottoNumbers, input) {
    const trimInput = this.#default(input);
    validator({ lottoNumbers, bonusNumber: trimInput }, BONUS_NUMBER_RULES);

    const bonusNumber = parseInt(trimInput, 10);
    return bonusNumber;
  }
}

export default InputParser;
