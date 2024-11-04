import { Console } from '@woowacourse/mission-utils';
import VIEWMESSAGES from '../resources/VIEWMESSAGES.js';
import validateInputMoney from './validator/validateInputMoney.js';
import validateWinningNumbers from './validator/validateWinningNumbers.js';
import RULES from '../resources/RULES.js';
import validateBonusNumber from './validator/validateBonusNumber.js';

export async function inputPurchaseAmount() {
  while (true) {
    try {
      const inputMoney = await Console.readLineAsync(
        VIEWMESSAGES.INPUT_MONEY_AMOUNT_PROMPT,
      );
      validateInputMoney(inputMoney);
      return Number(inputMoney);
    } catch (error) {
      Console.print(error);
    }
  }
}

export async function inputWinningNumbers() {
  while (true) {
    try {
      const winningNumbers = await Console.readLineAsync(
        VIEWMESSAGES.INPUT_WINNING_NUMBER_PROMPT,
      );
      validateWinningNumbers(winningNumbers);
      return winningNumbers.split(RULES.DELIMITER_WINNING_NUMBERS).map(Number);
    } catch (error) {
      Console.print(error);
    }
  }
}

export async function inputBonusNumber(winningNumbers) {
  while (true) {
    try {
      const bonusNumber = await Console.readLineAsync(
        VIEWMESSAGES.INPUT_BONUS_NUMBER_PROMPT,
      );
      validateBonusNumber(bonusNumber, winningNumbers);
      return [Number(bonusNumber)];
    } catch (error) {
      Console.print(error);
    }
  }
}
