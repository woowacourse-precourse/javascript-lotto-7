import { Console } from '@woowacourse/mission-utils';
import validator from './validator.js';
import { BUDGET_UNIT, COMMA, EMPTY_STRING, SYSTEM_MESSAGES } from './constants.js';
import Lotto from './Lotto.js';

class InputHandler {
  static async enterBudget() {
    const budget = await Console.readLineAsync(SYSTEM_MESSAGES.ENTER_BUDGET);
    validator.budget(budget);
    Console.print(EMPTY_STRING);

    return budget / BUDGET_UNIT;
  }

  static async enterWinningNumbers() {
    const rawWinningNumbers = await Console.readLineAsync(SYSTEM_MESSAGES.ENTER_WINNING_NUMBERS);
    const winningNumbers = rawWinningNumbers.split(COMMA).map((number) => Number(number));
    Console.print(EMPTY_STRING);

    return new Lotto(winningNumbers);
  }

  static async enterBonusNumber(winningNumbers) {
    const bonusNumber = await Console.readLineAsync(SYSTEM_MESSAGES.ENTER_BONUS_NUMBER);
    validator.bonusNumber(bonusNumber, winningNumbers);
    Console.print(EMPTY_STRING);
    
    return Number(bonusNumber);
  }
}

export default InputHandler;
