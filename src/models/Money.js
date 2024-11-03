import LOTTO_CONSTANTS from '../constants/lottoConstatns.js';

class Money {
  #money;

  constructor(money) {
    const parsedMoney = Number(money);
    this.#validate(parsedMoney);
    this.#money = parsedMoney;
  }

  calculateLottoCount() {
    return this.#money / LOTTO_CONSTANTS.LOTTO_PRICE;
  }

  #validate(money) {
    this.#validateType(money);
    this.#validateUnit(money);
  }

  #validateType(money) {
    if (Number.isNaN(money)) {
      throw Error('[ERROR] 구매 금액으로 숫자가 아닌 값을 입력할 수 없습니다!');
    }
  }

  #validateUnit(money) {
    if (money % LOTTO_CONSTANTS.LOTTO_PRICE !== 0) {
      throw Error('[ERROR] 구매 금액을 1000원 단위로 입력해 주세요!');
    }
  }
}

export default Money;
