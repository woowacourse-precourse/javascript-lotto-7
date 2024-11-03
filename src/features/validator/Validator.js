import { LOTTO_UNIT_PRICE } from "../../constants/lotto.js";
import { isNumber, isValidUnit } from "./lottoValidator.js";

export class Validator {
  static isValidPrice(price) {
    isNumber(price);
    price = Number(price);
    isValidUnit(LOTTO_UNIT_PRICE, price);
  }
}
