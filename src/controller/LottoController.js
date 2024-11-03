// model
import Lotto from "../Lotto.js";
import CalculateTotalReturn from "../model/CalculateTotalReturn.js";
import PurchasedLottoModel from "../model/purchasedLottoModel.js";
import RankingModel from "../model/RankingModel.js";
import ValidateBonusNumber from "../utils/ValidateBonusNumber.js";

// util
import ValidatePurchaseAmount from "../utils/ValidatePurchaseAmount.js";

// view
import LottoView from "../view/LottoView.js";

export default class LottoController {
  #purchaseAmount = 0;

  #purchasedLotto;

  #winningNumbers;

  #winningBonusNumber;

  #rankingCount;

  constructor() {
    this.view = new LottoView();
  }

  async startLotto() {
    await this.getPurchaseAmount();
    this.purchaseLotto();
    await this.getWinningLottoNumbers();
    await this.getWinningBonusNumebr(this.#winningNumbers);
    this.displayWinningStatistics();
    this.calculateAndDisplayTotalReturnRate();
  }

  async getPurchaseAmount() {
    const purchaseAmount = await this.view.getPurchaseAmount();
    try {
      this.#purchaseAmount = purchaseAmount;
      ValidatePurchaseAmount.validate(purchaseAmount);
    } catch (error) {
      this.view.printError(error.message);
      await this.getPurchaseAmount();
    }
  }

  purchaseLotto() {
    const purchasedLottoModel = new PurchasedLottoModel(this.#purchaseAmount);

    const lottoCount = purchasedLottoModel.calculateLottoCount();
    this.view.showPurchasedLottoCount(lottoCount);

    this.#purchasedLotto = purchasedLottoModel.getPurchasedLottos();
    this.view.showPurchasedLottos(this.#purchasedLotto);
  }

  async getWinningLottoNumbers() {
    const winningLottoInput = await this.view.getWinningLottoNumbers();
    try {
      this.#winningNumbers = winningLottoInput.split(",").map(Number);
      new Lotto(this.#winningNumbers);
    } catch (error) {
      this.view.printError(error.message);
      await this.getWinningLottoNumbers();
    }
  }

  async getWinningBonusNumebr(winningNumbers) {
    const bonusNumber = await this.view.getWinningLottoBonusNumbers();
    try {
      this.#winningBonusNumber = bonusNumber;
      ValidateBonusNumber.validate(winningNumbers, bonusNumber);
    } catch (error) {
      this.view.printError(error.message);
      await this.getWinningBonusNumebr(winningNumbers);
    }
  }

  displayWinningStatistics() {
    const rankingModel = new RankingModel(
      this.#purchasedLotto,
      this.#winningNumbers,
      this.#winningBonusNumber
    );

    this.#rankingCount = rankingModel.countMatch();

    this.view.showWinningStatistics(this.#rankingCount);
  }

  calculateAndDisplayTotalReturnRate() {
    const totalReturnRate = new CalculateTotalReturn(
      this.#purchaseAmount,
      this.#rankingCount
    ).calculateReturnRate();

    this.view.showTotalReturnRate(totalReturnRate);
  }
}
