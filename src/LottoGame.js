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

  // 당첨 번호 입력 받기
  async getWinningNumbersInput() {
    Console.print(USER_MESSAGES.WINNING_NUMBERS);
    const input = await Console.readLineAsync("");
    const numbers = input.split(",").map(Number);
    this.#winningNumbers = new Lotto(numbers);
  }

  // 보너스 번호 입력 받기
  async getBonusNumberInput() {
    Console.print(USER_MESSAGES.BONUS_NUMBER);
    const input = await Console.readLineAsync("");
    const bonusNumber = Number(input.trim());
    this.validateBonusNumber(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  // 보너스 번호 유효성 검사
  validateBonusNumber(bonusNumber) {
    // if (bonusNumber.length !== 1) {
    //   throw new Error(ERROR_MESSAGES.INVALID_BONUS_NUMBER_COUNT);
    // }
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error(ERROR_MESSAGES.BONUS_NUMBER_RANGE);
    }
    if (this.#winningNumbers.getNumbers().includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.BONUS_NUMBER_DUPLICATE);
    }
  }
}

