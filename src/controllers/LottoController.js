import LottoResultDTO from '../dtos/LottoResultDTO.js';
import LottoListDTO from '../dtos/LottoListDTO.js';

export default class LottoController {
  #lottoPurchaser;
  #winningLotto;
  #inputLottoView;
  #outputLottoView;

  constructor(lottoPurchaser, winningLotto, inputLottoView, outPutLottoView) {
    this.#lottoPurchaser = lottoPurchaser;
    this.#winningLotto = winningLotto;
    this.#inputLottoView = inputLottoView;
    this.#outputLottoView = outPutLottoView;
  }

  async run() {
    await this.#purchaseLottos();
    this.#printPurchasedLottosInfo();

    await this.#decideWinningLotto();

    this.#generateLottoResult();
    this.#printResult();
  }

  async #purchaseLottos() {
    await this.#retryInputUntilSuccess(
      () => this.#inputLottoView.getInputPrice(),
      (result) => this.#lottoPurchaser.purchase(result)
    );
  }

  async #decideWinningLotto() {
    await this.#decideWinningLottoMainNumbers();
    await this.#decideWinningLottoBonusNumber();
  }

  async #decideWinningLottoMainNumbers() {
    await this.#retryInputUntilSuccess(
      () => this.#inputLottoView.getInputWinningLottoMainNumbers(),
      (winningLottoMainNumbers) => this.#winningLotto.setMainLotto(winningLottoMainNumbers)
    );
  }

  async #decideWinningLottoBonusNumber() {
    await this.#retryInputUntilSuccess(
      () => this.#inputLottoView.getInputWinningLottoBonusNumber(),
      (winningLottoBonusNumber) => this.#winningLotto.setBonusNumber(winningLottoBonusNumber)
    );
  }

  async #retryInputUntilSuccess(inputFunction, taskFunction) {
    while (true) {
      try {
        const result = await inputFunction();
        taskFunction(result);

        return;
      } catch (error) {
        this.#outputLottoView.printMessage(error.message);
      }
    }
  }

  #printPurchasedLottosInfo() {
    const lottoCount = this.#lottoPurchaser.getLottoCount();
    const lottos = this.#lottoPurchaser.getLottos();

    const lottoListDTO = LottoListDTO.ofLottoCountAndLottos(lottoCount, lottos);

    this.#outputLottoView.printPurchasedLottosInfo(lottoListDTO);
  }

  #generateLottoResult() {
    this.#lottoPurchaser.compareLottosWithWinningLotto(this.#winningLotto);
    this.#lottoPurchaser.calculateEarningRate();
  }

  #printResult() {
    const lottoResult = this.#lottoPurchaser.getLottoResult();
    const lottoResultDTO = LottoResultDTO.ofResultAndEarningRate(lottoResult.getResult(), lottoResult.getEarningRate());

    this.#outputLottoView.printLottoResult(lottoResultDTO);
    this.#outputLottoView.printEarningRate(lottoResultDTO);
  }
}
