import { isNaturalNumber } from './utils/isNaturalNumber.js';
import { ERROR_MESSAGE } from './constants/ERROR_MESSAGES.js';
import { stringToNumber } from './utils/stringToNumber.js';
import { LOTTO } from './constants/LOTTO_CONSTANTS.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class Generator {
  #purchaseAmount;
  #lottoTickets;

  constructor(input) {
    this.#validateNaturalNumber(input);
    const numberInput = stringToNumber(input);
    this.#validateDivisibleByTicketPrice(numberInput);
    this.#purchaseAmount = numberInput;
    this.#lottoTickets = this.#calculateLottoTicket();
  }

  #calculateLottoTicket() {
    return this.#purchaseAmount / LOTTO.TICKET_PRICE;
  }

  #validateNaturalNumber(input) {
    if (!isNaturalNumber(input)) {
      throw new Error(ERROR_MESSAGE.NOT_A_NATURAL_NUMBER);
    }
  }

  #validateDivisibleByTicketPrice(numberInput) {
    if (numberInput % LOTTO.TICKET_PRICE !== 0) {
      throw new Error(ERROR_MESSAGE.WINNING_AMOUNT_MUST_BE_MULTIPLE_OF_1000);
    }
  }
}

export default Generator;
