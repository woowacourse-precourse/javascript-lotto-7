//@ts-check

import Lotto from '../Lotto.js';
import LottoService from '../Service/LottoService.js';
import LottoResultView from '../views/LottoResultView.js';

class ResultController {
  /**
   * @param {LottoService} lottoService
   * @param {LottoResultView} resultView
   */
  constructor(lottoService, resultView) {
    this.lottoService = lottoService;
    this.resultView = resultView;
  }

  /**
   * @param {Lotto[]} lottos
   * @param {number[]} winningNumbers
   * @param {number} bonusNumber
   * @param {number} purchaseAmount
   * @returns {void}
   */

  processResults(lottos, winningNumbers, bonusNumber, purchaseAmount) {
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
}

export default ResultController;
