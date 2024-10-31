import { PURCHASE_AMOUNT_ERROR } from './constants/errorMessage.js';
import { ONE_LOTTO_AMOUNT } from './constants/won.js';
import { View } from './view/View.js';

class App {
  async run() {
    const view = new View();

    while (true) {
      const amount = await view.promptPurchaseAmount();

      const errorMessage = this.validationAmount(amount);

      if (errorMessage) {
        view.printErrorMessage(errorMessage);
      } else break;
    }
  }

  validationAmount(amount) {
    if (isNaN(amount)) return PURCHASE_AMOUNT_ERROR.NOT_NUMBER;
    if (amount <= 0) return PURCHASE_AMOUNT_ERROR.NOT_POSITIVE;
    if (amount % ONE_LOTTO_AMOUNT !== 0)
      return PURCHASE_AMOUNT_ERROR.NOT_DIVIDE_ONE_THOUSAND;

    return null;
  }
}

export default App;
