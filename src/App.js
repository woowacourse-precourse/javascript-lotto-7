import Input from './Input.js';
import Output from './Output.js';
import LottoMachine from './LottoMachine.js';
import Lotto from './Lotto.js';
import { validatePurchaseAmount } from './util/validator.js';

class App {
  async run() {
    const { lottos, purchaseAmount } = await this.#buyLottos();

    Output.printLottos(lottos.map((lotto) => lotto.getNumbers()));
  }

  async #tryInput(inputFunction) {
    try {
      const input = await inputFunction();
      return input;
    } catch (error) {
      Output.printErrorMessage(error.message);
      return await this.#tryInput(inputFunction);
    }
  }

  async #tryPurchaseAmount() {
    const purchaseAmount = await Input.getPurchaseAmountInput();
    validatePurchaseAmount(purchaseAmount);
    return purchaseAmount;
  }

  async #buyLottos() {
    const purchaseAmount = await this.#tryInput(
      this.#tryPurchaseAmount.bind(this),
    );
    const lottoMachine = new LottoMachine(Number(purchaseAmount));
    const lottos = lottoMachine.getLottos().map((lotto) => new Lotto(lotto));

    return { lottos, purchaseAmount };
  }
}

export default App;
