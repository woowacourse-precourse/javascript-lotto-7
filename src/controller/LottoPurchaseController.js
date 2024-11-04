import Lotto from "../model/Lotto.js";
import InputUtils from "../utils/InputUtils.js";
import { generateRandomNumbers } from "../utils/LottoUtils.js";

class LottoPurchaseController {
  #inputView;
  #outputView;
  #lottoCollection;
  #lottoPurchaseAmount;

  constructor(inputView, outputView, lottoCollection) {
    this.#inputView = inputView;
    this.#outputView = outputView;
    this.#lottoCollection = lottoCollection;
  }

  async startPurchaseLotto() {
    this.#lottoPurchaseAmount = await this.#getLottoPurchaseAmount();
    const lottoCount = this.#calculateLottoCount(this.#lottoPurchaseAmount);
    this.#printLottoCount(lottoCount);
    this.#generateLottos(lottoCount);
  }

  async #getLottoPurchaseAmount() {
    const purchaseAmount = await InputUtils.validInput(
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

  getPurchaseAmount() {
    return this.#lottoPurchaseAmount;
  }
}

export default LottoPurchaseController;
