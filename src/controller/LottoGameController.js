import LottoGame from '../model/LottoGame.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import { INPUT_MESSAGES } from '../constants/messages.js';
import { validatePurchaseAmount } from '../util/validators.js';

class LottoGameController {
  #lottoGame;

  async play() {
    const purchaseAmount = await this.#getPurchaseAmount();
    this.#createLottoGame(purchaseAmount);
    this.#printLottoNumbers();
  }

  #createLottoGame(purchaseAmount) {
    this.#lottoGame = new LottoGame(purchaseAmount);
  }

  #printLottoNumbers() {
    const LOTTO_NUMBERS = this.#lottoGame.getLottoNumbers();
    OutputView.printLottoAmount(LOTTO_NUMBERS.length);

    LOTTO_NUMBERS.forEach((numbers) => {
      OutputView.printLottoNumbers(numbers.getNumbers());
    });
  }

  async #getPurchaseAmount() {
    try {
      const purchaseAmount = await InputView.readUserInput(
        INPUT_MESSAGES.PURCHASE_AMOUNT
      );
      validatePurchaseAmount(purchaseAmount);
      return purchaseAmount;
    } catch (error) {
      OutputView.print(error.message);
      return this.#getPurchaseAmount();
    }
  }
}

export default LottoGameController;
