import { MissionUtils } from "@woowacourse/mission-utils";
import inputHandler from "./inputHandler.js";
import Lotto from "./Lotto.js";
import MESSAGES from "./MESSAGES.js";

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
      const purchaseAmount = await this.handlePurchaseAmount();
      this.setNumberOfLottos(purchaseAmount);
      this.createLottos();
      this.printLottos();
      this.winningNumbers = await this.handleWinningNumbers();
      this.bonusNumber = await this.handleBonusNumber();
    } catch (error) {
      MissionUtils.Console.print(error.message);
      await this.play();
    }
  }

  async handlePurchaseAmount() {
    try {
      return await inputHandler.requestPurchaseAmount();
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return await this.handlePurchaseAmount();
    }
  }

  async handleWinningNumbers() {
    try {
      return await inputHandler.requestWinningNumbers();
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return await this.handleWinningNumbers();
    }
  }

  async handleBonusNumber() {
    try {
      return await inputHandler.requestBonusNumber(this.winningNumbers);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return await this.handleBonusNumber();
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
      randomNumber.sort((a, b) => a - b);
      this.lottos.push(new Lotto(randomNumber));
    }
  }

  printLottos() {
    MissionUtils.Console.print(
      MESSAGES.SHOW_PURCHASE_COUNT.replace("{count}", this.numberOfLottos)
    );
    this.lottos.forEach((lotto) => lotto.print());
  }
}

export default LottoPlayer;
