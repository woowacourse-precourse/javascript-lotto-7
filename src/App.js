import { Console } from '@woowacourse/mission-utils';
import Game from './game.js';
import InputPrompt from './input/input-prompt.js';
import PurchasedLottos from './lotto/purchased-lottos.js';
import WinningLotto from './lotto/winning-lotto.js';
import InputParser from './input/input-parser.js';
import validatePurchaseAmount from './validation/validate-purchase-amount.js';
import validateBonusNumber from './validation/validate-bonus-number.js';

class App {
  async run() {
    try {
      const purchaseAmountInput = await InputPrompt.getPurchaseAmount();
      const purchaseAmount = InputParser.parsePurchaseAmount(purchaseAmountInput);
      validatePurchaseAmount(purchaseAmount);

      const lottoCount = InputParser.calculateLottoCount(purchaseAmount);
      Console.print(`\n`);
      Console.print(`${lottoCount}개를 구매했습니다.`);

      const purchasedLottos = await PurchasedLottos.generate(lottoCount);
      Console.print(`\n`);

      const winningNumberInput = await InputPrompt.getWinningNumber();
      Console.print(`\n`);
      const winningNumber = InputParser.parseWinningNumber(winningNumberInput);

      const bonusNumberInput = await InputPrompt.getBonusNumber();
      Console.print(`\n`);
      const bonusNumber = InputParser.parseBonusNumber(bonusNumberInput);
      validateBonusNumber(bonusNumber, winningNumber);

      const winningLotto = new WinningLotto(winningNumber, bonusNumber);

      const game = new Game(purchasedLottos, winningLotto);
      game.play();
    } catch (error) {
      Console.print(error.message);
    }
  }
}
export default App;
