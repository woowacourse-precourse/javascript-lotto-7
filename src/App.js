import { Console } from "@woowacourse/mission-utils";
import Parser from "./Parser.js";
import UserLotto from "./UserLotto.js";
import Lotto from "./Lotto.js";
import BonusNumber from "./BonusNumber.js";

class App {
  constructor() {
    this.parser = new Parser();
    this.userLotto = new UserLotto();
    this.lotto = null;
    this.bonusNumber = null;
  }

  async run() {
    const purchaseAmountInput = await Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );
    const purchaseAmount = this.parser.parsePurchaseAmount(purchaseAmountInput);

    // 로또 티켓 생성
    Console.print(``);
    this.userLotto.generateUserLottos(purchaseAmount);
    const userLottos = this.userLotto.getUserLottos();
    Console.print(`${userLottos.length}개를 구매했습니다.`);
    for (let i = 0; i < userLottos.length; i++) {
      const ticket = userLottos[i];
      Console.print("[" + ticket.join(", ") + "]");
    }

    const winningNumbersInput = await Console.readLineAsync(
      "\n당첨 번호를 입력해 주세요.\n"
    );
    const winningNumbers = this.parser.parseNumbers(winningNumbersInput);
    this.lotto = new Lotto(winningNumbers);

    const bonusNumberInput = await Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n"
    );
    const bonusNumber = this.parser.parseBonusNumber(bonusNumberInput);
    this.bonusNumber = new BonusNumber(
      bonusNumber,
      this.lotto.getLottoNumber()
    );
  }
}

export default App;
