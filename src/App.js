import { getPurchaseAmount, getWinningNumbers, getBonusNumber } from './io/getInput.js';
import { printResult, printRate } from './io/printResult.js';
import LottoResult from './Lotto_modules/LottoResult.js';
import purchaseLottos from './Lotto_modules/purchaseLottos.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const purchaseAmount = await getPurchaseAmount();
      const lottos = purchaseLottos(purchaseAmount);
      const winningNumbers = await getWinningNumbers();
      const bonusNumber = await getBonusNumber(winningNumbers);
      const result = LottoResult.calculate(lottos, winningNumbers, bonusNumber);

      printResult(result);
      printRate(result, purchaseAmount);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
