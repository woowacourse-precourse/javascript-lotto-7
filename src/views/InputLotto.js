import { Console } from "@woowacourse/mission-utils";
import { SYSTEM_MESSAGES } from "../constants/SystemMessages.js";

class InputLotto {
  #readLine;

  constructor(readLine = Console.readLineAsync) {
    this.#readLine = readLine;
  }

  async getPurchaseAmount() {
    const purchaseAmount = await this.#readLine(SYSTEM_MESSAGES.INPUT_MONEY);
    return Number(purchaseAmount);
  }

  async getInputNumbers() {
    const inputNumbers = await this.#readLine(SYSTEM_MESSAGES.INPUT_NUMBERS);
    const lottoNumbers = inputNumbers
      .split(",")
      .map((number) => Number(number));

    return lottoNumbers;
  }

  async getBonusNumber() {
    const bonusNumber = await this.#readLine(SYSTEM_MESSAGES.INPUT_BONUS);
    return Number(bonusNumber);
  }
}

export default InputLotto;
