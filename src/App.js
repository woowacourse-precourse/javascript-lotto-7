import { MissionUtils } from "@woowacourse/mission-utils";
import InputFormatter from "./InputFormatter";

class App {
  async #getInput() {
    const purchaseAmount = await MissionUtils.Console.readLineAsync();
    const winningNumbers = await MissionUtils.Console.readLineAsync();
    const bonusNumber = await MissionUtils.Console.readLineAsync();
    
    return [purchaseAmount, winningNumbers, bonusNumber];
  }
  async run() {
    const { purchaseAmount, winningNumbers, bonusNumber } = await this.#getInput();
    const inputFormatter = new InputFormatter(
      purchaseAmount,
      winningNumbers,
      bonusNumber
    );
  }
}

export default App;
