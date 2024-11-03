import { Console } from '@woowacourse/mission-utils'
import LottoGame from "./LottoGame.js";
import InputHandler from "./InputHandler.js";

const checkWinning = (myLotto, winNumbers, bonusNumber) => {
  const answerArray = winNumbers.map(Number).sort((a, b) => a - b);
  const correctArray = [];
  myLotto.forEach(lotto => {
    const myLottoNumbers = lotto.getNumbers();
    let count = answerArray.filter(item => myLottoNumbers.includes(item)).length;
    const hasBonus = myLottoNumbers.includes(bonusNumber);

    if (count === 5 && hasBonus) {
      correctArray.push('5+bonus');
    }
    correctArray.push(count);
  });
  return correctArray.filter(item => item === '5+bonus' || item > 2);
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
    { match: '5+bonus', reward: "30,000,000원", bonus: true },
    { match: 6, reward: "2,000,000,000원", bonus: false}
  ]

  Console.print("당첨 통계");
  Console.print("---");

  results.forEach(result => {
    const count = countWonLotto(wonRecord, result.match);
    printSingleResult(result.match, result.reward, result.bonus, count);
  });
};


class App {
  async run() {
    const lottoGame = new LottoGame();

    const purchasePrice = await InputHandler.getPurchasePrice();
    lottoGame.setPurchasePrice(purchasePrice);

    Console.print(`${lottoGame.calculateLottoCount()}개를 구매했습니다.`);

    const userLotto = lottoGame.generateLotto();
    userLotto.forEach((lotto) => Console.print(lotto.toString()));

    const winNumbers = await InputHandler.getWinNumbers();
    lottoGame.setWinNumbers(winNumbers);

    const bonusNumber = await InputHandler.getBonusNumber();
    lottoGame.setBonusNumber(bonusNumber);

    const wonRecord = checkWinning(userLotto, winNumber, bonusNumber);
    console.log(wonRecord);

    printWinningResults(wonRecord);
  }
}

export default App;
