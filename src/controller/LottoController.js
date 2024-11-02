import Draw from "../model/Draw.js";
import Lotto from "../model/Lotto.js";
import InputUtils from "../utils/InputUtils.js";
import { generateRandomNumbers } from "../utils/LottoUtils.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

class LottoController {
  #inputView;
  #outputView;
  #draw;
  #winningNumbers;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  async run() {
    await this.#startPurchaseLotto();
    await this.#startDrawLotto();
  }

  async #startPurchaseLotto() {
    const lottoPurchaseAmount = await this.#getLottoPurchaseAmount();
    const lottoCount = this.#calculateLottoCount(lottoPurchaseAmount);
    this.#printLottoCount(lottoCount);
    this.#generateLottos(lottoCount);
  }

  async #getLottoPurchaseAmount() {
    const [purchaseAmount] = await this.#validInput(
      () => this.#inputView.inputPurchaseAmount(),
      InputUtils.validatePurchaseAmount
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
      this.#printLottoNumbers(lotto);
    }
  }

  #printLottoNumbers(lotto) {
    this.#outputView.outputLottoNumbers(lotto);
  }

  async #startDrawLotto() {
    this.#winningNumbers = await this.#getLottoWinningNumber();
    const lottoBonusNumber = await this.#getLottoBonusNumber();
    this.#draw = new Draw(this.#winningNumbers, lottoBonusNumber);
  }

  async #getLottoWinningNumber() {
    const winningNumber = await this.#validInput(
      () => this.#inputView.inputLottoWinningNumber(),
      InputUtils.validateWinningNumber
    );

    return winningNumber;
  }

  async #getLottoBonusNumber() {
    const bonusNumber = await this.#validInput(
      () => this.#inputView.inputLottoBonuseNumber(),
      (input) => InputUtils.validateBonusNumber(input, this.#winningNumbers)
    );
    return bonusNumber;
  }

  async #validInput(inputFunction, validateFunction) {
    while (true) {
      try {
        const inputs = [await inputFunction()];
        const trimmedInputs = inputs[0]
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
      InputUtils.validatePurchaseAmount
    );
    return purchaseAmount;
  }
}

export default LottoController;
