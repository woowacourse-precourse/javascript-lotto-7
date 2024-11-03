import { Console } from '@woowacourse/mission-utils';
import LottoGame from './LottoGame.js';
class App {
  async run() {
    const LOTTO_PER_PRICE = 1000;
    const orderPrice = await Console.readLineAsync(
      `구입금액을 입력해 주세요.\n`
    );

    const lottoQuantity = orderPrice / LOTTO_PER_PRICE;

    const lottoGame = new LottoGame(lottoQuantity);

    lottoGame.start()
  }
}

export default App;
