import { Console } from '@woowacourse/mission-utils'
import { CONSOLE_MESSAGES } from "./constant.js";
import Lotto from './Lotto.js';
import { Random } from '@woowacourse/mission-utils';

const checkWinning = (boughtLotto, winNumber, bonusNumber) => {
  const answerArray = winNumber.split(',').map(Number).sort((a, b) => a - b);
  const correctArray = [];
  boughtLotto.forEach(lotto => {
    const myLotto = lotto.getNumbers();
    let count = answerArray.filter(item => myLotto.includes(item)).length;
    let bonus = answerArray.filter((item) => item === bonusNumber);
    correctArray.push(count);
  });
  return correctArray.filter(item => item > 2);
}

const countWonLotto = (wonRecord, target) => {
  return wonRecord.filter((record) => record === target).length;
}

const printSingleResult = (match, reward, bonus, count) => {
  if(bonus) Console.print(`${match}개 일치, 보너스 볼 일치 (${reward}) - ${count}개`);
  else Console.print(`${match}개 일치 (${reward}) - ${count}개`);
}

const printWinningResults = (wonRecord) => {
  const results = [
    { match: 3, reward: "5,000원", bonus: false },
    { match: 4, reward: "50,000원", bonus: false },
    { match: 5, reward: "1,500,000원", bonus: false },
    { match: 5, reward: "30,000,000원", bonus: true },
    { match: 6, reward: "2,000,000,000원", bonus: false}
  ]

  Console.print("당첨 통계");
  Console.print("---");

  results.forEach(result => {
    const count = countWonLotto(wonRecord, result.match);
    printSingleResult(result.match, result.reward, result.bonus, count);
  })
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
    const wonRecord = checkWinning(boughtLotto, winNumber, bonusNumber);

    printWinningResults(wonRecord);
  }
}

export default App;
