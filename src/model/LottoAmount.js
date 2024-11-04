import * as numberConfig from "../config/numberConfig.js";

class LottoAmount {
  #amount;

  constructor(amount) {
    this.#validateNull(amount);
    this.#validateInputType(amount);
    this.#validateMinAmount(amount);
    this.#validateUnitAmount(amount);
    this.#amount = amount;
  }

  getAmount() {
    return this.#amount;
  }

  #validateNull(amount) {
    if (amount == "") {
      throw new Error("\n[ERROR] 구입금액은 공백으로 둘 수 없습니다.");
    }
  }

  #validateInputType(amount) {
    if (typeof amount == !Number) {
      throw new Error("\n[ERROR] 숫자만 입력할 수 있습니다.");
    }
  }

  #validateMinAmount(amount) {
    if (amount < numberConfig.LOTTO_AMOUNT_UNIT) {
      throw new Error("\n[ERROR] 최소 1,000원부터 입력할 수 있습니다.");
    }
  }

  #validateUnitAmount(amount) {
    if (!Number.isInteger(amount / numberConfig.LOTTO_AMOUNT_UNIT)) {
      throw new Error("\n[ERROR] 1,000원 단위만 입력할 수 있습니다.");
    }
  }
}

export default LottoAmount;
