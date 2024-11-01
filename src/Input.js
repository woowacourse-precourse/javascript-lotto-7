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
}

export default Input;
