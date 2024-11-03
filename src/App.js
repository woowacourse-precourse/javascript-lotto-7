import { Console } from '@woowacourse/mission-utils'
import LottoGame from "./LottoGame.js";
import InputHandler from "./InputHandler.js";

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

  const profitRate = lottoGame.calculateProfit(userLotto);
  resultMessages.push(`총 수익률은 ${profitRate}%입니다.`)

  return resultMessages.forEach(Console.print);
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

    const wonRecord = lottoGame.checkWinning(userLotto);
    printWinningResults(lottoGame, userLotto, wonRecord);
  }
}

export default App;
