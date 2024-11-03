import { HELPER_MESSAGE } from "../constants/helperMessages.js";
import { Validator } from "../features/validator/Validator.js";
import { getInput, printOneLine } from "./console.js";

export class InputHandler {
  static async #tryUserInput(helperMessages, validator) {
    try {
      const userInput = await getInput(helperMessages);
      validator(userInput);
      return userInput;
    } catch (error) {
      printOneLine(error.message);
      return this.#tryUserInput(helperMessages, validator);
    }
  }

  static async getPrice() {
    const helperMessages = HELPER_MESSAGE.getPrice;
    const validator = Validator.isValidPrice;
    const price = await this.#tryUserInput(helperMessages, validator);
    return Number(price);
  }

  static async getWinningNumbers() {
    const helperMessages = HELPER_MESSAGE.getWinningNumbers;
    const validator = Validator.isValidWinningNumbers;
    return await this.#tryUserInput(helperMessages, validator);
  }

  static async getBonusBall() {
    const helperMessages = HELPER_MESSAGE.getBonusBall;
    const validator = Validator.isValidBonusBall;
    const bonusBall = await this.#tryUserInput(helperMessages, validator);
    return Number(bonusBall);
  }
}
