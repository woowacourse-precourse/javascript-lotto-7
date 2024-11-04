import { Random } from "@woowacourse/mission-utils";

function createLottoTicket() {
  const lottoTicket = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
    (a, b) => a - b
  );
  return lottoTicket;
}

export default function createLottoTicket(purchaseAmount) {
  const lottoTickets = [];
  for (let i = 0; i < purchaseAmount; i++) {
    lottoTickets.push(createLottoTicket());
  }
  return lottoTickets;
}
