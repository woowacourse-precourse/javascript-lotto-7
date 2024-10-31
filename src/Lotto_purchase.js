import { Random } from "@woowacourse/mission-utils";

class Lotto_purchase {
  constructor(payment) {
    this.validate(payment);
    let lottoQuantity = this.countQuantity(payment);
    let myLottoArray = this.randomLottoDraw(lottoQuantity);
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

  randomLottoDraw(lottoQuantity) {
    let myLottoArray = [];
    for (let index = 0; index < lottoQuantity; index++) {
      myLottoArray.push(Random.pickUniqueNumbersInRange(1, 45, 6));
    }
    return myLottoArray;
  }
}
export default Lotto_purchase;
