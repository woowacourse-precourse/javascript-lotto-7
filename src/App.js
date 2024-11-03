import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  LOTTO_PRICE = 1000;
  LOTTO_REWARD = [0, 2000000, 30000, 1500, 50, 5];
  LOTTO_RULES = [
    "",
    "6개 일치",
    "5개 일치, 보너스 볼 일치",
    "5개 일치",
    "4개 일치",
    "3개 일치",
  ];

  async run() {
    const payment = await this.getPayment();
    const count = payment / this.LOTTO_PRICE;
    const lotteries = this.getLotteries(count);
    const winningNumbers = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumber(winningNumbers);
    const rankCount = this.getRankCount(winningNumbers, bonusNumber, lotteries);
  }

  async getPayment() {
    try {
      const payment =
        await Console.readLineAsync("구입금액을 입력해 주세요.\n");
      return this.validatePayment(payment);
    } catch (e) {
      Console.print(e.message);
      return this.getPayment();
    }
  }

  validatePayment(payment_str) {
    const payment = Number(payment_str);
    if (isNaN(payment)) {
      throw new Error("[ERROR] 구입금액은 숫자로 입력하셔야 합니다.");
    }
    if (payment < 0) {
      throw new Error("[ERROR] 구입금액은 0원 이상 입력하셔야 합니다.");
    }
    if (payment % this.LOTTO_PRICE !== 0) {
      throw new Error("[ERROR] 구입금액은 1000원으로 나누어져야 합니다.");
    }
    return payment;
  }

  getLotteries(count) {
    const lotteries = [];
    for (let i = 0; i < count; i++) {
      const pickedNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
      const sortedNumber = pickedNumber
        .map((v) => parseInt(v))
        .sort((a, b) => a - b);
      const lotto = new Lotto(sortedNumber);
      lotteries.push(lotto);
    }
    this.showLotteries(lotteries);
    return lotteries;
  }

  showLotteries(lotteries) {
    Console.print(`\n${lotteries.length}개를 구매했습니다.`);
    lotteries.forEach((lotto) => {
      Console.print(`[${lotto.getLotto().join(", ")}]`);
    });
  }

  async getWinningNumbers() {
    try {
      const input = await Console.readLineAsync(
        "\n당첨 번호를 입력해 주세요.\n",
      );
      const winningNumbers = input.split(",").map((v) => Number(v));
      this.validateWinningNumbers(winningNumbers);
      return winningNumbers;
    } catch (e) {
      Console.print(e.message);
      return this.getWinningNumbers();
    }
  }

  validateWinningNumbers(numbers) {
    const winningNumbers = [];
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    numbers.forEach((number) => {
      if (isNaN(number) || number < 1 || number > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
      if (winningNumbers.includes(number)) {
        throw new Error("[ERROR] 로또 번호는 중복되지 않는 숫자여야 합니다.");
      }
      winningNumbers.push(number);
    });
  }

  async getBonusNumber(winningNumbers) {
    try {
      const input = await Console.readLineAsync(
        "\n보너스 번호를 입력해 주세요.\n",
      );
      const bonusNumber = Number(input);

      this.validateBonusNumber(bonusNumber);
      return bonusNumber;
    } catch (e) {
      Console.print(e.message);
      return this.getBonusNumber(winningNumbers);
    }
  }

  validateBonusNumber(number, winningNumbers) {
    if (isNaN(number) || number < 1 || number > 45) {
      throw new Error(
        "[ERROR] 보너스 번호는 1과 45 사이의 숫자로 입력하셔야 합니다.",
      );
    }
    if (winningNumbers.includes(number)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복되면 안됩니다.");
    }
  }

  getRankCount(winningNumbers, bonusNumber, lotteries) {
    const rankCount = Array(6).fill(0);
    lotteries.forEach((lotto) => {
      const rank = lotto.getRank(winningNumbers, bonusNumber);
      rankCount[rank] += 1;
    });
    return lotteries;
  }

  // getYield
}

export default App;
