import { Console } from '@woowacourse/mission-utils';

class InputView {
  static getUserInput(promptMessage) {
    const userInput = Console.readLineAsync(`${promptMessage}`);
    return userInput;
  }
}

export default InputView;
