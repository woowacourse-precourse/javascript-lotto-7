import { Console } from "@woowacourse/mission-utils";
import { output } from "./utils/output.js";
import { getCoastInput, getWinningNumberInput } from "./utils/input.js";
import { checkLotto, playLotto } from "./utils/lottoAction.js";

class App {
  quantity = 0;
  purchased = [];
  results = Array(5).fill(0);

  async run() {
    try {
      this.quantity = await getCoastInput();
      playLotto(this.quantity, this.purchased);
      const { winningNumbers, bonusNumber } = await getWinningNumberInput();
      checkLotto(this.purchased, this.results, winningNumbers, bonusNumber);
      output(this.results, this.quantity);
    } catch (error) {
      Console.print(`${error.message}`);
    }
  }
}

export default App;
