import ConsoleUtil from "./utils/ConsoleUtil.js";
import LottoManager from "./LottoManager.js";
import errorMessages from "./errors/errorMessages.js";
import ResultPrinter from "./ResultPrinter.js";

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

      await this.#getWinningNumbers(lottoCount);
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

  async #getWinningNumbers(lottoCount) {
    try {
      const winningNumbersInput = await ConsoleUtil.readLine("당첨 번호를 입력해 주세요.\n");
      const winningNumbers = this.#parseNumbers(winningNumbersInput);

      const bonusNumberInput = await ConsoleUtil.readLine("보너스 번호를 입력해 주세요.\n");
      const bonusNumber = this.#parseBonusNumber(bonusNumberInput, winningNumbers);

      const results = this.lottoManager.calculateResults(winningNumbers, bonusNumber);
      ResultPrinter.printResults(results, lottoCount);
    } catch (error) {
      ConsoleUtil.print(error.message);
      await this.#getWinningNumbers(lottoCount);
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
}

export default App;
