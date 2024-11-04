import { Console } from '@woowacourse/mission-utils';
import { PROMPT } from './constants/messages.js';
import Validator from './Validator.js';

class InputProcessor {
  static async get(value) {
    const input = await Console.readLineAsync(value);
    return input;
  }

  static async purchasePrice() {
    try {
      const input = await InputProcessor.get(PROMPT.PRICE_INPUT);
      Validator.price(input);
      return input;
    } catch (error) {
      Console.print(error.message);
      return InputProcessor.purchasePrice();
    }
  }

  static async winningNumbers() {
    try {
      const input = await InputProcessor.get(PROMPT.WINNING_NUMBER_INPUT);
      const winningNumbers = input.split(',');
      Validator.lottoNumbers(winningNumbers);
      return winningNumbers;
    } catch (error) {
      Console.print(error.message);
      return InputProcessor.purchasePrice();
    }
  }

  static async bonusNumber(winningNumbers) {
    try {
      const input = await InputProcessor.get(PROMPT.BONUS_NUMBER_INPUT);
      Validator.bonusNumber(winningNumbers, input);
      return input;
    } catch (error) {
      Console.print(error.message);
      return InputProcessor.purchasePrice();
    }
  }
}

export default InputProcessor;
