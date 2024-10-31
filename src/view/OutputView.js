import { Console } from '@woowacourse/mission-utils';
import RandomLotto from '../service/RandomLotto.js';
import MESSAGE from '../utils/constants/message.js';

class OutputView {
  constructor() {
    this.randomLotto = new RandomLotto();
  }

  printLottoQuantity(price) {
    const LottoQuantity = this.randomLotto.checkLottoAmount(price);
    Console.print('');
    Console.print(`${LottoQuantity}${MESSAGE.LOTTO_PURCHASE_MESSAGE}`);
    return LottoQuantity;
  }

  printPurchasedLotteries(quantity) {
    const lotteries = this.randomLotto.createLotto(quantity);
    lotteries.forEach((lotto) => Console.print(lotto));
    Console.print('');

    return lotteries;
  }
}

export default OutputView;
