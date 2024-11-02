import LottoControllers from './controllers/LottoController.js';
import { Console } from '@woowacourse/mission-utils';
import {
  getPurchaseAmount,
  getWinningNumbers,
  getBonusNumber,
} from './utils/getUserInput.js';
import validatePurchaseAmount from './validation/validatePurchaseAmount.js';

class App {
  async run() {
    const controllers = new LottoControllers();

    const purchaseAmount = await this.getValidPurchaseAmount();

    const lottoTickets = controllers.issueTickets(purchaseAmount);

    const winningNumbers = await this.getValidWinningNumbers(controllers);

    const bonusNumber = await this.getValidBonusNumber(
      winningNumbers,
      controllers
    );

    const rankCounts = controllers.matchLottoTickets(
      lottoTickets,
      winningNumbers,
      bonusNumber
    );

    controllers.displayResults(rankCounts);

    const profitRate = controllers.calculateProfit(rankCounts, purchaseAmount);
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }

  async getValidPurchaseAmount() {
    try {
      const amount = await getPurchaseAmount();
      return await validatePurchaseAmount(amount);
    } catch (error) {
      Console.print(error.message);
      return this.getValidPurchaseAmount();
    }
  }

  async getValidWinningNumbers(controllers) {
    try {
      const winningNumbers = await getWinningNumbers();
      controllers.validateWinningNumbers(winningNumbers);
      return winningNumbers;
    } catch (error) {
      Console.print(error.message);
      return this.getValidWinningNumbers(controllers);
    }
  }

  async getValidBonusNumber(winningNumbers, controllers) {
    try {
      const bonusNumber = await getBonusNumber();
      controllers.validateBonusNumber(winningNumbers, bonusNumber);
      return bonusNumber;
    } catch (error) {
      Console.print(error.message);
      return this.getValidBonusNumber(winningNumbers, controllers);
    }
  }
}

export default App;
