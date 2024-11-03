import { MissionUtils, Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGES } from "../constants/inputMessages.js";

export class InputView {
  async inputBoughtPrice() {
    const inputPriceString = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGES.BUY_PRICE
    );
    const inputPriceNumber = Number(inputPriceString.trim());
    return inputPriceNumber;
  }

  async inputPrizeNumbers() {
    const inputPrizeString = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGES.WINNING_NUMBER
    );
    const inputPrizeNumber = inputPrizeString.trim().split(',').map((stringArray) => {
      return Number(stringArray);
    });
    return inputPrizeNumber;
  }

  async inputBonusNumber() {
    const inputBonusString = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGES.BONUS_NUMBER
    );
    const inputBonusNumber = Number(inputBonusString.trim());
    return inputBonusNumber;
  }
}
