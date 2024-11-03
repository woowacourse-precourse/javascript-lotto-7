import { Console } from '@woowacourse/mission-utils';
import LottoPurchase from './models/LottoPurchase.js';
import LottoGenerator from './utils/LottoGenerator.js';

class App {
  async run() {
    const PRICE = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    const PURCHASE = new LottoPurchase(PRICE.trim());

    const LOTTO_COUNT = PURCHASE.getLottoCount();

    const LOTTO_GENERATOR = new LottoGenerator(LOTTO_COUNT);
    LOTTO_GENERATOR.generateLottoNumbers();
    LOTTO_GENERATOR.printLottoNumbers();
  }
}

export default App;
