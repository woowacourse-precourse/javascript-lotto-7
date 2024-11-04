import { Console } from '@woowacourse/mission-utils';
import { getResultMessages } from './resultMessages.js';
import { CONSOLE_MESSAGES, PRINT_PROFIT } from "./constants/message.js";
import LottoGame from "./LottoGame.js";
import InputHandler from "./InputHandler.js";

const printWinningResults = (lottoGame, userLotto, winningResults) => {
  const resultMessages = getResultMessages(winningResults);
  Console.print(CONSOLE_MESSAGES.empty_line);
  Console.print(CONSOLE_MESSAGES.winningTotal);
  Console.print(CONSOLE_MESSAGES.separator);

  const profitRate = lottoGame.calculateProfit(userLotto);
  resultMessages.push(PRINT_PROFIT(profitRate));

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
