import { Console } from "@woowacourse/mission-utils";

import Validation from "./Validation.js";

class Input {
  constructor() {
    this.validation = new Validation();
  }

  async getMoney() {
    const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    return this.validation.validateNumber(input);
  }
}

export default Input;
