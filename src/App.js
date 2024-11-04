import { printMessage, printLottoList } from './utils/console.js';
import getPurchaseAmount from './utils/get-parchase-amount.js';
import generateLottoList from './utils/generate-lotto.js';

class App {
  async run() {
    const purchaseAmount = await getPurchaseAmount();

    const lottos = generateLottoList(purchaseAmount);

    printLottoList(lottos);
  }
}

export default App;
