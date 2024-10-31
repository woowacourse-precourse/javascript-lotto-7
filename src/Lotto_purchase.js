import { Console } from "@woowacourse/mission-utils";

class Lotto_purchase {
  constructor(payment) {
    this.validate(payment);
    let lottoQuantity = this.countQuantity(payment);
  }
  validate(payment) {
    if (payment % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1000원 단위로 가능합니다.");
    }
  }
  countQuantity(payment) {
    const price = 1000;
    let lottoQuantity = payment / price;
    return lottoQuantity;
  }
}
export default Lotto_purchase;
