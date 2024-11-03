import repeatUntilValid from '../utils/repeatUntilValid.js';
import { PRICE_PER_LOTTO } from '../constants/constants.js';

class LottoController {
  #inputView;
  #outputView;
  #lottoGame;
  #lottoValidator;

  constructor(inputView, outputView, lottoGame, lottoValidator) {
    this.#inputView = inputView;
    this.#outputView = outputView;
    this.#lottoGame = lottoGame;
    this.#lottoValidator = lottoValidator;
  }

  async start() {
    const tickets = await this.purchaseLotto();
    this.#lottoGame.setLottos(tickets);
    this.#outputView.printTickets(tickets);
    this.#outputView.printLottos(this.#lottoGame.getLottos());
  }

  async purchaseLotto() {
    return await repeatUntilValid(
      this.#purchaseLottoAction.bind(this),
      this.#purchaseLottoErrorHandler.bind(this),
    );
  }

  async #purchaseLottoAction() {
    const amount = await this.#inputView.getPurchaseAmount();
    this.#lottoValidator.validatePurchaseAmount(amount);

    return amount / PRICE_PER_LOTTO;
  }

  #purchaseLottoErrorHandler(message) {
    this.#outputView.printMessage(message);
  }
}

export default LottoController;
