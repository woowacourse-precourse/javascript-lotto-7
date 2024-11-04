const { Console } = require('@woowacourse/mission-utils');
const { InputValidator, Game } = require('./src/Game');

class App {
  async run() {
    const game = new LottoGame();
    const amount = await this.#getPurchaseAmount();
    const count = await game.purchaseLottos(amount);
    game.printPurchaseResult(count);
    await game.setWinningNumbers();
    game.calculateResults();
    game.printResults();
  }

  async #getPurchaseAmount() {
    const input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    return InputValidator.validatePurchaseAmount(input);
  }
}

module.exports = App;
