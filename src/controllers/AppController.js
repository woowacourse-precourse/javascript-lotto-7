import { validationPipe } from "../validation/validationPipe.js";
import ConsoleView from "../views/ConsoleView.js";
import LottoController from "./LottoController.js";

class AppController {
  constructor() {
    this.consoleView = new ConsoleView();
    this.lottoController = new LottoController();
  }

  async run() {
    const purchaseAmount = await this.consoleView.getPurchaseAmount();
    validationPipe(purchaseAmount);

    this.lottoController.run(purchaseAmount);
  }
}

export default AppController;
