import { Console } from "@woowacourse/mission-utils";
import Exception from "./exceptionHandling.js";
import Lotto from "./Lotto.js";
import Utils from "./utils.js";

class Input {
  constructor() {
    this.price = 0;
    this.numberOfPurchase = 0;
    this.lottoslist = [];
    this.winNumbers = null;
    this.bonusNumber = null;
    this.errorHandler = new Exception();
    this.utils = new Utils();
    this.matches = [];
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
      this.lottoslist.push(this.utils.randomNumbers());
    }
    Console.print("");
  }

  printLottos() {
    this.lottoslist.forEach((numbers) => {
      Console.print(numbers);
    });
    Console.print("");
  }

  async winLottoNumbers() {
    let retry = true;
    while (retry) {
      let numbers = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
      let splitNumber = numbers.split(",").map((num) => Number(num.trim()));

      try {
        const lotto = new Lotto(splitNumber);
        this.winNumbers = lotto.numbers;
        retry = false;
      } catch (error) {
        Console.print("");
      }
    }
    Console.print("");
  }

  async winBonusNumber() {
    let retry = true;
    while (retry) {
      let number = await Console.readLineAsync(
        "보너스 번호를 입력해주세요. \n"
      );
      try {
        this.bonusNumber = this.errorHandler.validateBonusNumber(
          number,
          this.winNumbers
        );
        retry = false;
      } catch (error) {
        Console.print("");
      }
    }
  }

  // 구입한 로또 번호와 당첨 번호를 비교하고 몇 개의 수가 일치하는지 확인
  numbersMatch(lottoNumbers, winningNumbers, bonus) {
    lottoNumbers = this.lottoslist;
    winningNumbers = this.winNumbers;
    bonus = this.bonusNumber;

    let hasBonus = null;
    for (let i = 0; i < lottoNumbers.length; i++) {
      let match = lottoNumbers[i].filter((num) =>
        winningNumbers.includes(num)
      ).length;
      hasBonus = lottoNumbers[i].includes(bonus);
      this.matches.push([match, hasBonus]);
    }
    Console.print(this.matches);
    return this.matches;
  }
}

export default Input;
