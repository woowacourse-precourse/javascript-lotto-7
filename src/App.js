import LottoControllers from './controllers/LottoController.js';
import LottoValidator from './controllers/LottoValidator.js';
import PurchaseValidator from './controllers/PurchaseValidator.js';
import { Console } from '@woowacourse/mission-utils';
import {
  getPurchaseAmount,
  getWinningNumbers,
  getBonusNumber,
} from './utils/getUserInput.js';

class App {
  async run() {
    const controllers = new LottoControllers();
    const purchaseAmount = await this.getValidPurchaseAmount();
    const lottoTickets = await controllers.issueTickets(purchaseAmount);
    console.log(Array.isArray(lottoTickets));

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
      return await PurchaseValidator.validatePurchaseAmount(amount);
    } catch (error) {
      Console.print(error.message);
      return this.getValidPurchaseAmount();
    }
  }

  async getValidWinningNumbers() {
    try {
      const winningNumbers = await getWinningNumbers();
      return LottoValidator.validateWinningNumber(winningNumbers);
    } catch (error) {
      Console.print(error.message);
      return this.getValidWinningNumbers();
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
