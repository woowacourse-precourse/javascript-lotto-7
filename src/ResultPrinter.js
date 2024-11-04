import { Console } from "@woowacourse/mission-utils";

class ResultPrinter {
  constructor(purchaseAmount, results) {
    this.purchaseAmount = purchaseAmount;
    this.results = results;
  }

  printResults() {
    // 당첨 결과 출력
    Console.print("\n당첨 통계\n---");
    Console.print(`3개 일치 (5,000원) - ${this.results[3]}개`);
    Console.print(`4개 일치 (50,000원) - ${this.results[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.results[5]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.results[5.5]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${this.results[6]}개`);

    // 총 수익률 계산 및 출력
    const totalPrize = this.results[3] * 5000 + this.results[4] * 50000 + this.results[5] * 1500000 + this.results[5.5] * 30000000 + this.results[6] * 2000000000;
    const profitRate = ((totalPrize / this.purchaseAmount) * 100).toFixed(1);
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default ResultPrinter;