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
    const input = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");

    return input.split(",").trim().map(this.validateNumber);
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
