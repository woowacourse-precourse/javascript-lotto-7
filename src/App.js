import { Console } from '@woowacourse/mission-utils';
import { validateLottoBuyPrice } from './validateFunctions.js';

const prompt = async (message, validation) => {
  const input = await Console.readLineAsync(message);
  if (validation(input)) {
    return input;
  }
  return prompt(message, validation);
};

class App {
  async run() {
    const lottoBuyPrice = await prompt(
      '구입금액을 입력해 주세요.\n',
      validateLottoBuyPrice,
    );
  }
}

export default App;
