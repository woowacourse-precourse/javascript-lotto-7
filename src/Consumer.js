import { Random } from "@woowacourse/mission-utils";

class Consumer {
  #lottoTickets = [];
  constructor(price) {
    for (i = 0; i < a; i++) {
      randomNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
      lotto = new Lotto(randomNumber);
      this.#lottoTickets.push(lotto);
    }
  }

  isPriceNumber(price) {
    if (!/^[0-9]+$/.test(price)) {
      throw new Error(ERROR_MESSAGE.PRICE_NUMBER);
    }
  }

  isUnitOfPrice() {
    if (!(price % 1000 === 0)) {
      throw new Error(ERROR_MESSAGE.PRICE_INCORRECT);
    }
  }

  minPrice() {
    if (price < 1000) {
      throw new Error(ERROR_MESSAGE.MIN_PRICE);
    }
  }

  maxPrice() {
    if (100000 < price) {
      throw new Error(ERROR_MESSAGE.MAX_PRICE);
    }
  }

  lottoCount() {
    lottoNumber = price / 1000;
  }
}
