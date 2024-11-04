import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import InputHandler from "./InputHandler.js";
import Printer from "./Printer.js";
import Calculator from "./Calculator.js";

// 메인 App 클래스
class App {
  constructor() {
    this.inputHandler = new InputHandler();
    this.printer = new Printer();
    this.calculator = new Calculator();
  }

  async run() {
    try {
      const purchaseMoney = await this.inputHandler.getPurchaseMoney();
      this.validatePurchaseMoney(purchaseMoney);

      // 로또 구매 및 번호 생성
      let lottos = Array.from({ length: purchaseMoney / 1000 }, () =>
        MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)
      );

      this.printer.printLottos(lottos);
      lottos = lottos.map((lotto) => new Lotto(lotto));

      const winningNumber = await this.inputHandler.getWinningNumber();
      this.validateLottoNumbers(winningNumber);

      const bonusNumber = await this.inputHandler.getBonusNumber();
      this.validateBonusNumber(bonusNumber, winningNumber);

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
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }

  // 구입 금액이 1000의 배수인지 확인
  validatePurchaseMoney(money) {
    if (isNaN(money) || money % 1000 !== 0) {
      throw new Error("구입 금액은 1000의 배수여야 합니다.");
    }
  }

  // 로또 번호 유효성 검사
  validateLottoNumbers(numbers) {
    const lottoNumbers = numbers.split(",").map(Number);

    if (lottoNumbers.length !== 6) {
      throw new Error("로또 번호는 6개의 숫자여야 합니다.");
    }
    if (new Set(lottoNumbers).size !== 6) {
      throw new Error("로또 번호에는 중복된 숫자가 없어야 합니다.");
    }
    if (!lottoNumbers.every((num) => num >= 1 && num <= 45)) {
      throw new Error("로또 번호는 1에서 45 사이의 숫자여야 합니다.");
    }
    if (lottoNumbers.some(isNaN)) {
      throw new Error("로또 번호는 숫자만 입력되어야 합니다.");
    }
  }

  // 보너스 번호 유효성 검사
  validateBonusNumber(bonusNumber, winningNumbers) {
    const bonus = Number(bonusNumber);
    const winningSet = new Set(winningNumbers.split(",").map(Number));

    if (isNaN(bonus) || bonus < 1 || bonus > 45) {
      throw new Error("보너스 번호는 1에서 45 사이의 숫자여야 합니다.");
    }
    if (winningSet.has(bonus)) {
      throw new Error("보너스 번호는 당첨 번호와 중복되지 않아야 합니다.");
    }
  }
}

export default App;
