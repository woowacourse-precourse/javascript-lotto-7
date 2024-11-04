import { Console, Random } from "@woowacourse/mission-utils";
import LOTTO from "./constants/lotto.js";
import LOTTO_GAME from "./constants/lottoGame.js";
import LottoGame from "./domain/LottoGame.js";
import input from "./views/input.js";
import Lotto from "./domain/Lotto.js";
import output from "./views/output.js";
import calculateRateOfReturn from "./utils/calculateRateOfReturn.js";

class App {
  #purchasePrice;
  #lottos = [];

  async run() {
    try {
      const purchasePrice = await input.purchasePrice();
      this.#purchasePrice = purchasePrice;
      this.#purchaseLottos();

      output.lottosCount(this.#lottos.length);
      output.lottos(this.#lottos);
      const winningLotto = await input.winningLotto();
      const bonusNumber = await input.bonusNumber(winningLotto);

      const lottoGame = new LottoGame(this.#lottos, bonusNumber, winningLotto);

      output.finalStatistics();

      const reversedResults = lottoGame.result.slice().reverse();
      reversedResults.forEach((count, index) => output.prize(count, index));

      const totalIncome = lottoGame.totalIncome();
      const totalRateOfReturn = calculateRateOfReturn(purchasePrice, totalIncome);

      output.totalRateOfReturn(totalRateOfReturn);
    } catch (error) {
      Console.print(error.message);
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
