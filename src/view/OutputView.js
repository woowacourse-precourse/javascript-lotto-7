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
    lotteries.forEach((lotto) => {
      Console.print(`[${lotto.join(', ')}]`);
    });
    Console.print('');

    return lotteries;
  }

  printResultHeader() {
    Console.print(MESSAGE.RESULT_HEADER);
    Console.print(MESSAGE.RESULT_HEADER_DIVIDER);
  }

  printGameResult(matchCount) {
    Console.print(`${MESSAGE.FIFTH_PRIZE_MESSAGE}${matchCount[0]}개`);
    Console.print(`${MESSAGE.FOURTH_PRIZE_MESSAGE}${matchCount[1]}개`);
    Console.print(`${MESSAGE.THIRD_PRIZE_MESSAGE}${matchCount[2]}개`);
    Console.print(`${MESSAGE.SECOND_PRIZE_MESSAGE}${matchCount[3]}개`);
    Console.print(`${MESSAGE.FIRST_PRIZE_MESSAGE}${matchCount[4]}개`);
  }

  printReturnRate(returnRate) {
    Console.print(`${MESSAGE.RETURN_RATE_PROMPT}${returnRate}%입니다.`);
  }
}

export default OutputView;
