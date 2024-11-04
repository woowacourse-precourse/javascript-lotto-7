import { Console } from '@woowacourse/mission-utils';

class InputHandler {
  static async getInput(message, validateFn) {
    const input = await Console.readLineAsync(message);
    validateFn(input);
    return input;
  }
}

export default InputHandler;
