import { MissionUtils } from '@woowacourse/mission-utils';
import { INPUT_PRINT_MESSAGES } from '../contents/InputPrintMessages.js';
import MoneyManager from './MoneyManager.js';
import Lotto from '../Lotto.js';
import BonusNumber from './BonusNumberManager.js';

class InputValidator {
  static async promptWithValidation(input, validationConfig) {
    while (true) {
      try {
        const { message, winningNum, ValidatorClass, validatorArgs } =
          validationConfig;
        const value = await input.getInput(message, winningNum); // getInput만 사용
        new ValidatorClass(value, ...validatorArgs); // 검증 수행
        return value; // 유효한 값 반환
      } catch (error) {
        MissionUtils.Console.print(error.message); // 에러 메시지 출력
      }
    }
  }

  static async promptForMoney(input) {
    const validationConfig = {
      message: INPUT_PRINT_MESSAGES.money,
      ValidatorClass: MoneyManager,
      validatorArgs: [],
    };
    const money = await this.promptWithValidation(input, validationConfig);
    return new MoneyManager(money).getLottoTicketCount();
  }

  static async promptForWinningNumbers(input) {
    const validationConfig = {
      message: INPUT_PRINT_MESSAGES.winning_number,
      winningNum: true,
      ValidatorClass: Lotto,
      validatorArgs: [],
    };
    return this.promptWithValidation(input, validationConfig);
  }

  static async promptForBonusNumber(input, winningNumber) {
    const validationConfig = {
      message: INPUT_PRINT_MESSAGES.bonus_number,
      ValidatorClass: BonusNumber,
      validatorArgs: [winningNumber],
    };
    return this.promptWithValidation(input, validationConfig);
  }
}

export default InputValidator;
