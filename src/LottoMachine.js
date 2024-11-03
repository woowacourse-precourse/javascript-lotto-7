import { Console, Random } from "@woowacourse/mission-utils";
import {
  DEFAULT_DELIMITER,
  ERROR_MESSAGES,
  MINIMUM_PURCHASE_AMOUNT,
} from "./Constants.js";
import Input from "./Input.js";
import Lotto from "./Lotto.js";

class LottoMachine {
  static #validateUserPurchaseAmount(purchaseAmount) {
    const amount = Number(purchaseAmount);

    if (
      isNaN(amount) ||
      amount <= 0 ||
      amount % MINIMUM_PURCHASE_AMOUNT !== 0
    ) {
      throw new Error(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
    }
    return true;
  }

  static async getUserPurchaseAmount() {
    let userPurchaseAmount;
    while (true) {
      userPurchaseAmount = await Input.getUserPurchaseAmount();
      try {
        this.#validateUserPurchaseAmount(userPurchaseAmount);
        return Number(userPurchaseAmount);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  static async #getValidWinningNumber() {
    while (true) {
      const winningNumbers = await Input.getUserWinningNumber();
      const splitedWinningNumber = winningNumbers
        .split(DEFAULT_DELIMITER)
        .map((number) => number.replace(/\s+/g, ""));
      try {
        return new Lotto(splitedWinningNumber).winningNumbers;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  static async #getValidBonusNumber(winningNumbers) {
    while (true) {
      const bonusNumber = await Input.getUserBonusNumber();
      try {
        this.#validateBonusNumber(winningNumbers, bonusNumber);
        return Number(bonusNumber);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  static #validateBonusNumber(winningNumbers, bonusNumber) {
    const num = Number(bonusNumber);
    if (winningNumbers.includes(num)) {
      throw new Error(ERROR_MESSAGES.INVALID_BONUS_NUMBER);
    }
    if (num < 1 || num > 45 || !Number.isInteger(num)) {
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_NUMBER);
    }
  }

  static async getWinningAndBonusNumber() {
    const winningAndBonusNumber = [];

    const winningNumber = await this.#getValidWinningNumber();
    const bonusNumber = await this.#getValidBonusNumber(winningNumber);

    winningAndBonusNumber.push(winningNumber, bonusNumber);

    return winningAndBonusNumber;
  }

  static getTotalLottoCount(userPurchaseAmount) {
    return userPurchaseAmount / MINIMUM_PURCHASE_AMOUNT;
  }

  static async getLottoNumbers(totalLottoCount) {
    const generatedLotto = [];

    for (let count = 0; count < totalLottoCount; count++) {
      const extractedLotto = Random.pickUniqueNumbersInRange(1, 45, 6);
      generatedLotto.push(extractedLotto);
    }

    return generatedLotto;
  }
}

export default LottoMachine;
