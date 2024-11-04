import { Console, MissionUtils } from "@woowacourse/mission-utils";
import { Lotto } from "./Lotto.js";

const ERROR_MESSAGES = {
  INVALID_PURCHASE_AMOUNT: "[ERROR] 구입 금액은 1,000원 단위여야 합니다.",
  INVALID_WINNING_NUMBERS: "[ERROR] 당첨 번호는 중복되지 않는 6개 숫자여야 합니다.",
  INVALID_WINNING_NUMBERS_RANGE: "[ERROR] 당첨 번호는 1에서 45 사이여야 합니다.",
  INVALID_BONUS_NUMBER: "[ERROR] 보너스 번호는 당첨 번호와 중복되지 않는 1~45 사이의 숫자여야 합니다."
};

export class LottoMachine {
  constructor() {
    this.lottos = [];
    this.winningNumbers = [];
    this.bonusNumber = 0;
    this.purchaseAmount = 0;
  }

  async start() {
    await this.promptPurchaseAmount();
    await this.issueLottos();
    await this.promptWinningNumbers();
    await this.promptBonusNumber();
    await this.checkResults();
  }

  async promptPurchaseAmount() {
    const amount = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
    this.purchaseAmount = Number(amount);
    try {
      if (isNaN(this.purchaseAmount) || this.purchaseAmount % 1000 !== 0 || this.purchaseAmount <= 0) {
        throw new Error(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
      }
    } catch (error) {
      Console.print(error.message);
      return this.promptPurchaseAmount();
    }
  }
  
  issueLottos() {
    const count = this.purchaseAmount / 1000;
    MissionUtils.Console.print(`${count}개를 구매했습니다.`);
    for (let i = 0; i < count; i++) {
      const lotto = Lotto.generate();
      this.lottos.push(lotto);
      MissionUtils.Console.print(`[${lotto.getNumbers().join(', ')}]`);
    }
  }

  async promptWinningNumbers() {
    const input = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    const numbers = input.split(',').map(Number);
    try {
      this.validateWinningNumbers(numbers);
      this.winningNumbers = numbers;
    } catch (error) {
      Console.print(error.message);
      return this.promptWinningNumbers();
    }
  }

  validateWinningNumbers(numbers) {
    if (numbers.length !== 6 || new Set(numbers).size !== 6) {
      throw new Error(ERROR_MESSAGES.INVALID_WINNING_NUMBERS);
    }
    if (!numbers.every(num => num >= 1 && num <= 45)) {
      throw new Error(ERROR_MESSAGES.INVALID_WINNING_NUMBERS_RANGE);
    }
  }

  async promptBonusNumber() {
    const input = await MissionUtils.Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    const bonus = Number(input);
    try {
      this.validateBonusNumber(bonus);
      this.bonusNumber = bonus;
    } catch (error) {
      Console.print(error.message);
      return this.promptBonusNumber();
    }
  }

  validateBonusNumber(bonus) {
    if (isNaN(bonus) || this.winningNumbers.includes(bonus) || bonus < 1 || bonus > 45) {
      throw new Error(ERROR_MESSAGES.INVALID_BONUS_NUMBER);
    }
  }

  checkResults() {
    const results = { 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 };
    this.lottos.forEach(lotto => {
      const matchedCount = this.getMatchedCount(lotto.getNumbers());
      if (matchedCount >= 3) {
        if (matchedCount === 5 && lotto.getNumbers().includes(this.bonusNumber)) {
          results[6]++;
        } else if (matchedCount == 6) {
          results[matchedCount + 1]++;
        } else {
          results[matchedCount]++;
        }
      }
    });
    this.printResults(results);
  }

  getMatchedCount(numbers) {
    return numbers.filter(num => this.winningNumbers.includes(num)).length;
  }

  printResults(results) {
    const prizeMoney = {
      3: 5000,
      4: 50000,
      5: 1500000,
      6: 30000000,
      7: 2000000000,
    };
    let totalPrize = 0;
    MissionUtils.Console.print("당첨 통계");
    MissionUtils.Console.print("---");
    for (const [match, count] of Object.entries(results)) {
      const prize = prizeMoney[match];
      totalPrize += prize * count;
      let matchText = "";
      if (match == 6) {
        matchText = "5개 일치, 보너스 볼 일치";
      } else if (match == 7) {
        matchText = `${match - 1}개 일치`;
      } else {
        matchText = `${match}개 일치`;
      }
      MissionUtils.Console.print(`${matchText} (${prize.toLocaleString()}원) - ${count}개`);
    }
    const profitRate = ((totalPrize / this.purchaseAmount) * 100).toFixed(1);
    MissionUtils.Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default LottoMachine;
