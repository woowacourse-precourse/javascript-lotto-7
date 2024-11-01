import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import Bet from "./Bet.js";
import {
  PRINT_INPUT_MONEY,
  PRINT_LOTTO_NUMBER,
} from "./constants/printConstant.js";
import Validator from "./Validator.js";

class Input {
  async inputMoney() {
    try {
      const input = String(await Console.readLineAsync(PRINT_INPUT_MONEY));
      return new Bet(input);
    } catch (error) {
      Console.print(error.message);
      return this.inputMoney();
    }
  }

  async InputLotto() {
    try {
      const input = await Console.readLineAsync(PRINT_LOTTO_NUMBER);
      // todo : indent 줄이기
      return new Lotto(
        input
          .trim()
          .split(",")
          .map((e) => {
            e.replace(" ", "");
            Validator.validateBlank(e);
            Validator.validateNumber(e);
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
