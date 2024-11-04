import { Console } from "@woowacourse/mission-utils";

class Input {
  static async getMoney() {
    const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");

    const money = Input.#validateNumber(input);
    Input.#isMoneyDividedBy1000(money);

    return money;
  }

  static async getWinningNumbers() {
    const numbers = await Console.readLineAsync(
      "\n당첨 번호를 입력해 주세요.\n"
    );

    return numbers.split(",").map(Input.#validateNumber);
  }

  static async getBonusNumber() {
    const number = await Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n"
    );

    return Input.#validateNumber(number);
  }

  static #validateNumber(input) {
    const trimmed = input?.trim();

    if (!trimmed) {
      throw new Error("[ERROR] 빈 값이나 공백은 입력할 수 없습니다.");
    }

    const number = Number(trimmed);

    if (!Number.isInteger(number)) {
      throw new Error("[ERROR] 정수만 입력할 수 있습니다.");
    }

    return number;
  }

  static #isMoneyDividedBy1000(input) {
    if (input % 1000)
      throw new Error("[ERROR] 로또 구입 금액은 1,000원 단위로 입력받습니다.");
  }
}

export default Input;
