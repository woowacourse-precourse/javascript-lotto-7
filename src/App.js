import { Console } from "@woowacourse/mission-utils";
import {
  readPurchaseAmount,
  readWinningNumber,
  readBonusNumber,
} from "./views/inputView.js";

class App {
  constructor() {
    this.lottoPurchaseAmount = 0;
    this.bonusNumber = 0;
    this.winningLotto = [];
  }

  async run() {
    this.lottoPurchaseAmount = await readPurchaseAmount();
  }
}

export default App;
