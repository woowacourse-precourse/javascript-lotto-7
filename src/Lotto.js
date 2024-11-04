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

  getWinningNumber() {
    return this.#numbers;
  }
}

export default Lotto;
