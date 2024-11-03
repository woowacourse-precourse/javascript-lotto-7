import { Console } from '@woowacourse/mission-utils';

class Printer {
  static print(query) {
    Console.print(query);
  }

  static printNewline() {
    Console.print('');
  }
}

export default Printer;
