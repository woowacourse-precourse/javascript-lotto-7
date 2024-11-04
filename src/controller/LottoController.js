import LottoMachine from "../models/LottoMachine.js";
import RankCalculator from "../models/RankCalculator.js";
import { Utils } from "../utils/Utils.js";
import BonusNumberValidator from "../validators/BonusNumberValidator.js";
import PurchaseMoneyValidator from "../validators/PurchaseMoneyValidator.js";
import WinningNumbersValidator from "../validators/WinningNumbersValidator.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

class LottoController {
  async execute() {
    const purchaseMoney = await this.#repeatUntilValidInput(() => this.#getPurChaseMoney());
    const purchaseHistory = this.#purchaseLotto(purchaseMoney);

    OutputView.printPurchaseInfo(purchaseHistory.lottoCount, purchaseHistory.lottos);

    const winningNumbers = await this.#repeatUntilValidInput(() => this.#getWinningNumbers());
    const bonusNumber = await this.#repeatUntilValidInput(() =>
      this.#getBonusNumber(winningNumbers)
    );

    const rankResult = this.#calculateRank(purchaseHistory, winningNumbers, bonusNumber);
    OutputView.printRankResult(rankResult.getLottoRankResult());
  }

  async #getPurChaseMoney() {
    const purchaseMoney = await InputView.enterPurchaseMoney();
    PurchaseMoneyValidator.checkValid(purchaseMoney);
    return purchaseMoney;
  }

  async #getWinningNumbers() {
    const winningNumbers = await InputView.enterWinningNumbers();
    const convertedWinningNumbers = Utils.convertWinningNumberToArray(winningNumbers);
    WinningNumbersValidator.checkValid(convertedWinningNumbers);
    return convertedWinningNumbers;
  }

  async #getBonusNumber(winningNumbers) {
    const bonusNumber = await InputView.enterBonusNumber();
    const convertedBonusNumber = Utils.convertBonusNumberToNumber(bonusNumber);
    BonusNumberValidator.checkValid(convertedBonusNumber, winningNumbers);
    return convertedBonusNumber;
  }

  async #repeatUntilValidInput(callback) {
    try {
      return await callback();
    } catch (error) {
      OutputView.printError(error.message);
      return this.#repeatUntilValidInput(callback);
    }
  }

  #purchaseLotto(purchaseMoney) {
    const lottoMachine = new LottoMachine(purchaseMoney);
    const lottoHistory = lottoMachine.generateLotto();
    return lottoHistory.getPurchaseHistory();
  }

  #calculateRank(purchaseHistory, winningNumbers, bonusNumber) {
    const rankCalculator = new RankCalculator(purchaseHistory, winningNumbers, bonusNumber);
    return rankCalculator.calculate();
  }
}

export default LottoController;
