import inputView from './InputView.js';
import outputView from './OutputView.js';
import validator from './utils/Validator.js';

class LottoController {
  async run() {
    const amount = await this.readAmount();
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
}

export default LottoController;
