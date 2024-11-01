import { LOTTO_UNIT_PRICE } from "../config/constants.js";
import { Random } from "@woowacourse/mission-utils";

export default class PurchasedLottoModel {
  constructor(amount) {
    this.amount = amount;
    this.purchasedLottos = [];
    this.generateLottos();
  }

  calculateLottoCount() {
    return Math.floor(this.amount / LOTTO_UNIT_PRICE);
  }

  generateLottos() {
    const count = this.calculateLottoCount();
    for (let lottoCount = 0; lottoCount < count; lottoCount++) {
      const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      );
      this.purchasedLottos.push(lottoNumbers);
    }
  }

  getPurchasedLottos() {
    return this.purchasedLottos;
  }
}
