import Lotto from "./Lotto.js";
import { Console } from "@woowacourse/mission-utils";

class LottoGame {
  #lottoTickets = [];
  #winningNumbers = [];
  #bonusNumber = 0;

  async start() {
    await this.#handlePurchase();
    this.#displayTickets();
    await this.#collectWinningNumbers();
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

  async #collectWinningNumbers() {
    this.#winningNumbers = await this.#getValidatedNumbers("당첨 번호를 입력해 주세요.\n");
    this.#bonusNumber = await this.#getValidatedBonusNumber();
  }

  async #getValidatedNumbers(message) {
    return new Promise(resolve => {
      Console.readLineAsync(message).then(input => {
        const numbers = input.split(",").map(Number);
        if (this.#isValidNumbers(numbers)) {
          resolve(numbers);
        } else {
          Console.print("[ERROR] 잘못된 당첨 번호 입력입니다.");
          resolve(this.#getValidatedNumbers(message));
        }
      });
    });
  }

  #isValidNumbers(numbers) {
    return numbers.length === 6 && numbers.every(num => !isNaN(num) && num >= 1 && num <= 45);
  }

  async #getValidatedBonusNumber() {
    return new Promise(resolve => {
      Console.readLineAsync("보너스 번호를 입력해 주세요.\n").then(input => {
        const bonus = Number(input);
        if (this.#isValidBonusNumber(bonus)) {
          resolve(bonus);
        } else {
          Console.print("[ERROR] 잘못된 보너스 번호입니다.");
          resolve(this.#getValidatedBonusNumber());
        }
      });
    });
  }

  #isValidBonusNumber(bonus) {
    return !isNaN(bonus) && bonus >= 1 && bonus <= 45 && !this.#winningNumbers.includes(bonus);
  }
}

export default LottoGame;
