import { Console } from "@woowacourse/mission-utils";
import Parser from "./Parser.js";
import UserLotto from "./UserLotto.js";
import Lotto from "./Lotto.js";
import BonusNumber from "./BonusNumber.js";
import LottoResult from "./LottoResult.js";

class App {
  constructor() {
    this.parser = new Parser();
    this.userLotto = new UserLotto();
    this.lotto = null;
    this.bonusNumber = null;
    this.lottoResult = new LottoResult();
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

    // 등수 계산
    this.lottoResult.calculateRank(
      userLottos,
      this.lotto.getLottoNumber(),
      this.bonusNumber.getBonusNumber()
    );

    // 당첨 금액과 수익률 계산
    const winningAmount = this.lottoResult.calculateWinningAmount();
    const profitRate = this.lottoResult.calculateProfitRate(
      winningAmount,
      purchaseAmount
    );

    // 결과 출력
    Console.print("\n당첨 통계");
    Console.print("---");
    Console.print(`3개 일치 (5,000원) - ${this.lottoResult.ranks[5]}개`);
    Console.print(`4개 일치 (50,000원) - ${this.lottoResult.ranks[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.lottoResult.ranks[3]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.lottoResult.ranks[2]}개`
    );
    Console.print(
      `6개 일치 (2,000,000,000원) - ${this.lottoResult.ranks[1]}개`
    );
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default App;
