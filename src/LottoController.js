import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import LottoView from "./LottoView.js";

class LottoController {
  #view;
  #lottos = [];

  constructor() {
    this.#view = new LottoView();
  }

  async run() {
    const purchaseAmount = await this.#view.getPurchaseAmount();
    this.#generateLottos(purchaseAmount);

    for (const lotto of this.#lottos) {
      Console.print(lotto.getNumber());
    }

    const winningNumbers = await this.#view.getWinningNumbers();
    const bonusNumber = await this.#view.getBonusNumber();

    Console.print(winningNumbers);
    Console.print(bonusNumber);
  }

  #generateRandomNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  #generateLottos(amount) {
    const lottoCount = Math.floor(amount / 1000);
    for (let i = 0; i < lottoCount; i++) {
      const lottoNumbers = this.#generateRandomNumbers();
      this.#lottos.push(new Lotto(lottoNumbers));
    }
  }
}

export default LottoController;
