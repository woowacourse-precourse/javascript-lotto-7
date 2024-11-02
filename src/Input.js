import { Console } from "@woowacourse/mission-utils";

import Validation from "./Validation.js";

class Input {
  constructor() {
    this.validation = new Validation();
  }

  async getMoney() {
    try {
      const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
      const money = this.validation.validateNumber(input);
      this.validation.isMoneyDividedBy1000(money);

      return money;
    } catch (error) {
      throw error;
    }
  }

  async getNumbers() {
    const input = await Console.readLineAsync(
      "1부터 45 사이의 당첨 번호를 6개 입력해 주세요. 쉼표 기준으로 구분합니다.\n"
    );

    return input.split(",").trim().map(this.validation.validateNumber);
  }
}

export default Input;
