import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGES } from '../constants/errorMessage.js';

const inputView = {
  async promptUserInput(message) {
    try {
      return await Console.readLineAsync(message);
    } catch (error) {
      throw new Error(ERROR_MESSAGES.INPUT_ERROR);
    }
  },
};

export default inputView;
