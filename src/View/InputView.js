import { Console } from "@woowacourse/mission-utils";
import ValidInput from "../utils/ValidInput.js";
import { INPUT_MEESAGE } from "../utils/Message.js"
class InputView {
  constructor() {
    this.valid = new ValidInput();
  }
  async AmountInput() {
    try {
      const amountInput = await Console.readLineAsync(
        INPUT_MEESAGE.AMOUNT_INPUT
      );
      this.valid.AmountCheck(amountInput);
      return Number(amountInput);
    } catch (error) {
      Console.print(error.message);
      return await this.AmountInput();
    }
  }
  async WinnerInput() {
    try {
      Console.print("");
      const winnerInput = await Console.readLineAsync(
        INPUT_MEESAGE.WINNER_INPUT
      );
      const winnerArr = winnerInput.split(",");
      this.valid.WinnerCheck(winnerArr);
      return winnerArr.map(Number);
    } catch (error) {
      Console.print(error.message);
      return await this.WinnerInput();
    }
  }
  async BonusInput(winnerarr) {
    try {
      Console.print("");
      const bonusInput = await Console.readLineAsync(
        INPUT_MEESAGE.BONUS_INPUT
      );
      this.valid.BonusCheck(winnerarr, bonusInput);
      return Number(bonusInput);
    } catch (error) {
      Console.print(error.message);
      return await this.BonusInput(winnerarr);
    }
  }
}
export default InputView;
