import validation from './validation.js';
import { NUM } from './constants/index.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const validateCondition = Object.values(validation.winningNumber);
    validateCondition.forEach((condition) => {
      condition(numbers);
    });
  }
  /**
   *
   * @param {Array<Array<number>>} myLotto
   * @param {string} bonusNumber
   */
  checkWinning(myLotto, bonusNumber) {
    let winningResult = Array.from({ length: 5 }).fill(0);
    myLotto.forEach((lotto) => {
      winningResult = this.#checkWinningCnt(
        this.#compareLottoNumber(lotto, bonusNumber),
        winningResult,
      );
    });
    return winningResult;
  }

  #compareLottoNumber(lotto, bonusNumber) {
    const winning = {
      winningCnt: 0,
      bonus: false,
    };
    lotto.forEach((number) => {
      if (this.#numbers.indexOf(number.toString()) >= 0)
        winning.winningCnt += 1;
    });

    if (lotto.indexOf(Number(bonusNumber)) >= 0) winning.bonus = true;
    return winning;
  }

  #checkWinningCnt(winning, winningResult) {
    if (winning.winningCnt - NUM.MINIMUM_WINNING_CNT >= 0) {
      if (winning.winningCnt === NUM.FIVE_WINNING) {
        winningResult[this.#checkWinningBonusNumber(winning.bonus)] += 1;
        return winningResult;
      }
      winningResult[winning.winningCnt - NUM.MINIMUM_WINNING_CNT] += 1;
    }
    return winningResult;
  }

  #checkWinningBonusNumber(bonusBoolean) {
    if (bonusBoolean) return NUM.FIVE_WINNING_BONUS - NUM.MINIMUM_WINNING_CNT;
    return NUM.FIVE_WINNING - NUM.MINIMUM_WINNING_CNT;
  }

  calculateReturn(purchaseAmount, winningResult) {
    const winningReturnSum = this.#sumWinningReturn(winningResult);
    return ((winningReturnSum / purchaseAmount) * 100).toFixed(1);
  }

  #sumWinningReturn(winningResult) {
    let winningReturnSum = 0;
    winningResult.forEach((winningCnt, idx) => {
      winningReturnSum += winningCnt * NUM.WINNING_AMOUNT[idx];
    });
    return winningReturnSum;
  }
}

export default Lotto;
