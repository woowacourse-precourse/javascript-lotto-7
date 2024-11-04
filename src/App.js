import { Console } from '@woowacourse/mission-utils';
import LottoMachine from './LottoMachine.js';

class App {
  async run() {
    const lottoMachine = new LottoMachine();

    const purchaseAmount = await lottoMachine.readPurchaseAmount();
    const purchasedLottos = lottoMachine.purchaseLottos(purchaseAmount);

    Console.print(purchaseAmount, purchasedLottos);
  }
}

export default App;
