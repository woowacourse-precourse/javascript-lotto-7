import { MissionUtils } from '@woowacourse/mission-utils';
import { INPUT_PRINT_MESSAGES } from '../contents/InputPrintMessages.js';
import MoneyManager from './MoneyManager.js';
import Lotto from '../Lotto.js';
import BonusNumber from './BonusNumber.js';

class InputProcessor {
  static async promptWithValidation(inputHandler, validationConfig) {
    const {
      promptMessage,
      isWinningNumber,
      ValidatorClass,
      validatorArgs = [],
    } = validationConfig;
    while (true) {
      try {
        const userInput = await inputHandler.getInput(
          promptMessage,
          isWinningNumber,
        );
        new ValidatorClass(userInput, ...validatorArgs);
        return userInput;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }

  static async promptForMoney(input) {
    const validationConfig = {
      promptMessage: INPUT_PRINT_MESSAGES.money,
      ValidatorClass: MoneyManager,
    };
    const money = await this.promptWithValidation(input, validationConfig);
    return new MoneyManager(money).getLottoTicketCount();
  }

  static async promptForWinningNumbers(input) {
    const validationConfig = {
      promptMessage: INPUT_PRINT_MESSAGES.winning_number,
      isWinningNumber: true,
      ValidatorClass: Lotto,
    };
    return this.promptWithValidation(input, validationConfig);
  }

  static async promptForBonusNumber(input, winningNumber) {
    const validationConfig = {
      promptMessage: INPUT_PRINT_MESSAGES.bonus_number,
      ValidatorClass: BonusNumber,
      validatorArgs: [winningNumber],
    };
    return this.promptWithValidation(input, validationConfig);
  }
}

export default InputProcessor;
