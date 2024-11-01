import { Console } from '@woowacourse/mission-utils';
import { INPUT } from './Constants/Message.js';
import { BasicValidation } from './Validation.js';

class App {
  #basicValidation;

  constructor() {
    this.#basicValidation = new BasicValidation();
  }

  async getPurchaseMoney() {
    while (true) {
      try {
        const input = await Console.readLineAsync(INPUT.purchaseMoney);
        this.#basicValidation.PurchaseUnit(input.trim());
        return Number(input);
      } catch (err) {
        Console.print(err.message);
      }
    }
  }

  async run() {
    const purchaseMoney = await this.getPurchaseMoney();
  }
}

export default App;
