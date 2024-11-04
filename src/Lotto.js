import { Random } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, LOTTERY } from './constant';

class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.#validate(numbers);
    this.#numbers = numbers;
  }

  static #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.INVALID_LOTTERY_NUMBER_SIZE);
    }
    const numberSet = new Set(numbers);
    if (numberSet.size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.DUPLICATED_LOTTERY_NUMBER);
    }
  }

  static getRandomUniqueLotteryNumbers() {
    const {
      MIN_NUMBER,
      MAX_NUMBER,
      WINNING_NUMBER_SIZE,
    } = LOTTERY;
    return Random.pickUniqueNumbersInRange(MIN_NUMBER, MAX_NUMBER, WINNING_NUMBER_SIZE)
      .sort((a, b) => a - b);
  }

  getLottoResult(winningNumbers, bonusNumber) {
    const prize = this.#getDrawPrize(winningNumbers, bonusNumber);
    return { prize, money: LOTTERY.PRIZE[prize] };
  }

  #getDrawPrize(winningNumbers, bonusNumber) {
    const {
      winningCount,
      hasBonus,
    } = this.#drawLotto(winningNumbers, bonusNumber);
    let prize = 0;
    if (winningCount === 6) prize = 1;
    else if (winningCount === 5 && hasBonus) prize = 2;
    else if (winningCount === 5) prize = 3;
    else if (winningCount === 4) prize = 4;
    else if (winningCount === 3) prize = 5;
    return prize;
  }

  #drawLotto(winningNumbers, bonusNumber) {
    let winningCount = 0;
    let hasBonus = false;
    this.#numbers.forEach((number) => {
      if (winningNumbers.includes(number)) winningCount += 1;
      else if (number === bonusNumber) hasBonus = true;
    });
    return { winningCount, hasBonus };
  }

  toString() {
    return `[${this.#numbers.join(', ')}]`;
  }
}

export default Lotto;
