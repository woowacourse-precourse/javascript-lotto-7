import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "./constants/message.js";
import ERROR from "./constants/error.js";

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

    const numArray = numbers.split(',').map(Number);

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
}

export default Input;
