import { Console } from '@woowacourse/mission-utils';
import { getResultMessages } from './resultMessages.js';
import LottoGame from "./LottoGame.js";
import InputHandler from "./InputHandler.js";

const printWinningResults = (lottoGame, userLotto, winningResults) => {
  const resultMessages = getResultMessages(winningResults);
  Console.print('');
  Console.print('당첨 통계');
  Console.print('---');

  const profitRate = lottoGame.calculateProfit(userLotto);
  resultMessages.push(`총 수익률은 ${profitRate}%입니다.`)

  resultMessages.forEach((message) => Console.print(message));
};


class App {
  async run() {
    try {
      const lottoGame = new LottoGame();

      const purchasePrice = await InputHandler.getPurchasePrice();
      lottoGame.buyLotto(purchasePrice);

      const userLotto = lottoGame.generateLotto();
      userLotto.forEach((lotto) => Console.print(lotto.toString()));

      const winNumbers = await InputHandler.getWinNumbers();
      lottoGame.setWinNumbers(winNumbers);

      const bonusNumber = await InputHandler.getBonusNumber();
      lottoGame.setBonusNumber(bonusNumber);

      const wonRecord = lottoGame.checkWinning(userLotto);
      printWinningResults(lottoGame, userLotto, wonRecord);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
