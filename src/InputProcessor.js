import { Console } from '@woowacourse/mission-utils';

class InputProcessor {
  static async get(value) {
    const input = await Console.readLineAsync(value);
    return input;
  }
}

export default InputProcessor;
