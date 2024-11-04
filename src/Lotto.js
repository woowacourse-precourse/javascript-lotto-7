import AMOUNT from './Const.js';
import Validator from './Validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const validate = new Validator();
    validate.validateLotto(numbers);
  }

  compareLotto(lottos, bonusNumber) {
    const matchCount = lottos.map(lotto => {
      const match = lotto.filter(number =>
        this.#numbers.includes(number),
      ).length;
      if (match === 5 && lotto.includes(bonusNumber)) {
        return 7;
      }
      return match;
    });
    return this.calculateWinning(matchCount);
  }

  calculateWinning(matchCount) {
    const winning = { 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 };
    matchCount.forEach(count => {
      if (count in winning) {
        winning[count] += 1;
      }
    });
    return winning;
  }

  calculateStatistics(winning, money) {
    let totalAmount = 0;
    const matchCount = Object.keys(winning);
    matchCount.forEach(count => {
      if (winning[count] > 0) {
        totalAmount += AMOUNT[count] * winning[count];
      }
    });
    return ((totalAmount / money) * 100).toFixed(1);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
