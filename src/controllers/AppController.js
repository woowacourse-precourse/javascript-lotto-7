import LottoModel from "../models/LottoModel.js";
import ConsoleView from "../views/ConsoleView.js";
import LottoController from "./LottoController.js";
import PurchaseAmountModel from "../models/PurchaseAmountModel.js";

class AppController {
  constructor() {
    this.consoleView = new ConsoleView();
    this.lottoController = new LottoController();
  }

  async run() {
    const purchaseAmount = await this.consoleView.getPurchaseAmount();
    new PurchaseAmountModel(purchaseAmount);

    this.lottoController.run(purchaseAmount);

    const winningNumbers = await this.consoleView.getWinningNumbers();

    const lottoModel = new LottoModel(winningNumbers);

    const bonusNumber = await this.consoleView.getBonusNumber();
  }
}

export default AppController;
