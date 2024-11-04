import { Console } from '@woowacourse/mission-utils';
import { inputAmount, inputBonusNumber, inputWinningLotto } from './utils/inputService.js';
import { outputPayment, printLottos, printResult } from './utils/outputService.js';
import { buyLottos } from './utils/buyLottos.js';

class App {
  async run() {
    try {
      const amount = await inputAmount();
      Console.print('');
      outputPayment(amount);

      const lottoCount = amount / 1000;
      const lottos = buyLottos(lottoCount);
      printLottos(lottos);

      const winningNumbers = await inputWinningLotto();
      Console.print('');

      const bonusNumber = await inputBonusNumber();
      Console.print('');

      Console.print(`당첨 통계\n---`);
      printResult(lottos, winningNumbers, bonusNumber);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
