import { MissionUtils } from "@woowacourse/mission-utils";
import LottoPurchase from "./LottoPurchase.js";
import LottoResultCalculator from "./LottoResultCalculator.js";
import Constants from "./Constants.js";

class App {
  async #getPurchaseAmountInput() {
    try {
      const input = await MissionUtils.Console.readLineAsync(
        Constants.INPUT_MESSAGES.PURCHASE_AMOUNT
      );
      const purchaseAmount = parseFloat(input);

      this.#validatePurchaseAmount(purchaseAmount);
      return purchaseAmount;
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return await this.#getPurchaseAmountInput();
    }
  }

  #validatePurchaseAmount(amount) {
    if (!Number.isInteger(amount) || amount <= 0) {
      MissionUtils.Console.print(Constants.ERROR_MESSAGES.NATURAL_NUMBER_ERROR);
      throw new Error(Constants.ERROR_MESSAGES.NATURAL_NUMBER_ERROR);
    }

    if (amount % Constants.LOTTO_PRICE !== 0) {
      MissionUtils.Console.print(Constants.ERROR_MESSAGES.THOUSAND_UNIT_ERROR);
      throw new Error(Constants.ERROR_MESSAGES.THOUSAND_UNIT_ERROR);
    }
  }

  async #getWinningNumbers() {
    try {
      const input = await MissionUtils.Console.readLineAsync(
        Constants.INPUT_MESSAGES.WINNING_NUMBERS
      );
      const winningNumbers = input
        .split(Constants.DELIMITER)
        .map((number) => parseFloat(number.trim()));

      this.#validateWinningNumbers(winningNumbers);
      return winningNumbers;
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return await this.#getWinningNumbers();
    }
  }

  #validateWinningNumbers(numbers) {
    if (numbers.length !== Constants.LOTTO_NUMBER_COUNT) {
      MissionUtils.Console.print(
        Constants.ERROR_MESSAGES.LOTTO_NUMBER_COUNT_ERROR
      );
      throw new Error(Constants.ERROR_MESSAGES.LOTTO_NUMBER_COUNT_ERROR);
    }

    if (new Set(numbers).size !== numbers.length) {
      MissionUtils.Console.print(
        Constants.ERROR_MESSAGES.DUPLICATE_NUMBER_ERROR
      );
      throw new Error(Constants.ERROR_MESSAGES.DUPLICATE_NUMBER_ERROR);
    }

    if (
      numbers.some(
        (number) =>
          number < Constants.LOTTO_NUMBER_MIN ||
          number > Constants.LOTTO_NUMBER_MAX
      )
    ) {
      MissionUtils.Console.print(
        Constants.ERROR_MESSAGES.INVALID_NUMBER_RANGE_ERROR
      );
      throw new Error(Constants.ERROR_MESSAGES.INVALID_NUMBER_RANGE_ERROR);
    }
  }

  async #getBonusNumber(winningNumbers) {
    try {
      const input = await MissionUtils.Console.readLineAsync(
        Constants.INPUT_MESSAGES.BONUS_NUMBER
      );
      const bonusNumber = parseFloat(input);

      this.#validateBonusNumber(bonusNumber, winningNumbers);
      return bonusNumber;
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return await this.#getBonusNumber(winningNumbers);
    }
  }

  #validateBonusNumber(number, winningNumbers) {
    if (winningNumbers.some((winningnumber) => winningnumber === number)) {
      MissionUtils.Console.print(
        Constants.ERROR_MESSAGES.DUPLICATE_NUMBER_ERROR
      );
      throw new Error(Constants.ERROR_MESSAGES.DUPLICATE_NUMBER_ERROR);
    }

    if (
      number < Constants.LOTTO_NUMBER_MIN ||
      number > Constants.LOTTO_NUMBER_MAX
    ) {
      MissionUtils.Console.print(
        Constants.ERROR_MESSAGES.INVALID_NUMBER_RANGE_ERROR
      );
      throw new Error(Constants.ERROR_MESSAGES.INVALID_NUMBER_RANGE_ERROR);
    }
  }

  async run() {
    const purchaseAmount = await this.#getPurchaseAmountInput();
    const lottoPurchase = new LottoPurchase(purchaseAmount);
    const purchaselottoList = lottoPurchase.getPurchaseLottoList();
    lottoPurchase.printPurchaseLottoList(purchaselottoList);

    const winningNumbers = await this.#getWinningNumbers();
    const bonusNumber = await this.#getBonusNumber(winningNumbers);
  }
}

export default App;
