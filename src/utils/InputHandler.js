import { MissionUtils } from "@woowacourse/mission-utils";

const DELIMITER = ",";

class InputHandler {
  static async getInputPurchaseAmount() {
    const purchaseAmount = await MissionUtils.Console.readLineAsync();
    return parseFloat(purchaseAmount);
  }

  static async getInputWinningNumbers() {
    const winningNumbers = await MissionUtils.Console.readLineAsync();
    return winningNumbers
      .split(DELIMITER)
      .map((number) => parseFloat(number.trim()));
  }

  static async getInputBonusNumber() {
    const bonusNumber = await MissionUtils.Console.readLineAsync();
    return parseFloat(bonusNumber);
  }
}

export default InputHandler;
