import PurchaseLotto from './PurchaseLotto.js';
import { validatePurchaseMoney } from './validators/validatePurchaseMoney.js';
import { parsePurchaseMoney } from './utils/Parser.js';
import { promptUserInput } from './utils/Prompt.js';

class App {
  async run() {
    const purchaseMoney = await promptUserInput(
      '구입금액을 입력해 주세요.\n',
      parsePurchaseMoney,
      validatePurchaseMoney,
    );

    const purchaseLotto = new PurchaseLotto(purchaseMoney);
    const lottoQuantity = purchaseLotto.getQuantity();
  }
}

export default App;
