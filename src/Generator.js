import { ERROR_MESSAGE } from './constants/ERROR_MESSAGES.js';
import { stringToNumber } from './utils/stringToNumber.js';
import { LOTTO } from './constants/LOTTO_CONSTANTS.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import Validator from './Validator.js';

class Generator {
  #purchaseAmount;
  #lottoTickets;

  constructor(input) {
    this.#purchaseAmount = this.#validate(input);
    this.#lottoTickets = this.#calculateLottoTicket();
  }

  generateLotto() {
    const lottos = [];

    for (let i = 0; i < this.#lottoTickets; i++) {
      lottos.push(this.#generateLottoNumber());
    }

    return lottos;
  }

  getPurchaseAmount() {
    return this.#purchaseAmount;
  }

  getLottoTickets() {
    return this.#lottoTickets;
  }

  #generateLottoNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO.NUMBER_MINIMUM_RANGE,
      LOTTO.NUMBER_MAXIMUM_RANGE,
      LOTTO.NUMBER_COUNT
    );
  }

  #calculateLottoTicket() {
    return this.#purchaseAmount / LOTTO.TICKET_PRICE;
  }

  #validate(input) {
    Validator.validateWhitespace(input);
    Validator.validateNaturalNumber(input);
    Validator.validateEmpty(input);
    const numberInput = stringToNumber(input);
    this.#validateDivisibleByTicketPrice(numberInput);

    return numberInput;
  }

  #validateDivisibleByTicketPrice(numberInput) {
    if (numberInput % LOTTO.TICKET_PRICE !== 0) {
      throw new Error(ERROR_MESSAGE.WINNING_AMOUNT_MUST_BE_MULTIPLE_OF_1000);
    }
  }
}

export default Generator;
