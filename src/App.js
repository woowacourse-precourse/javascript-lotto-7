import { Console, Random } from "@woowacourse/mission-utils";

class App {
  run() {
    this.inputPurchaseAmount();
  }

  async inputPurchaseAmount() {
    const amount = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    this.validatePurchaseAmount(amount);
  }

  validatePurchaseAmount(amount) {
    const purchaseAmount = Number(amount);

    if (Number.isNaN(purchaseAmount) || purchaseAmount % 1000 !== 0) {
      this.handleError("[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.");
      this.inputPurchaseAmount();
      return;
    }
    this.purchaseAmount = purchaseAmount;
    this.printPurchasedLotto();
  }

  printPurchasedLotto() {
    const lottoCount = this.purchaseAmount / 1000;
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
    this.lottoTickets = Array.from({ length: lottoCount });
    this.generateLottoTickets();
    this.inputWinningNumbers();
  }

  generateLottoTickets() {
    this.lottoTickets = this.lottoTickets.map(() =>
      Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b),
    );
    this.displayLottoTickets();
  }

  displayLottoTickets() {
    this.lottoTickets.forEach((ticket) => Console.print(`[${ticket.join(", ")}]`));
  }

  async inputWinningNumbers() {
    const winningNumbersInput = await Console.readLineAsync(
      "\n당첨 번호를 입력해 주세요. (예: 1,2,3,4,5,6)\n",
    );
    const winningNumbers = winningNumbersInput.split(",").map(Number);
    this.validateWinningNumbers(winningNumbers);
  }

  validateWinningNumbers(numbers) {
    if (numbers.length !== 6 || new Set(numbers).size !== 6) {
      this.handleError("[ERROR] 당첨 번호는 중복되지 않는 6개의 숫자여야 합니다.");
      this.inputWinningNumbers();
      return;
    }
    if (numbers.some((number) => number < 1 || number > 45)) {
      this.handleError("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      this.inputWinningNumbers();
      return;
    }
    this.winningNumbers = numbers;
    this.inputBonusNumber();
  }

  async inputBonusNumber() {
    const bonusNumberInput = await Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");
    const bonusNumber = Number(bonusNumberInput);
    this.validateBonusNumber(bonusNumber);
  }

  validateBonusNumber(number) {
    if (Number.isNaN(number) || number < 1 || number > 45) {
      this.handleError("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
      this.inputBonusNumber();
      return;
    }
    if (this.winningNumbers.includes(number)) {
      this.handleError("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
      this.inputBonusNumber();
      return;
    }
    this.bonusNumber = number;
    this.calculateResults();
  }

  calculateResults() {
    this.results = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

    this.lottoTickets.forEach((ticket) => {
      const matchedCount = ticket.filter((num) => this.winningNumbers.includes(num)).length;
      const isBonusMatched = ticket.includes(this.bonusNumber);

      if (matchedCount === 6) this.results[1] += 1; // 1등
      else if (matchedCount === 5 && isBonusMatched) this.results[2] += 1; // 2등
      else if (matchedCount === 5) this.results[3] += 1; // 3등
      else if (matchedCount === 4) this.results[4] += 1; // 4등
      else if (matchedCount === 3) this.results[5] += 1; // 5등
    });

    this.printResults();
  }

  printResults() {
    Console.print("\n당첨 통계\n---");
    Console.print(`3개 일치 (5,000원) - ${this.results[5]}개`);
    Console.print(`4개 일치 (50,000원) - ${this.results[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.results[3]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.results[2]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${this.results[1]}개`);

    this.calculateProfit();
  }

  calculateProfit() {
    const prizeAmounts = { 1: 2000000000, 2: 30000000, 3: 1500000, 4: 50000, 5: 5000 };
    const totalPrize = Object.keys(this.results).reduce(
      (sum, key) => sum + this.results[key] * prizeAmounts[key],
      0,
    );

    const profitRate = ((totalPrize / this.purchaseAmount) * 100).toFixed(1);
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }

  handleError(message) {
    Console.print(message);
  }
}

export default App;
