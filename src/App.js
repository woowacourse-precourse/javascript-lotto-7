import { Console } from '@woowacourse/mission-utils'
import { CONSOLE_MESSAGES } from "./constant.js";
import Lotto from './Lotto.js';
import { Random } from '@woowacourse/mission-utils';

const checkWinning = (boughtLotto, winNumber) => {
  const answerArray = winNumber.split(',').map(Number).sort((a, b) => a - b);
  const correctArray = [];
  boughtLotto.forEach(lotto => {
    const myLotto = lotto.getNumbers();
    let count = answerArray.filter(item =>
      myLotto.includes(item)).length;
      correctArray.push(count);
  });
  return correctArray.filter(item => item > 2);
}

const countWonLotto = (wonRecord, target) => {
  return wonRecord.filter((record) => record === target).length;
}

const buyLottos = (lottoCount) => {
  const boughtLotto = [];
  for(let i = 0; i < lottoCount; i++) {
    const lotto = new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6));
    boughtLotto.push(lotto);
  }
  return boughtLotto;
}

class App {
  async run() {
    const purchasePrice = await Console.readLineAsync(CONSOLE_MESSAGES.buyPrice);
    const LOTTO_PRICE = 1000;
    const divideInto1000 = purchasePrice % LOTTO_PRICE;
    const lottoCount = purchasePrice / LOTTO_PRICE;

    if ((divideInto1000) !== 0) {
      throw new Error('[ERROR]');
    }

    Console.print(`${lottoCount}개를 구매했습니다.`);

    const boughtLotto = buyLottos(lottoCount);
    boughtLotto.forEach((lotto) => Console.print(lotto.toString()));

    const winNumber = await Console.readLineAsync(CONSOLE_MESSAGES.winNumber);
    const bonusNumber = await Console.readLineAsync(CONSOLE_MESSAGES.bonusNumber);
    const wonRecord = checkWinning(boughtLotto, winNumber);
    Console.print(`3개 일치 (5,000원) - ${countWonLotto(wonRecord, 3)}개`);
    Console.print(`4개 일치 (50,000원) - ${countWonLotto(wonRecord, 4)}개`);
    Console.print(`5개 일치 (1,500,000원) - ${countWonLotto(wonRecord, 5)}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${countWonLotto(wonRecord, 5)}`);
    Console.print(`6개 일치 (2,000,000,000원) - ${countWonLotto(wonRecord, 6)}개`);
    Console.print('총 수익률은');
  }
}

export default App;
