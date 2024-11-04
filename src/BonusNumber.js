import Lotto from './Lotto.js';
import validation from './validation.js';
import { NUM } from './constants/index.js';

export default class BonusNumber extends Lotto {
  #bonusNumber;

  constructor(winningNumber, bonusNumber) {
    super(winningNumber);
    this.#validate(winningNumber, bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #validate(winningNumber, bonusNumber) {
    const validateCondition = Object.values(validation.bonusNumber);
    validateCondition.forEach((condition) => {
      condition(bonusNumber, winningNumber);
    });
  }

  /**
   *
   * @param {Array<Array<number>>} myLotto
   * @param {string} bonusNumber
   */
  checkWinning(myLotto) {
    let winningResult = Array.from({ length: 5 }).fill(0);
    myLotto.forEach((lotto) => {
      winningResult = this.#checkWinningCnt(
        this.#compareLottoNumber(lotto),
        winningResult,
      );
    });
    return winningResult;
  }

  #compareLottoNumber(lotto) {
    const winning = {
      winningCnt: 0,
      bonus: false,
    };
    lotto.forEach((number) => {
      if (this.getWinningNumber().indexOf(number.toString()) >= 0)
        winning.winningCnt += 1;
    });

    if (lotto.indexOf(Number(this.#bonusNumber)) >= 0) winning.bonus = true;
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
}
