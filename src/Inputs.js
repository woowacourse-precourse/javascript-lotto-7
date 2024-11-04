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

  async inputLotto() {
    try {
      const input = await Console.readLineAsync(PRINT_LOTTO_NUMBER);
      const lottoNumbers = this.parseNumbers(input);
      return new Lotto(lottoNumbers);
    } catch (error) {
      Console.print(error.message);
      return this.inputLotto();
    }
  }

  parseNumbers(input) {
    return input
      .trim()
      .split(",")
      .map((number) => {
        this.#validateLottoNumber(number);
        return Number(number);
      });
  }

  #validateLottoNumber(number) {
    number.replace(" ", "");
    Validator.validateBlank(number);
    Validator.validateNumber(number);
  }
}

export default Input;
