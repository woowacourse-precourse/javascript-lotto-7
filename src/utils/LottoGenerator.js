import { Random } from "@woowacourse/mission-utils";
import { LOTTO } from "../constants/constants.js";

class LottoGenerator {
  static generateTickets(count) {
    const tickets = [];
    for (let i = 0; i < count; i++) {
      const numbers = Random.pickUniqueNumbersInRange(
        LOTTO.NUMBER_RANGE.MIN,
        LOTTO.NUMBER_RANGE.MAX,
        LOTTO.NUMBER_COUNT
      );
      numbers.sort((a, b) => a - b);
      tickets.push(numbers);
    }
    return tickets;
  }
}

export default LottoGenerator;
