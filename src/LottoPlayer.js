import { MissionUtils } from "@woowacourse/mission-utils";
import inputHandler from "./inputHandler.js";
import Lotto from "./Lotto.js";

class LottoPlayer {
  static LOTTO_PRICE = 1000;

  constructor() {
    this.numberOfLottos = 0;
    this.winningNumbers = [];
    this.bonusNumber = null;
    this.lottos = [];
  }

  async play() {
    try {
      const purchaseAmount = await inputHandler.requestPurchaseAmount();
      this.setNumberOfLottos(purchaseAmount);
      this.createLottos();
    } catch (error) {
      MissionUtils.Console.print(error.message);
      await this.play();
    }
  }

  setNumberOfLottos(value) {
    this.numberOfLottos = value / LottoPlayer.LOTTO_PRICE;
  }

  createLottos() {
    for (let i = 0; i < this.numberOfLottos; i++) {
      const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      );
      this.lottos.push(new Lotto(randomNumber));
    }
  }
}

export default LottoPlayer;
