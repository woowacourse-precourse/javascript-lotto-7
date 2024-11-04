import { Console } from "@woowacourse/mission-utils";
import Parser from "./Parser.js";
import UserLotto from "./UserLotto.js";
import Lotto from "./Lotto.js";
import BonusNumber from "./BonusNumber.js";
import LottoResult from "./LottoResult.js";
import Display from "./Display.js";

class App {
  constructor() {
    this.parser = new Parser();
    this.userLotto = new UserLotto();
    this.lotto = null;
    this.bonusNumber = null;
    this.lottoResult = new LottoResult();
    this.display = new Display();
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
    this.display.displayTickets(userLottos);

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
    this.display.displayRankNumber(this.lottoResult.ranks);
    this.display.displayReturn(profitRate);
  }
}

export default App;
