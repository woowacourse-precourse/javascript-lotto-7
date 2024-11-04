import Lotto from "./Lotto.js";
import ERRORS from "./constants/Errors.js";
import CONDITIONS from "./constants/Conditions.js";
import InputView from "./views/InputViews.js";
import OutputView from "./views/OutputViews.js";
import { Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    const purchaseAmount = await this.getPurchaseAmount();

    const numberOfLottoes = +purchaseAmount / CONDITIONS.ONE_LOTTO_PRICE;
    const lottoes = this.generateLottoes(numberOfLottoes);

    OutputView.printPurchasedLottos(numberOfLottoes, lottoes);

    const winningNumbers = await this.getWinningLotto();
    const bonusNumber = await this.getBonusNumber(winningNumbers);

    const howManyMatch = this.calculateMatches(
      lottoes,
      winningNumbers,
      bonusNumber
    );

    const rateOfReturn = this.calculateRateOfReturn(
      howManyMatch,
      purchaseAmount
    );

    OutputView.printWinningStatistics(howManyMatch, rateOfReturn);
  }

  async getPurchaseAmount() {
    while (true) {
      try {
        const purchaseAmount = await InputView.inputMoney();
        this.validatePurchaseAmount(purchaseAmount);
        return purchaseAmount;
      } catch (error) {
        OutputView.printError(`${error.message}\n`);
      }
    }
  }

  // 구매 금액이 1000원 단위인지 확인
  validatePurchaseAmount(purchaseAmount) {
    if (+purchaseAmount % CONDITIONS.ONE_LOTTO_PRICE !== 0) {
      throw new Error(ERRORS.NOT_1000_WON);
    }
    if (+purchaseAmount <= 0) {
      throw new Error(ERRORS.NOT_ENOUGH_MONEY);
    }
  }

  generateLottoes(numberOfLottoes) {
    const lottoes = [];
    for (let i = 0; i < numberOfLottoes; i++) {
      lottoes.push(
        Lotto.createRandomLotto(() =>
          Random.pickUniqueNumbersInRange(CONDITIONS.START_NUM, CONDITIONS.END_NUM, CONDITIONS.LOTTO_NUMBER_DRAWN)
        )
      );
    }
    return lottoes;
  }

  async getWinningLotto() {
    while (true) {
      try {
        const winningNumbersInput = await InputView.inputWinningNumbers();
        return new Lotto(winningNumbersInput.split(",").map(Number));
      } catch (error) {
        OutputView.printError(`${error.message}`);
      }
    }
  }

  async getBonusNumber(winningLotto) {
    while (true) {
      try {
        const bonusNumber = +(await InputView.inputBonusNumber());
        this.validateBonusNumber(bonusNumber, winningLotto);
        return bonusNumber;
      } catch (error) {
        OutputView.printError(`${error.message}`);
      }
    }
  }

  validateBonusNumber(bonusNumber, winningLotto) {
    if (winningLotto.contains(bonusNumber)) {
      throw new Error(ERRORS.NOT_BONUS_NUMBER);
    }

    if (
      !(
        bonusNumber >= CONDITIONS.START_NUM &&
        bonusNumber <= CONDITIONS.END_NUM &&
        Number.isInteger(bonusNumber)
      )
    ) {
      throw new Error(ERRORS.NOT_1_TO_45);
    }
  }

  calculateMatches(lottoes, winningLotto, bonusNumber) {
    const howManyMatch = [0, 0, 0, 0, 0];

    lottoes.forEach((lotto) => {
      const matchCount = lotto.matches(winningLotto);
      const hasBonusNumber = lotto.hasBonusNumber(bonusNumber);

      if (matchCount === 3) howManyMatch[0]++;
      if (matchCount === 4) howManyMatch[1]++;
      if (matchCount === 5 && !hasBonusNumber) howManyMatch[2]++;
      if (matchCount === 5 && hasBonusNumber) howManyMatch[3]++;
      if (matchCount === 6) howManyMatch[4]++;
    });
    return howManyMatch;
  }

  calculateRateOfReturn(howManyMatch, purchaseAmount) {
    const totalPrizeMoney =
      howManyMatch[0] * CONDITIONS.THREE_MATCHING_PRIZES +
      howManyMatch[1] * CONDITIONS.FOUR_MATCHING_PRIZES +
      howManyMatch[2] * CONDITIONS.FIVE_MATCHING_PRIZES +
      howManyMatch[3] * CONDITIONS.FIVE_WITH_BONUS_MATCHING_PRIZES +
      howManyMatch[4] * CONDITIONS.SIX_MATCHING_PRIZES;

    return ((totalPrizeMoney / +purchaseAmount) * 100).toFixed(1);
  }
}

export default App;
