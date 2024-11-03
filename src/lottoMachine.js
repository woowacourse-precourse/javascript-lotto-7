import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "./constants/output.js";
import Lotto from "./Lotto.js";
import { STATISTICS } from "./constants/price.js";

class LottoMachine {
  constructor(cost) {
    this.lottoQuantity = cost / 1000;
    this.lottos = this.generateLottos();
  }

  printQuantity() {
    Console.print(`${this.lottoQuantity}${OUTPUT_MESSAGE.QUANTITY}`);
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
}

export default LottoMachine;
