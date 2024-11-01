import { Console } from '@woowacourse/mission-utils';

class OutputView {
  static printError(exception) {
    Console.print(exception.message);
  }
}

export default OutputView;
