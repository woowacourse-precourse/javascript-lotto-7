import { Console } from '@woowacourse/mission-utils'
import { CONSOLE_MESSAGES } from "./constant.js";
const VALID_LOTTERY_NUM = 6;

class InputValidator {
  static validateWinNumbers(winNumbersArray) {
    winNumbersArray.forEach(winNumber => {
      if (Number.isNaN(winNumber) === true) throw new Error ('[ERROR] 로또 당첨 번호에 숫자를 입력해주세요.');
      if (Number(winNumber) === 0) throw new Error('[ERROR] 로또 당첨 번호에 0 또는 공백 대신 숫자를 입력해주세요.');
      if (winNumber < 1 || winNumber > 45 ) throw new Error('[ERROR] 로또 당첨 번호는 1부터 45 사이의 숫자를 입력해주세요.');
    })
    if (winNumbersArray.length !== VALID_LOTTERY_NUM) throw new Error('[ERROR] 로또 당첨 번호는 6개 입력해주세요.');
    if (new Set(winNumbersArray).size !== VALID_LOTTERY_NUM) throw new Error('[ERROR] 로또 당첨 번호는 중복되지 않게 6개를 입력해주세요.')
  }

  static validateBonusNumber(bonusNumber) {
    const num = Number(bonusNumber);
    if (num < 1 || num > 45) {
      throw new Error('[ERROR] 보너스 번호는 1부터 45 사이의 숫자를 입력해주세요.')
    }
  }
}

class InputHandler {
  static async getPurchasePrice() {
    return await Console.readLineAsync(CONSOLE_MESSAGES.buyPrice);
  }

  static async getWinningNumbers() {
    const winNumber = await Console.readLineAsync(CONSOLE_MESSAGES.winNumber);
    const winNumbersArray = winNumber.split(',').map(Number);
    InputValidator.validateWinNumbers(winNumbersArray);

    const bonusNumber = await Console.readLineAsync(CONSOLE_MESSAGES.bonusNumber);
    InputValidator.validateBonusNumber(bonusNumber);

    return { winNumber, bonusNumber };
  }
}
export default InputHandler;
