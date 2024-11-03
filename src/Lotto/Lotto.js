import Validator from '../utils/Validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    Validator.validateLotto(numbers);
    this.#numbers = numbers;
  }

  getWinningResult(winningNumber, bonusNumber) {
    const compareCount = this.compareWinningNumbersCount(winningNumber);
    const rank = this.setWinningRank(compareCount, bonusNumber);
    return rank;
  }

  compareWinningNumbersCount(winningNumbers) {
    const matchingNumbers = winningNumbers.filter((number) =>
      this.#numbers.includes(parseInt(number, 10)),
    );
    return matchingNumbers.length;
  }

  setWinningRank(compareCount, bonusNumber) {
    if (compareCount === 5 && this.#numbers.includes(bonusNumber)) {
      return 2;
    }
    switch (compareCount) {
      case 3:
        return 5;
      case 4:
        return 4;
      case 5:
        return 3;
      case 6:
        return 1;
      default:
        return 0;
    }
  }
}
export default Lotto;
