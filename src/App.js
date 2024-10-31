import { PROMPTS } from "./constants.js";
import { printParam } from "./handler/printHandlers.js";
import {
  handlePurchaseInput,
  handleLotteryNumInput,
} from "./handler/inputHandlers.js";

class App {
  async run() {
    const userPurchaseLotteries = await handlePurchaseInput();
    printParam(userPurchaseLotteries + PROMPTS.PURCAHSE_INFO_PROMPT);
    const userLotteryNumbers = await handleLotteryNumInput();
  }
}

export default App;
