import { Console } from '@woowacourse/mission-utils';

class InputView {
  static async getUserInput(promptMessage) {
    const userInput = await Console.readLineAsync(`${promptMessage}`);
    return userInput;
  }
}

export default InputView;
