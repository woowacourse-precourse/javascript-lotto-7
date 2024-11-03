import { OUTPUT_MESSAGES } from '../Constant/outPutMessages.js';
import { print, pickUniqueNumbersInRange } from '../Util/console.js';

class LottoIssuance {
  constructor(lottoPrice) {
    this.lottoPrice = lottoPrice;
    this.lottoNumberArray = [];
  }
  lottoCount() {
    return this.lottoPrice / 1000;
  }
  printLottoBuyMessage() {
    const count = this.lottoCount();
    print(OUTPUT_MESSAGES.lottoBuy(count));
  }
  printLottoNumber() {
    const count = this.lottoCount();
    for (let i = 0; i < count; i++) {
      const lottoNumber = pickUniqueNumbersInRange(count);
      lottoNumber.sort((a, b) => a - b);
      this.lottoNumberArray.push(lottoNumber);
    }
    print(this.lottoNumberArray);
  }
  getLottoNumbers() {
    return this.lottoNumberArray;
  }
}
export default LottoIssuance;
