import { MissionUtils } from "@woowacourse/mission-utils";

class LottoGenerator {
  #lottoQuantity;
  #tickets = [];

  constructor(purchaseMoney) {
    this.#calculateLottoQuality(purchaseMoney);
    this.#generateTickets();
  }

  #calculateLottoQuality(purchaseMoney) {
    this.#lottoQuantity = purchaseMoney / 1000;
  }

  #generateTickets() {
    this.#tickets = Array(this.#lottoQuantity)
      .fill()
      .map(() => this.#generateSingleTicket());
  }

  #generateSingleTicket() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  getLottoData() {
    return {
      lottoQuantity: this.#lottoQuantity,
      ticketsList: this.#tickets,
    };
  }
}
export default LottoGenerator;
