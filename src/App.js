import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import LottoGame from "./LottoGame.js";
import { validatePurchaseAmount } from "./utils.js";

class App {
  async run() {
    await this.#getPurchaseAmount();
  }

  async #getPurchaseAmount() {
    const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    validatePurchaseAmount(input);
    const amount = parseInt(input, 10);
    const game = new LottoGame(amount);
    await this.#playGame(game);
  }

  async #playGame(game) {
    game.purchaseTickets();
    game.printPurchasedTickets();
    await this.#getWinningNumbers(game);
  }

  async #getWinningNumbers(game) {
    const input = await Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
    const winningNumbers = Lotto.parseNumbers(input);
    await this.#getBonusNumber(game, winningNumbers);
  }

  async #getBonusNumber(game, winningNumbers) {
    const input = await Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n"
    );
    const bonusNumber = parseInt(input.trim(), 10);
    Lotto.validateBonusNumber(bonusNumber, winningNumbers);

    game.setWinningNumbers(winningNumbers, bonusNumber);
    game.calculateResults();
    game.printResults();
  }
}

export default App;
