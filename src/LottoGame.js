import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import LottoGenerator from "./LottoGenerator.js";

class LottoGame {
  constructor() {
    this.tickets = [];
    this.winningNumbers = [];
    this.bonusNumber = null;
  }

  async start() {
    while (true) {
      try {
        const purchaseAmount = await this.#getPurchaseAmount();
        this.#generateLottos(purchaseAmount);

        await this.#getWinningNumbers();
        await this.#getBonusNumber();

        this.#printLottoTickets();
        this.#printResults();
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}

export default LottoGame;
