import { Random } from "@woowacourse/mission-utils";

class UserLotto {
  constructor() {
    this.userLottos = [];
  }

  generateUserLottos(amount) {
    const ticketCount = Math.floor(amount / 1000);
    for (let i = 0; i < ticketCount; i++) {
      const ticket = Random.pickUniqueNumbersInRange(1, 45, 6);
      ticket.sort((a, b) => a - b);
      this.userLottos.push(ticket);
    }
  }

  getUserLottos() {
    return this.userLottos;
  }
}

export default UserLotto;
