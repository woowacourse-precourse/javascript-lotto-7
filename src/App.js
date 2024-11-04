import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  #lottos = [];
  #winningNumbers = [];
  #bonusNumber;

  async run() {}
  async getValidAmount() {
    const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    const amount = Number(input);

    if (isNaN(amount) || amount % 1000 !== 0 || amount <= 0) {
      throw new Error("[ERROR] 구입 금액은 1000원 단위여야 합니다.");
    }

    return amount;
  }

  async purchaseLottos() {
    const amount = await this.getValidAmount();
    const count = amount / 1000;

    for (let i = 0; i < count; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.#lottos.push(new Lotto(numbers));
    }

    Console.print(`\n${count}개를 구매했습니다.`);
    this.printLottos();
  }

  printLottos() {
    this.#lottos.forEach((lotto) => {
      Console.print(JSON.stringify(lotto.getNumbers()));
    });
  }
  async inputWinningNumbers() {
    const input = await Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
    const numbers = this.parseNumbers(input);
    this.#winningNumbers = new Lotto(numbers).getNumbers();
  }

  async inputBonusNumber() {
    const input = await Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n"
    );
    const number = Number(input);

    if (isNaN(number) || number < 1 || number > 45) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    }

    if (this.#winningNumbers.includes(number)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }

    this.#bonusNumber = number;
  }

  parseNumbers(input) {
    const numbers = input.split(",").map((num) => Number(num.trim()));

    if (numbers.some(isNaN)) {
      throw new Error("[ERROR] 숫자만 입력해 주세요.");
    }

    return numbers;
  }
}

export default App;
