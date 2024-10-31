import WinningLotto from '../models/WinningLotto.js';
import InputController from './InputController.js';
import ResultCalculator from './ResultCalculator.js';

class ResultController {
  #lottos;

  #winningLotto;

  constructor(lottos) {
    this.#lottos = lottos;
  }

  async processResults() {
    const inputController = new InputController();
    const winningNumbers = await inputController.getWinningNumbers();
    const bonusNumber = await inputController.getBonusNumber(winningNumbers);

    this.#winningLotto = new WinningLotto(winningNumbers, bonusNumber);

    const resultCalculator = new ResultCalculator(
      this.#lottos,
      winningNumbers,
      bonusNumber,
    );

    resultCalculator.calculateResults();
    const ROI = resultCalculator.calculateROI();
  }
}

export default ResultController;
