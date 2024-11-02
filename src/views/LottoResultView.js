import { outputView } from './outputView.js';
import {
  GAME_MESSAGE,
  getMessagesByStatistics,
} from '../constants/gameMessage.js';

class LottoResultView {
  printPurchaseResult(count, lottos) {
    outputView.printMessage(`${count}${GAME_MESSAGE.BOUGHT}`);
    this.printLottos(lottos);
  }

  printLottos(lottos) {
    lottos.forEach((lotto) => {
      outputView.printMessage(`[${lotto.getNumbers().join(', ')}]`);
    });
  }

  printResults(results) {
    outputView.printMessage(GAME_MESSAGE.WINNING_STATISTICS);
    outputView.printMessage(GAME_MESSAGE.DIVIDING_LINE);

    const ranks = [3, 4, 5, 'BONUS', 6];
    ranks.forEach((rank) => {
      const message = getMessagesByStatistics(rank, results[rank]);
      outputView.printMessage(message);
    });
  }

  printEarningRate(rate) {
    outputView.printMessage(`총 수익률은 ${rate}%입니다.`);
  }
}

export default LottoResultView;
