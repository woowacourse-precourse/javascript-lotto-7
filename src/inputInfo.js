import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Exception from "./exceptionHandling.js";
import Lotto from "./Lotto.js";

class Input {
  constructor(price, numberOfPurchase, lottosNumbers, WinNumbers) {
    this.price = price;
    this.numberOfPurchase = numberOfPurchase;
    this.lottosNumbers = lottosNumbers;
    this.WinNumbers = WinNumbers;
  }

  async inputPrice() {
    this.price = await Console.readLineAsync("구입 금액을 입력해 주세요.\n");
    let exception = new Exception();
    exception.validatePrice(this.price);
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
    Console.print("");
    this.WinLottoNumbers();
  }

  randomNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b
    );
  }

  async WinLottoNumbers() {
    while (true) {
      try {
        this.WinNumbers = await Console.readLineAsync(
          "당첨 번호를 입력해 주세요.\n"
        );
        const winNumberArray = this.WinNumbers.split(",");

        new Lotto(winNumberArray);
        Console.print(this.WinNumbers);
        break;
      } catch (error) {
        Console.print("[ERROR] 로또 번호는 6개여야 합니다.");
      }
    }
  }
}
export default Input;
