import { Console } from '@woowacourse/mission-utils';

class OutputView {
  static printError(exception) {
    Console.print(exception.message);
  }

  static printMessage(message) {
    Console.print(message);
  }
}

export default OutputView;
