import { Console } from '@woowacourse/mission-utils'
import { CONSOLE_MESSAGES } from "./constant.js";
const VALID_LOTTERY_NUM = 6;
const VALID_LOWEST_NUM = 1;
const VALID_HIGHEST_NUM = 45;
const SPLITTER = ',';

class InputValidator {
  static isValidNumber(number) {
    if(Number.isNaN(number) || number < VALID_LOWEST_NUM || number > VALID_HIGHEST_NUM) {
      throw new Error("[ERROR] 1부터 45까지의 숫자만 입력해주세요.")
    }
  }

  static validateWinNumbers(winNumbersArray) {
    winNumbersArray.forEach(this.isValidNumber);

    if (winNumbersArray.length !== VALID_LOTTERY_NUM || new Set(winNumbersArray).size !== VALID_LOTTERY_NUM) {
      throw new Error("[ERROR] 중복되지 않는 수 6개를 입력해주세요.");
    }
  }

  static validateBonusNumber(bonusNumber) {
    this.isValidNumber(bonusNumber);
  }
}

class InputHandler {
  static async getPurchasePrice() {
    return await Console.readLineAsync(CONSOLE_MESSAGES.buyPrice);
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
