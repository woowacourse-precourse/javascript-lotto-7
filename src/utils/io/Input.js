import { Console } from '@woowacourse/mission-utils';
import Output from './Output.js';

class Input {
  static async prompt(message) {
    const input = await Console.readLineAsync(message);

    return input;
  }

  static async promptRetry(message, validator, errorMessage = null) {
    try {
      if (errorMessage) {
        Output.print(`${errorMessage}\n`);
      }

      const input = await Input.prompt(message);
      validator(input);
      return input;
    } catch (error) {
      return Input.promptRetry(message, validator, error.message);
    }
  }
}

export default Input;
