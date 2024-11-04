import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import LOTTO from "../constants/lotto.js";
import LOTTO_GAME from "../constants/lottoGame.js";

class LottoGame {
  #lottos;
  #purchasePrice;
  #result;
  #winningLotto;
  #bonusNumber;

  constructor(purchasePrice, bonusNumber, winningLotto) {
    this.#lottos = [];
    this.#purchasePrice = purchasePrice;
    this.#result = Array(5).fill(0);
    this.#winningLotto = winningLotto;
    this.#bonusNumber = bonusNumber;
    this.#purchaseLottos();
    this.#checkLottos();
  }

  #purchaseLottos() {
    while (this.#purchasePrice >= LOTTO.UNIT_PRICE) {
      this.#purchaseUnitLotto();
    }
  }

  #purchaseUnitLotto() {
    const numbers = Random.pickUniqueNumbersInRange(
      LOTTO_GAME.START_NUMBER,
      LOTTO_GAME.END_NUMBER,
      LOTTO_GAME.NUMBER_COUNT
    );
    this.#lottos.push(new Lotto(numbers));
    this.#purchasePrice -= LOTTO.UNIT_PRICE;
  }

  lottoCount() {
    return this.#lottos.length;
  }

  #checkUnitLotto(lotto) {
    const matchCount = lotto.checkCount(this.#winningLotto);
    if (matchCount !== 5) {
      this.#result[LOTTO_GAME.NUMBER_COUNT - matchCount] =
        this.#result[LOTTO_GAME.NUMBER_COUNT - matchCount] + 1 || 1;
      return;
    }
    if (lotto.checkCount(this.#bonusNumber) === 1) {
      this.#result[LOTTO_GAME.NUMBER_COUNT + 1 - matchCount] =
        this.#result[LOTTO_GAME.NUMBER_COUNT + 1 - matchCount] + 1 || 1;
      return;
    }
  }

  #checkLottos() {
    this.#lottos.forEach((lotto) => this.#checkUnitLotto(lotto));
  }

  totalIncome() {
    return this.#result.reduce((acc, count, index) => {
      return acc + count * LOTTO_GAME.WINNING_MONEY[index];
    }, 0);
  }

  get result() {
    return this.#result;
  }
}

export default LottoGame;
