import { Random } from "@woowacourse/mission-utils";
import LOTTO from "./constants/lotto.js";
import LOTTO_GAME from "./constants/lottoGame.js";
import LottoGame from "./domain/LottoGame.js";
import input from "./views/input.js";
import Lotto from "./domain/Lotto.js";

class App {
  #purchasePrice;
  #lottos = [];

  async run() {
    try {
      const purchasePrice = await input.purchasePrice();

      this.#purchasePrice = purchasePrice;
      this.#purchaseLottos();
      const winningLotto = await input.winningLotto();
      const bonusNumber = await input.bonusNumber();

      const lottoGame = new LottoGame(this.#lottos, bonusNumber, winningLotto);

      const totalIncome = lottoGame.totalIncome();

      const result = lottoGame.result();
    } catch (error) {
      throw error;
    }
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
}

export default App;
