// services/PurchaseService.js
import { createPurchaseAmount } from '../factories/ObjectFactory.js';
import { OutputView } from '../views/OutputView.js';
import uiConstants from '../constants/uiConstants.js';

class PurchaseService {
  async makePurchaseAmount() {
    const purchaseAmount = await createPurchaseAmount();
    const purchaseCnt = purchaseAmount.getPurchaseCnt();
    OutputView(`\n${purchaseCnt}${uiConstants.RANDOM_NUMBER_CNT_MESSAGE}`);
    return { purchaseAmount, purchaseCnt };
  }
}

export default PurchaseService;
