import { Console } from '@woowacourse/mission-utils';

export default class StatisticsService {
  printStatistics(rankCounts) {
    Console.print('당첨 통계\n---');
    Console.print(`3개 일치 (5,000원) - ${rankCounts.threeMatch.ticket}개`);
    Console.print(`4개 일치 (50,000원) - ${rankCounts.fourMatch.ticket}개`);
    Console.print(`5개 일치 (1,500,000원) - ${rankCounts.fiveMatch.ticket}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${rankCounts.fiveMatchWithBonus.ticket}개`,
    );
    Console.print(
      `6개 일치 (2,000,000,000원) - ${rankCounts.sixMatch.ticket}개`,
    );
  }

  calculateTotalRevenue(rankCounts) {
    return Object.values(rankCounts).reduce(
      (total, { ticket, prize }) => total + ticket * prize,
      0,
    );
  }

  printRevenueRate(rankCounts, paidAmount) {
    const totalRevenue = this.calculateTotalRevenue(rankCounts);
    const revenueRate = (totalRevenue / paidAmount) * 100;
    Console.print(`총 수익률은 ${revenueRate.toFixed(2)}%입니다.`);
  }
}
