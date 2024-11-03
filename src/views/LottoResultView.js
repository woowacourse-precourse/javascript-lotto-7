//@ts-check

import { outputView } from './outputView.js';
import {
  GAME_MESSAGE,
  getMessagesByStatistics,
} from '../constants/gameMessage.js';
import Lotto from '../Lotto.js';

class LottoResultView {
  /**
   * @param {number} count
   * @param {Lotto[]} lottos
   * @returns {void}
   */
  printPurchaseResult(count, lottos) {
    outputView.printMessage(`${count}${GAME_MESSAGE.BOUGHT}`);
    this.printLottos(lottos);
  }

  /**@param {Lotto[]} lottos  */
  printLottos(lottos) {
    lottos.forEach((lotto) => {
      outputView.printMessage(`[${lotto.getNumbers().join(', ')}]`);
    });
  }

  /**@param {{ 3: number, 4: number, 5: number, BONUS: number, 6: number }} results*/
  printResults(results) {
    outputView.printMessage(GAME_MESSAGE.WINNING_STATISTICS);
    outputView.printMessage(GAME_MESSAGE.DIVIDING_LINE);

    const ranks = [3, 4, 5, 'BONUS', 6];
    ranks.forEach((rank) => {
      const message = getMessagesByStatistics(rank, results[rank]);
      outputView.printMessage(message);
    });
  }

  /**@param {string} rate  */
  printEarningRate(rate) {
    outputView.printMessage(`총 수익률은 ${rate}%입니다.`);
  }
}

export default LottoResultView;
