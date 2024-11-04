import Lotto from './Lotto.js';
import { Console, Random } from '@woowacourse/mission-utils';

import { LOTTO_MIN_NUMBER, LOTTO_MAX_NUMBER, LOTTO_NUMBERS } from './constants.js';

class TicketManager {
	static generateLottos(ticketCount) {
		return Array.from({ length: ticketCount }, () =>
			new Lotto(Random.pickUniqueNumbersInRange(LOTTO_MIN_NUMBER, LOTTO_MAX_NUMBER, LOTTO_NUMBERS))
		);
	}

	static printLottos(lottoTickets) {
		lottoTickets.forEach((ticket) => {
			Console.print(`[${ticket.getNumbers().join(', ')}]`);
		});
	}
}

export default TicketManager;
