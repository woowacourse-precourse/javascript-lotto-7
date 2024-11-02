import Validator from '../utils/Validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    Validator.validateLotto(numbers);
    this.#numbers = numbers;
  }

  getWinningResult(winningNumber, bonusNumber) {
    const compareCount = this.ompareWinningNumbersCount(winningNumber);
    const winningMoney = this.setWinningMoney(compareCount, bonusNumber);
    return winningMoney;
  }

  compareWinningNumbersCount(winningNumbers) {
    const matchingNumbers = winningNumbers.filter((number) =>
      this.#numbers.includes(number),
    );
    return matchingNumbers.length;
  }

  setWinningMoney(compareCount, bonusNumber) {
    if (compareCount === 5 && this.#numbers.includes(bonusNumber)) {
      return '30,000,000원';
    }
    switch (compareCount) {
      case 3:
        return '5,000원';
      case 4:
        return '50,000원';
      case 5:
        return '1,500,000원';
      case 6:
        return '2,000,000,000원';
      default:
        return 0;
    }
  }
}
export default Lotto;
