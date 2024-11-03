import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGES } from '../constant/constants.js';

export default class InputView {
  async getInput(message) {
    try {
      return await Console.readLineAsync(`${message}\n`);
    } catch (error) {
      throw new Error(ERROR_MESSAGES.INPUT_ERROR);
    }
  }
}
