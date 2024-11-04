import { Console, Random } from "@woowacourse/mission-utils";

class Lotto_purchase {
  constructor(payment) {
    this.validate(payment);
    let lottoQuantity = this.countQuantity(payment);
    let myLottoArray = this.randomLottoDraw(lottoQuantity);
    this.printMyLottoArray(lottoQuantity, myLottoArray);
    return myLottoArray;
  }
  validate(payment) {
    if (isNaN(payment)) {
      throw new Error("[ERROR] 구입 금액에 문자가 포함될 수 없습니다.");
    }

    if (payment <= 0) {
      throw new Error("[ERROR] 구입 금액을 음수로 입력할 수 없습니다.");
    }

    if (payment == "") {
      throw new Error("[ERROR] 구입 금액을 입력하지 않았습니다.");
    }

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
      let myLotto = Random.pickUniqueNumbersInRange(1, 45, 6).sort(function (
        a,
        b
      ) {
        return a - b;
      });
      myLottoArray.push(myLotto);
    }
    return myLottoArray;
  }

  printMyLottoArray(lottoQuantity, myLottoArray) {
    Console.print("\n" + lottoQuantity + "개를 구매했습니다.");
    myLottoArray.forEach((myLotto) => {
      let myLottoStr = myLotto.join(", ");
      Console.print("[" + myLottoStr + "]");
    });
    Console.print("");
  }
}
export default Lotto_purchase;
