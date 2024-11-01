import Lotto from "./Lotto.js";
import readline from "readline";

class App {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.lotto = new Lotto();
    this.lottoTickets = [];
  }

  run() {
    this.askPurchaseAmount();
  }

  askPurchaseAmount() {
    this.rl.question("Enter purchase amount: ", (amount) => {
      this.handlePurchaseAmount(amount);
    });
  }

  handlePurchaseAmount(amount) {
    const parsedAmount = parseInt(amount, 10);
    if (this.isInvalidAmount(parsedAmount)) {
      console.log("[ERROR] The purchase amount must be a positive multiple of 1,000.");
      return this.askPurchaseAmount();
    }
    this.handlePurchase(parsedAmount);
  }

  isInvalidAmount(amount) {
    return isNaN(amount) || amount <= 0 || amount % 1000 !== 0;
  }

  handlePurchase(amount) {
    try {
      this.lottoTickets = this.lotto.purchaseTickets(amount);
      this.printTickets();
      this.askWinningNumbers();
    } catch (error) {
      console.log(error.message);
      this.askPurchaseAmount();
    }
  }

  printTickets() {
    console.log(`${this.lottoTickets.length} tickets purchased:`);
    this.lottoTickets.forEach((ticket, index) => {
      console.log(`Ticket ${index + 1}:`, ticket);
    });
  }

  askWinningNumbers() {
    this.rl.question("Enter winning numbers (comma-separated): ", (numbers) => {
      this.handleWinningNumbers(numbers);
    });
  }

  handleWinningNumbers(numbers) {
    const winningNumbers = numbers.split(",").map(Number);
    if (this.isInvalidWinningNumbers(winningNumbers)) {
      console.log("[ERROR] Winning numbers must be 6 unique numbers between 1 and 45.");
      return this.askWinningNumbers();
    }
    this.askBonusNumber(winningNumbers);
  }

  isInvalidWinningNumbers(numbers) {
    return (
      numbers.length !== 6 ||
      new Set(numbers).size !== 6 ||
      numbers.some((num) => isNaN(num) || num < 1 || num > 45)
    );
  }

  askBonusNumber(winningNumbers) {
    this.rl.question("Enter bonus number: ", (bonus) => {
      this.handleBonusNumber(bonus, winningNumbers);
    });
  }

  handleBonusNumber(bonus, winningNumbers) {
    const parsedBonus = parseInt(bonus, 10);
    if (this.isInvalidBonusNumber(parsedBonus, winningNumbers)) {
      console.log("[ERROR] Bonus number must be a unique number between 1 and 45, not in the winning numbers.");
      return this.askBonusNumber(winningNumbers);
    }
    this.showResults(winningNumbers, parsedBonus);
  }

  isInvalidBonusNumber(bonus, winningNumbers) {
    return isNaN(bonus) || bonus < 1 || bonus > 45 || winningNumbers.includes(bonus);
  }

  showResults(winningNumbers, bonusNumber) {
    const results = this.calculateResults(winningNumbers, bonusNumber);
    console.log("Lotto Results:", results);
    this.rl.close();
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
}

export default App;
