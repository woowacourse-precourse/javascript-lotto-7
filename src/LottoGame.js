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

  async #getPurchaseAmount() {
    const amount = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    if (!/^\d+$/.test(amount)) {
      throw new Error("[ERROR] 구입 금액은 정수여야 합니다.");
    }
    const parsedAmount = parseInt(amount, 10);

    if (parsedAmount % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1000원 단위여야 합니다.");
    }

    return parsedAmount / 1000;
  }
}
export default LottoGame;
