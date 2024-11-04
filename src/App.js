import { MissionUtils } from "@woowacourse/mission-utils";

import UserInput from "./UserInput.js";
import Lotto from "./Lotto.js";
import GenerateNumbers from "./GenerateNumbers.js";

class App {
  async run() {
    const userInput = new UserInput();
    try {
      const price = await userInput.inputPrice();
      const numbers = await userInput.inputWinningNumbers();
      const lotto = new Lotto(numbers);
      const bonusNum = await userInput.inputBonusNumber();
      lotto.validateBonusNumber(bonusNum);

      const bills = price / 1000;
      console.log("");

      const generateNumbers = new GenerateNumbers();
      generateNumbers.generateNums(bills, numbers, bonusNum);

      console.log("");
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
}

export default App;
