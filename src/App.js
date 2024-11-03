import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import {
  ERROR_MESSAGES,
  MESSAGE_STATISTICS,
  PRIZE,
} from "./constants/constant.js";
import MatchingResults from "./MatchingResults.js";
import LottoManager from "./LottoManager.js";
import InputHandler from "./InputHandler.js";

class App {
  constructor() {
    this.lottoManager = new LottoManager();
    this.inputHandler = new InputHandler();
  }
  async run() {
    const purchaseAmount = await this.inputHandler.getPurchaseAmount();
    const lottoCount = purchaseAmount / 1000;
    const userLottoNumbers = this.lottoManager.generateLotto(lottoCount);

    await this.lottoManager.printLottoNumbers(userLottoNumbers, lottoCount);

    const winningNumber = await this.inputHandler.getWinningNumbers();
    const bonusNumber = await this.inputHandler.getBonusNumber(winningNumber);

    const matchingResults = this.checkMatchingLottos(
      userLottoNumbers,
      new Set(winningNumber),
      bonusNumber
    );
    const rate = this.calculateRate(matchingResults, purchaseAmount);
    await this.printStatistics(matchingResults, rate);
  }

  checkMatchingLottos(userLottoNumbers, winningNumberSet, bonusNumber) {
    const matchingResults = new MatchingResults();

    userLottoNumbers.forEach((lotto) => {
      const matchCount = lotto
        .getNumbers()
        .filter((num) => winningNumberSet.has(num)).length;
      const hasBonus = lotto.getNumbers().includes(bonusNumber);

      matchingResults.update(matchCount, hasBonus);
    });

    return matchingResults.getResults();
  }

  calculateRate(matchingResults, purchaseAmount) {
    const totalPrize =
      PRIZE.THREE * matchingResults.three +
      PRIZE.FOUR * matchingResults.four +
      PRIZE.FIVE * matchingResults.five +
      PRIZE.FIVEBONUS * matchingResults.fiveBonus +
      PRIZE.SIX * matchingResults.six;

    const rate = ((totalPrize / purchaseAmount) * 100).toFixed(1);
    return rate;
  }

  async printStatistics(matchingResults, rate) {
    await Console.print(MESSAGE_STATISTICS().HEADER);
    await Console.print(MESSAGE_STATISTICS(matchingResults.three).MATCH_THREE);
    await Console.print(MESSAGE_STATISTICS(matchingResults.four).MATCH_FOUR);
    await Console.print(MESSAGE_STATISTICS(matchingResults.five).MATCH_FIVE);
    await Console.print(
      MESSAGE_STATISTICS(matchingResults.fiveBonus).MATCH_FIVE_BONUS
    );
    await Console.print(MESSAGE_STATISTICS(matchingResults.six).MATCH_SIX);
    await Console.print(MESSAGE_STATISTICS(rate).RATE);
  }
}

export default App;
