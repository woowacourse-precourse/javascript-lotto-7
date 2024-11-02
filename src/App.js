import Lotto from "./Lotto.js";
import readline from "readline";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.lottoTickets = [];
  }

  run() {
    this.askPurchaseAmount();
  }

  askPurchaseAmount() {
    this.rl.question("구매할 금액을 입력하세요(1000의 배수): ", (amount) => {
      const parsedAmount = parseInt(amount, 10);
      if (this.isInvalidAmount(parsedAmount)) {
        MissionUtils.Console.print("[ERROR] 구매 금액은 1000의 배수여야 합니다.");
        return this.askPurchaseAmount();
      }
      this.handlePurchase(parsedAmount);
    });
  }

  isInvalidAmount(amount) {
    return isNaN(amount) || amount <= 0 || amount % 1000 !== 0;
  }

  handlePurchase(amount) {
    try {
      this.lottoTickets = this.purchaseTickets(amount);
      this.printTickets();
      this.askWinningNumbers();
    } catch (error) {
      MissionUtils.Console.print(error.message);
      this.askPurchaseAmount();
    }
  }

  purchaseTickets(amount) {
    const ticketCount = amount / 1000;
    const tickets = [];
    for (let i = 0; i < ticketCount; i++) {
      tickets.push(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b));
    }
    return tickets;
  }

  printTickets() {
    MissionUtils.Console.print(`${this.lottoTickets.length}개를 구매했습니다.`);
    this.lottoTickets.forEach((ticket) => {
      MissionUtils.Console.print(`[${ticket.join(", ")}]`);
    });
  }

  askWinningNumbers() {
    this.rl.question("당첨 번호를 입력하세요 (콤마로 구분): ", (numbers) => {
      const winningNumbers = numbers.split(",").map(Number);
      if (this.isInvalidWinningNumbers(winningNumbers)) {
        MissionUtils.Console.print("[ERROR] 당첨번호는 1에서 45 사이의 중복되지 않는 숫자여야 합니다.");
        return this.askWinningNumbers();
      }
      this.askBonusNumber(winningNumbers);
    });
  }

  isInvalidWinningNumbers(numbers) {
    return (
      numbers.length !== 6 ||
      new Set(numbers).size !== 6 ||
      numbers.some((num) => isNaN(num) || num < 1 || num > 45)
    );
  }

  askBonusNumber(winningNumbers) {
    this.rl.question("보너스 번호를 입력하세요: ", (bonus) => {
      const parsedBonus = parseInt(bonus, 10);
      if (this.isInvalidBonusNumber(parsedBonus, winningNumbers)) {
        MissionUtils.Console.print("[ERROR] 보너스 번호는 당첨 번호가 아닌 1에서 45 사이의 숫자여야 합니다.");
        return this.askBonusNumber(winningNumbers);
      }
      this.showResults(winningNumbers, parsedBonus);
      this.rl.close();
    });
  }

  isInvalidBonusNumber(bonus, winningNumbers) {
    return isNaN(bonus) || bonus < 1 || bonus > 45 || winningNumbers.includes(bonus);
  }

  showResults(winningNumbers, bonusNumber) {
    const results = this.calculateResults(winningNumbers, bonusNumber);
    MissionUtils.Console.print("당첨 통계");
    MissionUtils.Console.print("---");
    MissionUtils.Console.print(
      `3개 일치 (5,000원) - ${results.fifth}개\n4개 일치 (50,000원) - ${results.fourth}개\n5개 일치 (1,500,000원) - ${results.third}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${results.second}개\n6개 일치 (2,000,000,000원) - ${results.first}개`
    );
    const profitRate = this.calculateProfitRate(results);
    MissionUtils.Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }

  calculateResults(winningNumbers, bonusNumber) {
    const results = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
    this.lottoTickets.forEach((ticket) => {
      const matchCount = ticket.filter((num) => winningNumbers.includes(num)).length;
      const isBonusMatch = ticket.includes(bonusNumber);
      if (matchCount === 6) results.first++;
      else if (matchCount === 5 && isBonusMatch) results.second++;
      else if (matchCount === 5) results.third++;
      else if (matchCount === 4) results.fourth++;
      else if (matchCount === 3) results.fifth++;
    });
    return results;
  }

  calculateProfitRate(results) {
    const prizeMoney = {
      first: 2000000000,
      second: 30000000,
      third: 1500000,
      fourth: 50000,
      fifth: 5000,
    };
    const totalWinnings = Object.entries(results).reduce((sum, [key, count]) => {
      return sum + count * prizeMoney[key];
    }, 0);
    const purchaseAmount = this.lottoTickets.length * 1000;
    return ((totalWinnings / purchaseAmount) * 100).toFixed(1);
  }
}

export default App;
