import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { validatePurchaseAmount, validateWinningNumbers, validateBonusNumber } from './utils/validateInput.js';
import { INPUT_MESSAGES } from "./constants/input.js";
import { OUTPUT_MESSAGES } from "./constants/output.js";
import { PRIZE_MONEY } from "./constants/prize.js";

class LottoMachine {
  constructor() {
    this.lottos = [];
    this.winningNumbers = [];
    this.bonusNumber = 0;
    this.purchaseAmount = 0;
  }

  async start() {
    await this.promptPurchaseAmount();
  }

  async promptPurchaseAmount() {
    const amount = await Console.readLineAsync(INPUT_MESSAGES.PURCHASE_AMOUNT);
    this.purchaseAmount = Number(amount);
    try {
      validatePurchaseAmount(this.purchaseAmount);
      this.issueLottos();
    } catch (error) {
      Console.print(error.message);
      await this.promptPurchaseAmount();
    }
  }

  issueLottos() {
    const count = Math.floor(this.purchaseAmount / 1000);
    Console.print(`${count}${OUTPUT_MESSAGES.LOTTO_COUNT}`);
    for (let i = 0; i < count; i++) {
      const lotto = Lotto.generate(Console.Random.pickUniqueNumbersInRange);
      this.lottos.push(lotto);
      Console.print(`[${lotto.getNumbers().join(", ")}]`);
    }
    this.promptWinningNumbers();
  }

  async promptWinningNumbers() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.WINNING_NUMBERS);
    const numbers = input.split(",").map(Number);
    try {
      validateWinningNumbers(numbers);
      this.winningNumbers = numbers;
      this.promptBonusNumber();
    } catch (error) {
      Console.print(error.message);
      await this.promptWinningNumbers();
    }
  }

  async promptBonusNumber() {
    const bonus = Number(await Console.readLineAsync(INPUT_MESSAGES.BONUS_NUMBER));
    try {
      validateBonusNumber(bonus, this.winningNumbers);
      this.bonusNumber = bonus;
      this.calculateResults();
    } catch (error) {
      Console.print(error.message);
      await this.promptBonusNumber();
    }
  }

  calculateResults() {
    const results = { 3: 0, 4: 0, 5: 0, "5+bonus": 0, 6: 0 };

    this.lottos.forEach((lotto) => {
      const matchCount = lotto.getNumbers().filter((num) => this.winningNumbers.includes(num)).length;
      const isBonusMatched = lotto.getNumbers().includes(this.bonusNumber);

      if (matchCount === 6) {
        results[6] += 1;
      } else if (matchCount === 5 && isBonusMatched) {
        results["5+bonus"] += 1;
      } else if (matchCount === 5) {
        results[5] += 1;
      } else if (matchCount === 4) {
        results[4] += 1;
      } else if (matchCount === 3) {
        results[3] += 1;
      }
    });

    this.printResults(results);
  }

  printResults(results) {
    let totalPrize = 0;
    Console.print("당첨 통계");
    Console.print("---");

    Object.keys(results).forEach((key) => {
      const count = results[key];
      const prize = PRIZE_MONEY[key];
      if (count > 0) {
        const matchText = key === "5+bonus" ? "5개 일치, 보너스 볼 일치" : `${key}개 일치`;
        Console.print(`${matchText} (${prize.toLocaleString()}원) - ${count}개`);
      }
      totalPrize += count * prize;
    });

    const profitRate = ((totalPrize / this.purchaseAmount) * 100).toFixed(1);
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default LottoMachine;
