import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "./constants/output.js";
import Lotto from "./Lotto.js";
import { STATISTICS } from "./constants/price.js";

class LottoMachine {
  constructor(cost) {
    this.lottoQuantity = cost / 1000;
    this.lottos = this.generateLottos();
    this.cost = cost;
  }

  printQuantity() {
    Console.print(`\n${this.lottoQuantity}${OUTPUT_MESSAGE.QUANTITY}`);
  }

  generateLottos() {
    const lottos = [];
    for (let i = 0; i < this.lottoQuantity; i++) {
      const numbers = Lotto.generateRandomNumbers().sort((a, b) => a - b);
      const lotto = new Lotto(numbers);
      lottos.push(lotto.getNumbers());
    }
    return lottos;
  }

  calculateWinnings(winningNumbers, bonusNumber) {
    const statistics = STATISTICS;

    let totalPrize = 0;

    this.lottos.forEach((lotto) => {
      const { level, prize } = this.checkWinnings(
        lotto,
        winningNumbers,
        bonusNumber
      );
      if (level !== "FAIL") {
        STATISTICS[level]++;
        totalPrize += prize;
      }
    });

    return { statistics, totalPrize };
  }

  checkWinnings(lotto, winningNumbers, bonusNumber) {
    const matches = lotto.filter((num) => winningNumbers.includes(num)).length;

    const bonusMatch = lotto.includes(bonusNumber);

    if (matches === 6) return { level: "FIRST_PLACE", prize: 2000000000 };
    if (matches === 5 && bonusMatch)
      return { level: "SECOND_PLACE", prize: 30000000 };
    if (matches === 5) return { level: "THIRD_PLACE", prize: 1500000 };
    if (matches === 4) return { level: "FOURTH_PLACE", prize: 50000 };
    if (matches === 3) return { level: "FIFTH_PLACE", prize: 5000 };

    return { level: STATISTICS.FAIL, prize: 0 };
  }

  printWinningStatistics(statistics, totalPrize) {
    Console.print("\n당첨 통계");
    Console.print("---");
    this.constructor.printResult(statistics);
    this.constructor.printRevenuePercent(totalPrize, this.cost);
  }

  static printResult(statistics) {
    Console.print(`${OUTPUT_MESSAGE.FIFTH_PLACE}${statistics.FIFTH_PLACE}개`);
    Console.print(`${OUTPUT_MESSAGE.FOURTH_PLACE}${statistics.FOURTH_PLACE}개`);
    Console.print(`${OUTPUT_MESSAGE.THIRD_PLACE}${statistics.THIRD_PLACE}개`);
    Console.print(`${OUTPUT_MESSAGE.SECOND_PLACE}${statistics.SECOND_PLACE}개`);
    Console.print(`${OUTPUT_MESSAGE.FIRST_PLACE}${statistics.FIRST_PLACE}개`);
  }

  static printRevenuePercent(totalPrize, cost) {
    const revenuePercent = (totalPrize / cost) * 100;
    const formattedRevenuePercent = revenuePercent.toFixed(1) + "%";

    Console.print(`${OUTPUT_MESSAGE.REVENUE}${formattedRevenuePercent}입니다.`);
  }
}

export default LottoMachine;
