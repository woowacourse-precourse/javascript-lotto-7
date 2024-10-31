import { Console, MissionUtils } from '@woowacourse/mission-utils';

export class Output {
  printLottoTicketCount(lottoTicketCount) {
    Console.print(`\n${lottoTicketCount}개를 구매했습니다.`);
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
      Console.print(ticket);
    });

    return lottoTicket;
  }
}
