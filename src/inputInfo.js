import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Exception from "./exceptionHandling.js";

class Input {
  constructor(price, numberOfPurchase) {
    this.price = price;
    this.numberOfPurchase = numberOfPurchase;
  }

  async inputPrice() {
    let price = await Console.readLineAsync("구입 금액을 입력해 주세요.\n");
    let checkPrice = new Exception();
    checkPrice.validatePrice(price);
    return price;
  }

  purchaseNumber(price) {
    let theNumberOfLotto = price / 1000;
    Console.print(theNumberOfLotto + "개를 구매했습니다.");
    Console.print("");

    this.printLottos(theNumberOfLotto);
  }

  printLottos(numberOfPurchase) {
    for (let i = 0; i < numberOfPurchase; i++) {
      Console.print(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
    }
  }
}
export default Input;
