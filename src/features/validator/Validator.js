import { isNumber } from "./lottoValidator.js";

export class Validator {
  static isValidPrice(price) {
    isNumber(price);
  }
}
