import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const purchaseAmount = await Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );

    const winningNumbers = await Console.readLineAsync(
      "\n당첨 번호를 입력해 주세요.\n"
    );

    const bonusNumber = await Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n"
    );

    Console.print(`구입금액: ${purchaseAmount}`);
    Console.print(`당첨 번호: ${winningNumbers}`);
    Console.print(`보너스 번호: ${bonusNumber}`);
  }
}

export default App;
