import { Console } from '@woowacourse/mission-utils';

class IOhandler {
  static input(input) {
    Console.readLineAsync(input);
  }

  static output(output) {
    Console.print(output);
  }
}
export default IOhandler;
