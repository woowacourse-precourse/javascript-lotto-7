import { HELPER_MESSAGE } from "../constants/helperMessages.js";
import { Validator } from "../features/validator/Validator.js";
import { getInput, printOneLine } from "./console.js";

export class InputHandler {
  static async #tryUserInput(helperMessages, validator) {
    try {
      const userInput = await getInput(helperMessages);
      validator(userInput);
      return Number(userInput);
    } catch (error) {
      printOneLine(error.message);
      return this.#tryUserInput(helperMessages, validator);
    }
  }

  static async getPrice() {
    const helperMessages = HELPER_MESSAGE.getPrice;
    const validator = Validator.isValidPrice;
    return await this.#tryUserInput(helperMessages, validator);
  }

  static async getWinningNumbers() {
    const helperMessages = HELPER_MESSAGE.getWinningNumbers;
    //TODO : Validator 추가
    return await this.#tryUserInput(helperMessages);
  }
}
