// App.js
import { Console } from '@woowacourse/mission-utils';
import InputValidator from './InputValidator.js';
import Game from './Game.js';

class App {
  async run() {
    const game = new Game();

    try {
      const amount = await this.#getPurchaseAmount();
      const count = await game.purchaseLottos(amount);
      game.printPurchaseResult(count);
      await game.setWinningNumbers();
      game.calculateResults();
      game.printResults();
    } catch (error) {
      Console.print(error.message);
    }
  }

  async #getPurchaseAmount() {
    try {
      const input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
      return InputValidator.validatePurchaseAmount(input);
    } catch (error) {
      throw error;
    }
  }
}

export default App;
