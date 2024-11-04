import { Random } from "@woowacourse/mission-utils";
import Lotto from "../Lotto.js";

class LottoTicketsGenerator {
  // 랜덤한 6개의 번호를 생성하고 정렬하는 메서드
  generateUniqueNumbers() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers.sort((a, b) => a - b); // 오름차순 정렬
  }

  // 구입 금액에 따라 티켓을 생성하는 메서드
  generateLottoTickets(price) {
    const ticketCount = price / 1000;
    const tickets = Array.from(
      { length: ticketCount },
      () => new Lotto(this.generateUniqueNumbers())
    );
    return { ticketCount, tickets };
  }
}

export default LottoTicketsGenerator;
