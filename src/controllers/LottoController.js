import { Random } from '@woowacourse/mission-utils';
import Lotto from '../models/Lotto.js';
import Prize from '../models/Prize.js';
import ResultChecker from '../models/ResultChecker.js';

class LottoController {
  #resultChecker;
  #tickets;
  #winningNumbers;
  #bonusNumber;

  constructor() {
    this.#resultChecker = new ResultChecker();
    this.#tickets = [];
    this.#winningNumbers = [];
    this.#bonusNumber = null;
  }

  /**
   * 구입 금액에 따라 로또 티켓을 생성합니다.
   * @param {number} purchaseAmount - 구입 금액
   * @returns {Array} - 생성된 로또 티켓 목록
   */
  generateTickets(purchaseAmount) {
    const ticketCount = Math.floor(purchaseAmount / 1000);
    this.#tickets = Array.from({ length: ticketCount }, () => {
      const numbers = this.#generateRandomNumbers();
      return new Lotto(numbers);
    });
    return this.#tickets;
  }

  /**
   * 당첨 번호와 보너스 번호를 설정합니다.
   * @param {string} winningNumbers - 쉼표로 구분된 당첨 번호 문자열
   * @param {number} bonusNumber - 보너스 번호
   */
  setWinningNumbers(winningNumbers, bonusNumber) {
    this.#winningNumbers = this.parseWinningNumbers(winningNumbers);
    this.#bonusNumber = Number(bonusNumber);
  }

  /**
   * 구매한 티켓들과 당첨 번호를 비교하여 당첨 결과를 계산합니다.
   * @returns {Object} - 당첨 결과
   */
  checkResults() {
    const ticketNumbers = this.#tickets.map((ticket) => ticket.getNumbers());
    return this.#resultChecker.checkAllTickets(
      ticketNumbers,
      this.#winningNumbers,
      this.#bonusNumber,
    );
  }

  /**
   * 쉼표로 구분된 문자열을 배열로 변환하여 당첨 번호로 사용합니다.
   * @param {string} numbersString - 쉼표로 구분된 숫자 문자열
   * @returns {Array} - 숫자 배열
   */
  parseWinningNumbers(numbersString) {
    return numbersString.split(',').map(Number);
  }

  /**
   * 1~45 범위에서 중복되지 않는 6개의 랜덤 숫자를 생성합니다.
   * @returns {Array} - 중복되지 않는 6개의 랜덤 숫자 배열 (오름차순 정렬)
   */
  #generateRandomNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
  }

  /**
   * 총 수익률을 계산합니다.
   * @param {number} purchaseAmount - 사용자가 입력한 구입 금액
   * @param {Object} result - 당첨 결과 객체
   * @returns {number} - 총 수익률
   */
  calculateYield(purchaseAmount, result) {
    const totalPrize = Prize.calculateTotalPrize(result);
    return ((totalPrize / purchaseAmount) * 100).toFixed(1);
  }

  // For testing
  getWinningNumbers() {
    return this.#winningNumbers;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default LottoController;
