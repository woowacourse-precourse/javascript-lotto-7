//@ts-check

import { GAME_MESSAGE } from '../constants/gameMessage.js';
import { LOTTO_CONFIG } from '../constants/lotto.js';
import User from '../User/User.js';
import LottoService from '../Service/LottoService.js';
import LottoResultView from '../views/LottoResultView.js';

class Game {
  constructor() {
    this.user = new User();
    this.lottoService = new LottoService();
    this.resultView = new LottoResultView();
  }

  async process() {
    const purchaseAmount = await this.user.readUserInput(GAME_MESSAGE.PURCHASE);
    const count = purchaseAmount / LOTTO_CONFIG.PRICE_PER;

    const lottos = this.lottoService.createLottos(count);
    this.resultView.printPurchaseResult(count, lottos);

    const winningNumbers = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumber();

    const results = this.lottoService.calculateResults(
      lottos,
      winningNumbers,
      bonusNumber
    );
    this.resultView.printResults(results);

    const earningRate = this.lottoService.calculateEarningRate(
      purchaseAmount,
      results
    );
    this.resultView.printEarningRate(earningRate);
  }

  async getWinningNumbers() {
    const input = await this.user.readUserInput(GAME_MESSAGE.WINNING_NUMBER);
    return input.split(',').map((num) => Number(num.trim()));
  }

  async getBonusNumber() {
    const input = await this.user.readUserInput(GAME_MESSAGE.BONUS_NUMBER);
    return Number(input);
  }
}

export default Game;
