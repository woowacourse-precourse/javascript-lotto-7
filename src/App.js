import { Console } from '@woowacourse/mission-utils';
import Lotto from './models/Lotto.js';
import PurchaseAmountGenerator from './models/PurchaseAmountGenerator.js';
import BonusNumber from './models/BonusNumber.js';
import LottoTicketGenerator from './output/LottoTicketGenerator.js';
import LottoResults from './output/LottoResults.js';

class App {
  async run() {
    try {
      const money = await PurchaseAmountGenerator.getPurchaseAmount();
      const LottoList = LottoTicketGenerator.generateLottoTickets(money);

      const winnigNumber = await Lotto.createLottoWithInput();

      const bonusNumber = await BonusNumber.createBonusNumber(winnigNumber);

      const winnigList = new LottoResults();
      winnigList.checkWinningNumbers(
        LottoList,
        winnigNumber,
        bonusNumber,
        money,
      );
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
