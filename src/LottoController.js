import { parseNumber, parseWinnnngLotto } from './utils/parser.js';
import WinningNumbers from './model/WinningNumbers.js';
import retry from './utils/retry.js';

class LottoController {
  constructor (view, service) {
    this.view = view;
    this.service = service;
  }

  async run () {
    const purchase = await this.getPurchase();
    const lottos = this.service.buyTickets(purchase);
    this.view.displayLottos(lottos);

    const winningNumbers = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumber(winningNumbers);
    winningNumbers.setBonus(bonusNumber);

    const analyzeResult = this.service.analyze(purchase, winningNumbers, lottos);
    this.view.showAnalyzeResult(analyzeResult);
  }

  async getPurchase () {
    return await retry(
      async () => await this.view.getPurchase(),
      parseNumber,
      this.service.createPurchase.bind(this.service),
      (message) => this.view.errorLog(message),
    );
  }

  async getWinningNumbers () {
    return await retry(
      async () => await this.view.getWinningNumbers(),
      parseWinnnngLotto,
      (value) => new WinningNumbers(value),
      (message) => this.view.errorLog(message),
    );
  }

  async getBonusNumber (winningNumbers) {
    return await retry(
      async () => await this.view.getBonusNumber(),
      parseNumber,
      (input) => this.service.createBonusNumber(input, winningNumbers),
      (message) => this.view.errorLog(message),
    );
  }

}

export default LottoController;
