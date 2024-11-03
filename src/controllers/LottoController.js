import LottoGenerator from "../models/LottoGenerator.js";
import LottoResult from "../models/LottoResult.js";
import { validatePurchaseAmount, validateLottoNumbers, validateBonusNumber } from "../utils/validators.js";
import InputView from "../views/InputView.js";
import OutputView from "../views/OutputView.js";
import { LOTTO } from "../utils/constants.js";
import { ERROR_MESSAGES } from "../utils/constants.js";

class LottoController {
  #lottos;
  #result;

  constructor() {
    this.#lottos = [];
    this.#result = new LottoResult();
  }

  async play() {
    try {
      await this.#processPurchase();
      const winningNumbers = await this.#processWinningNumbers();
      const bonusNumber = await this.#processBonusNumber(winningNumbers);
      this.#processResults(winningNumbers, bonusNumber);
    } catch (error) {
      OutputView.printError(error.message);
      await this.play();
    }
  }

  async #processPurchase() {
    try {
      const amount = validatePurchaseAmount(await InputView.requestPurchaseAmount());
      const count = amount / LOTTO.PRICE;
      this.#lottos = LottoGenerator.generateMany(count);
      OutputView.printEmptyLine();
      OutputView.printPurchasedLottos(this.#lottos);
    } catch (error) {
      OutputView.printError(error.message);
      await this.#processPurchase();
    }
  }

  async #processWinningNumbers() {
    try {
      const winningNumbers = this.parseWinningNumbers(await InputView.requestWinningNumbers());
      OutputView.printEmptyLine();
      return winningNumbers;
    } catch (error) {
      OutputView.printError(error.message);
      return await this.#processWinningNumbers();
    }
  }

  async #processBonusNumber(winningNumbers) {
    try {
      const bonusNumber = validateBonusNumber(await InputView.requestBonusNumber(), winningNumbers);
      OutputView.printEmptyLine();
      return bonusNumber;
    } catch (error) {
      OutputView.printError(error.message);
      return await this.#processBonusNumber(winningNumbers);
    }
  }

  #processResults(winningNumbers, bonusNumber) {
    let purchaseAmount = this.#lottos.length * LOTTO.PRICE;

    this.#lottos.forEach((lotto) => {
      const matchCount = lotto.countMatchingNumbers(winningNumbers);
      const hasBonus = matchCount === 5 && lotto.hasNumber(bonusNumber);
      this.#result.addResult(matchCount, hasBonus);
    });

    OutputView.printResults(this.#result.getResults());
    OutputView.printProfitRate(this.#result.calculateProfitRate(purchaseAmount));
  }

  parseWinningNumbers = (input) => {
    if (!input) {
      throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
    }

    const numbers = input.split(",").map((num) => Number(num.trim()));

    validateLottoNumbers(numbers);
    return numbers;
  };
}

export default LottoController;