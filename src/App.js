import { MissionUtils } from "@woowacourse/mission-utils";
import LottoPurchase from "./LottoPurchase.js";
import Constants from "./Constants";

class App {
  async #getPurchaseAmountInput() {
    const input = await MissionUtils.Console.readLineAsync(
      Constants.INPUT_MESSAGES.PURCHASE_AMOUNT
    );
    const purchaseAmount = parseFloat(input);

    if (!this.#validatePurchaseAmount(purchaseAmount)) {
      return await this.#getPurchaseAmountInput(); // 재귀 호출로 다시 입력 요청
    }
    
    return purchaseAmount;
  }

  #validatePurchaseAmount(amount) {
    if (!Number.isInteger(amount) || amount <= 0) {
      MissionUtils.Console.print(Constants.ERROR_MESSAGES.NATURAL_NUMBER_ERROR);
      return false;
    }

    if (amount % Constants.LOTTO_PRICE !== 0) {
      MissionUtils.Console.print(Constants.ERROR_MESSAGES.THOUSAND_UNIT_ERROR);
      return false;
    }

    return true;
  }

  async #getWinningNumbers() {
    const input = await MissionUtils.Console.readLineAsync(
      Constants.INPUT_MESSAGES.WINNING_NUMBERS
    );
    const winningNumbers = input
      .split(Constants.DELIMITER)
      .map((number) => parseFloat(number.trim()));

    if (!this.#validateWinningNumbers(winningNumbers)) {
      return await this.#getWinningNumbers();
    }

    return winningNumbers;
  }

  #validateWinningNumbers(numbers) {
    if (numbers.length !== Constants.LOTTO_NUMBER_COUNT) {
      MissionUtils.Console.print(Constants.ERROR_MESSAGES.LOTTO_NUMBER_COUNT_ERROR);
      return false;
    }

    if (new Set(numbers).size !== numbers.length) {
      MissionUtils.Console.print(Constants.ERROR_MESSAGES.DUPLICATE_NUMBER_ERROR);
      return false;
    }

    if (numbers.some((number) => number < Constants.LOTTO_NUMBER_MIN || number > Constants.LOTTO_NUMBER_MAX)) {
      MissionUtils.Console.print(Constants.ERROR_MESSAGES.INVALID_NUMBER_RANGE_ERROR);
      return false;
    }

    return true;
  }

  async #getBonusNumber() {
    const input = await MissionUtils.Console.readLineAsync(
      Constants.INPUT_MESSAGES.BONUS_NUMBER
    );
    const bonusNumber = parseFloat(input);

    if (!this.#validateBonusNumber(bonusNumber)) {
      return await this.#getBonusNumber();
    }

    return bonusNumber;
  }

  #validateBonusNumber(number) {
    if (number < Constants.LOTTO_NUMBER_MIN || number > Constants.LOTTO_NUMBER_MAX) {
      MissionUtils.Console.print(Constants.ERROR_MESSAGES.INVALID_NUMBER_RANGE_ERROR);
      return false;
    }

    return true;
  }

  async run() {
    const purchaseAmount = await this.#getPurchaseAmountInput();
    const lottoPurchase = new LottoPurchase(purchaseAmount);
    const purchaselottoList = lottoPurchase.getPurchaseLottoList();

    const winningNumbers = await this.#getWinningNumbers();
    const bonusNumber = await this.#getBonusNumber();
  }
}

export default App;
