import { Console, Random } from "@woowacourse/mission-utils";
import { Errors } from "./constants.js";
import Lotto from "./Lotto.js";

class Lottos {
  #lottos;
  #purchaseCount;

  constructor(cost) {
    this.#validate(cost);
    this.#purchaseCount = cost / 1000;
    this.#lottos = this.#purchaseLottos(this.#purchaseCount);
  }

  #validate(cost) {
    if (cost % 1000 !== 0) throw new Error(Errors.cost.NOT_CORRECT_UNIT);
  }

  #purchaseLottos(purchaseCount) {
    this.#printPurchaseCount(purchaseCount);
    const lottoList = Array.from({ length: purchaseCount }, () => {
      const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(randomNumbers);
      this.#printLottoNumbers(lotto.getNumbers());
      return lotto;
    });
    return lottoList;
  }

  #printPurchaseCount(purchaseCount) {
    Console.print(`\n${purchaseCount}개를 구매했습니다.`);
  }

  #printLottoNumbers(numbers) {
    Console.print(numbers);
  }

  getLottos() {
    return this.#lottos;
  }
}

export default Lottos;
