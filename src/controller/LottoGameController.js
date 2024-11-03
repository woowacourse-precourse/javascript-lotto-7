import LottoGame from '../model/LottoGame.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import { INPUT_MESSAGES } from '../constants/messages.js';
import Validator from '../validator/Validator.js';

class LottoGameController {
  #lottoGame;

  async play() {
    const purchaseAmount = await this.#getPurchaseAmount();
    this.#createLottoGame(purchaseAmount);
    this.#printLottoNumbers();

    const winningNumbers = await this.#getWinningNumbers();
    const bonusNumber = await this.#getBonusNumber(winningNumbers);
    this.#printWinningStats(winningNumbers, bonusNumber);
  }

  #createLottoGame(purchaseAmount) {
    this.#lottoGame = new LottoGame(purchaseAmount);
  }

  #printLottoNumbers() {
    const LOTTO_NUMBERS = this.#lottoGame.getLottoNumbers();
    OutputView.printLottoAmount(LOTTO_NUMBERS.length);

    LOTTO_NUMBERS.forEach((numbers) => {
      OutputView.printLottoNumbers(numbers.getNumbers());
    });
  }

  async #getPurchaseAmount() {
    try {
      const purchaseAmount = await InputView.readUserInput(
        INPUT_MESSAGES.PURCHASE_AMOUNT
      );
      Validator.validatePurchaseAmount(purchaseAmount);
      return purchaseAmount;
    } catch (error) {
      OutputView.print(error.message);
      return this.#getPurchaseAmount();
    }
  }

  async #getWinningNumbers() {
    try {
      const winningNumberList = await InputView.readUserInput(
        INPUT_MESSAGES.WINNING_NUMBERS
      );
      const winningNumbers = winningNumberList
        .split(',')
        .map((num) => Number(num.trim()));

      Validator.validateLottoNumbers(winningNumbers);
      return winningNumbers;
    } catch (error) {
      OutputView.print(error.message);
      return this.#getWinningNumbers();
    }
  }

  async #getBonusNumber(winningNumbers) {
    try {
      const bonusNumber = await InputView.readUserInput(
        INPUT_MESSAGES.BONUS_NUMBER
      );
      Validator.validateBonusNumber(bonusNumber, winningNumbers);
      return Number(bonusNumber);
    } catch (error) {
      OutputView.print(error.message);
      return this.#getBonusNumber(winningNumbers);
    }
  }

  async #printWinningStats(winningNumbers, bonusNumber) {
    const winningStats = this.#lottoGame.calculatePrize(
      winningNumbers,
      bonusNumber
    );
    const revenue = this.#lottoGame.calculateRevenue();

    OutputView.printWinningStats();
    OutputView.printMatchResult(winningStats);
    OutputView.printTotalRevenue(revenue);
  }
}

export default LottoGameController;
