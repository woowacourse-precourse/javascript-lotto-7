import { PURCHASE_ERROR_MESSAGES } from './constants/ERROR_MESSAGES.js';
import { stringToNumber } from './utils/stringToNumber.js';
import { LOTTO } from './constants/LOTTO_CONSTANTS.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import Validator from './Validator.js';

class Generator {
  #purchaseAmount;
  #lottoTickets;
  numbers = [];

  constructor(input) {
    this.#purchaseAmount = this.#validate(input);
    this.#lottoTickets = this.#calculateLottoTicket();
  }

  generateLotto() {
    for (let i = 0; i < this.#lottoTickets; i++) {
      this.numbers.push(this.#generateLottoNumber());
    }

    return this.numbers;
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
      throw new Error(
        PURCHASE_ERROR_MESSAGES.PURCHASE_AMOUNT_MUST_BE_MULTIPLE_OF_1000
      );
    }
  }
}

export default Generator;
