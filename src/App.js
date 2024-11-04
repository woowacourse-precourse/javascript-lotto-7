import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import {
  LOTTO_PRICE,
  LOTTO_NUMBER_COUNT,
  LOTTO_NUMBER_RANGE,
  WINNING_PRIZES,
  MATCH_COUNTS,
  ERROR_MESSAGES,
} from "./constants.js";

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

    if (Number.isNaN(purchaseAmount) || purchaseAmount % LOTTO_PRICE !== 0) {
      this.handleError(ERROR_MESSAGES.INVALID_AMOUNT);
      this.inputPurchaseAmount();
      return;
    }
    this.purchaseAmount = purchaseAmount;
    this.printPurchasedLotto();
  }

  printPurchasedLotto() {
    const lottoCount = this.purchaseAmount / LOTTO_PRICE;
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
    this.lottoTickets = this.generateLottoTickets(lottoCount);
    this.displayLottoTickets();
    this.inputWinningNumbers();
  }

  generateLottoTickets(count) {
    return Array.from({ length: count }, () => {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      return new Lotto(numbers);
    });
  }

  displayLottoTickets() {
    this.lottoTickets.forEach((ticket) => {
      Console.print(`[${ticket.getNumbers().join(", ")}]`);
    });
  }

  async inputWinningNumbers() {
    const winningNumbersInput = await Console.readLineAsync(
      "\n당첨 번호를 입력해 주세요. (예: 1,2,3,4,5,6)\n",
    );
    const winningNumbers = winningNumbersInput.split(",").map(Number);
    this.validateWinningNumbers(winningNumbers);
  }

  validateWinningNumbers(numbers) {
    if (numbers.length !== LOTTO_NUMBER_COUNT || new Set(numbers).size !== LOTTO_NUMBER_COUNT) {
      this.handleError(ERROR_MESSAGES.INVALID_LOTTO_COUNT);
      this.inputWinningNumbers();
      return;
    }
    if (
      numbers.some((number) => number < LOTTO_NUMBER_RANGE.MIN || number > LOTTO_NUMBER_RANGE.MAX)
    ) {
      this.handleError(ERROR_MESSAGES.INVALID_NUMBER_RANGE);
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
    if (
      Number.isNaN(number) ||
      number < LOTTO_NUMBER_RANGE.MIN ||
      number > LOTTO_NUMBER_RANGE.MAX
    ) {
      this.handleError(ERROR_MESSAGES.INVALID_NUMBER_RANGE);
      this.inputBonusNumber();
      return;
    }
    if (this.winningNumbers.includes(number)) {
      this.handleError(ERROR_MESSAGES.BONUS_NUMBER_DUPLICATE);
      this.inputBonusNumber();
      return;
    }
    this.bonusNumber = number;
    this.calculateResults();
  }

  calculateResults() {
    this.results = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

    this.lottoTickets.forEach((ticket) => {
      const matchedCount = ticket
        .getNumbers()
        .filter((num) => this.winningNumbers.includes(num)).length;
      const isBonusMatched = ticket.getNumbers().includes(this.bonusNumber);

      if (matchedCount === MATCH_COUNTS.FIRST) {
        this.results[1] += 1;
        return;
      }

      if (matchedCount === MATCH_COUNTS.SECOND && isBonusMatched) {
        this.results[2] += 1;
        return;
      }

      if (matchedCount === MATCH_COUNTS.THIRD) {
        this.results[3] += 1;
        return;
      }

      if (matchedCount === MATCH_COUNTS.FOURTH) {
        this.results[4] += 1;
        return;
      }

      if (matchedCount === MATCH_COUNTS.FIFTH) {
        this.results[5] += 1;
      }
    });

    this.printResults();
  }

  printResults() {
    Console.print("\n당첨 통계\n---");
    Console.print(`3개 일치 (${WINNING_PRIZES.FIFTH}원) - ${this.results[5]}개`);
    Console.print(`4개 일치 (${WINNING_PRIZES.FOURTH}원) - ${this.results[4]}개`);
    Console.print(`5개 일치 (${WINNING_PRIZES.THIRD}원) - ${this.results[3]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (${WINNING_PRIZES.SECOND}원) - ${this.results[2]}개`);
    Console.print(`6개 일치 (${WINNING_PRIZES.FIRST}원) - ${this.results[1]}개`);

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
