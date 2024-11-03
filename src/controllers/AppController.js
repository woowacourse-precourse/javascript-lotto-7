import { validationPipe } from "../validation/validationPipe.js";
import ConsoleView from "../views/ConsoleView.js";

class AppController {
  constructor() {
    this.consoleView = new ConsoleView();
  }

  async run() {
    const purchaseAmount = await this.consoleView.getPurchaseAmount();
    validationPipe(purchaseAmount);
  }
}

export default AppController;
