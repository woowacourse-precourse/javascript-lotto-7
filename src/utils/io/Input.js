import { Console } from '@woowacourse/mission-utils';

export default class Input {
  static async get(message) {
    const inputs = await Console.readLineAsync(message);

    return inputs;
  }
}
