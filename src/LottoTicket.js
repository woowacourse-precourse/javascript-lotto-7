import Lotto from './Lotto.js';
import { Random } from '@woowacourse/mission-utils';

function LottoTickets(count) {
  const tickets = [];
  for (let i = 0; i < count; i++) {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    tickets.push(new Lotto(numbers));
  }
  return tickets;
}

export default LottoTickets;
