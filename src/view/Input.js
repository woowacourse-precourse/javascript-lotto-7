import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constants/message.js";
import ERROR from "../constants/error.js";
import CONSTANT from "../constants/costant.js";

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
      const money = await Console.readLineAsync(MESSAGE.PURCHASE_AMOUNT);
      this.#moneyValidator(money);
      return Number(money);
  }

  #moneyValidator(money) {
    if (isNaN(money)) {
      throw new Error(ERROR.IS_NOT_INT);
    }

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
    const numberString = await Console.readLineAsync(MESSAGE.WINNING_NUMBERS);
    this.#lottoValidator(numberString);
    return numberString;
  }

  #lottoValidator(numbers) {
    if (!numbers || numbers.trim() == '') {
        throw new Error(ERROR.BLANK);
    }

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
      if (num > 45 || num < 1) { 
          throw new Error(ERROR.INVALID_RANGE_NUMBER);
      }

      if (isNaN(num)) {
          throw new Error(ERROR.INVALID_VALUE);
      }

      if (!Number.isInteger(num)) {
          throw new Error(ERROR.IS_NOT_INT);
      }


  });
  }

  async getBonusNumber() {
    try {
        const bonus = await this.requestBonusNumber();
        return bonus;
    } catch (error) {
        Console.print(error.message);
        return await this.getBonusNumber();
    }
  }

  async requestBonusNumber() {
      const number = await Console.readLineAsync(MESSAGE.BONUS_NUMBER);
      this.#bonusValidator(number);
      return Number(number);
  }

  #bonusValidator(num) {
    if (!num || num.trim() == '') {
        throw new Error(ERROR.BLANK);
    }

    const number = Number(num);

    if (number > 45 || number < 1) { 
        throw new Error(ERROR.INVALID_RANGE_NUMBER);
    }

    if (isNaN(number)) {
        throw new Error(ERROR.INVALID_VALUE);
    }

    if (!Number.isInteger(number)) {
        throw new Error(ERROR.IS_NOT_INT);
    }
  };
}

export default Input;
