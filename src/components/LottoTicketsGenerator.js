import { Random } from '@woowacourse/mission-utils';
import { Lotto } from '../resources/Constants.js';
import isEmpty from '../utils/isEmpty.js';

class LottoTicketsGenerator {
  #createLottoTicket() {
    return Random.pickUniqueNumbersInRange(
      Lotto.MIN_NUMBER,
      Lotto.MAX_NUMBER,
      Lotto.COUNT,
    );
  }

  #sortAscending(lottoTickets) {
    return lottoTickets.map((ticket) => ticket.slice().sort((a, b) => a - b));
  }

  execute(purchaseAmount) {
    if (!isEmpty(purchaseAmount)) {
      const ticketCount = purchaseAmount / 1000;

      const lottoTickets = Array.from({ length: ticketCount }, () =>
        this.#createLottoTicket(),
      );

      return this.#sortAscending(lottoTickets);
    }

    return null;
  }
}

export default LottoTicketsGenerator;
