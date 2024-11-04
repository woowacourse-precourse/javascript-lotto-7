import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { LOTTO_PRICE } from "./constants/gameRules.js";

class LottoGame {
  #lottoCount;
  #lottos;
  #winningNumbers;
  #bonusNumber;

  constructor(purchaseAmount) {
    this.#lottoCount = purchaseAmount / LOTTO_PRICE;
    this.#lottos = [];
    this.#winningNumbers = [];
    this.#bonusNumber = null;
  }

  get lottoCount() {
    return this.#lottoCount;
  }

  setLottos() {
    for (let i = 0; i < this.#lottoCount; i++) {
      this.#lottos.push(new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)));
    }
  }

  printLottos() {
    Console.print(`\n${this.#lottoCount}개를 구매했습니다.`);
    this.#lottos.forEach((lotto) => Console.print(lotto.getNumbersByOrder()));
  }

  start() {
    this.setLottos();
    this.printLottos();
  }
}

export default LottoGame;
