import { Console } from '@woowacourse/mission-utils';
import LottoGame from './LottoGame.js';
class App {
  async run() {
    const LOTTO_PER_PRICE = 1000;
    const orderPrice = await Console.readLineAsync(
      '구입금액을 입력해 주세요.\n'
    );

    if (isNaN(orderPrice)) {
      throw new Error('[ERROR] 구입 금액은 숫자여야 합니다.');
    }

    if (orderPrice % LOTTO_PER_PRICE !== 0) {
      throw new Error('[ERROR] 구입 금액은 구입 금액은 1,000원 단위여야 합니다.');
    }

    const lottoQuantity = orderPrice / LOTTO_PER_PRICE;

    const lottoGame = new LottoGame(lottoQuantity);

    lottoGame.start();
  }
}

export default App;
