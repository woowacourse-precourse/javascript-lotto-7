import { Console } from "@woowacourse/mission-utils";
import Parser from "./Parser.js";
import UserLotto from "./UserLotto.js";
import Lotto from "./Lotto.js";
import BonusNumber from "./BonusNumber.js";
import LottoResult from "./LottoResult.js";
import Display from "./Display.js";

/**
 * @class App
 * @description 로또 애플리케이션 실행을 위한 클래스
 */
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
    try {
      const purchaseAmountInput = await Console.readLineAsync(
        "구입금액을 입력해 주세요.\n"
      );
      const userLottos = this.generateLottos(purchaseAmountInput);

      const winningNumbersInput = await Console.readLineAsync(
        "\n당첨 번호를 입력해 주세요.\n"
      );
      const winningNumbers =
        this.parseAndSetWinningNumbers(winningNumbersInput);

      const bonusNumberInput = await Console.readLineAsync(
        "\n보너스 번호를 입력해 주세요.\n"
      );
      const bonusNumber = this.parseAndSetBonusNumber(
        bonusNumberInput,
        winningNumbers
      );

      this.calculateResults(userLottos, winningNumbers, bonusNumber);
      this.displayResults(purchaseAmountInput);
    } catch (error) {
      Console.print(error.message);
    }
  }

  /**
   * @description 구입 금액을 받아 로또 티켓을 생성하고 출력
   * @param {string} purchaseAmountInput - 구입 금액 입력값
   * @returns {Array} 생성된 로또 티켓 배열
   */
  generateLottos(purchaseAmountInput) {
    const purchaseAmount = this.parser.parsePurchaseAmount(purchaseAmountInput);
    this.userLotto.generateUserLottos(purchaseAmount);
    const userLottos = this.userLotto.getUserLottos();
    this.display.displayTickets(userLottos);
    return userLottos;
  }

  /**
   * @description 입력된 당첨 번호 문자열을 파싱하고 Lotto 인스턴스에 설정
   * @param {string} winningNumbersInput - 당첨 번호 입력값
   * @returns {Array} 파싱된 당첨 번호 배열
   */
  parseAndSetWinningNumbers(winningNumbersInput) {
    const winningNumbers = this.parser.parseNumbers(winningNumbersInput);
    this.lotto = new Lotto(winningNumbers);
    return this.lotto.getLottoNumber();
  }

  /**
   * @description 입력된 보너스 번호를 파싱하고 BonusNumber 인스턴스에 설정
   * @param {string} bonusNumberInput - 보너스 번호 입력값
   * @param {Array} winningNumbers - 당첨 번호 배열
   * @returns {number} 파싱된 보너스 번호
   */
  parseAndSetBonusNumber(bonusNumberInput, winningNumbers) {
    const bonusNumber = this.parser.parseBonusNumber(bonusNumberInput);
    this.bonusNumber = new BonusNumber(bonusNumber, winningNumbers);
    return this.bonusNumber.getBonusNumber();
  }

  /**
   * @description 사용자 로또 티켓과 당첨 번호, 보너스 번호를 비교하여 당첨 결과를 계산
   * @param {Array} userLottos - 사용자 로또 티켓 배열
   * @param {Array} winningNumbers - 당첨 번호 배열
   * @param {number} bonusNumber - 보너스 번호
   */
  calculateResults(userLottos, winningNumbers, bonusNumber) {
    this.lottoResult.calculateRank(userLottos, winningNumbers, bonusNumber);
  }

  /**
   * @description 당첨 결과 및 수익률을 출력
   * @param {string} purchaseAmountInput - 구입 금액 입력값
   */
  displayResults(purchaseAmountInput) {
    const purchaseAmount = this.parser.parsePurchaseAmount(purchaseAmountInput);
    const winningAmount = this.lottoResult.calculateWinningAmount();
    const profitRate = this.lottoResult.calculateProfitRate(
      winningAmount,
      purchaseAmount
    );
    this.display.displayRankNumber(this.lottoResult.ranks);
    this.display.displayReturn(profitRate);
  }
}

export default App;
