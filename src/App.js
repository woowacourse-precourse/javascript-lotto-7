import { Console } from '@woowacourse/mission-utils'
import LottoGame from "./LottoGame.js";
import InputHandler from "./InputHandler.js";

const countWonLotto = (wonRecord, target) => {
  return wonRecord.filter((record) => record === target).length;
}

const printSingleResult = (match, reward, bonus, count) => {
  if(bonus) return Console.print(`${match}개 일치, 보너스 볼 일치 (${reward}) - ${count}개`);
  return Console.print(`${match}개 일치 (${reward}) - ${count}개`);
}

const printWinningResults = (lottoGame, userLotto, winningResults) => {
  const resultMessages = [
    `3개 일치 (5,000원) - ${winningResults[3]}개`,
    `4개 일치 (50,000원) - ${winningResults[4]}개`,
    `5개 일치 (1,500,000원) - ${winningResults[5]}개`,
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningResults['5+bonus']}개`,
    `6개 일치 (2,000,000,000원) - ${winningResults[6]}개`
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

    printWinningResults(wonRecord);
  }
}

export default App;
