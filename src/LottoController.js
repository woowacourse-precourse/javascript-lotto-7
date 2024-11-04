import { Random } from "@woowacourse/mission-utils";
import { LOTTO_PRICE, NUMBER_PRIZE_MONEY } from "./constants.js";

class LottoController {
  #lottoService;
  #lottoView;
  #lottoValidator;

  constructor(lottoService, lottoView, lottoValidator) {
    this.#lottoService = lottoService;
    this.#lottoView = lottoView;
    this.#lottoValidator = lottoValidator;
  }

  async init() {
    await this.handleUserBudget();
    await this.handleUserWinningNumber();
  }

  async handleUserBudget() {
    const budget = await this.getUserBudget();
    const maxLottoCount = this.#lottoService.getMaxLottoCount(budget);

    this.#lottoView.printNumberOfLottos(maxLottoCount);
    this.displayLottos(maxLottoCount);
  }

  async handleUserWinningNumber() {
    const winningNumbers = await this.getUserWinningNumbers();
    const bonusNumber = await this.getUserBonusNumber(winningNumbers);

    this.displayWinningStats(bonusNumber, winningNumbers);
    this.displayProfitMargin(LOTTO_PRICE, NUMBER_PRIZE_MONEY);
  }

  async getUserBudget() {
    try {
      const budget = await this.#lottoView.receiveBudget();
      this.validateUserBudget(budget);
      return budget;
    } catch (error) {
      this.#lottoView.print(error.message);
      return await this.getUserBudget();
    }
  }

  async getUserWinningNumbers() {
    try {
      const winningNumbers = await this.#lottoView.receiveWinningNumber();
      this.validateUserWinningNumber(winningNumbers);
      return winningNumbers;
    } catch (error) {
      this.#lottoView.print(error.message);
      return await this.getUserWinningNumbers();
    }
  }

  async getUserBonusNumber(winningNumbers) {
    try {
      const bonusNumber = await this.#lottoView.receiveBonusNumber();
      this.validateBonusNumber(bonusNumber, winningNumbers);
      return bonusNumber;
    } catch (error) {
      this.#lottoView.print(error.message);
      return await this.getUserBonusNumber();
    }
  }

  validateUserBudget(budget) {
    this.#lottoValidator.checkPositive(budget);
    this.#lottoValidator.checkBigger(LOTTO_PRICE, budget);
    this.#lottoValidator.checkDivisible(LOTTO_PRICE, budget);
  }

  validateUserWinningNumber(winningNumbers) {
    this.#lottoValidator.checkDuplicate(winningNumbers);
    this.#lottoValidator.checkCount(winningNumbers.length);

    winningNumbers.forEach((winningNumber) => {
      this.#lottoValidator.checkPositive(winningNumber);
      this.#lottoValidator.checkRange(winningNumber);
    });
  }

  validateBonusNumber(bonusNumber, winningNumbers) {
    this.#lottoValidator.checkPositive(bonusNumber);
    this.#lottoValidator.checkRange(bonusNumber);
    this.#lottoValidator.checkNumberIn(bonusNumber, winningNumbers);
  }

  displayLottos(maxLottoCount) {
    for (let lottoCount = 0; lottoCount < maxLottoCount; lottoCount++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.#lottoService.addLotto(numbers);
    }

    this.#lottoView.printLottos(this.#lottoService.getLottos());
  }

  displayWinningStats(bonusNumber, winningNumbers) {
    const winningStats = this.#lottoService.getWinningStats(bonusNumber, winningNumbers);
    this.#lottoView.printWinningStats(winningStats);
  }

  displayProfitMargin(lottoPrice, prizeMoneyByRank) {
    const profitMargin = this.#lottoService.getProfitMargin(lottoPrice, prizeMoneyByRank);
    this.#lottoView.printProfitMargin(profitMargin);
  }
}

export default LottoController;
