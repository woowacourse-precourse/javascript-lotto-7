import { handlePurchaseInput } from "./handler/inputHandlers.js";

class App {
  async run() {
    const userPurchaseLotteries = await handlePurchaseInput();
  }
}

export default App;
