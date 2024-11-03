import Lotto from "./Lotto.js";
import { Console } from "@woowacourse/mission-utils";

class LottoGame {
  #lottoTickets = [];

  async start() {
    await this.#handlePurchase();
    this.#displayTickets();
  }

  async #handlePurchase() {
    const amount = await this.#getValidatedAmount();
    this.#generateTickets(amount / 1000);
  }

  async #getValidatedAmount() {
    return new Promise(resolve => {
      Console.readLineAsync("구입금액을 입력해 주세요.\n").then(input => {
        const amount = Number(input);
        if (this.#isValidAmount(amount)) {
          resolve(amount);
        } else {
          Console.print("[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.");
          resolve(this.#getValidatedAmount());
        }
      });
    });
  }

  #isValidAmount(amount) {
    return !isNaN(amount) && amount % 1000 === 0;
  }

  #generateTickets(count) {
    for (let i = 0; i < count; i++) {
      this.#lottoTickets.push(Lotto.generate());
    }
  }

  #displayTickets() {
    Console.print(`${this.#lottoTickets.length}개를 구매했습니다.`);
    this.#lottoTickets.forEach(ticket => Console.print(`[${ticket.getNumbers().join(", ")}]`));
  }
}

export default LottoGame;
