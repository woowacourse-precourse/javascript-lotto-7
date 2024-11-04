import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class LotteryMachine {
  constructor(purchaseAmount) {
    this.purchaseAmount = purchaseAmount;
  }

  generateLottoTickets() {
    const count = this.purchaseAmount / 1000;
    const tickets = [];
    for (let i = 0; i < count; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      tickets.push(new Lotto(numbers));
    }
    return tickets;
  }
}

export default LotteryMachine;
