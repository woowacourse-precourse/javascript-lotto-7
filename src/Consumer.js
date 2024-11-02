import { Random } from "@woowacourse/mission-utils";

class Consumer {
  #lottoTickets = [];

  constructor(price) {}

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

  getOrderLotto() {
    for (i = 0; i < a; i++) {
      randomNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
      lotto = new Lotto(randomNumber);
      this.#lottoTickets.push(lotto);
    }
  }
  ///당첨번호 유효성
  CheckWinningNumberInput() {
    if (!/^[0-9]+(,[0-9]+)*$/.test(winningNumber)) {
      throw new Error(ERROR_MESSAGE.ONLY_NUMBER_COMMA);
    }
  }
  isWinningNumberLength() {
    const maxNum = 7;
    if (winningNumber > maxNum) {
      throw new Error(ERROR_MESSAGE.MAX_PRICE);
    }
  }
}
