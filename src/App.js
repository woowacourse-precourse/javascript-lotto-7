import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import {
  INPUT_MESSAGE,
  LOTTO_PRICE,
  LOTTO_MESSAGE,
  howManyCorrectResult,
  THREE_PRICE,
  FOUR_PRICE,
  FIVE_PRICE,
  SIX_PRICE,
} from './constants/constants.js';
import { getWinningNumbers } from './lottoHelper/winningNumbers.js';

function purchaseLotto(price) {
  const amountOfLotto = price / LOTTO_PRICE;
  return amountOfLotto;
}

function howManyCorrectNumbers(lottoNumbers, winningNumbers) {
  let threeCorrectCount = 0;
  let fourCorrectCount = 0;
  let fiveCorrectCount = 0;
  let sixCorrectCount = 0;
  lottoNumbers.forEach((lottoNumber) => {
    let count = 0;
    winningNumbers.forEach((number) => {
      if (lottoNumber.includes(number)) {
        count += 1;
      }
    });
    if (count === 3) {
      threeCorrectCount += 1;
    } else if (count === 4) {
      fourCorrectCount += 1;
    } else if (count === 5) {
      fiveCorrectCount += 1;
    } else if (count === 6) {
      sixCorrectCount += 1;
    }
  });
  howManyCorrectResult(3, THREE_PRICE, threeCorrectCount);
  howManyCorrectResult(4, FOUR_PRICE, fourCorrectCount);
  howManyCorrectResult(5, FIVE_PRICE, fiveCorrectCount);
  howManyCorrectResult(6, SIX_PRICE, sixCorrectCount);
}

class App {
  async run() {
    const amount = await Console.readLineAsync(
      INPUT_MESSAGE.INPUT_AMOUNT_MESSAGE,
    );
    const amountOfLotto = purchaseLotto(amount);
    Console.print(`\n${amountOfLotto}개를 구매했습니다.`);

    const lottos = [];
    for (let i = 0; i < amountOfLotto; i += 1) {
      const lotto = new Lotto();
      lotto.sortLottoNumbers();
      lottos.push(lotto.getNumbers());
      Console.print(lottos[i]);
    }
    const winningNumbers = await getWinningNumbers();
    Console.print(LOTTO_MESSAGE.LOTTO_RESULT_MESSAGE);
    howManyCorrectNumbers(lottos, winningNumbers);
  }
}

export default App;
