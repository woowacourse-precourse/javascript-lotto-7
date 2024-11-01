import { Random } from "@woowacourse/mission-utils";
import LottoIO from "./LottoIO.js";

export const LOTTO_PRICE = 1000;

class Lotto {
  // #numbers;

  // constructor(numbers) {
  //   this.#validate(numbers);
  //   this.#numbers = numbers;
  // }

  // #validate(numbers) {
  //   if (numbers.length !== 6) {
  //     throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  //   }
  // }

  static #throwLottoError(message) {
    throw new Error(`[ERROR] ${message}`);
  }

  // TODO: 추가 기능 구현

  static async buy() {
    const money = await this.#getUserAmount();
    const lottoCount = this.#pay2Lotto(money, LOTTO_PRICE);

    LottoIO.print(`\n${lottoCount}개를 구매했습니다.`);

    const lottos = this.#scratch(lottoCount);

    lottos.forEach((lotto) => {
      LottoIO.print(lotto);
    });

    return;
  }

  static #scratch(count) {
    return Array.from({ length: count }, () =>
      Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b)
    );
  }

  static async #getUserAmount() {
    let amount = null;

    do {
      amount = await LottoIO.getUserInput("구입금액을 입력해 주세요.\n");
      amount = this.#parseAmount(amount);
    } while (!this.#isValidAmount(amount));

    return amount;
  }

  static #parseAmount(number) {
    if (!number || number === "0") return -1;

    return Number(number);
  }

  static #isValidAmount(amount) {
    try {
      this.#validateAmount(amount);

      return true;
    } catch ({ message }) {
      LottoIO.print(message);

      return false;
    }
  }

  static #validateAmount(amount) {
    if (!this.#isNumber(amount)) {
      this.#throwLottoError("숫자를 입력해 주세요.");
    }

    if (!Number.isInteger(amount) || amount < LOTTO_PRICE) {
      this.#throwLottoError(`${LOTTO_PRICE}원 이상 입력해 주세요.`);
    }

    if (!Number.isSafeInteger(amount)) {
      this.#throwLottoError(
        `금액이 너무 큽니다. ${Number.MAX_SAFE_INTEGER} 이하로 입력해 주세요`
      );
    }

    const lottoCount = this.#pay2Lotto(amount, LOTTO_PRICE);
    const isDemical = !Number.isInteger(lottoCount);
    if (isDemical) {
      this.#throwLottoError(`${LOTTO_PRICE}원 단위로 입력해 주세요.`);
    }
  }

  static #pay2Lotto(money, price) {
    this.#validatePay2Lotto(money, price);

    return money / price;
  }

  static #validatePay2Lotto(money, price) {
    if (!this.#isNumber(money) || !this.#isNumber(price)) {
      this.#throwLottoError("로또의 금액과 가격은 숫자로 입력해 주세요.");
    }

    if (money < 0 || price < 0) {
      this.#throwLottoError("로또의 금액과 가격은 양수입니다.");
    }
  }

  static #isNumber(number) {
    return typeof number === "number" && !Number.isNaN(number);
  }
}

export default Lotto;
