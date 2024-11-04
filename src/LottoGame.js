import Lotto from "./Lotto.js";
import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES, USER_MESSAGES } from "../Constants.js";

export class LottoGame {
  #winningNumbers;
  #bonusNumber

  get winningNumbers() {
    return this.#winningNumbers;
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }

  async getWinningNumbersInput() {
    Console.print(USER_MESSAGES.WINNING_NUMBERS);
    const input = await Console.readLineAsync("");
    const numbers = input.split(",").map(Number);
    this.#winningNumbers = new Lotto(numbers);
  }

  async getBonusNumberInput() {
    Console.print(USER_MESSAGES.BONUS_NUMBER);
    const input = await Console.readLineAsync("");
    const bonusNumber = Number(input.trim());
    this.validateBonusNumber(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  validateBonusNumber(bonusNumber) {
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error(ERROR_MESSAGES.BONUS_NUMBER_RANGE);
    }
    if (this.#winningNumbers.getNumbers().includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.BONUS_NUMBER_DUPLICATE);
    }
  }
}

