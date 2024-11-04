import LottoMachine from "../models/LottoMachine.js";
import RankCalculator from "../models/RankCalculator.js";
import { Utils } from "../utils/Utils.js";
import BonusNumberValidator from "../validators/BonusNumberValidator.js";
import PurchaseMoneyValidator from "../validators/PurchaseMoneyValidator.js";
import WinningNumbersValidator from "../validators/WinningNumbersValidator.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutView.js";

class LottoController {
  async execute() {
    // 사용자가 올바른 입력을 할 때까지 구입 금액 입력
    const purchaseMoney = await this.#repeatUntilCorrectPurchaseMoney();

    // 로또 머신을 생성
    const lottoMachine = new LottoMachine(purchaseMoney);

    // 로또 생성 후 생성된 로또 배열을 반환
    const lottoHistory = lottoMachine.generateLotto();

    // 로또 출력
    const purchaseHistory = lottoHistory.getPurchaseHistory();

    OutputView.printPurchaseInfo(purchaseHistory.lottoCount, purchaseHistory.lottos);

    // 사용자가 올바른 입력을 할 때까지 당첨 번호 입력
    const winningNumbers = await this.#repeatUntilCorrectWinningNumbers();

    // 사용자가 올바른 입력을 할 때까지 보너스 번호 입력
    const bonusNumber = await this.#repeatUntilCorrectBonusNumber(winningNumbers);

    // 등수 계산기 생성
    const rankCalculator = new RankCalculator(purchaseHistory, winningNumbers, bonusNumber);

    // 당첨 등수 구하기
    const rankResult = rankCalculator.calculate();

    OutputView.printRankResult(rankResult.getLottoRankResult());
  }

  async #repeatUntilCorrectPurchaseMoney() {
    try {
      const purchaseMoney = await InputView.enterPurchaseMoney();
      PurchaseMoneyValidator.checkValid(purchaseMoney);
      return purchaseMoney;
    } catch (error) {
      OutputView.printError(error.message);
      return this.#repeatUntilCorrectPurchaseMoney();
    }
  }

  async #repeatUntilCorrectWinningNumbers() {
    try {
      const winningNumbers = await InputView.enterWinningNumbers();
      const convertedWinningNumbers = Utils.convertWinningNumberToArray(winningNumbers);
      WinningNumbersValidator.checkValid(convertedWinningNumbers);
      return convertedWinningNumbers;
    } catch (error) {
      OutputView.printError(error.message);
      return this.#repeatUntilCorrectWinningNumbers();
    }
  }

  async #repeatUntilCorrectBonusNumber(winningNumbers) {
    try {
      const bonusNumber = await InputView.enterBonusNumber();
      const convertedBonusNumber = Utils.convertBonusNumberToNumber(bonusNumber);
      BonusNumberValidator.checkValid(convertedBonusNumber, winningNumbers);
      return winningNumbers;
    } catch (error) {
      OutputView.printError(error.message);
      return this.#repeatUntilCorrectBonusNumber(winningNumbers);
    }
  }
}

export default LottoController;
