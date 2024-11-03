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
    const yields = this.getYields(payment, rankCount);

    this.showResult(rankCount, yields);
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
      const lotto = new Lotto(pickedNumber);
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
      return new Lotto(winningNumbers);
    } catch (e) {
      Console.print(e.message);
      return this.getWinningNumbers();
    }
  }

  async getBonusNumber(winningNumbers) {
    try {
      const input = await Console.readLineAsync(
        "\n보너스 번호를 입력해 주세요.\n",
      );
      const bonusNumber = Number(input);

      this.validateBonusNumber(bonusNumber, winningNumbers);
      return bonusNumber;
    } catch (e) {
      Console.print(e.message);
      return this.getBonusNumber(winningNumbers);
    }
  }

  validateBonusNumber(number, _winningNumbers) {
    const winningNumbers = _winningNumbers.getLotto();

    if (isNaN(number) || number < 1 || number > 45) {
      throw new Error(
        "[ERROR] 보너스 번호는 1과 45 사이의 숫자로 입력하셔야 합니다.",
      );
    }
    if (winningNumbers.includes(number)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복되면 안됩니다.");
    }
  }

  getRankCount(_winningNumbers, bonusNumber, lotteries) {
    const winningNumbers = _winningNumbers.getLotto();
    const rankCount = Array(6).fill(0);
    lotteries.forEach((lotto) => {
      const rank = lotto.getRank(winningNumbers, bonusNumber);
      rankCount[rank] += 1;
    });
    return rankCount;
  }

  getYields(payment, rankCount) {
    const profit = rankCount.reduce(
      (total, count, idx) =>
        total + count * this.LOTTO_PRICE * this.LOTTO_REWARD[idx],
      0,
    );
    const yields = (profit / payment) * 100;
    return yields.toFixed(1);
  }

  showResult(rankCount, yields) {
    Console.print(`\n당첨 통계\n---`);
    for (let i = 5; i > 0; i--) {
      const rule = this.LOTTO_RULES[i];
      const reward = this.LOTTO_REWARD[i] * this.LOTTO_PRICE;
      const count = rankCount[i];
      Console.print(
        `${rule} (${reward.toLocaleString("ko-KR")}원) - ${count}개`,
      );
    }
    Console.print(`총 수익률은 ${yields}%입니다.`);
  }
}

export default App;
