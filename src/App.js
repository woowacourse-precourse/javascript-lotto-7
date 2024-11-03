import Lotto from "./Lotto.js";
import { Console } from "@woowacourse/mission-utils"; // 외부 라이브러리 나중

class App {
  async run() {
    const purchaseAmount = await this.getPurchaseAmount();
    Console.print("");

    const { lottoCount, lottoArr } = Lotto.createLotto(purchaseAmount);
    this.printLottoResults(lottoCount, lottoArr);

    const winningNumbers = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumber();

    const matchResults = lottoArr.map((lotto) =>
      this.compareNumbers(lotto.numbers, winningNumbers, bonusNumber)
    );

    const statistics = this.decisionWinning(matchResults);
    this.printWinningStatistics(statistics);

    const totalProfitRate = this.calculateTotalProfitRate(
      statistics,
      purchaseAmount
    );
    this.printTotalProfitRate(totalProfitRate);
  }

  async getPurchaseAmount() {
    Console.print("구입금액을 입력해 주세요.");
    const inputPurchase = await Console.readLineAsync("");

    const amount = Number(inputPurchase);
    this.validateAmount(amount);
    return amount;
  }

  validateAmount(amount) {
    if (isNaN(amount)) {
      throw new Error("[ERROR] 구입 금액은 숫자여야 합니다.");
    }
    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 로또 구입 금액은 1,000원 단위여야 합니다.");
    }
    if (amount <= 0) {
      throw new Error("[ERROR] 정상적인 금액을 입력해주세요.");
    }
  }

  printLottoResults(lottoCount, lottoArr) {
    Console.print(`${lottoCount}개를 구매했습니다.`);
    lottoArr.forEach((lotto) => {
      Console.print(`[${lotto.numbers.join(", ")}]`);
    });
    Console.print("");
  }
  async getWinningNumbers() {
    Console.print("당첨 번호를 입력해 주세요.");
    const winningNumbersInput = await Console.readLineAsync("");
    const winningNumbersArr = winningNumbersInput
      .split(",")
      .map((num) => Number(num.trim()));
    this.validateWinningNumbers(winningNumbersArr);

    Console.print("");
    return winningNumbersArr;
  }

  async getBonusNumber() {
    Console.print("보너스 번호를 입력해 주세요.");
    const bonusNumberInput = await Console.readLineAsync("");
    this.validateBonusNumber(bonusNumberInput);

    Console.print("");
    return bonusNumber;
  }

  validateBonusNumber(bonusNumber) {
    if (isNaN(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
    }

    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error("[ERROR] 숫자는 1에서 45 사이여야 합니다.");
    }
  }

  validateWinningNumbers(winningNumbers) {
    const uniqueNumbers = new Set(winningNumbers);

    if (uniqueNumbers.size !== 6) {
      throw new Error("[ERROR] 중복된 숫자가 포함되어 있습니다.");
    }

    winningNumbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error("[ERROR] 숫자는 1에서 45 사이여야 합니다.");
      }
    });
  }

  compareNumbers(lottoNumbers, winningNumbers, bonusNumber) {
    const matchingCount = lottoNumbers.filter((number) =>
      winningNumbers.includes(number)
    ).length;

    const hasBonus = lottoNumbers.includes(bonusNumber);

    return { matchingCount, hasBonus };
  }

  decisionWinning(matchResults) {
    const statistics = {
      3: 0, // 3개 일치
      4: 0, // 4개 일치
      5: 0, // 5개 일치
      "5+bonus": 0, // 5개 + 보너스 일치
      6: 0, // 6개 일치 (1등)
    };

    matchResults.forEach(({ matchingCount, hasBonus }) => {
      if (matchingCount === 6) statistics[6]++;
      else if (matchingCount === 5 && hasBonus) statistics["5+bonus"]++;
      else if (matchingCount === 5) statistics[5]++;
      else if (matchingCount === 4) statistics[4]++;
      else if (matchingCount === 3) statistics[3]++;
    });

    return statistics;
  }

  printWinningStatistics(statistics) {
    Console.print("당첨 통계");
    Console.print("---");
    Console.print(`3개 일치 (5,000원) - ${statistics[3]}개`);
    Console.print(`4개 일치 (50,000원) - ${statistics[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${statistics[5]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${statistics["5+bonus"]}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${statistics[6]}개`);
  }

  calculateTotalProfitRate(statistics, purchaseAmount) {
    const winnings =
      statistics[3] * 5000 +
      statistics[4] * 50000 +
      statistics[5] * 1500000 +
      statistics["5+bonus"] * 30000000 +
      statistics[6] * 2000000000;
    const totalProfitRate = (winnings / purchaseAmount) * 100;

    return totalProfitRate;
  }

  printTotalProfitRate(totalProfitRate) {
    const roundedProfitRate = totalProfitRate.toFixed(1);
    Console.print(`총 수익률은 ${roundedProfitRate}%입니다.`);
  }
}
export default App;
