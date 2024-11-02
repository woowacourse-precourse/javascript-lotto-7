import { Console } from "@woowacourse/mission-utils";
import Exception from "./exceptionHandling.js";
import Lotto from "./Lotto.js";
import Utils from "./utils.js";

class Input {
  constructor() {
    this.price = 0;
    this.numberOfPurchase = 0;
    this.lottosNumbers = [];
    this.winNumbers = null;
    this.bonusNumber = null;
    this.errorHandler = new Exception();
    this.utils = new Utils();
  }

  async inputPrice() {
    let retry = true;
    while (retry) {
      let price = await Console.readLineAsync("구입 금액을 입력해 주세요.\n");
      try {
        this.price = this.errorHandler.validatePrice(price);
        retry = false;
      } catch (error) {
        Console.print("[ERROR] 구입 금액을 1000 단위로 입력해주세요.");
      }
    }
  }

  purchaseNumber() {
    let theNumberOfLotto = this.price / 1000;
    Console.print("");
    Console.print(theNumberOfLotto + "개를 구매했습니다.");
    this.numberOfPurchase = theNumberOfLotto;
  }

  listLottos() {
    let numberOfPurchase = this.numberOfPurchase;
    for (let i = 0; i < numberOfPurchase; i++) {
      this.lottosNumbers.push(this.utils.randomNumbers());
    }
    Console.print("");
  }

  printLottos() {
    this.lottosNumbers.forEach((numbers) => {
      Console.print(numbers);
    });
  }

  async winLottoNumbers() {
    let retry = true;
    while (retry) {
      let numbers = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
      let splitNumber = numbers.split(",").map((num) => num.trim());

      try {
        const lotto = new Lotto(splitNumber);
        this.winNumbers = lotto.numbers;
        retry = false;
      } catch (error) {
        Console.print("");
      }
    }
  }

  async winBonusNumber() {
    let retry = true;
    while (retry) {
      let number = await Console.readLineAsync(
        "보너스 번호를 입력해주세요. \n"
      );
      try {
        this.bonusNumber = this.errorHandler.validateBonusNumber(number);
        retry = false;
      } catch (error) {
        Console.print("");
      }
    }
  }
}
export default Input;
