import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';
import ERROR from '../constants/error.js';
import CONSTANT from '../constants/costant.js';
import Validator from '../utils/Validator.js';

class Input {
  async getPurchaseAmount() {
    try {
      const money = await this.requestPurchaseAmount();
      return money;
    } catch (error) {
      Console.print(error.message);
      return await this.getPurchaseAmount();
    }
  }

  async requestPurchaseAmount() {
    const money = await Console.readLineAsync(
      MESSAGE.INPUT_MESSAGE.PURCHASE_AMOUNT
    );
    this.#moneyValidator(money);
    return Number(money);
  }

  #moneyValidator(money) {
    Validator.invalidValue(money);

    if (money < 1000) {
      throw new Error(ERROR.SMALL_THAN_THOUSAND);
    }

    if (money % 1000 !== 0) {
      throw new Error(ERROR.IS_NOT_DEVIDED);
    }
  }

  async getLottoNumber() {
    try {
      const numbers = await this.requestLottoNumber();
      const numArray = numbers.split(',').map(Number);
      return numArray;
    } catch (error) {
      Console.print(error.message);
      return await this.getLottoNumber();
    }
  }

  async requestLottoNumber() {
    const numberString = await Console.readLineAsync(
      MESSAGE.INPUT_MESSAGE.WINNING_NUMBERS
    );
    this.#lottoValidator(numberString);
    return numberString;
  }

  #lottoValidator(numbers) {
    Validator.blankValue(numbers);

    const stringArray = numbers.split(',');
    const removeDuplicate = new Set(stringArray);
    if (stringArray.length !== removeDuplicate.size) {
      throw new Error(ERROR.DUPLICATED_NUMBER);
    }

    const numArray = stringArray.map(Number);
    if (numArray.length !== CONSTANT.LOTTO_CANSTANT.LOTTO_LENGTH) {
      throw new Error(ERROR.INVALID_NUMBER_COUNT);
    }

    numArray.forEach((num) => {
      Validator.notInRange(num);
      Validator.invalidValue(num);
      Validator.isNotInt(num);
    });
  }

  async getBonusNumber(lottoNumbers) {
    try {
      const bonus = await this.requestBonusNumber(lottoNumbers);
      return bonus;
    } catch (error) {
      Console.print(error.message);
      return await this.getBonusNumber(lottoNumbers);
    }
  }

  async requestBonusNumber(lottoNumbers) {
    const number = await Console.readLineAsync(
      MESSAGE.INPUT_MESSAGE.BONUS_NUMBER
    );
    this.#bonusValidator(number, lottoNumbers);
    return Number(number);
  }

  #bonusValidator(num, lottoNumbers) {
    Validator.blankValue(num);

    const number = Number(num);

    Validator.notInRange(number);
    Validator.invalidValue(number);
    Validator.isNotInt(number);

    if (lottoNumbers.includes(Number(num))) {
      throw new Error(ERROR.DUPLICATED_NUMBER);
    }
  }
}

export default Input;
