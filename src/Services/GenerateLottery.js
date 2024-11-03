import { Random } from "@woowacourse/mission-utils";
import Lotto from "../Lotto.js";

function generateUniqueNumbers() {
  const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
  return numbers.sort((a, b) => a - b); // 오름차순 정렬
}

export function generateLottoTickets(price) {
  const ticketCount = price / 1000;
  const tickets = Array.from(
    { length: ticketCount },
    () => new Lotto(generateUniqueNumbers())
  );
  return { ticketCount, tickets };
}
