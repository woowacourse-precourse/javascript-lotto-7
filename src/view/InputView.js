import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async readUserInput(message) {
    const input = await Console.readLineAsync(message);
    return input;
  },
};

export default InputView;
