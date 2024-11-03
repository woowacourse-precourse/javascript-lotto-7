import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async run() {
    try {
      const purchase = await this.getPurchase();
      const amount = purchase / 1000;
      const tickets = this.generateLotto(amount);

      this.displayTickets(tickets);

      const winningNumbers = await this.getWinningNumbers();
      const bonusNumber = await this.getBonusNumber(winningNumbers);

      const results = this.checkResults(tickets, winningNumbers, bonusNumber);
      this.displayResults(results, purchase);
    } catch (error) {
      if (!error.message.startsWith("[ERROR]")) {
        throw new Error("[ERROR] " + error.message);
      }
      throw error;
    }
  }

  async getPurchase() {
    try {
      const moneyString = await Console.readLineAsync(
        "구입금액을 입력해 주세요.\n"
      );
      const moneyNumber = parseInt(moneyString);
      if (isNaN(moneyNumber) || moneyNumber % 1000 !== 0) {
        throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.");
      }
      return moneyNumber;
    } catch (error) {
      Console.print(error.message);
      return this.getPurchase();
    }

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

  async getWinningNumbers() {
    try {
      const input = await Console.readLineAsync(
        "\n당첨 번호를 입력해 주세요.\n"
      );
      const numbers = input.split(",").map((num) => parseInt(num.trim(), 10));
      const winningNumbers = new Lotto(numbers);

      return winningNumbers;
    } catch (error) {
      Console.print(error.message);
      return this.getWinningNumbers();
    }
  }

  async getBonusNumber(winningNumbers) {
    try {
      const input = await Console.readLineAsync(
        "\n보너스 번호를 입력해 주세요.\n"
      );
      const number = parseInt(input);
      if (input.includes(",") || isNaN(number) || number < 1 || number > 45) {
        throw new Error(
          "보너스 번호는 1부터 45 사이 단 하나의 숫자여야 합니다."
        );
      }
      if (winningNumbers.isIncludingNumber(number)) {
        throw new Error("보너스 번호는 기존 번호와 겹칠 수 없습니다.");
      }
      return number;
    } catch (error) {
      Console.print(error.message);
      return this.getBonusNumber(winningNumbers);
    }
  }

  checkResults(tickets, winningNumbers, bonusNumber) {
    const result = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };

    tickets.forEach((ticket) => {
      const ticketLotto = new Lotto(ticket);
      const matchCount = ticketLotto.matches(winningNumbers.getNumbers());
      const hasBonus = ticketLotto.isIncludingNumber(bonusNumber);

      if (matchCount === 6) result.first++;
      else if (matchCount === 5 && hasBonus) result.second++;
      else if (matchCount === 5) result.third++;
      else if (matchCount === 4) result.fourth++;
      else if (matchCount === 3) result.fifth++;
    });

    return result;
  }

  displayResults(results, purchaseAmount) {
    const prizeMoney = {
      first: 2000000000,
      second: 30000000,
      third: 1500000,
      fourth: 50000,
      fifth: 5000,
    };

    const rankLabels = {
      first: "6개 일치",
      second: "5개 일치, 보너스 볼 일치",
      third: "5개 일치",
      fourth: "4개 일치",
      fifth: "3개 일치",
    };

    Console.print("\n당첨 통계\n---");
    Object.entries(results).forEach(([rank, count]) => {
      const prize = prizeMoney[rank].toLocaleString();
      Console.print(`${rankLabels[rank]} (${prize}원) - ${count}개`);
    });

    const totalProfit = Object.entries(results).reduce(
      (sum, [rank, count]) => sum + prizeMoney[rank] * count,
      0
    );

    const profitRate = ((totalProfit / purchaseAmount) * 100).toFixed(1);
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default App;
