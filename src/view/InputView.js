import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGES } from '../constant/constants.js';
import { createError } from '../utils/error.js';

export default class InputView {
  async getInput(message) {
    try {
      return await Console.readLineAsync(`${message}\n`);
    } catch (error) {
      createError(ERROR_MESSAGES.INPUT_ERROR);
    }
  }
}
