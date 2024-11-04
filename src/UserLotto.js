import { Random } from "@woowacourse/mission-utils";

/**
 * @class UserLotto
 * @description 사용자가 구매한 로또 티켓을 생성하고 관리하는 클래스
 */
class UserLotto {
  constructor() {
    this.userLottos = [];
  }

  /**
   * @description 구입 금액에 따라 로또 티켓을 생성
   * @description 각 티켓은 1부터 45 사이의 중복되지 않는 6개의 숫자로 구성
   * @param {number} amount - 구입 금액
   */
  generateUserLottos(amount) {
    const ticketCount = Math.floor(amount / 1000);
    for (let i = 0; i < ticketCount; i++) {
      const ticket = Random.pickUniqueNumbersInRange(1, 45, 6);
      ticket.sort((a, b) => a - b);
      this.userLottos.push(ticket);
    }
  }

  /**
   * @description 생성된 로또 티켓 배열을 반환
   * @returns {Array<Array<number>>} 생성된 로또 티켓 배열
   */
  getUserLottos() {
    return this.userLottos;
  }
}

export default UserLotto;
