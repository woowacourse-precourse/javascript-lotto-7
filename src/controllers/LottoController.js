import { Random } from '@woowacourse/mission-utils';
import Lotto from '../models/Lotto.js';

class LottoController {
  #tickets;

  constructor() {
    this.#tickets = [];
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
   * 1~45 범위에서 중복되지 않는 6개의 랜덤 숫자를 생성합니다.
   * @returns {Array} - 중복되지 않는 6개의 랜덤 숫자 배열 (오름차순 정렬)
   */
  #generateRandomNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
  }
}

export default LottoController;
