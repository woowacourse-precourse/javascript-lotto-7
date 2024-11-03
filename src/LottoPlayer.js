import { MissionUtils } from "@woowacourse/mission-utils";
import inputHandler from "./inputHandler.js";
import Lotto from "./Lotto.js";
import MESSAGES from "./MESSAGES.js";
import { rankConditions } from "./rankConditions.js";

class LottoPlayer {
  static LOTTO_PRICE = 1000;

  constructor() {
    this.numberOfLottos = 0;
    this.winningNumbers = [];
    this.bonusNumber = null;
    this.lottos = [];
    this.resultCount = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  }

  async play() {
    try {
      const purchaseAmount = await this.handlePurchaseAmount();
      this.setNumberOfLottos(purchaseAmount);
      this.createLottos();
      this.printLottos();
      this.winningNumbers = await this.handleWinningNumbers();
      this.bonusNumber = await this.handleBonusNumber();
      this.compareLottoNumbers();
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

  compareLottoNumbers() {
    for (let i = 0; i < this.numberOfLottos; i++) {
      const lottoNumbers = this.lottos[i].numbers;
      const matchCount = this.countMatchingNumbers(lottoNumbers);
      const isBonus = false;

      if (matchCount === 5) {
        isBonus = this.isBonusNumberMatched(lottoNumbers);
      }

      const rank = getRank(matchCount, isBonus);
    }
  }

  getRank(matchCount, isBonus) {
    for (const condition of rankConditions) {
      if (matchCount === condition.match && condition.bonus === isBonus) {
        return condition.rank;
      }
    }
    return null;
  }

  countMatchingNumbers(numbers) {
    const matchCount = this.winningNumbers.filter((number) =>
      numbers.includes(number)
    ).length;
    return matchCount;
  }

  isBonusNumberMatched(numbers) {
    return numbers.includes(this.bonusNumber);
  }
}

export default LottoPlayer;
