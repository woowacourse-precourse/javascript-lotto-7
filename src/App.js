import { MissionUtils, Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  constructor() {
    this.purchaseAmount;
    this.buyLottoNumbers = [];
    this.winLottoNumber;
    this.bonusNumber;
    this.hit = {
      5000: 0,
      50000: 0,
      1500000: 0,
      30000000: 0,
      2000000000: 0,
      revenue: 0.0,
    };
  }
  async run() {
    await this.buyLotto();
    await this.winLottoInput();
  }

  async buyLotto() {
    while (true) {
      try {
        this.purchaseAmount = await this.purchaseAmountInput();
      } catch (e) {
        Console.print(e.message);
        continue;
      }
      if (this.purchaseAmount !== undefined) break;
    }
    this.makeLottoNumbers(Number(this.purchaseAmount) / 1000);
    this.printBuyLottos();
  }

  makeLottoNumbers(number) {
    for (let i = 0; i < number; i++) {
      this.buyLottoNumbers.push(new Lotto(this.makeLottoNumber()));
    }
  }

  makeLottoNumber() {
    //1~45까지 겹치지 않는 숫자 6개 반환
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  printBuyLottos() {
    Console.print(`${this.buyLottoNumbers.length}개를 구매했습니다.`);
    this.buyLottoNumbers.forEach((lotto) => {
      lotto.printLotto();
    });
  }

  async purchaseAmountInput() {
    let money = await Console.readLineAsync("구입금액을 입력해 주세요.");
    this.isNum(money);
    if (Number(money) === 0) throw new Error("[ERROR] 숫자를 입력해주세요.");
    if (Number(money) % 1000 !== 0)
      throw new Error("[ERROR] 1000 단위에 맞춰주세요.");
    return money;
  }

  async winLottoInput() {
    while (true) {
      try {
        const winNumbers = await Console.readLineAsync(
          "당첨 번호를 입력해 주세요."
        );
        let lotto = this.string2numbers(winNumbers);
        this.winLottoNumber = new Lotto(lotto);
      } catch (e) {
        Console.print(e.message);
        continue;
      }
      break;
    }
  }

  isNum(number) {
    const re = new RegExp("^[0-9]+$");
    if (!re.test(number)) {
      throw new Error("[ERROR] 숫자를 입력해주세요.");
    }
    return true;
  }

  isLottoNumber(number) {
    if (Number(number) < 1 || 45 < Number(number))
      throw new Error("[ERROR] 1-45사이의 숫자를 입력해주세요.");
  }

  string2numbers(input) {
    if (input.trim() === "") throw new Error("[ERROR] 값을 입력해주세요.");
    let numbers = input.split(",");
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
      this.isNum(numbers[i]);
      this.isLottoNumber(Number(numbers[i]));
      result.push(Number(numbers[i]));
    }
    return result;
  }
}

export default App;
