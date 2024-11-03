import inputView from './InputView.js';
import LottoStore from './LottoStore.js';
import outputView from './OutputView.js';
import validator from './utils/Validator.js';

class LottoController {
  #lottoStore;

  async run() {
    const amount = await this.readAmount();
    this.printResult(amount);
  }

  async readAmount() {
    const amount = await inputView.readAmount();
    try {
      validator.validateAmount(amount);
    } catch (e) {
      outputView.printMessage(e.message);
      await this.readAmount();
    }
    outputView.printBlank();
    return amount;
  }

  printResult(amount) {
    this.#lottoStore = new LottoStore(amount);
    const lottoNumbers = this.#lottoStore.getLottoNumbers();
    outputView.printPurchaseResult(lottoNumbers);
  }
}

export default LottoController;
