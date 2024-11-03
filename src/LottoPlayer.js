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
    this.prizeAmount = 0;
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
      this.printResults();
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
      const isBonus =
        matchCount === 5 && this.isBonusNumberMatched(lottoNumbers);

      this.updateResultWithRank(matchCount, isBonus);
    }
  }

  updateResultWithRank(matchCount, isBonus) {
    const condition = rankConditions.find(
      (condition) =>
        condition.match === matchCount && condition.bonus === isBonus
    );

    if (condition) {
      this.plusResultCount(condition);
      this.addPrizeAmount(condition);
    }
  }

  plusResultCount(condition) {
    this.resultCount[condition.rank]++;
  }

  addPrizeAmount(condition) {
    this.prizeAmount += condition.prize;
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

  printResults() {
    MissionUtils.Console.print(MESSAGES.RESULT_HEADER);
    MissionUtils.Console.print(MESSAGES.RESULT_SEPARATOR);

    rankConditions.forEach((condition) => {
      const count = this.resultCount[condition.rank];
      const message = this.resultMessage(condition, count);
      MissionUtils.Console.print(message);
    });
  }

  resultMessage(condition, count) {
    let bonusText = "";
    if (condition.bonus) {
      bonusText = MESSAGES.RESULT_BONUS_MATCH;
    }
    return MESSAGES.RESULT_COUNT_MATCH.replace("{match}", condition.match)
      .replace("{bonus}", bonusText)
      .replace("{prize}", condition.prize.toLocaleString())
      .replace("{count}", count);
  }

  caclulateRateOfReturn() {
    const rateOfReturn =
      (this.prizeAmount / (this.numberOfLottos * LottoPlayer.LOTTO_PRICE)) *
      100;
    return rateOfReturn.toFixed(1);
  }
}

export default LottoPlayer;
