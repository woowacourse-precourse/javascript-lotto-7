import { LOTTO_UNIT_PRICE } from "../../constants/lotto.js";
import {
  isNotDuplicated,
  isNotNull,
  isNumber,
  isValidLength,
  isValidUnit,
  nestedInput,
} from "./lottoValidator.js";

export class Validator {
  static isValidPrice(price) {
    isNumber(price);
    price = Number(price);
    isValidUnit(LOTTO_UNIT_PRICE, price);
  }
  static isValidWinningNumbers(numbers) {
    isNotNull(numbers);
  }
  static isValidWinningLotto(numbers) {
    isValidLength(numbers);
    isNotDuplicated(numbers);
  }
  static isValidBonusBall(bonusBall) {
    isNotNull(bonusBall);
    isNumber(bonusBall);
  }
  static isNested(counter) {
    nestedInput(counter);
  }
}
