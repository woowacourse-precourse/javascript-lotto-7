import { MissionUtils } from '@woowacourse/mission-utils';
import PriceValidator from '../utils/validators/PriceValidator.js';
import Lotto from '../Lotto.js';

class RandomLotto {
  constructor() {
    this.priceValidator = new PriceValidator();
  }

  checkPurchasePrice(price) {
    const checkPrice = Number(price);
    this.priceValidator.allRunPriceValidator(checkPrice);
    return checkPrice;
  }

  checkLottoAmount(price) {
    const LottoQuantity = price / 1000;
    return LottoQuantity;
  }

  createLottoNumber() {
    let oneLotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    oneLotto.sort((a, b) => a - b);

    const lottoInstance = new Lotto(oneLotto);
    return lottoInstance.getNumbers();
  }

  createLotto(quantity) {
    let lotteries = [];
    for (let count = 0; count < quantity; count++) {
      let oneLotto = this.createLottoNumber();
      lotteries.push(oneLotto);
    }
    return lotteries;
  }
}
export default RandomLotto;
