import { Console } from '@woowacourse/mission-utils';
import NumberValidator from './utils/NumberValidator.js';
import { LOTTO_ERRORS } from './constants/constants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.validateLottoNumbers(numbers);
    this.#numbers = numbers;
  }

  static async createLottoWithInput() {
    try {
      const lottoNumbers =
        await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
      Console.print('');

      const lottoNumberArray = lottoNumbers
        .split(',')
        .map((num) => num.trim())
        .map(Number);

      Lotto.validateLottoNumbers(lottoNumberArray);

      return lottoNumberArray.map(Number);
    } catch (error) {
      Console.print(error.message);
      return this.createLottoWithInput();
    }
  }

  static validateLottoNumbers(numbers) {
    NumberValidator.validateIsEmpty(numbers);
    this.validateLottoLength(numbers);
    this.validateDuplicatedNumber(numbers);

    numbers.forEach((number) => {
      NumberValidator.validateIsEmpty(number);
      NumberValidator.validateIsNumber(number);
      NumberValidator.validateNoDecimal(number);

      const parsedNumber = parseFloat(number);
      NumberValidator.validateIsInteger(parsedNumber);
      NumberValidator.validateLottoNumberRange(parsedNumber);
    });
  }

  static validateLottoLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error(LOTTO_ERRORS.NOT_SIX_NUMBER);
    }
  }

  static validateDuplicatedNumber(numbers) {
    const hasDuplicatedNumber = new Set(numbers).size !== numbers.length;
    if (hasDuplicatedNumber) {
      throw new Error(LOTTO_ERRORS.DUPLICATED_LOTTO_NUMBER);
    }
  }
}

export default Lotto;
