import { Console } from "@woowacourse/mission-utils";
import { LOG_MESSAGE } from "../Constants.js";
import {
  isNumber,
  isUnitOfPrice,
  minPrice,
  maxPrice,
} from "../validator/PriceValidator.js";

class InputView {
  static getPriceInput() {
    try {
      const price = Console.readLineAsync(LOG_MESSAGE.START_MESSAGE);
      // price = '8000'
      isNumber(price);
      isUnitOfPrice(price);
      minPrice(price);
      maxPrice(price);

      return getLottoCount(price);
    } catch (error) {
      Console.print(error.message);
      return getPriceInput();
    }
  }

  static getWinningNumber() {
    try {
      const winningNumber = Console.readLineAsync(
        LOG_MESSAGE.WINNING_NUMBER_MESSAGE
      );
      // winningNuber = '1,2,3,4,5,6'
      winningNumber = winningNumber.split(",");

      NumberValidator.CheckWinningNumberInput(winningNumber);
      NumberValidator.isWinningNumberLength(winningNumber);
      NumberValidator.checkNumberRange(winningNumber);
      NumberValidator.isDuplicateNumber(winningNumber);
    } catch (error) {
      Console.print(error.message);
      return getWinningNumber();
    }
  }

  static getBonusNumber() {
    try {
      const bonusNumber = Console.readLineAsync(
        LOG_MESSAGE.BONUS_NUMBER_MESSGE
      ); // bonusNumber = '7'
      bonusNumber = bonusNumber.trim();

      PriceValidator.isNumber(bonusNumber);
      NumberValidator.checkNUmberRange(bonusNumber);
      NumberValidator.isDuplicateBonusNumber(bonusNumber);
    } catch (erro) {
      Console.print(erro.message);
      return getBonusNumber();
    }
  }
  static getLottoCount(price) {
    const lottoCount = parseInt(price / 1000, 10);
    return lottoCount;
  }
}

export default InputView;
