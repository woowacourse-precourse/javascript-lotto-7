import { Console } from '@woowacourse/mission-utils';
import { PROMPT } from './constants/messages.js';
import Validator from './Validator.js';

class InputProcessor {
  static async get(value) {
    const input = await Console.readLineAsync(value);
    return input;
  }

  static async purchasePrice() {
    const input = await InputProcessor.get(PROMPT.PRICE_INPUT);
    Validator.price(input);
    return input;
  }

  static async winningNumbers() {
    const input = await InputProcessor.get(PROMPT.WINNING_NUMBER_INPUT);
    const winningNumbers = input.split(',');
    Validator.winningNumbers(winningNumbers);
    return winningNumbers;
  }

  static async bonusNumber(winningNumbers) {
    const input = await InputProcessor.get(PROMPT.BONUS_NUMBER_INPUT);
    Validator.bonusNumber(winningNumbers, input);
    return input;
  }
}

export default InputProcessor;
