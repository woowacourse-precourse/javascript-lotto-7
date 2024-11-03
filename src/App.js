import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from './constants/message.js';

class App {
  async run() {
    const amount = await this.userAmountInput();
  }

  async userAmountInput() {
    const amountInput = await Console.readLineAsync(`${INPUT_MESSAGE.AMOUNT}\n`);
  }
}

export default App;
