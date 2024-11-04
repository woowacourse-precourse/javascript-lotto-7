import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { ERROR } from "./constants.js";

class LottoManager {
  #lottoArray;
  #winningNumbers;
  #bonusNumber;

  async play() {
    const money = await this.#getMoney();
    this.#lottoArray = Array.from(
      { length: money / 1000 },
      () =>
        new Lotto(
          Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b)
        )
    );
    this.#printLottoCount();
    this.#printLottoArray();

    const winningNumbers = await this.#getWinningNumbers();
    this.#winningNumbers = winningNumbers;

    const bonusNumber = await this.#getBonusNumber();
    this.#bonusNumber = bonusNumber;

    this.#printWinningResult();
  }

  async #getMoney() {
    while (true) {
      try {
        const money = await Console.readLineAsync(
          "구입금액을 입력해 주세요.\n"
        );
        this.#validateMoney(money);
        return Number(money);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async #getWinningNumbers() {
    while (true) {
      try {
        const numbersInput = await Console.readLineAsync(
          "당첨 번호를 입력해 주세요.\n"
        );
        const numbersInputArray = numbersInput.split(",");
        this.#validateWinningNumbers(numbersInputArray);
        return numbersInputArray.map(Number);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async #getBonusNumber() {
    while (true) {
      try {
        const number = await Console.readLineAsync(
          "보너스 번호를 입력해 주세요.\n"
        );
        this.#validateBonusNumber(number);
        return Number(number);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  #validateMoney(input) {
    if (isNaN(input)) {
      throw new Error(ERROR.MONEY.INVALID_NUMBER);
    }
    if (input % 1000 !== 0) {
      throw new Error(ERROR.MONEY.INVALID_UNIT);
    }
  }

  #validateWinningNumbers(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.LOTTO.INVALID_LENGTH);
    }

    for (const number of numbers) {
      if (number === "") {
        throw new Error(ERROR.LOTTO.EMPTY_NUMBER);
      }
      if (isNaN(number)) {
        throw new Error(ERROR.LOTTO.INVALID_NUMBER);
      }
      if (!Number.isInteger(Number(number))) {
        throw new Error(ERROR.BONUS.NOT_INTEGER);
      }
      if (Number(number) < 1 || Number(number) > 45) {
        throw new Error(ERROR.LOTTO.INVALID_RANGE);
      }
    }
  }

  #validateBonusNumber(number) {
    if (number === "") {
      throw new Error(ERROR.BONUS.EMPTY_NUMBER);
    }
    if (isNaN(number)) {
      throw new Error(ERROR.BONUS.INVALID_NUMBER);
    }
    if (!Number.isInteger(Number(number))) {
      throw new Error(ERROR.BONUS.NOT_INTEGER);
    }
    if (Number(number) < 1 || Number(number) > 45) {
      throw new Error(ERROR.BONUS.INVALID_RANGE);
    }
  }

  #printLottoCount() {
    Console.print(`${this.#lottoArray.length}개를 구매했습니다.`);
  }

  #printLottoArray() {
    this.#lottoArray.forEach((lotto) => {
      lotto.printNumberArray();
    });
  }

  #calculateWinningCounts() {
    const winningCounts = Array(6).fill(0);
    this.#lottoArray.forEach((lotto) => {
      const level = lotto.getLevel(this.#winningNumbers, this.#bonusNumber);
      winningCounts[level] += 1;
    });
    return winningCounts;
  }

  #calculateProfitRate(winningCounts) {
    const totalPrize =
      winningCounts[5] * 5000 +
      winningCounts[4] * 50000 +
      winningCounts[3] * 1500000 +
      winningCounts[2] * 30000000 +
      winningCounts[1] * 2000000000;
    const totalInvestment = this.#lottoArray.length * 1000;
    return ((totalPrize / totalInvestment) * 100).toFixed(1);
  }

  #printWinningResult() {
    const winningCounts = this.#calculateWinningCounts();

    Console.print(`3개 일치 (5,000원) - ${winningCounts[5]}개`);
    Console.print(`4개 일치 (50,000원) - ${winningCounts[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${winningCounts[3]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningCounts[2]}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${winningCounts[1]}개`);

    const profitRate = this.#calculateProfitRate(winningCounts);
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default LottoManager;
