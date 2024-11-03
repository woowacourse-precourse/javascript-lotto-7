import { Console } from '@woowacourse/mission-utils'
import { CONSOLE_MESSAGES } from "./constant.js";

const SPLITTER = ',';

class InputValidator {
  static #VALID_LOTTERY_NUM = 6;
  static #VALID_LOWEST_NUM = 1;
  static #VALID_HIGHEST_NUM = 45;

  static validateNumber(number) {
    if(Number.isNaN(number) || number < this.#VALID_LOWEST_NUM || number > this.#VALID_HIGHEST_NUM) {
      throw new Error("[ERROR] 1부터 45까지의 숫자만 입력해주세요.")
    }
  }

  static validateWinNumbers(winNumbersArray) {
    winNumbersArray.forEach(this.isValidNumber);

    if (winNumbersArray.length !== this.#VALID_LOTTERY_NUM || new Set(winNumbersArray).size !== this.#VALID_LOTTERY_NUM) {
      throw new Error("[ERROR] 중복되지 않는 수 6개를 입력해주세요.");
    }
  }

  static validateBonusNumber(bonusNumber) {
    this.validateNumber(bonusNumber);
  }

  static validatePurchasePrice(price) {
    if (Number.isNaN(price) || price <= 0 || price % 1000 !== 0) {
      throw new Error('[ERROR] 1000원 단위의 양수 금액을 입력해주세요.');
    }
  }
}

class InputHandler {
  static async getPurchasePrice() {
    const purchasePrice = await Console.readLineAsync(CONSOLE_MESSAGES.buyPrice);
    InputValidator.validatePurchasePrice(purchasePrice);
    return purchasePrice;
  }

  static async getWinningNumbers() {
    const winNumber = await Console.readLineAsync(CONSOLE_MESSAGES.winNumber);
    const winNumbersArray = winNumber.split(SPLITTER).map(Number);

    InputValidator.validateWinNumbers(winNumbersArray);

    const bonusNumber = await Console.readLineAsync(CONSOLE_MESSAGES.bonusNumber);
    InputValidator.validateBonusNumber(Number(bonusNumber));

    return { winNumber, bonusNumber };
  }
}
export default InputHandler;
