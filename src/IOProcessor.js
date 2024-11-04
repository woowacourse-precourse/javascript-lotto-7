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
}

export default IOProcessor;
