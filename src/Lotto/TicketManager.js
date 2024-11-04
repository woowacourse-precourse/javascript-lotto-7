import Lotto from './Lotto.js';
import { Console, Random } from '@woowacourse/mission-utils';

class TicketManager {
	static generateLottos(ticketCount) {
		return Array.from({ length: ticketCount }, () =>
			new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6))
		);
	}

	static printLottos(lottoTickets) {
		lottoTickets.forEach((ticket) => {
			Console.print(`[${ticket.getNumbers().join(', ')}]`);
		});
	}
}

export default TicketManager;
