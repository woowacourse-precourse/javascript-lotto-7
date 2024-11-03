import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const purchase = await this.getPurchase();
      const amount = purchase / 1000;
      const tickets = this.generateLotto(amount)

      this.displayTickets(tickets)
    } catch (error) {
      throw new Error("[ERROR]" + error.message);
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
    Console.print(`\n${tickets.length}개를 구매했습니다.`);
    tickets.forEach((ticket) => Console.print(`[${ticket.join(", ")}]`));
  }
}

export default App;
