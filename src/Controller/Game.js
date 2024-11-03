//@ts-check

import User from '../User/User.js';
import LottoService from '../Service/LottoService.js';
import LottoResultView from '../views/LottoResultView.js';
import WinningNumberController from './WinningNumberController.js';
import PurchaseController from './PurchaseController.js';
import ResultController from './ResultController.js';

class Game {
  constructor() {
    const user = new User();
    const lottoService = new LottoService();
    const resultView = new LottoResultView();

    this.purchaseController = new PurchaseController(
      user,
      lottoService,
      resultView
    );
    this.winningNumberController = new WinningNumberController(user);
    this.resultController = new ResultController(lottoService, resultView);
  }

  async process() {
    const { lottos, purchaseAmount } =
      await this.purchaseController.handlePurchase();
    const winningNumbers =
      await this.winningNumberController.getWinningNumbers();
    const bonusNumber = await this.winningNumberController.getBonusNumber(
      winningNumbers
    );

    this.resultController.processResults(
      lottos,
      winningNumbers,
      bonusNumber,
      purchaseAmount
    );
  }
}

export default Game;
