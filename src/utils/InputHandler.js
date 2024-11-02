import { HELPER_MESSAGE } from "../constants/helperMessages.js";
import { Validator } from "../features/validator/Validator.js";
import { getInput, printOneLine } from "./console.js";

export class InputHandler {
  static async tryUserInput(helperMessages, validator) {
    try {
      const userInput = await getInput(helperMessages);
      validator(userInput);
      return userInput;
    } catch (error) {
      printOneLine(error.message);
      return this.tryUserInput(helperMessages, validator);
    }
  }

  static getPrice() {
    const helperMessages = HELPER_MESSAGE.getPrice;
    const validator = Validator.isValidPrice;
    return this.tryUserInput(helperMessages, validator);
  }
}
