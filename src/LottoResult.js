import { WINNING } from "../Constants.js";
import { Console } from "@woowacourse/mission-utils";

export class LottoResult {
  constructor() {
    this.results = {
      "3": 0,
      "4": 0,
      "5": 0,
      "bonus5": 0,
      "6": 0,
    };
    this.total = 0;
  }

  // 몇개나 당첨됐는지
  calculateNumbers(userLottos, winningNumbers, bonusNumber) {
    userLottos.forEach((userLotto) => {
      const count = this.getSameCount(userLotto, winningNumbers);
      const bonus = userLotto.includes(bonusNumber);

      if (count === 5 && bonus) {
        this.results["bonus5"]++;
        this.total += WINNING["bonus5"];
      } else if (count >= 3) {
        this.results[count]++;
        this.total += WINNING[count];
      }
    });
  }

  // 일치하는 개수
  getSameCount(userLotto, winningNumbers) {
    return userLotto.filter((num) => winningNumbers.includes(num)).length;
  }

  // 수익률 계산
  calculateProfitRate(purchaseMoney) {
    return ((this.total / purchaseMoney) * 100).toFixed(1);
  }

  // 결과 출력
  printResults(purchaseMoney) {
    Console.print("당첨 통계\n---");
    Console.print(`3개 일치 (5,000원) - ${this.results["3"]}개`);
    Console.print(`4개 일치 (50,000원) - ${this.results["4"]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.results["5"]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.results["bonus5"]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${this.results["6"]}개`);

    const profitRate = this.calculateProfitRate(purchaseMoney);
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}