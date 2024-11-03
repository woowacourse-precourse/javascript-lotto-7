import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE, ERROR_MESSAGE } from './constants/message.js';
import Validate from './Validate.js';
import Convert from './Convert.js';

class App {
  async run() {
    const amount = await this.safeAsyncExecute(this.userAmountInput.bind(this));
  }

  async userAmountInput() {
    const amountInput = await Console.readLineAsync(`${INPUT_MESSAGE.AMOUNT}\n`);
    const amount = this.convertToAmount(amountInput);

    return amount;
  }

  async safeAsyncExecute(callback) {
    try {
      return await callback();
    } catch (err) {
      Console.print(err.message);
      return this.safeAsyncExecute(callback);
    }
  }

  convertToAmount(amountInput) {
    this.#validateAmountInput(amountInput);

    const amount = Convert.toNumber(amountInput);

    return amount;
  }

  #validateAmountInput(amountInput) {
    if (!Validate.number(amountInput)) throw new Error(ERROR_MESSAGE.AMOUNT_IS_NOT_NUMBER);
  }
}

export default App;
