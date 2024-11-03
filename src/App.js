import { Console } from '@woowacourse/mission-utils';
import Game from './game.js';
import InputPrompt from './input/input-prompt.js';
import PurchasedLottos from './purchased-lottos.js';
import WinningLotto from './winning-lotto.js';
import InputParser from './input/input-parser.js';
import validatePurchaseAmount from './validation/validate-purchase-amount.js';

class App {
  async run() {
    try {
      const purchaseAmountInput = await InputPrompt.getPurchaseAmount();

      const purchaseAmount = InputParser.parsePurchaseAmount(purchaseAmountInput);

      validatePurchaseAmount(purchaseAmount);

      Console.print(`\n`);
      Console.print(`${lottoCount}개를 구매했습니다.`);

      const purchasedLottos = new PurchasedLottos();
      await purchasedLottos.generateLottos(lottoCount);
      Console.print(`\n`);

      const winningNumberInput = await InputPrompt.getWinningNumber();
      Console.print(`\n`);
      const winningNumbers = winningNumberInput
        .trim()
        .split(',')
        .map((number) => parseInt(number, 10));

      const bonusNumberInput = await InputPrompt.getBonusNumber();
      Console.print(`\n`);
      const bonusNumber = parseInt(bonusNumberInput, 10);

      const winningLotto = new WinningLotto(winningNumbers, bonusNumber);
      const game = new Game(purchasedLottos, winningLotto);
      game.play();
    } catch (error) {
      Console.print(error.message);
    }
  }
}
export default App;
