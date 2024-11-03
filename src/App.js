import { Console } from '@woowacourse/mission-utils'
import { LOTTO_PRICE } from "./constant.js";
import LottoGame from "./LottoGame.js";
import InputHandler from "./InputHandler.js";

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

function calculateLottoCount(purchasePrice) {
  return purchasePrice / LOTTO_PRICE;
}

class App {
  async run() {
    const purchasePrice = await InputHandler.getPurchasePrice();
    const NUMBER_OF_LOTTO = calculateLottoCount(purchasePrice);

    Console.print(`${NUMBER_OF_LOTTO}개를 구매했습니다.`);

    const lottoGame = new LottoGame();
    const myLotto = lottoGame.generateLotto(NUMBER_OF_LOTTO);
    myLotto.forEach((lotto) => Console.print(lotto.toString()));


    const { winNumber, bonusNumber } = await InputHandler.getWinningNumbers();

    const wonRecord = checkWinning(myLotto, winNumber, bonusNumber);

    printWinningResults(wonRecord);
  }
}

export default App;
