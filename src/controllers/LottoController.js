import errorMessages from "../constants/errorMessages.js";
import Lotto from "../models/Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class LottoController {
  constructor(winningNumbers, bonusNum, purchasedLotto) {
    const nums = this.#splitNumsByComma(winningNumbers);
    this.winningNumbers = new Lotto(this.#convertStringToNumber(nums));
    this.bonusNum = bonusNum;
    this.purchasedLotto = purchasedLotto;
  }

  #splitNumsByComma(winningNumbers) {
    return winningNumbers.split(",");
  }

  #convertStringToNumber(winningNumbers) {
    return winningNumbers.map((num) => Number(num));
  }

  start() {
    const purchasedLotto = this.purchasedLotto.getTickets();

    const counts = [];
    purchasedLotto.forEach((pLotto) => {
      counts.push(this.#calculateMatchCount(pLotto));
    });

    const awards = counts.reduce((acc, value) => {
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {});

    this.printResult(awards);
  }

  #calculateMatchCount(numbers) {
    let count = 0;
    const winningNumbers = this.winningNumbers.getNumbers();
    numbers.forEach((num) => {
      if (num in winningNumbers) count += 1;
    });
    if (count === 5 && this.#checkBonusBallMatch(numbers)) count = "5+bonus";
    return count;
  }

  #checkBonusBallMatch(numbers) {
    if (this.bonusNum in numbers) return true;
    return false;
  }

  printResult(counts) {
    const winningResult = [
      {
        count: 3,
        price: "5,000",
      },
      {
        count: 4,
        price: "50,000원",
      },
      {
        count: 5,
        price: "1,500,000",
      },
      {
        count: 5,
        bonus: true,
        price: "30,000,000",
      },
      {
        count: 6,
        print: "2,000,000,000",
      },
    ];

    winningResult.forEach((win) => {
      MissionUtils.Console.print(
        `${win.count}개 일치${win.bonus === true && ", 보너스 볼 일치"} (${
          win.price
        }원) - ${counts[String(win.count) || 0]}개`
      );
    });
  }
}

export default LottoController;
