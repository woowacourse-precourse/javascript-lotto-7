import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

const PROMPT_MESSAGES = {
  BUY_LOTTO: "구입금액을 입력해 주세요.\n",
  PURCHASED_COUNT: (count) => `\n${count}개를 구매했습니다.`,
  WINNING_NUMBERS: "\n당첨 번호를 입력해주세요.\n",
  BONUS_NUMBER: "\n보너스 번호를 입력해주세요.\n",
};

const ERROR_MESSAGES = {
  INVALID_AMOUNT: "[ERROR] 유효하지 않은 금액이 입력되었습니다.",
  INVALID_NUMBER: "[ERROR] 유효하지 않은 번호가 입력되었습니다.",
};

const STATISTICS_MESSAGES = {
  WINNING_STATISTICS: "\n당첨 통계\n---",
  THREE_MATCHES: (matches) => `3개 일치 (5,000원) - ${matches}개`,
  FOUR_MATCHES: (matches) => `4개 일치 (50,000원) - ${matches}개`,
  FIVE_MATCHES: (matches) => `5개 일치 (1,500,000원) - ${matches}개`,
  FIVE_POINT_FIVE_MATCHES: (matches) =>
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${matches}개`,
  SIX_MATCHES: (matches) => `6개 일치 (2,000,000,000원) - ${matches}개`,
  RATE_OF_RETURN: (rateOfReturn) => `총 수익률은 ${rateOfReturn}%입니다.`,
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
    var amount = await MissionUtils.Console.readLineAsync(
      PROMPT_MESSAGES.BUY_LOTTO
    );
    amount = Number(amount);
    if (isNaN(amount) || amount % 1000 !== 0) {
      MissionUtils.Console.print(ERROR_MESSAGES.INVALID_AMOUNT);
      return this.#getAmount();
    }
    return amount;
  }

  async #getCount(amount) {
    const count = amount / 1000;
    if (count !== parseInt(count, 10)) {
      throw new Error(ERROR_MESSAGES.INVALID_AMOUNT);
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
      MissionUtils.Console.print(`[${lotto.getNumbers().join(", ")}]`);
    }
    return lottos;
  }

  async #getWinningNumber() {
    const input = await MissionUtils.Console.readLineAsync(
      PROMPT_MESSAGES.WINNING_NUMBERS
    );
    return new Lotto(input.split(",").map(Number));
  }

  async #getBonus(winningNumber) {
    const number = parseInt(
      await MissionUtils.Console.readLineAsync(PROMPT_MESSAGES.BONUS_NUMBER),
      10
    );
    if (!(number > 0 && number <= 45)) {
      throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
    }
    return number;
  }

  #calculateResults(lottos, winningNumbers, bonusNumber) {
    const results = { 3: 0, 4: 0, 5: 0, 5.5: 0, 6: 0 };
    let totalPrize = 0;

    lottos.forEach((lotto) => {
      const matchedCount = lotto.matches(winningNumbers.getNumbers());
      const hasBonus = lotto.includesBonus(bonusNumber);

      if (matchedCount === 5 && hasBonus) {
        results[5.5]++;
        totalPrize += this.#prizes[5.5];
      } else if (matchedCount >= 3) {
        results[matchedCount]++;
        totalPrize += this.#prizes[matchedCount];
      }
    });

    return { results, totalPrize };
  }

  #printStatistics(results, totalPrize, amount) {
    MissionUtils.Console.print(STATISTICS_MESSAGES.WINNING_STATISTICS);
    MissionUtils.Console.print(STATISTICS_MESSAGES.THREE_MATCHES(results[3]));
    MissionUtils.Console.print(STATISTICS_MESSAGES.FOUR_MATCHES(results[4]));
    MissionUtils.Console.print(STATISTICS_MESSAGES.FIVE_MATCHES(results[5]));
    MissionUtils.Console.print(
      STATISTICS_MESSAGES.FIVE_POINT_FIVE_MATCHES(results[5.5])
    );
    MissionUtils.Console.print(STATISTICS_MESSAGES.SIX_MATCHES(results[6]));
    const rateOfReturn = ((totalPrize / amount) * 100).toFixed(1);
    MissionUtils.Console.print(
      STATISTICS_MESSAGES.RATE_OF_RETURN(rateOfReturn)
    );
  }

  async run() {
    const amount = await this.#getAmount();
    const count = await this.#getCount(amount);
    const lottos = await this.#getLottos(count);
    const winningNumber = await this.#getWinningNumber();
    const bonusNumber = await this.#getBonus(winningNumber);
    const { results, totalPrize } = this.#calculateResults(
      lottos,
      winningNumber,
      bonusNumber
    );
    this.#printStatistics(results, totalPrize, amount);
  }
}

export default App;
