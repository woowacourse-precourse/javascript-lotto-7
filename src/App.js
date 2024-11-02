import { Console, Random } from "@woowacourse/mission-utils";
import { PRINT_MESSAGE, ERROR_MESSAGE, LOTTO_CONFIG } from "./static/Static.js";
import Lotto from "./Lotto.js";

class App {
  #lottos = [];
  #winningLotto;
  #bonusNumber;

  async run() {
    try {
      await this.#purchaseLottos();
      await this.#setWinningNumbers();
      this.#printResults();
    } catch (error) {
      Console.print(error.message);
    }
  }

  async #readAmount() {
    const input = await Console.readLineAsync(PRINT_MESSAGE.input.purchaseAmount);
    const amount = Number(input);
    
    if (isNaN(amount)) {
      throw new Error(ERROR_MESSAGE.purchase.NOT_NUMBER);
    }
    if (amount <= 0) {
      throw new Error(ERROR_MESSAGE.purchase.NOT_POSITIVE);
    }
    if (amount % LOTTO_CONFIG.price.UNIT !== 0) {
      throw new Error(ERROR_MESSAGE.purchase.INVALID_UNIT);
    }
    
    return amount;
  }

  async #purchaseLottos() {
    const amount = await this.#readAmount();
    const lottoCount = Math.floor(amount / LOTTO_CONFIG.price.UNIT);
    Console.print(PRINT_MESSAGE.output.purchaseCount(lottoCount));
    this.#generateLottos(lottoCount);
  }

  #generateLottos(count) {
    for (let i = 0; i < count; i++) {
      const numbers = Random.pickUniqueNumbersInRange(
        LOTTO_CONFIG.numbers.MIN,
        LOTTO_CONFIG.numbers.MAX,
        LOTTO_CONFIG.numbers.LENGTH
      );
      const lotto = new Lotto(numbers);
      this.#lottos.push(lotto);
      Console.print(`[${lotto.getNumbers().join(", ")}]`);
    }
  }

  async #setWinningNumbers() {
    this.#winningLotto = new Lotto(await this.#readWinningNumbers());
    this.#bonusNumber = await this.#readBonusNumber();
  }

  async #readWinningNumbers() {
    const input = await Console.readLineAsync(PRINT_MESSAGE.input.winningNumbers);
    if (!input.match(/^\d+(,\d+){5}$/)) {
      throw new Error(ERROR_MESSAGE.winningNumbers.INVALID_FORMAT);
    }
    const numbers = input.split(",").map(number => Number(number.trim()));
    if (numbers.some(isNaN)) {
      throw new Error(ERROR_MESSAGE.winningNumbers.NOT_NUMBERS);
    }
    return numbers;
  }

  async #readBonusNumber() {
    const input = await Console.readLineAsync(PRINT_MESSAGE.input.bonusNumber);
    const number = Number(input);
    
    if (isNaN(number)) {
      throw new Error(ERROR_MESSAGE.bonus.NOT_NUMBER);
    }
    if (number < LOTTO_CONFIG.numbers.MIN || number > LOTTO_CONFIG.numbers.MAX) {
      throw new Error(ERROR_MESSAGE.bonus.INVALID_RANGE);
    }
    if (this.#winningLotto.contains(number)) {
      throw new Error(ERROR_MESSAGE.bonus.DUPLICATE);
    }
    
    return number;
  }

  #printResults() {
    const results = this.#calculateResults();
    this.#printWinningStatistics(results);
    this.#printProfitRate(results);
  }

  #calculateResults() {
    const results = { 3: 0, 4: 0, 5: 0, "5+": 0, 6: 0 };
    
    this.#lottos.forEach(lotto => {
      const matchCount = lotto.match(this.#winningLotto.getNumbers());
      this.#updateWinningRank(results, matchCount, lotto);
    });
    
    return results;
  }

  #updateWinningRank(results, matchCount, lotto) {
    if (matchCount === 6) {
      results[6]++;
      return;
    }
    if (matchCount === 5 && lotto.contains(this.#bonusNumber)) {
      results["5+"]++;
      return;
    }
    if (matchCount >= 3) {
      results[matchCount]++;
    }
  }

  #printWinningStatistics(results) {
    Console.print(PRINT_MESSAGE.output.statisticsHeader);
    Console.print(PRINT_MESSAGE.output.matchResult.three(results[3]));
    Console.print(PRINT_MESSAGE.output.matchResult.four(results[4]));
    Console.print(PRINT_MESSAGE.output.matchResult.five(results[5]));
    Console.print(PRINT_MESSAGE.output.matchResult.fiveBonus(results["5+"]));
    Console.print(PRINT_MESSAGE.output.matchResult.six(results[6]));
  }

  #printProfitRate(results) {
    const totalPrize = this.#calculateTotalPrize(results);
    const purchaseAmount = this.#lottos.length * LOTTO_CONFIG.price.UNIT;
    const profitRate = ((totalPrize / purchaseAmount) * 100).toFixed(1);
    
    Console.print(PRINT_MESSAGE.output.profitRate(profitRate));
  }

  #calculateTotalPrize(results) {
    return (
      results[3] * LOTTO_CONFIG.prize.THREE +
      results[4] * LOTTO_CONFIG.prize.FOUR +
      results[5] * LOTTO_CONFIG.prize.FIVE +
      results["5+"] * LOTTO_CONFIG.prize.FIVE_BONUS +
      results[6] * LOTTO_CONFIG.prize.SIX
    );
  }
}

export default App;