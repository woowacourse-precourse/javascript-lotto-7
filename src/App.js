import LottoGameService from './service/LottoGameService.js';

import { getBonusNumber, getUserMoney, getWinningNumbers } from './views/InputView.js';
import {
  printLottoQuantity, printLottos, printPrizes, printPayoutPercentage,
} from './views/OutputView.js';

class App {
  async run() {
    try {
      const lottoGameService = new LottoGameService();

      const userMoney = await getUserMoney();
      lottoGameService.setLottos(userMoney);
      const lottos = lottoGameService.getLottos();
      printLottoQuantity(lottos);
      printLottos(lottos);
      const winningNumbers = await getWinningNumbers();
      const bonusNumber = await getBonusNumber(winningNumbers);
      lottoGameService.updateLottoPrizes(lottos, winningNumbers, bonusNumber);
      printPrizes(lottoGameService.getPrizes());
      printPayoutPercentage(lottoGameService.getRoundedPayoutPercentage(userMoney));
    } catch (error) {
      return error;
    }
  }
}

export default App;
