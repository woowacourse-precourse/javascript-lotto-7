import { Console, MissionUtils } from '@woowacourse/mission-utils';

export class Output {
  printLottoTicketCount(lottoTicketCount) {
    Console.print(`${lottoTicketCount}개를 구매했습니다.`);
  }

  printLottoTicket(lottoTicketCount) {
    const lottoTicket = [];

    for (let i = 0; i < lottoTicketCount; i++) {
      const ticket = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const sortedNum = ticket.sort(function (a, b) {
        return a - b;
      });
      lottoTicket.push(sortedNum);
    }

    lottoTicket.forEach((ticket) => {
      Console.print(`[${ticket.join(', ')}]`);
    });

    return lottoTicket;
  }

  printWinnerRank(rankCounts) {
    Console.print(`
당첨 통계
---
3개 일치 (5,000원) - ${rankCounts[3].count}개
4개 일치 (50,000원) - ${rankCounts[4].count}개
5개 일치 (1,500,000원) - ${rankCounts[5].count}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${rankCounts[5.5].count}개
6개 일치 (2,000,000,000원) - ${rankCounts[6].count}개
    `);
  }

  printRateOfReturn(rateOfReturn) {
    Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  }
}
