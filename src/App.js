import { Console } from "@woowacourse/mission-utils";
import LottoMachine from "./LottoMachine.js";

class App {
  constructor() {
    this.winningNumbers = [];
    this.bonusNumber = null;
    this.lottos = [];
    this.purchaseAmount = 0;
  }

  run() {
    this.start();
  }

  start() {
    Console.print("구입금액을 입력해 주세요.");
    Console.readLine("구입금액: ", (input) => {
      const purchaseAmount = Number(input);
      if (this.validatePurchaseAmount(purchaseAmount)) {
        this.purchaseAmount = purchaseAmount;
        const lottoCount = purchaseAmount / 1000;
        this.purchaseLottos(lottoCount);
      } else {
        Console.print("[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.");
        this.start(); // 다시 입력 받기
      }
    });
  }

  validatePurchaseAmount(amount) {
    return !isNaN(amount) && amount >= 1000 && amount % 1000 === 0;
  }

  purchaseLottos(count) {
    Console.print(`${count}개를 구매했습니다.`);
    const lottoMachine = new LottoMachine();
    this.lottos = lottoMachine.generateLottos(count);
    this.lottos.forEach((lotto) =>
      Console.print(`[${lotto.numbers.join(", ")}]`)
    );
    this.getWinningNumbers(); // 다음 단계로 이동
  }

  getWinningNumbers() {
    Console.print("당첨 번호를 입력해 주세요.");
    Console.readLine("당첨 번호: ", (input) => {
      const winningNumbers = input.split(",").map(Number);
      if (this.validateWinningNumbers(winningNumbers)) {
        this.winningNumbers = winningNumbers;
        this.getBonusNumber();
      } else {
        Console.print(
          "[ERROR] 당첨 번호는 1부터 45 사이의 중복되지 않는 숫자 6개여야 합니다."
        );
        this.getWinningNumbers(); // 잘못된 입력이므로 다시 입력 받기
      }
    });
  }

  validateWinningNumbers(numbers) {
    const uniqueNumbers = new Set(numbers);
    return (
      numbers.length === 6 &&
      uniqueNumbers.size === 6 &&
      numbers.every((num) => num >= 1 && num <= 45 && !isNaN(num))
    );
  }

  getBonusNumber() {
    Console.print("보너스 번호를 입력해 주세요.");
    Console.readLine("보너스 번호: ", (input) => {
      const bonusNumber = Number(input);
      if (this.validateBonusNumber(bonusNumber)) {
        this.bonusNumber = bonusNumber;
        this.calculateResults(); // 당첨 결과 계산으로 이동
      } else {
        Console.print(
          "[ERROR] 보너스 번호는 당첨 번호와 중복되지 않는 1~45 사이의 숫자여야 합니다."
        );
        this.getBonusNumber(); // 잘못된 입력이므로 다시 입력 받기
      }
    });
  }

  validateBonusNumber(bonus) {
    return (
      !isNaN(bonus) &&
      bonus >= 1 &&
      bonus <= 45 &&
      !this.winningNumbers.includes(bonus)
    );
  }

  calculateResults() {
    const results = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
      none: 0,
    };

    const prizeTable = {
      first: 2000000000,
      second: 30000000,
      third: 1500000,
      fourth: 50000,
      fifth: 5000,
    };

    this.lottos.forEach((lotto) => {
      const rank = lotto.getRank(this.winningNumbers, this.bonusNumber);
      switch (rank) {
        case 1:
          results.first += 1;
          break;
        case 2:
          results.second += 1;
          break;
        case 3:
          results.third += 1;
          break;
        case 4:
          results.fourth += 1;
          break;
        case 5:
          results.fifth += 1;
          break;
        default:
          results.none += 1;
      }
    });

    this.printResults(results, prizeTable);
  }

  printResults(results, prizeTable) {
    Console.print("당첨 통계");
    Console.print("---");
    Console.print(`3개 일치 (5,000원) - ${results.fifth}개`);
    Console.print(`4개 일치 (50,000원) - ${results.fourth}개`);
    Console.print(`5개 일치 (1,500,000원) - ${results.third}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${results.second}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${results.first}개`);

    const totalPrize = this.calculateTotalPrize(results, prizeTable);
    const profitRate = this.calculateYield(totalPrize); // 변수명 변경
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
    Console.close();
  }

  calculateTotalPrize(results, prizeTable) {
    return (
      results.first * prizeTable.first +
      results.second * prizeTable.second +
      results.third * prizeTable.third +
      results.fourth * prizeTable.fourth +
      results.fifth * prizeTable.fifth
    );
  }

  calculateYield(totalPrize) {
    const yieldRate = (totalPrize / this.purchaseAmount) * 100; // 변수명 변경
    return yieldRate.toFixed(1);
  }
}

export default App;
