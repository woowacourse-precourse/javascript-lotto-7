import { Console } from "@woowacourse/mission-utils";
import { Validator } from "./Validator.js";

export class InputManager {
  static async readPurchaseAmount() {
    const input = await Console.readLineAsync(`구입금액을 입력해 주세요.\n`);
    const amount = this.#parseNumber(input);
    Validator.isValidLottoAmount(amount);
    return amount;
  }

  static async readWinningNumbers() {
    const input = await Console.readLineAsync(`\n당첨 번호를 입력해 주세요.\n`);
    const numbers = input.split(",").map((num) => this.#parseNumber(num));
    Validator.isValidWinningNumbers(numbers);
    return numbers;
  }

  static async readBonusNumber(winningNumbers) {
    const input = await Console.readLineAsync(
      `\n보너스 번호를 입력해 주세요\n`
    );
    const bonus = this.#parseNumber(input);
    Validator.isValidBonusNumber(bonus, winningNumbers);
    return bonus;
  }

  static #parseNumber(input) {
    Validator.isValidNumber(input.trim());
    return Number(input.trim());
  }
}
