import { Console, Random } from '@woowacourse/mission-utils';

export default function issueLottoTickets(purchaseAmount) {
  const ticketCount = purchaseAmount / 1000;
  const lottoTickets = [];

  for (let i = 0; i < ticketCount; i++) {
    const ticket = Random.pickUniqueNumbersInRange(1, 45, 6);
    lottoTickets.push(ticket);
  }

  Console.print(`${ticketCount}개를 구매했습니다.`);
  lottoTickets.forEach((ticket) => Console.print(ticket));

  return lottoTickets;
}
