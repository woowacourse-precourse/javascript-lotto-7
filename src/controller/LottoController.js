import Draw from "../model/Draw.js";
import Lotto from "../model/Lotto.js";
import LottoCollection from "../model/LottoCollection.js";
import Winning from "../model/Winning.js";
import InputUtils from "../utils/InputUtils.js";
import { generateRandomNumbers } from "../utils/LottoUtils.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

class LottoController {
  #inputView;
  #outputView;
  #draw;
  #lottoWinningNumbers;
  #lottoCollection;
  #winning;
  #lottoPurchaseAmount;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#lottoCollection = new LottoCollection();
    this.#winning = new Winning();
  }

  async run() {
    await this.#startPurchaseLotto();
    await this.#startDrawLotto();
    this.#startWinningLotto();
  }

  async #startPurchaseLotto() {
    this.#lottoPurchaseAmount = await this.#getLottoPurchaseAmount();
    const lottoCount = this.#calculateLottoCount(this.#lottoPurchaseAmount);
    this.#printLottoCount(lottoCount);
    this.#generateLottos(lottoCount);
  }

  async #getLottoPurchaseAmount() {
    const purchaseAmount = await this.#validInput(
      () => this.#inputView.inputPurchaseAmount(),
      InputUtils.validatePurchaseAmount,
      this.#outputView
    );
    return purchaseAmount;
  }

  #printLottoCount(lottoCount) {
    this.#outputView.outputLottoCount(lottoCount);
  }

  #calculateLottoCount(purchaseAmount) {
    const lottoCount = Math.floor(purchaseAmount / 1000);
    return lottoCount;
  }

  #generateLottos(lottoCount) {
    for (let i = 0; i < lottoCount; i++) {
      const lottoNumbers = generateRandomNumbers();
      const lotto = new Lotto(lottoNumbers);
      this.#lottoCollection.addLotto(lotto);
      this.#printLottoNumbers(lotto);
    }
  }

  #printLottoNumbers(lotto) {
    this.#outputView.outputLottoNumbers(lotto);
  }

  async #startDrawLotto() {
    this.#lottoWinningNumbers = await this.#getLottoWinningNumber();
    const lottoBonusNumber = await this.#getLottoBonusNumber();
    this.#draw = new Draw(this.#lottoWinningNumbers, lottoBonusNumber);
  }

  async #getLottoWinningNumber() {
    const winningNumber = await this.#validInput(
      () => this.#inputView.inputLottoWinningNumber(),
      InputUtils.validateWinningNumber,
      this.#outputView
    );

    return winningNumber;
  }

  async #getLottoBonusNumber() {
    const bonusNumber = await this.#validInput(
      () => this.#inputView.inputLottoBonuseNumber(),
      (input) =>
        InputUtils.validateBonusNumber(input, this.#lottoWinningNumbers),
      this.#outputView
    );
    return bonusNumber;
  }

  #startWinningLotto() {
    this.#printWinningStatsHead();
  }

  #printWinningStatsHead() {
    this.#outputView.outputWinningHead();
  }

  async #validInput(inputFunction, validateFunction) {
    while (true) {
      try {
        const inputs = await inputFunction();
        const trimmedInputs = inputs
          .split(",")
          .map((input) => Number(input.trim()));
        validateFunction(trimmedInputs);
        return trimmedInputs;
      } catch (error) {
        this.#outputView.errorOccurred(error);
      }
    }
  }

  async startPurchaseLottoTest() {
    const lottoPurchaseAmount = await this.#getLottoPurchaseAmount();
    const lottoCount = this.#calculateLottoCount(lottoPurchaseAmount);
    this.#printLottoCount(lottoCount);
    this.#generateLottos(lottoCount);
  }

  async getLottoPurchaseAmountTest() {
    const [purchaseAmount] = await this.#validInput(
      () => this.#inputView.inputPurchaseAmount(),
      InputUtils.validatePurchaseAmount,
      this.#outputView
    );
    return purchaseAmount;
  }
}

export default LottoController;
