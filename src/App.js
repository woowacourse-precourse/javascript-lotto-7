import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import { INPUT_MESSAGE, LOTTO_PRICE } from './constants/constants.js';

function purchaseLotto(price) {
  const amountOfLotto = price / LOTTO_PRICE;
  return amountOfLotto;
}

class App {
  async run() {
    const amount = await Console.readLineAsync(
      INPUT_MESSAGE.INPUT_AMOUNT_MESSAGE
    );
    const amountOfLotto = purchaseLotto(amount);
    Console.print(`${amountOfLotto}개를 구매했습니다.`);

    const lottos = [];
    for (let i = 0; i < amountOfLotto; i += 1) {
      const lotto = new Lotto();
      lottos.push(lotto.getNumbers());
      Console.print(lottos[i]);
    }
  }
}

export default App;
