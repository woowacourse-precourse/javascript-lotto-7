import { Random } from "@woowacourse/mission-utils";

class Consumer {
  #lottoTickets = [];
  #lottoResult = [];
  #secondPlace = 0;

  constructor(price) {}

  getOrderLotto(lotto) {
    for (i = 0; i < lottoCount; i++) {
      randomNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
      randomNumber.sort((a, b) => a - b);
      lotto = new Lotto(randomNumber);
      this.#lottoTickets.push(lotto);
    }
  }

  setLottoResult(winningNuber) {
    for (let lotto of this.#lottoTickets) {
      let count = lotto.getMatchingCount(winningNuber.getNumbers());
      this.#lottoResult[count]++;
      if (count === 5 && lotto.isMatchBonus(WinningNumber.getBonus())) {
        this.#secondPlace++;
      }
    }
  }

  getLottoResult() {
    return this.#lottoResult;
  }
  getSecondPlace() {
    return this.#secondPlace;
  }
  getLottoTicket() {
    return this.#lottoTickets;
  }
}

export default Consumer;
