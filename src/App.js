// App.js
import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import Calculator from "./Calculator.js";
import { LOTTO_PRICE } from "./Constants.js";

class App {
  async run() {
    const amount = await Console.readLineAsync(
      "구입 금액을 입력해 주세요.\n"
    );
    const count =
      parseInt(amount, 10) / LOTTO_PRICE;
    Console.print(`\n${count}개를 구매했습니다.`);

    this.lottos = Array.from(
      { length: count },
      () => new Lotto()
    );
    this.lottos.forEach((lotto) =>
      Console.print(lotto.getNumbers())
    );

    await this.askWinningNumbers();
  }

  async askWinningNumbers() {
    const numbers = await Console.readLineAsync(
      "\n당첨 번호를 입력해 주세요.\n"
    );
    this.winningNumbers = numbers
      .split(",")
      .map(Number);
    await this.askBonusNumber();
  }

  async askBonusNumber() {
    const number = await Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n"
    );
    this.bonusNumber = parseInt(number, 10);
    this.printResults();
  }

  printResults() {
    const matchCounts = {
      "3개 일치": 0,
      "4개 일치": 0,
      "5개 일치": 0,
      "5개 일치, 보너스 볼 일치": 0,
      "6개 일치": 0,
    };

    this.lottos.forEach((lotto) => {
      const matchResult =
        Calculator.calculateMatch(
          lotto.getNumbers(),
          this.winningNumbers,
          this.bonusNumber
        );
      if (matchResult) matchCounts[matchResult]++;
    });

    Console.print("\n당첨 통계\n---");
    Console.print(
      `3개 일치 (5,000원) - ${matchCounts["3개 일치"]}개`
    );
    Console.print(
      `4개 일치 (50,000원) - ${matchCounts["4개 일치"]}개`
    );
    Console.print(
      `5개 일치 (1,500,000원) - ${matchCounts["5개 일치"]}개`
    );
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${matchCounts["5개 일치, 보너스 볼 일치"]}개`
    );
    Console.print(
      `6개 일치 (2,000,000,000원) - ${matchCounts["6개 일치"]}개`
    );

    const totalPrize =
      Calculator.calculateTotalWinnings(
        matchCounts
      );
    const returnRate =
      Calculator.calculateReturnRate(
        totalPrize,
        this.lottos.length * LOTTO_PRICE
      );
    Console.print(
      `총 수익률은 ${returnRate}%입니다.`
    );
  }
}

export default App;
