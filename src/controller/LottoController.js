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

    // 로또 머신을 생성
    const lottoMachine = new LottoMachine(purchaseMoney);

    // 로또 생성 후 생성된 로또 배열을 반환
    const lottoHistory = lottoMachine.generateLotto();

    // 로또 출력
    const purchaseHistory = lottoHistory.getPurchaseHistory();

    OutputView.printPurchaseInfo(purchaseHistory.lottoCount, purchaseHistory.lottos);

    // 사용자가 올바른 입력을 할 때까지 당첨 번호 입력
    const winningNumbers = await this.#repeatUntilValidInput(() => this.#getWinningNumbers());

    // 사용자가 올바른 입력을 할 때까지 보너스 번호 입력
    const bonusNumber = await this.#repeatUntilValidInput(() =>
      this.#getBonusNumber(winningNumbers)
    );

    // 등수 계산기 생성
    const rankCalculator = new RankCalculator(purchaseHistory, winningNumbers, bonusNumber);

    // 당첨 등수 구하기
    const rankResult = rankCalculator.calculate();

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
}

export default LottoController;
