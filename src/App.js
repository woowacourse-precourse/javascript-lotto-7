import { MissionUtils } from "@woowacourse/mission-utils";

import UserInput from "./UserInput.js";
import Lotto from "./Lotto.js";
import GenerateNumbers from "./GenerateNumbers.js";

class App {
  async run() {
    const userInput = new UserInput();
    try {
      const price = await this.getUserPrice(userInput);
      const { numbers, lotto } = await this.getUserWinningNumbers(userInput);
      const bonusNum = await this.getUserBonusNumber(userInput, lotto);

      const bills = price / 1000;
      console.log("");

      const generateNumbers = new GenerateNumbers();
      generateNumbers.generateNums(bills, numbers, bonusNum);

      console.log("");
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }

  async getUserPrice(userInput) {
    return await userInput.inputPrice();
  }

  async getUserWinningNumbers(userInput) {
    const numbers = await userInput.inputWinningNumbers();
    const lotto = new Lotto(numbers);
    return { numbers, lotto };
  }

  async getUserBonusNumber(userInput, lotto) {
    const bonusNum = await userInput.inputBonusNumber();
    lotto.validateBonusNumber(bonusNum);
    return bonusNum;
  }
}

export default App;
