import ConsoleUtil from "./utils/ConsoleUtil.js";
import LottoManager from "./LottoManager.js";
import errorMessages from "./errors/errorMessages.js";

class App {
  constructor() {
    this.lottoManager = new LottoManager();
  }

  async run() {
    try {
      const amount = await ConsoleUtil.readLine("구입금액을 입력해 주세요.\n");
      this.#validateAmount(amount);
      const lottoCount = Number(amount) / 1000;
      const lottos = this.lottoManager.generateLottos(lottoCount);

      ConsoleUtil.print(`${lottoCount}개를 구매했습니다.`);
      lottos.forEach((lotto) => ConsoleUtil.print(`[${lotto.getNumbers().join(", ")}]`));

      await this.#getWinningNumbers();
    } catch (error) {
      ConsoleUtil.print(error.message);
      await this.run();
    }
  }

  #validateAmount(amount) {
    const num = Number(amount);
    if (isNaN(num) || num % 1000 !== 0) {
      throw new Error(errorMessages.INVALID_MONEY_ERROR);
    }
    return num;
  }

  async #getWinningNumbers() {
    try {
      const winningNumbersInput = await ConsoleUtil.readLine("당첨 번호를 입력해 주세요.\n");
      const winningNumbers = this.#parseNumbers(winningNumbersInput);

      const bonusNumberInput = await ConsoleUtil.readLine("보너스 번호를 입력해 주세요.\n");
      const bonusNumber = this.#parseBonusNumber(bonusNumberInput, winningNumbers);

      const results = this.lottoManager.calculateResults(winningNumbers, bonusNumber);
      this.#printResults(results);
    } catch (error) {
      ConsoleUtil.print(error.message);
      await this.#getWinningNumbers();
    }
  }

  #parseNumbers(input) {
    const numbers = input.split(",").map(Number);
    if (numbers.length !== 6) {
      throw new Error(errorMessages.AMOUNT_OVER_ERROR);
    }
    if (new Set(numbers).size !== 6) {
      throw new Error(errorMessages.SAME_NUMBER_ERROR);
    }
    if (numbers.some((num) => isNaN(num))) {
      throw new Error(errorMessages.NOT_NUMBER_ERROR);
    }
    if (numbers.some((num) => num < 1 || num > 45)) {
      throw new Error(errorMessages.RANGE_OVER_ERROR);
    }
    return numbers;
  }

  #parseBonusNumber(input, winningNumbers) {
    const bonusNumber = Number(input);
    if (isNaN(bonusNumber) || bonusNumber < 1 || bonusNumber > 45 || winningNumbers.includes(bonusNumber)) {
      throw new Error(errorMessages.RANGE_OVER_ERROR);
    }
    return bonusNumber;
  }

  #printResults(results) {
    const prizeMap = {
      3: 5000,
      4: 50000,
      5: 1500000,
      "5_bonus": 30000000,
      6: 2000000000,
    };

    ConsoleUtil.print("당첨 통계\n---");
    ConsoleUtil.print(`3개 일치 (5,000원) - ${results[3]}개`);
    ConsoleUtil.print(`4개 일치 (50,000원) - ${results[4]}개`);
    ConsoleUtil.print(`5개 일치 (1,500,000원) - ${results[5]}개`);
    ConsoleUtil.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${results["5_bonus"]}개`);
    ConsoleUtil.print(`6개 일치 (2,000,000,000원) - ${results[6]}개`);

    const totalEarnings = 
      results[3] * prizeMap[3] +
      results[4] * prizeMap[4] +
      results[5] * prizeMap[5] +
      results["5_bonus"] * prizeMap["5_bonus"] +
      results[6] * prizeMap[6];

    const investment = this.lottoManager.lottos.length * 1000;
    const profitRate = ((totalEarnings / investment) * 100).toFixed(1);
    ConsoleUtil.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default App;
