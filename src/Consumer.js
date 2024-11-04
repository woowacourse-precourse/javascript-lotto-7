import { Random } from "@woowacourse/mission-utils";

const MIN_PRICE = 1000;

class Consumer {
  #lottoTickets = [];

  constructor(price) {}

  getLottoCount() {
    lottoCount = parseInt(price / 1000, 10);
    return lottoCount;
  }

  getOrderLotto() {
    for (i = 0; i < lottoCount; i++) {
      randomNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
      randomNumber.sort((a, b) => a - b);
      lotto = new Lotto(randomNumber);
      this.#lottoTickets.push(lotto);
    }
  }

  //수익률
  GetrateOfReturn() {
    ratrOfReturn = (prizeMoney / price) * 100;
    return ratrOfReturn.toFixed(1);
  }
}
