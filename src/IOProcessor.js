import { Console } from '@woowacourse/mission-utils';

/**
 *
 */
class IOProcessor {
  /**
   *
   */
  async processInput(message) {
    const input = await Console.readLineAsync(message);
    return input;
  }

  /**
   *
   */
  processOuput(message) {
    Console.print(message);
  }
}

export default IOProcessor;
