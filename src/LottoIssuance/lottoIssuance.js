import { OUTPUT_MESSAGES } from '../Constant/outPutMessages.js';
import { print } from '../Util/console.js';

class LottoIssuance {
  constructor(lottoPrice) {
    this.lottoPrice = lottoPrice;
  }
  lottoCount() {
    return this.lottoPrice / 1000;
  }
  printLottoBuyMessage() {
    const count = this.lottoCount();
    print(OUTPUT_MESSAGES.lottoBuy(count));
  }
}
export default LottoIssuance;
