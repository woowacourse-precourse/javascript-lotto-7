import { MissionUtils } from "@woowacourse/mission-utils";

import UserInput from "./UserInput.js";
import Lotto from "./Lotto.js";

class App {
  async run() {
    const userInput = new UserInput();
    const price = await userInput.inputPrice();
    const winNum = await userInput.inputWinningNumbers();
    const bonusNum = await userInput.inputBonusNumber();
    const lotto = new Lotto(winNum);
  }
}

export default App;
