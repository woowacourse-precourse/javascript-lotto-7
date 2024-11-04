import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import InputHandler from "./InputHandler.js";
import Printer from "./Printer.js";
import Calculator from "./Calculator.js";

class App {
  constructor() {
    this.inputHandler = new InputHandler();
    this.printer = new Printer();
    this.calculator = new Calculator();
  }

  // 애플리케이션 실행
  async run() {
    const purchaseMoney = await this.inputHandler.getPurchaseMoney();

    // 유효성 검사: 1000원 단위 확인
    if (isNaN(purchaseMoney) || purchaseMoney % 1000 !== 0) {
      Console.print("[ERROR] 구입 금액은 1000의 배수여야 합니다.");
      return;
    }

    // 로또 구매 및 번호 생성
    let lottos = Array.from({ length: purchaseMoney / 1000 }, () =>
      MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)
    );

    this.printer.printLottos(lottos);
    lottos = lottos.map((lotto) => new Lotto(lotto));

    const winningNumber = await this.inputHandler.getWinningNumber();
    const bonusNumber = await this.inputHandler.getBonusNumber();

    // 당첨 결과 매핑
    const matchResults = lottos.map((lotto) => ({
      matches: lotto.confirmMatches(winningNumber),
      hasBonus: lotto.confirmBonus(bonusNumber),
    }));

    // 당첨 통계 및 수익률 출력
    const winningStats = this.calculator.calculateWinningStats(matchResults);
    this.printer.printWinningStats(winningStats);

    const returnRate = this.calculator.calculateReturnRate(
      matchResults,
      purchaseMoney
    );
    this.printer.printReturnRate(returnRate);
  }
}

export default App;
