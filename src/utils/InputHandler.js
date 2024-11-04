import { Console } from "@woowacourse/mission-utils";
import { HELPER_MESSAGE } from "../constants/helperMessages.js";
import { parserWinningNumber } from "../features/parserWinningNumber.js";
import { Validator } from "../features/validator/Validator.js";
import { getInput, printOneLine } from "./console.js";

export class InputHandler {
  static #nested = 0;

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

  static async getWinningLotto(winningNumbers) {
    this.#nested += 1;
    const parserdWinningNumber = parserWinningNumber(winningNumbers);
    try {
      Validator.isValidWinningLotto(parserdWinningNumber);
      this.#nested = 0;
      return parserdWinningNumber;
    } catch (error) {
      Validator.isNested(this.#nested);
      printOneLine(error.message);
      return await this.getWinningNumbers();
    }
  }

  static async getWinningNumbers() {
    const helperMessages = HELPER_MESSAGE.getWinningNumbers;
    const validator = Validator.isValidWinningNumbers;
    const winningNumbers = await this.#tryUserInput(helperMessages, validator);
    return this.getWinningLotto(winningNumbers);
  }

  static async isUniqueBonusBall(bonusBall, winningNumbers) {
    this.#nested += 1;
    try {
      Validator.isUniqueBonusBall(bonusBall, winningNumbers);
      this.#nested = 0;
      return Number(bonusBall);
    } catch (error) {
      Validator.isNested(this.#nested);
      printOneLine(error.message);
      return this.getBonusBall(winningNumbers);
    }
  }

  static async getBonusBall(winningNumbers) {
    const helperMessages = HELPER_MESSAGE.getBonusBall;
    const validator = Validator.isValidBonusBall;
    const bonusBall = await this.#tryUserInput(helperMessages, validator);
    return this.isUniqueBonusBall(bonusBall, winningNumbers);
  }
}
