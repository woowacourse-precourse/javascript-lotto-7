import { Console } from "@woowacourse/mission-utils";
import Calculator from "./Calculator";
import { LOTTO_PRICE } from "./Constants";
import InputValidator from "./InputValidator";
import Lotto from "./Lotto";

class App {
  async run() {
    try {
      const amount = await Console.readLineAsync(
        "구입 금액을 입력해 주세요."
      );
      const count =
        parseInt(amount, 10) / LOTTO_PRICE;

      if (
        Number.isNaN(count) ||
        count <= 0 ||
        !Number.isInteger(count)
      ) {
        throw new Error(
          "[ERROR] 구입 금액은 1000원 단위의 유효한 숫자여야 합니다."
        );
      }

      Console.print(`${count}개를 구매했습니다.`);

      this.lottos = Array.from(
        { length: count },
        () => new Lotto()
      );
      this.lottos.forEach((lotto) =>
        Console.print(
          `[${lotto.getNumbers().join(", ")}]`
        )
      );

      await this.askWinningNumbers();
    } catch (error) {
      Console.print(error.message);
      await this.run(); // 재시도
    }
  }

  async askWinningNumbers() {
    try {
      const numbers = await Console.readLineAsync(
        "\n당첨 번호를 입력해 주세요."
      );
      const parsedNumbers = numbers
        .split(",")
        .map(Number);

      InputValidator.validateNumbers(
        parsedNumbers,
        6
      );
      this.winningNumbers = parsedNumbers;

      await this.askBonusNumber();
    } catch (error) {
      Console.print(error.message);
      await this.askWinningNumbers(); // 재시도
    }
  }

  async askBonusNumber() {
    try {
      const number = await Console.readLineAsync(
        "\n보너스 번호를 입력해 주세요."
      );
      const parsedNumber = parseInt(number, 10);

      InputValidator.validateNumbers(
        [parsedNumber],
        1
      );
      if (
        this.winningNumbers.includes(parsedNumber)
      ) {
        throw new Error(
          "[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다."
        );
      }

      this.bonusNumber = parsedNumber;

      this.printResults();
    } catch (error) {
      Console.print(error.message);
      await this.askBonusNumber(); // 재시도
    }
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
      const lottoNumbers = lotto.getNumbers();
      const matchResult =
        Calculator.calculateMatch(
          lottoNumbers,
          this.winningNumbers,
          this.bonusNumber
        );
      if (matchResult) matchCounts[matchResult]++;
    });

    Console.print("\n당첨 통계---");
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

    // 총 당첨 금액 및 수익률 계산
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
