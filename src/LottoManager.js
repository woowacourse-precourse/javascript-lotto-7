import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import validator from "./validator.js";
import { INPUT, LOTTO_RANGE, PRIZE_MONEY, OUTPUT } from "./constants.js";

class LottoManager {
  #lottoArray;
  #winningNumbers;
  #bonusNumber;

  async play() {
    const money = await this.#getMoney();
    this.#initializeLottos(money);

    const winningNumbers = await this.#getWinningNumbers();
    this.#winningNumbers = winningNumbers;

    const bonusNumber = await this.#getBonusNumber();
    this.#bonusNumber = bonusNumber;

    this.#printWinningResult();
  }

  async #getMoney() {
    while (true) {
      try {
        const money = await Console.readLineAsync(INPUT.MONEY);
        validator.money(money.trim());
        return Number(money);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async #initializeLottos(money) {
    this.#lottoArray = Array.from(
      { length: money / LOTTO_RANGE.PRICE },
      () =>
        new Lotto(
          Random.pickUniqueNumbersInRange(
            LOTTO_RANGE.START,
            LOTTO_RANGE.END,
            LOTTO_RANGE.COUNT
          )
        )
    );
    this.#printLottoCount();
    this.#printLottoArray();
  }

  #printLottoCount() {
    Console.print(OUTPUT.PURCHASE(this.#lottoArray.length));
  }

  #printLottoArray() {
    this.#lottoArray.forEach((lotto) => {
      lotto.printNumberArray();
    });
  }

  async #getWinningNumbers() {
    while (true) {
      try {
        const numbersInput = await Console.readLineAsync(INPUT.WINNING_NUMBERS);
        const numbersInputArray = numbersInput.split(",");
        validator.lottoNumberArray(numbersInputArray);
        for (const number of numbersInputArray) {
          validator.lottoNumber(number);
        }
        return numbersInputArray.map(Number);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async #getBonusNumber() {
    while (true) {
      try {
        const number = await Console.readLineAsync(INPUT.BONUS_NUMBER);
        validator.lottoNumber(number);
        validator.bonusNumber(number, this.#winningNumbers);
        return Number(number);
      } catch (error) {
        Console.print(error.message);
      }
    }
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
      winningCounts[5] * PRIZE_MONEY.FIFTH +
      winningCounts[4] * PRIZE_MONEY.FOURTH +
      winningCounts[3] * PRIZE_MONEY.THIRD +
      winningCounts[2] * PRIZE_MONEY.SECOND +
      winningCounts[1] * PRIZE_MONEY.FIRST;
    const totalInvestment = this.#lottoArray.length * LOTTO_RANGE.PRICE;
    return ((totalPrize / totalInvestment) * 100).toFixed(1);
  }

  #printWinningResult() {
    const winningCounts = this.#calculateWinningCounts();
    Console.print(OUTPUT.MATCH_RESULT.THREE(winningCounts[5]));
    Console.print(OUTPUT.MATCH_RESULT.FOUR(winningCounts[4]));
    Console.print(OUTPUT.MATCH_RESULT.FIVE(winningCounts[3]));
    Console.print(OUTPUT.MATCH_RESULT.FIVE_WITH_BONUS(winningCounts[2]));
    Console.print(OUTPUT.MATCH_RESULT.SIX(winningCounts[1]));

    const profitRate = this.#calculateProfitRate(winningCounts);
    Console.print(OUTPUT.PROFIT_RATE(profitRate));
  }
}

export default LottoManager;
