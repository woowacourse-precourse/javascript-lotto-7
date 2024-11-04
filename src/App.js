import { Console } from "@woowacourse/mission-utils";
import Parser from "./Parser.js";

class App {
  constructor() {
    this.parser = new Parser();
  }

  async run() {
    const purchaseAmountInput = await Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );
    const purchaseAmount = this.parser.parsePurchaseAmount(purchaseAmountInput);

    const winningNumbersInput = await Console.readLineAsync(
      "\n당첨 번호를 입력해 주세요.\n"
    );
    const winningNumbers = this.parser.parseNumbers(winningNumbersInput);

    const bonusNumberInput = await Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n"
    );
    const bonusNumber = this.parser.parseBonusNumber(bonusNumberInput);

    Console.print(`구입 금액: ${purchaseAmount}`);
    Console.print(`당첨 번호: ${winningNumbers}`);
    Console.print(`보너스 번호: ${bonusNumber}`);
  }
}

export default App;
