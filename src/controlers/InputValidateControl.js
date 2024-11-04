import { Console } from "@woowacourse/mission-utils";
import ValidateInput from "../utils/ValidateInput.js";

class InputValidateControl {
  static validatePrice(price) {
    try {
      ValidateInput.validatePrice(price);
      return true;
    } catch (error) {
      Console.print(error.message);
      return false;
    }
  }

  static validateWinningNumber(numbers) {
    try {
      ValidateInput.validateWinningNumber(numbers);
      return true;
    } catch (error) {
      Console.print(error.message);
      return false;
    }
  }

  static validateBonusNumber(number, winningNumber) {
    try {
      ValidateInput.validateBonusNumber(number, winningNumber);
      return true;
    } catch (error) {
      Console.print(error.message);
      return false;
    }
  }
}

export default InputValidateControl;
