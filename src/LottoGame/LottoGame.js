import GameUtils from "./Utils/GameUtils.js";
import LottoPrice from "../GameSetting/LottoPrice.js";
import LottoCount from "../GameSetting/LottoCount.js";
import Lotto from "../GameSetting/Lotto.js";
import TargetNumbers from "../GameSetting/TargetNumbers.js";
import BonusNumber from "../GameSetting/BonusNumber.js";
import LottoMatcher from "./Features/LottoMatcher.js";
import LottoResult from "./LottoResult.js";
import ProfitCalculator from "./Features/ProfitCalculator.js";
import ResultFormatter from "./Features/ResultFormatter.js";

class LottoGame {
  #lottoPrice;
  #lottoCount;
  #lottos;
  #targetNumbers;
  #bonusNumber;
  #results;

  async #setLottoPrice() {
    const priceInput = await GameUtils.read("구입금액을 입력해 주세요.");
    const lottoPrice = new LottoPrice(priceInput);
    this.#lottoPrice = lottoPrice.getLottoPrice();
  }

  #setLottoCount() {
    const lottoCount = new LottoCount(this.#lottoPrice / 1000);
    this.#lottoCount = lottoCount.getLottoCount();
  }

  #setLottos() {
    this.#lottos = [];
    for (let i = 0; i < this.#lottoCount; i++) {
      const numbers = GameUtils.getRandomNumbers();
      const lotto = new Lotto(numbers);
      this.#lottos.push(lotto.getSortedLotto());
    }
  }

  async #setTargetNumbers() {
    const targetInput = await GameUtils.read("당첨 번호를 입력해 주세요.");
    const targetNumbers = new TargetNumbers(targetInput);
    this.#targetNumbers = targetNumbers.getTargetNumbers();
  }

  async #setBonusNumber() {
    const bonusInput = await GameUtils.read("보너스 번호를 입력해 주세요.");
    const bonusNumber = new BonusNumber(bonusInput);
    this.#bonusNumber = bonusNumber.getBonusNumber();
  }

  async start() {
    // 1. set lottoPrice and lottoCount
    await GameUtils.catchError(async () => {
      await this.#setLottoPrice();
      this.#setLottoCount();
      this.#setLottos();
    });
    GameUtils.printBlank();
    GameUtils.print(`${this.#lottoCount}개를 구매했습니다.`);

    // 2. print lottos
    for (let lotto of this.#lottos) {
      GameUtils.print(`[${lotto.join(", ")}]`);
    }
    GameUtils.printBlank();

    // 3. set targetNumbers and bonusNumber
    await GameUtils.catchError(async () => {
      await this.#setTargetNumbers();
      GameUtils.printBlank();

      await this.#setBonusNumber();
      GameUtils.printBlank();

      if (this.#targetNumbers.includes(this.#bonusNumber)) {
        throw new Error(
          "[ERROR] 당첨 숫자와 보너스 숫자는 중복될 수 없습니다."
        );
      }
    });

    // 4. lottoMatcher - get ranks
    const lottoMatcher = new LottoMatcher(
      this.#targetNumbers,
      this.#bonusNumber,
      this.#lottos
    );
    const ranks = lottoMatcher.getRanks();

    // 5. get lottoResult
    const lottoResult = new LottoResult(ranks);
    this.#results = lottoResult.getResults();

    GameUtils.print("당첨 통계");
    GameUtils.print("---");

    // 6. resultFormatter - print lotto output
    const resultFormatter = new ResultFormatter(this.#results);
    const outputs = resultFormatter.getOutput();
    outputs.forEach((output) => {
      GameUtils.print(output);
    });
    GameUtils.printBlank();

    // 7. profitCalculator - print profit
    const profitCalculator = new ProfitCalculator(
      this.#lottoPrice,
      this.#results
    );
    const profit = profitCalculator.getProfit();
    GameUtils.print(`총 수익률은 ${profit}입니다.`);
  }
}

export default LottoGame;
