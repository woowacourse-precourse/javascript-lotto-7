import Lotto from "./Lotto.js";
import MESSAGES from "./constants/Messages.js";
import ERRORS from "./constants/Errors.js";
import CONDITIONS from "./constants/Conditions.js";
import InputView from "./views/InputViews.js";
import OutputView from "./views/OutputViews.js";
import { Console } from "@woowacourse/mission-utils";
import { Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    const purchaseAmount = await InputView.inputMoney();
    this.validatePurchaseAmount(purchaseAmount);

    const numberOfLottoes = +purchaseAmount / CONDITIONS.ONE_LOTTO_PRICE;
    const lottoes = this.generateLottoes(numberOfLottoes);

    OutputView.printPurchasedLottos(numberOfLottoes, lottoes);

    // 당첨 번호를 입력
    const winningNumbers = await this.getWinningLotto();
    const bonusNumber = await this.getBonusNumber(winningNumbers);

    const howManyMatch = [0, 0, 0, 0, 0];
    for (let i = 0; i < numberOfLottoes; i++) {
      let cnt = 0;
      let hasBonusNumber = lottoes[i].includes(bonusNumber);

      for (let j = 0; j < 6; j++) {
        if (lottoes[i].includes(winningNumberArr[j])) {
          cnt++;
        }
      }

      if (cnt === 3) howManyMatch[0]++;
      if (cnt === 4) howManyMatch[1]++;
      if (cnt === 5 && !hasBonusNumber) howManyMatch[2]++;
      if (cnt === 5 && hasBonusNumber) howManyMatch[3]++;
      if (cnt === 6) howManyMatch[4]++;
    }

    const totalPrizeMoney =
      howManyMatch[0] * CONDITIONS.THREE_MATCHING_PRIZES +
      howManyMatch[1] * CONDITIONS.FOUR_MATCHING_PRIZES +
      howManyMatch[2] * CONDITIONS.FIVE_MATCHING_PRIZES +
      howManyMatch[3] * CONDITIONS.FIVE_WITH_BONUS_MATCHING_PRIZES +
      howManyMatch[4] * CONDITIONS.SIX_MATCHING_PRIZES;
    const rateOfReturn = ((totalPrizeMoney / +purchaseAmount) * 100).toFixed(1);

    OutputView.printWinningStatistics(howManyMatch, rateOfReturn);
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
          Random.pickUniqueNumbersInRange(
            CONDITIONS.START_NUM,
            CONDITIONS.END_NUM,
            CONDITIONS.LOTTO_NUMBER_DRAWN
          )
        )
      );
    }
    return lottoes;
  }

  async getWinningLotto() {
    const winningNumbersInput = await InputView.inputWinningNumbers();
    return new Lotto(winningNumbersInput.split(",").map(Number));
  }

  async getBonusNumber(winningLotto) {
    const bonusNumber = +(await InputView.inputBonusNumber());
    this.validateBonusNumber(bonusNumber, winningLotto);
    return bonusNumber;
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
}

export default App;
