class App {
  constructor() {
    this.lottos = [];
    this.winningNumbers = [];
    this.bonusNumber = null;
  }

  async run() {
    await this.purchaseLottos();
  }

  async purchaseLottos() {
    const amount = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    try {
      this.validateAmount(amount);
      const count = Math.floor(amount / 1000);
      this.generateLottos(count);
      this.printLottos();
      this.printRemainingAmount(amount);
      await this.inputWinningNumbers();
    } catch (error) {
      Console.print(error.message);
      await this.purchaseLottos();
    }
  }

  validateAmount(amount) {
    if (isNaN(amount) || amount % 1000 !== 0 || amount <= 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.");
    }
  }

  generateLottos(count) {
    for (let i = 0; i < count; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.lottos.push(new Lotto(numbers));
    }
  }

  printLottos() {
    Console.print(`${this.lottos.length}개를 구매했습니다.`);
    this.lottos.forEach((lotto) =>
      Console.print(`[${lotto.getNumbers().join(", ")}]`)
    );
  }

  printRemainingAmount(amount) {
    const remaining = amount % 1000;
    Console.print(`남은 금액은 ${remaining}원입니다.`);
  }

  async inputWinningNumbers() {
    const numbers = await Console.readLineAsync(
      "\n당첨 번호를 입력해 주세요. (쉼표로 구분된 숫자 6개)\n"
    );
    try {
      const numArray = numbers.split(",").map((num) => Number(num.trim()));
      if (numArray.length > 6) {
        throw new Error("[ERROR] 당첨 번호는 6개만 입력해야 합니다.");
      }
      this.winningNumbers = this.validateNumbers(numArray);
      await this.inputBonusNumber();
    } catch (error) {
      Console.print(error.message);
      await this.inputWinningNumbers();
    }
  }

  async inputBonusNumber() {
    const number = await Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n"
    );
    try {
      this.bonusNumber = this.validateNumber(Number(number.trim()));
      this.printResults();
    } catch (error) {
      Console.print(error.message);
      await this.inputBonusNumber();
    }
  }

  validateNumbers(numbers) {
    if (
      numbers.length !== 6 ||
      numbers.some((num) => isNaN(num) || num < 1 || num > 45)
    ) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 중복되지 않는 숫자 6개를 입력해야 합니다.");
    }
    return numbers;
  }

  validateNumber(number) {
    if (isNaN(number) || number < 1 || number > 45) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    if (this.winningNumbers.includes(number)) {
      throw new Error(
        "[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다."
      );
    }
    return number;
  }

  printResults() {
    const results = this.lottos.map((lotto) => this.getLottoRank(lotto));
    const stats = this.calculateStatistics(results);
    this.printStatistics(stats);
  }

  getLottoRank(lotto) {
    const matchCount = lotto
      .getNumbers()
      .filter((number) => this.winningNumbers.includes(number)).length;
    const hasBonus = lotto.getNumbers().includes(this.bonusNumber);

    if (matchCount === 6) return 1; // 1등
    if (matchCount === 5 && hasBonus) return 2; // 2등
    if (matchCount === 5) return 3; // 3등
    if (matchCount === 4) return 4; // 4등
    if (matchCount === 3) return 5; // 5등
    return 0; // 꽝
  }

  calculateStatistics(results) {
    const stats = [0, 0, 0, 0, 0, 0];
    results.forEach((result) => {
      if (result > 0) {
        stats[result]++;
      }
    });
    return stats;
  }

  printStatistics(stats) {
    const prize = [0, 2000000000, 30000000, 1500000, 50000, 5000];
    let totalPrize = 0;
    Console.print("\n당첨 통계\n---");
    const rankMessages = [
      "3개 일치 (5,000원) - ",
      "4개 일치 (50,000원) - ",
      "5개 일치 (1,500,000원) - ",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
      "6개 일치 (2,000,000,000원) - ",
    ];
    stats.slice(1).forEach((count, index) => {
      Console.print(`${rankMessages[index]}${count}개`);
      totalPrize += count * prize[index + 1];
    });
    const investment = this.lottos.length * 1000;
    const yieldRate = ((totalPrize / investment) * 100).toFixed(1);
    Console.print(`총 수익률은 ${yieldRate}%입니다.`);
  }
}

export default App;
