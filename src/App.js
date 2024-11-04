import { Console } from "@woowacourse/mission-utils";
import Parser from "./Parser.js";
import UserLotto from "./UserLotto.js";
import Lotto from "./Lotto.js";
import BonusNumber from "./BonusNumber.js";
import LottoResult from "./LottoResult.js";
import Display from "./Display.js";

/**
 * @class App
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

  /**
   * @description 전체 애플리케이션 실행 메서드.
   * @description 단계별 메서드를 순차적으로 호출.
   * @async
   */
  async run() {
    const purchaseAmount = this.getPurchaseAmount();
    const userLottos = this.generateLottos(purchaseAmount);
    const { winningNumbers, bonusNumber } = await this.getWinningNumbers();

    this.calculateResults(userLottos, winningNumbers, bonusNumber);
    this.displayResults(purchaseAmount);
  }

  /**
   * @description 구입 금액을 입력받고 파싱하여 반환.
   * @returns {number} 파싱된 구입 금액
   * @async
   */
  async getPurchaseAmount() {
    const purchaseAmountInput = await Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );
    return this.parser.parsePurchaseAmount(purchaseAmountInput);
  }

  /**
   * @description 구입 금액에 따라 로또 티켓을 생성.
   * @param {number} purchaseAmount 구입 금액
   * @returns {Array} 생성된 로또 티켓 배열
   */
  generateLottos(purchaseAmount) {
    Console.print(``);
    this.userLotto.generateUserLottos(purchaseAmount);
    const userLottos = this.userLotto.getUserLottos();
    this.display.displayTickets(userLottos);
    return userLottos;
  }

  /**
   * @description 당첨 번호와 보너스 번호를 입력받아 설정.
   * @returns {Object} 당첨 번호와 보너스 번호 객체
   * @async
   */
  async getWinningNumbers() {
    const winningNumbers = this.getWinningNumbersInput();
    const bonusNumber = this.getBonusNumberInput(winningNumbers);

    return { winningNumbers, bonusNumber };
  }

  /**
   * @description 당첨 번호를 입력받고 파싱하여 반환.
   * @returns {Array} 파싱된 당첨 번호 배열
   * @async
   */
  async getWinningNumbersInput() {
    const winningNumbersInput = await Console.readLineAsync(
      "\n당첨 번호를 입력해 주세요.\n"
    );
    const winningNumbers = this.parser.parseNumbers(winningNumbersInput);
    this.lotto = new Lotto(winningNumbers);
    return this.lotto.getLottoNumber();
  }

  /**
   * @description 보너스 번호를 입력받고 파싱하여 반환.
   * @param {Array} winningNumbers 당첨 번호 배열
   * @returns {number} 파싱된 보너스 번호
   * @async
   */
  async getBonusNumberInput(winningNumbers) {
    const bonusNumberInput = await Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n"
    );
    const bonusNumber = this.parser.parseBonusNumber(bonusNumberInput);
    this.bonusNumber = new BonusNumber(bonusNumber, winningNumbers);
    return this.bonusNumber.getBonusNumber();
  }

  /**
   * @description 사용자 로또 티켓과 당첨 번호, 보너스 번호를 비교하여 당첨 결과를 계산.
   * @param {Array} userLottos 사용자 로또 티켓 배열
   * @param {Array} winningNumbers 당첨 번호 배열
   * @param {number} bonusNumber 보너스 번호
   */
  calculateResults(userLottos, winningNumbers, bonusNumber) {
    this.lottoResult.calculateRank(userLottos, winningNumbers, bonusNumber);
  }

  /**
   * @description 당첨 결과 및 수익률을 출력.
   * @param {number} purchaseAmount 구입 금액
   */
  displayResults(purchaseAmount) {
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
