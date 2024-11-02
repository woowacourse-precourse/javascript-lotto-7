import { Console, Random } from '@woowacourse/mission-utils';
import { GAME_SETTINGS, LOTTO, MESSAGES } from '../utils/constants.js';

export default function issueLottoTickets(purchaseAmount) {
  const ticketCount = purchaseAmount / LOTTO.TICKET_PRICE;
  const lottoTickets = [];

  for (let i = GAME_SETTINGS.ZERO; i < ticketCount; i++) {
    const ticket = Random.pickUniqueNumbersInRange(
      LOTTO.NUMBER_RANGE.MIN,
      LOTTO.NUMBER_RANGE.MAX,
      LOTTO.WINNING_NUMBERS_COUNT
    );
    lottoTickets.push(ticket.sort((a, b) => a - b));
  }

  Console.print(`${ticketCount}${MESSAGES.TICKET_PURCHASED}`);
  lottoTickets.forEach((ticket) => Console.print(ticket));

  return lottoTickets;
}
