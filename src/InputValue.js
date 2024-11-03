import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGES } from "./constants/inputMessage.js";

const InputValue = {
  async purchaseMoney() {
    const inputValue = await Console.readLineAsync(
      INPUT_MESSAGES.PURCHASE_MONEY
    );
    return Number(inputValue);
  },

  async winningNumbers() {
    const inputValue = await Console.readLineAsync(
      INPUT_MESSAGES.WINNING_NUMBERS
    );
    return inputValue.split(",").map((value) => Number(value));
  },

  async bonusNumber() {
    const inputValue = await Console.readLineAsync(INPUT_MESSAGES.BONUS_NUMBER);
    return Number(inputValue);
  },
};

export default InputValue;
