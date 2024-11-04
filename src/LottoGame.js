import Lotto from "./Lotto.js";
import { Console } from "@woowacourse/mission-utils";
import { USER_MESSAGES } from "../Constants.js";

export class LottoGame {
  #winningNumbers;

  get winningNumbers() {
    return this.#winningNumbers;
  }

  // 당첨 번호 입력 받기
  async getWinningNumbersInput() {
    Console.print(USER_MESSAGES.WINNING_NUMBERS);
    const input = await Console.readLineAsync("");
    const numbers = input.split(",").map(Number);
    this.#winningNumbers = new Lotto(numbers);
  }
}