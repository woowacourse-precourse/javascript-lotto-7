import { Console } from '@woowacourse/mission-utils';
import PurchaseLotto from './PurchaseLotto.js';

class App {
  async run() {
    const userInputMoney =
      await Console.readLineAsync('구입금액을 입력해 주세요.\n');

    const parsedMoney = Number(userInputMoney);

    const purchaseLotto = new PurchaseLotto(parsedMoney);
    const lottoQuantity = purchaseLotto.getQuantity();
  }
}

export default App;
