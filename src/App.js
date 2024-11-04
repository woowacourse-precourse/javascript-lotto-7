import {Console} from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  #lottos = [];
  #PRIZE_MONEY = {
    3: 5000,
    4: 50000,
    5: 1500000,
    5.5: 30000000,
    6: 2000000000,
  };

  async run() {
    try {
      const amount = await this.#getPurchaseAmount();
      const lottoCount = this.#calculateLottoCount(amount);
      this.#generateLottos(lottoCount);
      Console.print(`${lottoCount}개를 구매했습니다.`);
      this.#printLottos();
      const {numbers, bonus} = await this.#getWinningNumbers();
      const result = this.#calculateResult(numbers, bonus);
      this.#printResult(result, amount);
    } catch (error) {
      Console.print(error.message);
    }
  }

  async #getWinningNumbers() {
    const input = await Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
    const numbers = input.split(",").map((number) => Number(number.trim()));
    this.#validateWinningNumbers(numbers);
    const bonus = await this.#inputBonusNumber(numbers);
    return {numbers, bonus};
  }

  async #inputBonusNumber(winningNumbers) {
    const input = await Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n"
    );
    const bonus = Number(input);
    this.#validateBonusNumber(bonus, winningNumbers);
    return bonus;
  }

  #validateWinningNumbers(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 당첨 번호는 6개여야 합니다.");
    }
    if (numbers.some((number) => !Number.isInteger(number))) {
      throw new Error("[ERROR] 당첨 번호는 정수여야 합니다.");
    }
    if (numbers.some((number) => number < 1 || number > 45)) {
      throw new Error("[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 당첨 번호는 중복될 수 없습니다.");
    }
  }

  #validateBonusNumber(bonus, winningNumbers) {
    if (!Number.isInteger(bonus)) {
      throw new Error("[ERROR] 보너스 번호는 정수여야 합니다.");
    }
    if (bonus < 1 || bonus > 45) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    if (winningNumbers.includes(bonus)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }
  }

  async #getPurchaseAmount() {
    const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    const amount = Number(input);
    this.#validatePurchaseAmount(amount);
    return amount;
  }

  #validatePurchaseAmount(amount) {
    if (!Number.isInteger(amount)) {
      throw new Error("[ERROR] 구입 금액은 숫자여야 합니다.");
    }
    if (amount < 1000) {
      throw new Error("[ERROR] 구입 금액은 1,000원 이상이어야 합니다.");
    }
    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위여야 합니다.");
    }
  }

  #calculateLottoCount(amount) {
    return amount / 1000;
  }

  #generateLottos(count) {
    for (let i = 0; i < count; i++) {
      this.#lottos.push(Lotto.generate());
    }
  }

  #printLottos() {
    this.#lottos.forEach((lotto) => {
      Console.print(lotto.toString());
    });
  }

  #calculateResult(winningNumbers, bonusNumber) {
    const result = {3: 0, 4: 0, 5: 0, 5.5: 0, 6: 0};

    this.#lottos.forEach((lotto) => {
      const {matchCount, hasBonus} = lotto.matchNumbers(
        winningNumbers,
        bonusNumber
      );
      if (matchCount === 5 && hasBonus) {
        result["5.5"]++;
      } else if (matchCount >= 3) {
        result[matchCount]++;
      }
    });

    return result;
  }

  #printResult(result, purchaseAmount) {
    Console.print("\n당첨 통계\n---");
    Console.print(`3개 일치 (5,000원) - ${result[3]}개`);
    Console.print(`4개 일치 (50,000원) - ${result[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${result[5]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${result["5.5"]}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${result[6]}개`);

    const profit = this.#calculateProfit(result);
    const profitRate = (profit / purchaseAmount) * 100;
    Console.print(`총 수익률은 ${profitRate.toFixed(1)}%입니다.`);
  }

  #calculateProfit(result) {
    return Object.entries(result).reduce((total, [match, count]) => {
      return total + this.#PRIZE_MONEY[match] * count;
    }, 0);
  }
}

export default App;
