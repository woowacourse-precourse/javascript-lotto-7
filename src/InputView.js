import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async readUserInput(prompt) {
    return await Console.readLineAsync(`${prompt}\n`);
  },
};

export default InputView;
