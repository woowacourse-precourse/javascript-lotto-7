import WinningLotto from '../models/WinningLotto.js';
import OutputView from '../views/OutputView.js';
import InputController from './InputController.js';
import ResultCalculator from './ResultCalculator.js';

class ResultController {
  #lottos;

  #winningLotto;

  constructor(lottos) {
    this.#lottos = lottos;
  }

  async processResults() {
    await this.getWinningLotto();
    const { prizeCounts, ROI } = this.calculateResults();
    this.displayResults(prizeCounts, ROI);
  }

  async getWinningLotto() {
    const inputController = new InputController();
    const winningNumbers = await inputController.getWinningNumbers();
    const bonusNumber = await inputController.getBonusNumber(winningNumbers);

    this.#winningLotto = new WinningLotto(winningNumbers, bonusNumber);
  }

  calculateResults() {
    const resultCalculator = new ResultCalculator(
      this.#lottos,
      this.#winningLotto.getWinningNumbers(),
      this.#winningLotto.getBonusNumber(),
    );

    resultCalculator.calculateResults();

    const prizeCounts = resultCalculator.getPrizeCounts();
    const ROI = resultCalculator.calculateROI();

    return { prizeCounts, ROI };
  }

  displayResults(prizeCounts, ROI) {
    OutputView.printResult(prizeCounts);
    OutputView.printROI(ROI);
  }
}

export default ResultController;
