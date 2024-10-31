import { PURCHASE_AMOUNT_ERROR } from './constants/errorMessage.js';
import { ONE_LOTTO_AMOUNT } from './constants/won.js';
import { View } from './view/View.js';

class App {
  async run() {
    const view = new View();

    while (true) {
      try {
        const amount = await view.promptPurchaseAmount();
        this.validationAmount(amount);

        break;
      } catch (error) {
        view.printErrorMessage(error.message);
      }
    }
  }

  validationAmount(amount) {
    if (isNaN(amount)) throw new Error(PURCHASE_AMOUNT_ERROR.NOT_NUMBER);
    if (amount <= 0) throw new Error(PURCHASE_AMOUNT_ERROR.NOT_POSITIVE);
    if (amount % ONE_LOTTO_AMOUNT !== 0)
      throw new Error(PURCHASE_AMOUNT_ERROR.NOT_DIVIDE_ONE_THOUSAND);
  }
}

export default App;
