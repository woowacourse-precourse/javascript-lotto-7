import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import Bet from "./Bet.js";

class Input {
  async inputMoney() {
    try {
      const input = String(
        await Console.readLineAsync("구매할 금액을 입력해주세요.\n")
      );
      return new Bet(input);
    } catch (error) {
      Console.print(error.message);
      return this.inputMoney();
    }
  }

  async InputLotto() {
    try {
      const input = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
      // todo : indent 줄이기
      return new Lotto(
        input
          .trim()
          .split(",")
          .map((e) => {
            e.replace(" ", "");
            if (e === "") throw new Error("[ERROR] 공백은 입력될 수 없습니다.");
            if (isNaN(e)) throw new Error("[ERROR] 숫자를 입력해주세요.");
            return Number(e);
          })
      );
    } catch (error) {
      Console.print(error.message);
      return this.InputLotto();
    }
  }
}

export default Input;
