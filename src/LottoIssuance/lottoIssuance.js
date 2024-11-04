import { OUTPUT_MESSAGES } from '../Constant/outPutMessages.js';
import { print, pickUniqueNumbersInRange } from '../Util/console.js';
import { ERROR_MESSAGES } from '../Constant/error.js';
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
    if (isNaN(count)) {
      print(ERROR_MESSAGES.IS_DIVIDE_BY_ZER);
    } else {
      print(OUTPUT_MESSAGES.lottoBuy(count));
    }
  }
  printLottoNumber() {
    const count = this.lottoCount();
    for (let i = 0; i < count; i++) {
      const lottoNumber = pickUniqueNumbersInRange(count);
      lottoNumber.sort((a, b) => a - b);
      this.lottoNumberArray.push(lottoNumber);
    }
    this.lottoNumberArray.forEach((numbers) => {
      print(`[${numbers.join(', ')}]`);
    });
  }
  getLottoNumbers() {
    return this.lottoNumberArray;
  }
}
export default LottoIssuance;
