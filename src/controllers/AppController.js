import LottoModel from "../models/LottoModel.js";
import ConsoleView from "../views/ConsoleView.js";
import LottoController from "./LottoController.js";
import BonusNumberModel from "../models/BonusNumberModel.js";
import PurchaseAmountModel from "../models/PurchaseAmountModel.js";
import ResultController from "./ResultController.js";
class AppController {
  constructor() {
    this.consoleView = new ConsoleView();
    this.lottoController = new LottoController();
    this.resultController = new ResultController();
  }

  async run() {
    const purchaseAmount = await this.consoleView.getPurchaseAmount();
    new PurchaseAmountModel(purchaseAmount);

    const lottoNumbers = this.lottoController.run(purchaseAmount);

    const winningNumbers = await this.consoleView.getWinningNumbers();
    new LottoModel(winningNumbers);

    const bonusNumber = await this.consoleView.getBonusNumber();
    new BonusNumberModel(bonusNumber, winningNumbers);

    this.resultController.run(winningNumbers, lottoNumbers);
  }
}

export default AppController;
