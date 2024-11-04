import { Console } from '@woowacourse/mission-utils';

class Statistics {
  constructor(gradeArray, purchaseAmount) {
    this.gradeArray = gradeArray;
    this.purchaseAmount = purchaseAmount;
    this.printResult();
  }

  printResult() {
    Console.print('\n당첨 통계');
    Console.print('---');

    Console.print('3개 일치 (5,000원) - ' + this.gradeArray[5] + '개');
    Console.print('4개 일치 (50,000원) - ' + this.gradeArray[4] + '개');
    Console.print('5개 일치 (1,500,000원) - ' + this.gradeArray[3] + '개');
    Console.print(
      '5개 일치, 보너스 볼 일치 (30,000,000원) - ' + this.gradeArray[2] + '개'
    );
    Console.print('6개 일치 (2,000,000,000원) - ' + this.gradeArray[1] + '개');
    Console.print('총 수익률은 ' + this.getRateOfReturn() + '%입니다.');
  }

  getRateOfReturn() {
    const totalProfit =
      this.gradeArray[1] * 2_000_000_000 +
      this.gradeArray[2] * 30_000_000 +
      this.gradeArray[3] * 1_500_000 +
      this.gradeArray[4] * 50_000 +
      this.gradeArray[5] * 5_000;

    const rateOfReturn = Number(
      ((totalProfit / this.purchaseAmount) * 100).toFixed(2)
    ).toLocaleString('ko-KR');

    return rateOfReturn;
  }
}

export default Statistics;
