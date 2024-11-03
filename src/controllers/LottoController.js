import repeatUntilValid from '../utils/repeatUntilValid.js';
import { PRICE_PER_LOTTO } from '../constants/constants.js';
import Lotto from '../Lotto.js';

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
    const tickets = await this.#purchaseLotto();
    this.#lottoGame.setLottos(tickets);

    this.#outputView.printTickets(tickets);
    this.#outputView.printLottos(this.#lottoGame.getLottos());

    const winningLotto = await this.#assignWinningLotto();
    const bonusNumber = await this.#assignBonusNumber(winningLotto);
    const statistics = this.#getStatistics(winningLotto, bonusNumber);
  }

  async #purchaseLotto() {
    return await repeatUntilValid(
      this.#purchaseLottoAction.bind(this),
      this.#errorHandler.bind(this),
    );
  }

  async #assignWinningLotto() {
    return await repeatUntilValid(
      this.#assignLottoNumberAction.bind(this),
      this.#errorHandler.bind(this),
    );
  }

  async #assignBonusNumber(winningLotto) {
    return await repeatUntilValid(
      this.#assignBonusNumberAction.bind(this, winningLotto),
      this.#errorHandler.bind(this),
    );
  }

  async #purchaseLottoAction() {
    const amount = await this.#inputView.getPurchaseAmount();
    this.#lottoValidator.validatePurchaseAmount(amount);

    return amount / PRICE_PER_LOTTO;
  }

  async #assignLottoNumberAction() {
    const winningLotto = await this.#inputView.getWinningLotto();
    const winningNumbers = winningLotto.split(',').map(Number);

    return new Lotto(winningNumbers);
  }

  async #assignBonusNumberAction(winningLotto) {
    const bonusNumber = await this.#inputView.getBonusNumber();
    const isDuplicate = winningLotto.hasBonusNumber(parseInt(bonusNumber, 10));
    this.#lottoValidator.validateBonusNumber(bonusNumber, isDuplicate);

    return parseInt(bonusNumber, 10);
  }

  #errorHandler(message) {
    this.#outputView.printMessage(message);
  }

  #getStatistics(winningLotto, bonusNumber) {
    const compareResults = this.#lottoGame.calculateCompareResults(
      winningLotto,
      bonusNumber,
    );

    return this.#lottoGame.calculateStatics(compareResults);
  }
}

export default LottoController;
