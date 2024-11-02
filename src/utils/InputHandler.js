import { Console } from '@woowacourse/mission-utils';

class InputHandler {
  static getInput(message) {
    return Console.readLineAsync(message);
  }
}

export default InputHandler;
