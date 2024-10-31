import PROMPTS from "./constants.js";
import { handlePurchaseInput } from "./handler/inputHandlers.js";
import { printParam } from "./handler/printHandlers.js";

class App {
  async run() {
    const userPurchaseLotteries = await handlePurchaseInput();
    printParam(userPurchaseLotteries + PROMPTS.PURCAHSE_INFO_PROMPT);
  }
}

export default App;
