import { Console } from "@woowacourse/mission-utils";

class Input {
  async getMoney() {
    try {
      const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");

      const money = this.validateNumber(input);
      this.isMoneyDividedBy1000(money);

      return money;
    } catch (error) {
      throw error;
    }
  }

  async getWinningNumbers() {
    const numbers = await Console.readLineAsync(
      "\n당첨 번호를 입력해 주세요.\n"
    );

    return numbers.split(",").map(this.validateNumber);
  }

  async getBonusNumber() {
    const number = await Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n"
    );
    return this.validateNumber(number);
  }

  validateNumber(input) {
    const userInput = Number(input);

    if (Number.isNaN(userInput))
      throw new Error("[ERROR] 숫자를 입력해주세요.");

    return userInput;
  }

  isMoneyDividedBy1000(input) {
    if (input % 1000)
      throw new Error("[ERROR] 로또 구입 금액은 1,000원 단위로 입력받습니다.");
  }
}

export default Input;
