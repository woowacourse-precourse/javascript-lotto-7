import { Console } from '@woowacourse/mission-utils';

class Stats {
  three = 0;
  four = 0;
  five = 0;
  fiveb = 0;
  six = 0;

  constructor(results, bnum) {
    const amounts = results.map((result) => result.length);
    amounts.forEach((amount) => {
      if (amount === 3) this.three += 1;
      if (amount === 4) this.four += 1;
      if (amount === 5) this.five += 1;
    });

    const six = results.filter((result) => result.length === 6);
    six.forEach((s) => {
      if (s.includes(bnum)) {
        this.fiveb += 1;
      } else {
        this.six += 1;
      }
    });
  }

  printStats() {
    Console.print(`
당첨 통계
---
3개 일치 (5,000원) - ${this.three}개
4개 일치 (50,000원) - ${this.four}개
5개 일치 (1,500,000원) - ${this.five}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.fiveb}개
6개 일치 (2,000,000,000원) - ${this.six}개`);
  }

  calculateProfitRate(money) {
    const sum =
    this.three * 5000 +
    this.four * 50000 +
    this.five * 15000000 +
    this.fiveb * 30000000 +
    this.six * 2000000000;

    return ((sum / money) * 100).toFixed(1);
  }
  
  printProfitRate(money){
    const profitRate = this.calculateProfitRate(money);
    Console.print(
      `총 수익률은 ${profitRate}% 입니다.`
    );
  }
}

export default Stats;
