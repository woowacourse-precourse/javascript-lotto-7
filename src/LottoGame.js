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

  #generateLottos(amount) {
    const lottoGenerator = new LottoGenerator();
    this.tickets = Array.from({ length: amount }, () => {
      const numbers = lottoGenerator.generateLottoNumbers(1)[0];
      return new Lotto(numbers);
    });
  }

  async #getWinningNumbers() {
    const numbersInput = await Console.readLineAsync(
      "당첨 번호를 입력해 주세요.\n"
    );
    const numbers = numbersInput.split(",").map((num) => {
      const parsedNum = Number(num.trim());

      if (!Number.isInteger(parsedNum)) {
        throw new Error("[ERROR] 당첨 번호는 정수여야 합니다.");
      }
      return parsedNum;
    });

    this.winningNumbers = numbers;

    if (
      this.winningNumbers.length !== 6 ||
      !this.#isValidLottoNumbers(this.winningNumbers)
    ) {
      throw new Error(
        "[ERROR] 당첨 번호는 1부터 45 사이의 숫자 6개여야 합니다."
      );
    }
  }

  async #getBonusNumber() {
    const bonusInput = await Console.readLineAsync(
      "보너스 번호를 입력해 주세요.\n"
    );
    const bonus = parseInt(bonusInput, 10);

    if (
      isNaN(bonus) ||
      bonus < 1 ||
      bonus > 45 ||
      this.winningNumbers.includes(bonus)
    ) {
      throw new Error(
        "[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 하며, 당첨 번호와 중복되지 않아야 합니다."
      );
    }
    this.bonusNumber = bonus;
  }

  #isValidLottoNumbers(numbers) {
    return numbers.every((num) => num >= 1 && num <= 45);
  }

  #getMatchCount(ticket) {
    return ticket
      .getNumbers()
      .filter((num) => this.winningNumbers.includes(num)).length;
  }

  #hasBonusNumber(ticket) {
    return ticket.getNumbers().includes(this.bonusNumber);
  }

  #printLottoTickets() {
    Console.print(`${this.tickets.length}개를 구매했습니다.`);
    this.tickets.forEach((ticket) => {
      Console.print(`[${ticket.getNumbers().join(", ")}]`);
    });
  }

  #printResults() {
    const results = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };

    this.tickets.forEach((ticket) => {
      const matchCount = this.#getMatchCount(ticket);
      const hasBonus = this.#hasBonusNumber(ticket);

      if (matchCount === 6) results.first += 1;
      else if (matchCount === 5 && hasBonus) results.second += 1;
      else if (matchCount === 5) results.third += 1;
      else if (matchCount === 4) results.fourth += 1;
      else if (matchCount === 3) results.fifth += 1;
    });

    this.#printWinningStatistics(results);
  }

  #printWinningStatistics(results) {
    Console.print("당첨 통계\n---");
    Console.print(`3개 일치 (5,000원) - ${results.fifth}개`);
    Console.print(`4개 일치 (50,000원) - ${results.fourth}개`);
    Console.print(`5개 일치 (1,500,000원) - ${results.third}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${results.second}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${results.first}개`);
    this.#printYield(results);
  }

  #printYield(results) {
    const prizeMoney =
      results.fifth * 5000 +
      results.fourth * 50000 +
      results.third * 1500000 +
      results.second * 30000000 +
      results.first * 2000000000;
    const purchaseAmount = this.tickets.length * 1000;
    const yieldPercentage = ((prizeMoney / purchaseAmount) * 100).toFixed(1);
    Console.print(`총 수익률은 ${yieldPercentage}%입니다.`);
  }
}

export default LottoGame;
