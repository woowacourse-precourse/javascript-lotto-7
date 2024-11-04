import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import { validatePurchaseAmount } from '../utils/validateInput.js';
import CustomError from '../utils/CustomError.js';
import {
  validateBonusNumber,
  validateLottoNumbers,
} from '../utils/validateLottoNumbers.js';
import getRandomLottoNumbers from '../utils/getRandomNumbers.js';
import LottoResult from '../models/LottoResult.js';

class LottoController {
  static async handlePurchaseAmount() {
    try {
      const purchaseAmountString = await InputView.readPurchaseAmount();
      const purchaseAmount = validatePurchaseAmount(purchaseAmountString);
      OutputView.printPurchaseCount(purchaseAmount / 1000);
      return purchaseAmount;
    } catch (error) {
      if (error instanceof CustomError) {
        OutputView.printError(error.message, error.name);
        return this.handlePurchaseAmount();
      }
      throw error;
    }
  }

  static async getWinningNumbers() {
    try {
      const winningNumbersString = await InputView.readWinningNumbers();
      const winningNumbers = winningNumbersString
        .split(',')
        .map((num) => parseInt(num.trim(), 10));
      validateLottoNumbers(winningNumbers);
      return winningNumbers;
    } catch (error) {
      if (error instanceof CustomError) {
        OutputView.printError(error.message, error.name);
        return this.getWinningNumbers();
      }
      throw error;
    }
  }

  static async getBonusNumber(winningNumbers) {
    try {
      const bonusNumberString = await InputView.readBonusNumber();
      const bonusNumber = parseFloat(bonusNumberString, 10);
      validateBonusNumber(winningNumbers, bonusNumber);
      return bonusNumber;
    } catch (error) {
      if (error instanceof CustomError) {
        OutputView.printError(error.message, error.name);
        return this.getBonusNumber(winningNumbers);
      }
      throw error;
    }
  }

  static issueLottoTickets(purchaseAmount) {
    const ticketCount = purchaseAmount / 1000;
    const lottoTickets = Array.from({ length: ticketCount }, () =>
      getRandomLottoNumbers(),
    );

    lottoTickets.forEach((ticket) => OutputView.printLottoTicket(ticket));
    return lottoTickets;
  }

  static displayResults(
    lottoTickets,
    winningLotto,
    bonusNumber,
    purchaseAmount,
  ) {
    const lottoResult = new LottoResult(
      winningLotto.getNumbers(),
      bonusNumber,
      lottoTickets,
    );

    OutputView.printWinningStatistics();
    lottoResult.result.forEach(({ matchCount, count }) =>
      OutputView.printMatchResult(String(matchCount), count),
    );

    OutputView.printRateOfReturn(
      lottoResult.calculateRateOfReturn(purchaseAmount),
    );
  }
}

export default LottoController;
