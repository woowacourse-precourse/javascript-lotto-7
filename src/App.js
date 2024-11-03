import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async run() {
    try {
      const purchase = await this.getPurchase();
      const amount = purchase / 1000;
      const tickets = this.generateLotto(amount);
      Console.print("\n");

      this.displayTickets(tickets);
      Console.print("\n");

      const winningNumbers = await this.getWinningNumbers();
      Console.print("\n");

      const bonusNumber = await this.getBonusNumber();
      Console.print("\n");
    } catch (error) {
      throw new Error("[ERROR] " + error.message);
    }
  }

  async getPurchase() {
    const moneyString = await Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );
    const moneyNumber = parseInt(moneyString);
    if (isNaN(moneyNumber) || moneyNumber % 1000 !== 0) {
      throw new Error("구입 금액은 1,000원 단위로 입력해야 합니다.");
    }
    return moneyNumber;
  }

  generateLotto(count) {
    const tickets = [];
    for (let i = 0; i < count; i++) {
      const ticket = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      );
      tickets.push(ticket);
    }
    return tickets;
  }

  displayTickets(tickets) {
    Console.print(`${tickets.length}개를 구매했습니다.`);
    tickets.forEach((ticket) => Console.print(`[${ticket.join(", ")}]`));
  }

  async getWinningNumbers() {
    try {
      const input = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
      const numbers = input.split(",").map((num) => parseInt(num.trim(), 10));
      const winningNumbers = new Lotto(numbers);

      return winningNumbers;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getBonusNumber() {
    try {
      const input = await Console.readLineAsync(
        "보너스 번호를 입력해 주세요.\n"
      );
      const number = parseInt(input);
      return number;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default App;
