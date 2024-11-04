import { Console } from '@woowacourse/mission-utils';
import LottoGame from './controllers/LottoGames.js';

class App {
  constructor() {
    this.lottoGame = new LottoGame();
  }

  async run() {
    await this.askPurchaseAmount();
  }

  async askPurchaseAmount() {
    const amount = await Console.readLineAsync('구입 금액을 입력해 주세요.\n');
    try {
      this.lottoGame.purchaseLottos(parseInt(amount, 10));
      await this.askWinningNumbers();
    } catch (error) {
      Console.print(error.message);
    }
  }

  async askWinningNumbers() {
    const numbers = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    const winningNumbers = numbers.split(',').map(Number);
    await this.askBonusNumber(winningNumbers);
  }

  async askBonusNumber(winningNumbers) {
    const bonus = await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    try {
      const bonusNumber = parseInt(bonus, 10);
      this.lottoGame.setWinningNumbers(winningNumbers, bonusNumber);
      this.lottoGame.checkResults();
      this.lottoGame.printResults();
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
