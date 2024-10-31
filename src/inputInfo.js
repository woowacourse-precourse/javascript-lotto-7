import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Exception from "./exceptionHandling.js";

class Input {
  constructor(price, numberOfPurchase, lottosNumbers) {
    this.price = price;
    this.numberOfPurchase = numberOfPurchase;
    this.lottosNumbers = lottosNumbers;
  }

  async inputPrice() {
    this.price = await Console.readLineAsync("구입 금액을 입력해 주세요.\n");
    let checkPrice = new Exception();
    checkPrice.validatePrice(this.price);
    return this.price;
  }

  purchaseNumber(price) {
    let theNumberOfLotto = price / 1000;
    Console.print(theNumberOfLotto + "개를 구매했습니다.");
    Console.print("");

    this.printLottos(theNumberOfLotto);
  }

  printLottos(numberOfPurchase) {
    this.lottosNumbers = [];
    for (let i = 0; i < numberOfPurchase; i++) {
      let numbers = this.randomNumbers();
      this.lottosNumbers.push(numbers);
      Console.print(numbers);
    }
    Console.print(this.lottosNumbers);
  }

  randomNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b
    );
  }
}
export default Input;
