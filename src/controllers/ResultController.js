import WinningLotto from '../models/WinningLotto.js';
import OutputView from '../views/OutputView.js';
import InputController from './InputController.js';
import ResultCalculator from './ResultCalculator.js';

class ResultController {
  #lottos;

  #winningLotto;

  /**
   * @constructor
   * @param {number[][]} lottos - 구매한 로또 번호 배열
   */
  constructor(lottos) {
    this.#lottos = lottos;
  }

  /**
   * 로또 결과를 계산하고 출력한다.
   * @returns {Promise<void>}
   */
  async processResults() {
    await this.getWinningLotto();
    const { prizeCounts, ROI } = this.calculateResults();
    this.displayResults(prizeCounts, ROI);
  }

  /**
   * 당첨 번호와 보너스 번호를 입력받고 유효성을 검사한다.
   * @returns {Promise<void>}
   */
  async getWinningLotto() {
    const inputController = new InputController();
    const winningNumbers = await inputController.getWinningNumbers();
    const bonusNumber = await inputController.getBonusNumber(winningNumbers);

    this.#winningLotto = new WinningLotto(winningNumbers, bonusNumber);
  }

  /**
   * 로또 결과를 계산한다.
   * @returns {Object} 당첨 결과와 수익률을 포함한 객체
   */
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

  /**
   * 계산된 결과를 출력한다.
   * @param {Object} prizeCounts - 당첨 횟수
   * @param {string} ROI - 수익률
   */
  displayResults(prizeCounts, ROI) {
    OutputView.printResult(prizeCounts);
    OutputView.printROI(ROI);
  }
}

export default ResultController;
