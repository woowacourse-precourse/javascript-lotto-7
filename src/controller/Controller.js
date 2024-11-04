import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import LottoService from "../domain/LottoService.js";

class Controller {
  #inputView;
  #outputView;
  #lottoService;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#lottoService = new LottoService();
  }

  async run() {
    const payment = await this.#inputView.readPurchaseAmount();       // 지불 가격 유효성 검사 필요
    const numberOfPurchase = this.#lottoService.purchaseLottos(payment);

    this.#lottoService.generateLottos(numberOfPurchase);
    const myLottos = this.#lottoService.getLottos();
    this.#outputView.printMyLotto(numberOfPurchase, myLottos);

    const winningNumber = await this.#inputView.readWinningLotto();    // 당첨 번호 유효성 검사 필요
    const bonusNumber = await this.#inputView.readBonusNumber();       // 보너스 번호 유효성 검사 필요

    const match = this.#lottoService.compareWithWinningNumbers(winningNumber, Number(bonusNumber));
    const rewardRate = this.#lottoService.calculateRate(match, payment);

    this.#outputView.printResult(match, rewardRate);
  }
}

export default Controller;