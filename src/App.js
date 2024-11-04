import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { LOTTO_PRICE } from "./Constants.js";

class App {
  async run() {
    const amount = await Console.readLineAsync(
      "구입 금액을 입력해 주세요.\n"
    );
    const count =
      parseInt(amount, 10) / LOTTO_PRICE;
    Console.print(`\n${count}개를 구매했습니다.`);

    this.lottos = Array.from(
      { length: count },
      () => new Lotto()
    );
    this.lottos.forEach((lotto) =>
      Console.print(lotto.getNumbers())
    );

    await this.askWinningNumbers();
  }

  async askWinningNumbers() {
    const numbers = await Console.readLineAsync(
      "\n당첨 번호를 입력해 주세요.\n"
    );
    this.winningNumbers = numbers
      .split(",")
      .map(Number);
    await this.askBonusNumber();
  }

  async askBonusNumber() {
    const number = await Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n"
    );
    this.bonusNumber = parseInt(number, 10);
  }
}

export default App;
