import {
  LOTTO_NUMBER_COUNT,
  LOTTO_NUMBER_MAX,
  LOTTO_NUMBER_MIN,
  LOTTO_UNIT_PRICE,
} from "../config/constants.js";
import { MissionUtils } from "@woowacourse/mission-utils";

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
      const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
        LOTTO_NUMBER_MIN,
        LOTTO_NUMBER_MAX,
        LOTTO_NUMBER_COUNT
      ).sort((a, b) => a - b);
      this.purchasedLottos.push(lottoNumbers);
    }
  }

  getPurchasedLottos() {
    return this.purchasedLottos;
  }
}
