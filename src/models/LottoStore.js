import Lotto from "./Lotto.js";
import { LOTTO } from "../constants/Constants.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class LottoStore {
  #lottoTickets = [];

  purchaseLotto(money) {
    const numberOfTickets = money / LOTTO.PRICE_PER_TICKET;
    this.#lottoTickets = Array.from(
      { length: numberOfTickets },
      () =>
        new Lotto(
          MissionUtils.Random.pickUniqueNumbersInRange(
            LOTTO.MIN_NUMBER,
            LOTTO.MAX_NUMBER,
            LOTTO.NUMBERS_COUNT
          )
        )
    );
  }

  getLottoTickets() {
    return this.#lottoTickets;
  }
}

export default LottoStore;
