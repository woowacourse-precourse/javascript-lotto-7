import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  constructor() {
    this.lottos = []; // 초기화
    this.winNum = []; // 초기화
    this.bonusNum = null; // 초기화
  }

  async UserInput() {
    const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    const amount = Number(input);

    if (isNaN(amount) || amount % 1000 !== 0 || amount <= 0) {
      throw new Error("[ERROR] 구입 금액은 1000원 단위여야 합니다.");
    }

    return amount;
  }

  printLottos() {
    this.lottos.forEach((lotto) => {
      const numbers = lotto.getNumbers();
      Console.print(`[${numbers.join(", ")}]`);
    });
  }

  async makeUserLottos() {
    const amount = await this.UserInput();
    const howmany = amount / 1000;

    for (let i = 0; i < howmany; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.lottos.push(new Lotto(numbers));
    }

    Console.print(`\n${howmany}개를 구매했습니다.`);
    this.printLottos();
  }

  parseNumbers(input) {
    const numbers = input.split(",").map((num) => Number(num.trim()));

    if (numbers.some(isNaN)) {
      throw new Error("[ERROR] 숫자만 입력해 주세요.");
    }

    return numbers;
  }

  async inputWinNum() {
    const input = await Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
    const numbers = this.parseNumbers(input);
    this.winNum = new Lotto(numbers).getNumbers();
  }

  async inputBonusNum() {
    const input = await Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n"
    );
    const number = Number(input);

    if (isNaN(number) || number < 1 || number > 45) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    }

    if (this.winNum.includes(number)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }

    this.bonusNum = number;
  }

  async run() {
    try {
      await this.makeUserLottos();
      await this.inputWinNum();
      await this.inputBonusNum();
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
