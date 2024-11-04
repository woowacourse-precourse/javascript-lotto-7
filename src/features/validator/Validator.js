import { Console } from "@woowacourse/mission-utils";
import { LOTTO_UNIT_PRICE } from "../../constants/lotto.js";
import {
  isInteger,
  isNotDuplicated,
  isNotNull,
  isNumber,
  isPositive,
  isTooLarge,
  isUniqueBonusBall,
  isValidLength,
  isValidRange,
  isValidUnit,
  nestedInput,
} from "./lottoValidator.js";

export class Validator {
  static isValidPrice(price) {
    isNumber(price);
    price = Number(price);
    isPositive(price);
    isInteger(price);
    isValidUnit(LOTTO_UNIT_PRICE, price);
    isTooLarge(price);
  }

  static isValidWinningNumbers(numbers) {
    isNotNull(numbers);
  }

  static isValidWinningLotto(numbers) {
    isValidLength(numbers);
    isNotDuplicated(numbers);
    numbers.forEach((number) => {
      isNumber(number);
      isPositive(number);
      isInteger(number);
      isValidRange(number);
    });
  }

  static isValidBonusBall(bonusBall) {
    isNotNull(bonusBall);
    isNumber(bonusBall);
    bonusBall = Number(bonusBall);
    isPositive(bonusBall);
    isInteger(bonusBall);
    isValidRange(bonusBall);
  }

  static isUniqueBonusBall(bonusBall, winningNumbers) {
    isUniqueBonusBall(bonusBall, winningNumbers);
  }

  static isNested(counter) {
    nestedInput(counter);
  }
}
