import { LOTTO, PRIZE, MESSAGE, ERROR_MESSAGE } from "./utils/constants.js";
import {
  validatePurchaseAmount,
  validateWinningNumbers,
  validateBonusNumber,
} from "./utils/validation.js";
import {
  generateLottoNumbers,
  readLineAsync,
  print,
} from "./utils/missionUtil.js";
import Lotto from "./Lotto.js";

class App {
  #lottos = [];
  #winningNumbers = [];
  #bonusNumber = 0;

  async run() {
    await this.purchaseLottos();
    await this.inputWinningNumbers();
    await this.inputBonusNumber();
    this.showResult();
  }

  async purchaseLottos() {
    const amount = validatePurchaseAmount(
      await readLineAsync(MESSAGE.PURCHASE_MESSAGE)
    );

    const count = amount / LOTTO.PRICE;
    this.generateLottos(count);

    print(`\n${count}개를 구매했습니다.`);
    this.#lottos.forEach((lotto) => {
      print(`[${lotto.getNumbers().join(", ")}]`);
    });
    print("");
  }

  generateLottos(count) {
    this.#lottos = Array.from(
      { length: count },
      () => new Lotto(generateLottoNumbers())
    );
  }

  async inputWinningNumbers() {
    this.#winningNumbers = validateWinningNumbers(
      await readLineAsync(MESSAGE.WINNING_NUMBERS_MESSAGE)
    );
  }

  async inputBonusNumber() {
    this.#bonusNumber = validateBonusNumber(
      await readLineAsync(MESSAGE.BONUS_NUMBER_MESSAGE),
      this.#winningNumbers
    );
  }

  showResult() {
    const results = this.calculateResults();
    const profit = this.calculateProfit(results);

    print("\n당첨 통계\n---");
    this.printPrizeResults(results);
    this.printProfitRate(profit);
  }

  calculateResults() {
    const results = new Map([
      [PRIZE.FIFTH.MATCH, 0],
      [PRIZE.FOURTH.MATCH, 0],
      [PRIZE.THIRD.MATCH, 0],
      [PRIZE.SECOND.MATCH, 0], // 5 matches + bonus
      [PRIZE.FIRST.MATCH, 0],
    ]);

    this.#lottos.forEach((lotto) => {
      const { matchCount, hasBonus } = lotto.match(
        this.#winningNumbers,
        this.#bonusNumber
      );

      if (matchCount === PRIZE.SECOND.MATCH && hasBonus) {
        results.set(PRIZE.SECOND.MATCH, results.get(PRIZE.SECOND.MATCH) + 1);
      } else {
        results.set(matchCount, results.get(matchCount) || 0 + 1);
      }
    });

    return results;
  }

  calculateProfit(results) {
    const investment = this.#lottos.length * LOTTO.PRICE;
    let prize = 0;

    prize += results.get(PRIZE.FIFTH.MATCH) * PRIZE.FIFTH.AMOUNT;
    prize += results.get(PRIZE.FOURTH.MATCH) * PRIZE.FOURTH.AMOUNT;
    prize += results.get(PRIZE.THIRD.MATCH) * PRIZE.THIRD.AMOUNT;
    prize += results.get(PRIZE.SECOND.MATCH) * PRIZE.SECOND.AMOUNT;
    prize += results.get(PRIZE.FIRST.MATCH) * PRIZE.FIRST.AMOUNT;

    return (prize / investment) * 100;
  }

  printPrizeResults(results) {
    print(
      `3개 일치 (${PRIZE.FIFTH.AMOUNT.toLocaleString()}원) - ${results.get(
        PRIZE.FIFTH.MATCH
      )}개`
    );
    print(
      `4개 일치 (${PRIZE.FOURTH.AMOUNT.toLocaleString()}원) - ${results.get(
        PRIZE.FOURTH.MATCH
      )}개`
    );
    print(
      `5개 일치 (${PRIZE.THIRD.AMOUNT.toLocaleString()}원) - ${results.get(
        PRIZE.THIRD.MATCH
      )}개`
    );
    print(
      `5개 일치, 보너스 볼 일치 (${PRIZE.SECOND.AMOUNT.toLocaleString()}원) - ${results.get(
        PRIZE.SECOND.MATCH
      )}개`
    );
    print(
      `6개 일치 (${PRIZE.FIRST.AMOUNT.toLocaleString()}원) - ${results.get(
        PRIZE.FIRST.MATCH
      )}개`
    );
  }

  printProfitRate(profit) {
    print(`총 수익률은 ${profit.toFixed(1)}%입니다.`);
  }
}

export default App;
