import { Random } from '@woowacourse/mission-utils';
import { Lotto } from '../resources/Constants.js';
import isEmpty from '../utils/isEmpty.js';
import { sort2DArrayAscending } from '../utils/ArrayUtils.js';

class LottoTicketsGenerator {
  #createLottoTicket() {
    return Random.pickUniqueNumbersInRange(
      Lotto.MIN_NUMBER,
      Lotto.MAX_NUMBER,
      Lotto.COUNT,
    );
  }

  execute(purchaseAmount) {
    if (!isEmpty(purchaseAmount)) {
      const ticketCount = purchaseAmount / 1000;

      const lottoTickets = Array.from({ length: ticketCount }, () =>
        this.#createLottoTicket(),
      );

      return sort2DArrayAscending(lottoTickets);
    }

    return null;
  }
}

export default LottoTicketsGenerator;
