import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

const PROMPT_MESSAGES = {
  BUY_LOTTO: "구입금액을 입력해 주세요.",
  PURCHASED_COUNT: (count) => `\n${count}개를 구매했습니다.`,
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

  async #getCount(amount) {
    const count = amount / 1000;
    if (count !== parseInt(count, 10)) {
      throw new Error(ERROR_MESSAGES.INVAILED_AMOUNT);
    }
    MissionUtils.Console.print(PROMPT_MESSAGES.PURCHASED_COUNT(count));
    return count;
  }

  async #getLottos(count) {
    const lottos = [];
    for (let i = 0; i < count; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      ).sort((a, b) => a - b);
      const lotto = new Lotto(numbers);
      lottos.push(lotto);
      MissionUtils.Console.print(lotto.getNumbers());
    }
    return lottos;
  }

  async run() {
    const amount = await this.#getAmount();
    const count = await this.#getCount(amount);
    const lottos = await this.#getLottos(count);
  }
}

export default App;
