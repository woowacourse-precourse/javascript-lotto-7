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
    this.results = { first: 0, second: 0, third: 0, fourth: 0, fifth: 0 };
    this.prizes = {
      first: 2000000000,
      second: 30000000,
      third: 1500000,
      fourth: 50000,
      fifth: 5000,
    };
    this.totalProfit = 0;
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
  numbersMatch(list, winNumbers, bonusNumber) {
    let matchCount = list.filter((num) => winNumbers.includes(num)).length;
    let hasBonus = list.includes(bonusNumber);

    return {
      matchCount: matchCount,
      hasBonus: hasBonus,
    };
  }

  // 로또 번호 리스트를 확인하여 등수 결과를 처리하는 함수
  checkLottoMatch() {
    for (let i = 0; i < this.lottoslist.length; i++) {
      let matchResult = this.numbersMatch(
        this.lottoslist[i],
        this.winNumbers,
        this.bonusNumber
      );
      if (matchResult.matchCount === 6) {
        this.results.first++;
      } else if (matchResult.matchCount === 5 && matchResult.hasBonus) {
        this.results.second++;
      } else if (matchResult.matchCount === 5) {
        this.results.third++;
      } else if (matchResult.matchCount === 4) {
        this.results.fourth++;
      } else if (matchResult.matchCount === 3) {
        this.results.fifth++;
      } else {
        null;
      }
      this.totalProfit += this.calculateProfit(
        matchResult.matchCount,
        matchResult.hasBonus
      );
    }
    Console.print(this.results);
    Console.print(this.totalProfit);
  }

  calculateProfit(matchCount, hasBonus) {
    if (matchCount === 6) {
      return this.prizes.fifth;
    } else if (matchCount === 5 && hasBonus) {
      return this.prizes.second;
    } else if (matchCount === 5) {
      return this.prizes.third;
    } else if (matchCount === 4) {
      return this.prizes.fourth;
    } else if (matchCount === 3) {
      return this.prizes.fifth;
    } else {
      return 0;
    }
  }
}

export default Input;
