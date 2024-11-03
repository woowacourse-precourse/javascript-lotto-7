import LottoIO from "./LottoIO.js";
import { isNumber } from "./utils.js";
import { LOTTO_PRICE } from "./constants.js";

class Money {
  #money;

  constructor(money) {
    Money.#validateAmount(money);
    this.#money = money;
  }

  static async createPurchaseLotto() {
    while (true) {
      try {
        const money = await this.#getMoney();

        return new Money(Number(money));
      } catch ({ message }) {
        LottoIO.print(message || "알 수 없는 에러");
      }
    }
  }

  get money() {
    return this.#money;
  }

  static async #getMoney() {
    return await LottoIO.getUserInput("구입금액을 입력해 주세요.\n");
  }

  static #validateAmount(amount) {
    this.#checkNumber(amount);
    this.#checkRestrictPrice(amount);
    this.#checkHugeMoney(amount);
    this.#checkMinimumPrice(amount);
  }

  static #checkNumber(amount) {
    if (!isNumber(amount)) {
      LottoIO.throwError("숫자를 입력해 주세요.");
    }
  }

  static #checkRestrictPrice(amount) {
    if (!Number.isInteger(amount) || amount < LOTTO_PRICE) {
      LottoIO.throwError(`${LOTTO_PRICE}원 이상 입력해 주세요.`);
    }
  }

  static #checkHugeMoney(amount) {
    if (!Number.isSafeInteger(amount)) {
      LottoIO.throwError(
        `금액이 너무 큽니다. ${Number.MAX_SAFE_INTEGER} 이하로 입력해 주세요`
      );
    }
  }

  static #checkMinimumPrice(amount) {
    const lottoCount = this.pay2Lotto(amount, LOTTO_PRICE);
    const isDemical = !Number.isInteger(lottoCount);
    if (isDemical) {
      LottoIO.throwError(`${LOTTO_PRICE}원 단위로 입력해 주세요.`);
    }
  }

  static pay2Lotto(money, price) {
    this.#validatePay2Lotto(money, price);

    return money / price;
  }

  static #validatePay2Lotto(money, price) {
    if (!isNumber(money) || !isNumber(price)) {
      LottoIO.throwError("로또의 금액과 가격은 숫자로 입력해 주세요.");
    }

    if (money < 0 || price < 0) {
      LottoIO.throwError("로또의 금액과 가격은 양수입니다.");
    }
  }
}

export default Money;
