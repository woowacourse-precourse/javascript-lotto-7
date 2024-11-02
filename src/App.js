import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

const PROMPT_MESSAGES = {
  BUY_LOTTO: "구입금액을 입력해 주세요.",
  PURCHASED_COUNT: (count) => `\n${count}개를 구매했습니다.`,
  WINNING_NUMBERS: "\n당첨 번호를 입력해주세요.",
  BONUS_NUMBER: "\n보너스 번호를 입력해주세요.",
};

const ERROR_MESSAGES = {
  INVAILED_AMOUNT: "[ERROR] 유효하지 않은 금액이 입력되었습니다.",
  INVAILED_NUMBER: "[ERROR] 유효하지 않은 번호가 입력되었습니다.",
};

class App {
  #prizes = {
    3: 5000,
    4: 50000,
    5: 1500000,
    5.5: 30000000,
    6: 2000000000,
  };

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

  async #getWinningNumber() {
    MissionUtils.Console.print(PROMPT_MESSAGES.WINNING_NUMBERS);
    const input = await MissionUtils.Console.readLineAsync("");
    return new Lotto(input.split(",").map(Number));
  }

  async #getBonus() {
    MissionUtils.Console.print(PROMPT_MESSAGES.BONUS_NUMBER);
    const number = parseInt(await MissionUtils.Console.readLineAsync(""), 10);
    if (!(number > 0 && number <= 45)) {
      throw new Error(ERROR_MESSAGES.INVAILED_NUMBER);
    }
    return number;
  }

  #calculateResults(lottos, winningNumbers) {
    const results = { 3: 0, 4: 0, 5: 0, 5.5: 0, 6: 0 };
    let totalPrize = 0;

    lottos.forEach((lotto) => {
      const matchedCount = lotto.matches(winningNumbers.getNumbers());

      if (matchedCount >= 3) {
        results[matchedCount]++;
        totalPrize += this.#prizes[matchedCount];
      }
    });

    return { results, totalPrize };
  }

  async run() {
    const amount = await this.#getAmount();
    const count = await this.#getCount(amount);
    const lottos = await this.#getLottos(count);
    const winningNumber = await this.#getWinningNumber();
    const bonusNumber = await this.#getBonus();
    const { results, totalPrize } = this.#calculateResults(
      lottos,
      winningNumber
    );
  }
}

export default App;
