import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import {
  ERROR_MESSAGES,
  MESSAGE_STATISTICS,
  PRIZE,
} from "./constants/constant.js";
import MatchingResults from "./MatchingResults.js";
import LottoManager from "./LottoManager.js";

class App {
  constructor() {
    this.lottoManager = new LottoManager();
  }
  async run() {
    const purchaseAmount = await this.getPurchaseAmount();
    const lottoCount = purchaseAmount / 1000;
    const userLottoNumbers = this.lottoManager.generateLotto(lottoCount);

    await this.lottoManager.printLottoNumbers(userLottoNumbers, lottoCount);

    const winningNumber = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumber(winningNumber);

    const matchingResults = this.checkMatchingLottos(
      userLottoNumbers,
      new Set(winningNumber.getNumbers()),
      bonusNumber
    );
    const rate = this.calculateRate(matchingResults, purchaseAmount);
    await this.printStatistics(matchingResults, rate);
  }

  async getPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(
      "구입금액을 입력해 주세요\n"
    );
    this.validatePurchaseAmount(purchaseAmount);
    return purchaseAmount;
  }

  async getWinningNumbers() {
    const inputWinningNumbers = await Console.readLineAsync(
      "\n당첨 번호를 입력해 주세요.\n"
    );
    const inputWinningNumber = inputWinningNumbers.split(",").map(Number);
    return new Lotto(inputWinningNumber);
  }

  async getBonusNumber(winningNumber) {
    const inputBonusNumber = await Console.readLineAsync(
      "보너스 번호를 입력해 주세요.\n"
    );
    const bonusNumber = Number(inputBonusNumber);
    this.validateBonusNumber(bonusNumber, winningNumber);
    return bonusNumber;
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

  validatePurchaseAmount(purchaseAmount) {
    if (purchaseAmount === 0) {
      throw new Error(ERROR_MESSAGES.PURCHASE_AMOUNT_ZERO);
    }
    if (purchaseAmount < 0) {
      throw new Error(ERROR_MESSAGES.PURCHASE_AMOUNT_NEGATIVE);
    }
    if (purchaseAmount % 1000 !== 0 && purchaseAmount !== 0) {
      throw new Error(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
    }
    if (purchaseAmount === "") {
      throw new Error(ERROR_MESSAGES.PURCHASE_AMOUNT_EMPTY);
    }
  }

  validateBonusNumber(bonusNumber, winningNumber) {
    if (!Number.isInteger(bonusNumber) || bonusNumber < 1 || bonusNumber > 45) {
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_NUMBER_RANGE);
    }
    if (winningNumber.getNumbers().includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_BONUS_NUMBER_WITH_WINNING);
    }
  }
}

export default App;
