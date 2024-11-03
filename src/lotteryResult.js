import { Console } from '@woowacourse/mission-utils';

export default class LotteryResult {
   static printResults(tickets, winningNumbers, bonusNumber, purchaseAmount) {
      const resultCount = {
         '3개 일치 (5,000원)': 0,
         '4개 일치 (50,000원)': 0,
         '5개 일치 (1,500,000원)': 0,
         '5개 일치, 보너스 볼 일치 (30,000,000원)': 0,
         '6개 일치 (2,000,000,000원)': 0,
      };

      tickets.forEach((ticket) => {
         const matchCount = this.countMatches(ticket, winningNumbers);
         if (matchCount === 6) {
            resultCount['6개 일치 (2,000,000,000원)']++;
         } else if (matchCount === 5 && ticket.includes(bonusNumber)) {
            resultCount['5개 일치, 보너스 볼 일치 (30,000,000원)']++;
         } else if (matchCount === 5) {
            resultCount['5개 일치 (1,500,000원)']++;
         } else if (matchCount === 4) {
            resultCount['4개 일치 (50,000원)']++;
         } else if (matchCount === 3) {
            resultCount['3개 일치 (5,000원)']++;
         }
      });

      this.printResultSummary(resultCount, purchaseAmount);
   }

   static countMatches(ticketNumbers, winningNumbers) {
      return ticketNumbers.filter((num) => winningNumbers.includes(num)).length;
   }

   static printResultSummary(resultCount, purchaseAmount) {
      Console.print('당첨 통계\n---');

      for (const key in resultCount) {
         if (resultCount.hasOwnProperty(key)) {
            Console.print(`${key} - ${resultCount[key]}개`);
         }
      }

      const totalEarnings = this.calculateTotalEarnings(resultCount);

      const profit = ((totalEarnings / purchaseAmount) * 100).toFixed(1);

      Console.print(`총 수익률은 ${profit}%입니다.`);
   }

   static calculateTotalEarnings(resultCount) {
      return (
         resultCount['3개 일치 (5,000원)'] * 5000 +
         resultCount['4개 일치 (50,000원)'] * 50000 +
         resultCount['5개 일치 (1,500,000원)'] * 1500000 +
         resultCount['5개 일치, 보너스 볼 일치 (30,000,000원)'] * 30000000 +
         resultCount['6개 일치 (2,000,000,000원)'] * 2000000000
      );
   }
}
