import { Random } from '@woowacourse/mission-utils';
import Lotto from '../Model/Lotto.js';
import { BOUND, SIZE, LOTTO_PRICE } from '../Constants/lottoConstants.js';

class MoneyToLottos {
  #ticketCount;
  constructor(purchseAmount) {
    this.#ticketCount = purchseAmount / LOTTO_PRICE;
  }
  generateLottoTickets() {
    return Array.from(
      { length: this.#ticketCount },
      () => new Lotto(this.generateLottoNumbers())
    );
  }
  generateLottoNumbers() {
    const numbers = Random.pickUniqueNumbersInRange(
      BOUND.LOWER,
      BOUND.UPPER,
      SIZE
    );
    return numbers.sort((a, b) => a - b);
  }
}

export default MoneyToLottos;
