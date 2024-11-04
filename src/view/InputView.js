import { Console } from "@woowacourse/mission-utils";

class InputView {
  static async getPriceInput() {
    try {
      const price = await Console.readLineAsync(LOG_MESSAGE.START_MESSAGE);
      // price = '8000'
      isNumber(price);
      isUnitOfPrice(price);
      minprice(price);
      maxprice(price);

      getLottoCount(price);
    } catch (error) {
      Console.print(error.message);
      return getPriceInput();
    }
  }

  static async getWinningNumber() {
    try {
      const winningNumber = await Console.readLineAsync(
        LOG_MESSAGE.WINNING_NUMBER_MESSAGE
      );
      // winningNuber = '1,2,3,4,5,6'
      winningNumber = winningNumber.split(",");

      CheckWinningNumberInput(winningNumber);
      isWinningNumberLength(winningNumber);
      checkNumberRange(winningNumber);
      isDuplicateNumber(winningNumber);
    } catch (erro) {
      Console.print(error.message);
      return getWinningNumber();
    }
  }

  static async getBonusNumber() {
    try {
      const bonusNumber = await Console.readLineAsync(
        LOG_MESSAGE.BONUS_NUMBER_MESSGE
      ); // bonusNumber = '7'
      bonusNumber = bonusNumber.trim();

      isNumber(bonusNumber);
      checkNUmberRange(bonusNumber);
      isDuplicateBonusNumber(bonusNumber);
    } catch (erro) {
      Console.print(erro.message);
      return getBonusNumber();
    }
  }
}
