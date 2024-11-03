import { Console } from '@woowacourse/mission-utils'
import { CONSOLE_MESSAGES } from "./constant.js";
import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import LottoGame from "./LottoGame.js";

const checkWinning = (myLotto, winNumber, bonusNumber) => {
  const answerArray = winNumber.split(',').map(Number).sort((a, b) => a - b);
  const correctArray = [];
  myLotto.forEach(lotto => {
    const myLottoNumbers = lotto.getNumbers();
    let count = answerArray.filter(item => myLottoNumbers.includes(item)).length;
    let bonus = answerArray.filter((item) => {
      if (item === bonusNumber) {
        correctArray.push("");
      }
    });
    correctArray.push(count);
  });
  return correctArray.filter(item => item > 2);
}

const countWonLotto = (wonRecord, target) => {
  return wonRecord.filter((record) => record === target).length;
}

const printSingleResult = (match, reward, bonus, count) => {
  if(bonus) return Console.print(`${match}개 일치, 보너스 볼 일치 (${reward}) - ${count}개`);
  return Console.print(`${match}개 일치 (${reward}) - ${count}개`);
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
    const lottoGame = new LottoGame();
    const myLotto = lottoGame.generateLotto(lottoCount);
    myLotto.forEach((lotto) => Console.print(lotto.toString()));

    const winNumber = await Console.readLineAsync(CONSOLE_MESSAGES.winNumber);
    const bonusNumber = await Console.readLineAsync(CONSOLE_MESSAGES.bonusNumber);
    const wonRecord = checkWinning(myLotto, winNumber, bonusNumber);

    printWinningResults(wonRecord);
  }
}

export default App;
