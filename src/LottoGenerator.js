import { MissionUtils } from "@woowacourse/mission-utils";
import { CONSTANTS } from "./constants/constants.js";

class LottoGenerator {
  #lottoQuantity;
  #tickets = [];

  constructor(purchaseMoney) {
    this.#calculateLottoQuality(purchaseMoney);
    this.#generateTickets();
  }

  #calculateLottoQuality(purchaseMoney) {
    this.#lottoQuantity = purchaseMoney / CONSTANTS.LOTTO_TICKET_PRICE;
  }

  #generateTickets() {
    this.#tickets = Array(this.#lottoQuantity)
      .fill()
      .map(() => this.#generateSingleTicket());
  }

  #generateSingleTicket() {
    const ticket = MissionUtils.Random.pickUniqueNumbersInRange(
      CONSTANTS.LOTTO_NUMBER_MIN,
      CONSTANTS.LOTTO_NUMBER_MAX,
      CONSTANTS.LOTTO_NUMBER_COUNT
    );
    return ticket.sort(
      (firstNumber, secondNumber) => firstNumber - secondNumber
    );
  }

  getLottoData() {
    return {
      lottoQuantity: this.#lottoQuantity,
      ticketList: this.#tickets,
    };
  }
}
export default LottoGenerator;
