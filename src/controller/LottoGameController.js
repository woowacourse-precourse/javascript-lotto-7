import { INPUT_MESSAGES } from '../constants/messages.js';
import LottoGame from '../model/LottoGame.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class LottoGameController {
  #lottoGame;

  async play() {
    const purchaseAmount = await this.getPurchaseAmount();
    this.#createLottoGame(purchaseAmount);
    this.#printLottoNumbers();
  }

  async getPurchaseAmount() {
    return await InputView.readUserInput(INPUT_MESSAGES.PURCHASE_AMOUNT);
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
}

export default LottoGameController;
