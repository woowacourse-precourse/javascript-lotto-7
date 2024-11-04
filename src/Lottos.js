import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class Lottos {
  #lottos;

  constructor(purchaseCount) {
    this.#lottos = this.#purchaseLottos(purchaseCount);
  }

  #purchaseLottos(purchaseCount) {
    const lottoList = Array.from({ length: purchaseCount }, () => {
      const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(randomNumbers);
      this.#printLottoNumbers(lotto.getNumbers());
      return lotto;
    });
    return lottoList;
  }

  #printLottoNumbers(numbers) {
    Console.print(numbers);
  }

  getLottos() {
    return this.#lottos;
  }
}

export default Lottos;
