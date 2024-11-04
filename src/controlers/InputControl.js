import { Console } from "@woowacourse/mission-utils";
import InputMessage from "../messages/InputMessage.js";
import InputValidateControl from "./InputValidateControl.js";

class InputControl {
  static async getPrice() {
    while (true) {
      const input = await Console.readLineAsync(InputMessage.INPUT_PRICE);
      const price = Number(input);
      if (InputValidateControl.validatePrice(price)) {
        return price;
      }
    }
  }

  static async getWinningNumber() {
    while (true) {
      const input = await Console.readLineAsync(InputMessage.INPUT_WINNING_NUMBERS);
      const numbers = this.parseNumbers(input);
      if (InputValidateControl.validateWinningNumber(numbers)) {
        return numbers;
      }
    }
  }

  static async getBonusNumber(winningNumber) {
    while (true) {
      const input = await Console.readLineAsync(InputMessage.INPUT_BONUS_NUMBER);
      const number = Number(input);
      if (InputValidateControl.validateBonusNumber(number, winningNumber)) {
        return number;
      }
    }
  }

  static parseNumbers(input) {
    return input.split(",").map((item) => Number(item.trim()));
  }
}

export default InputControl;
