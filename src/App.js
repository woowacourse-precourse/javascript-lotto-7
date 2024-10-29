import { MissionUtils } from "@woowacourse/mission-utils";

const PROMPT_MESSAGES = {
  BUY_LOTTO: "구입금액을 입력해 주세요.",
};

const ERROR_MESSAGES = {
  INVAILED_AMOUNT: "[ERROR] 유효하지 않은 금액이 입력되었습니다.",
};

class App {
  async #getAmount() {
    MissionUtils.Console.print(PROMPT_MESSAGES.BUY_LOTTO);
    const amount = parseInt(await MissionUtils.Console.readLineAsync(""), 10);
    if (!(amount > 0)) {
      throw new Error(ERROR_MESSAGES.INVAILED_AMOUNT);
    }
    return amount;
  }

  async run() {
    const amount = await this.#getAmount();
  }
}

export default App;
