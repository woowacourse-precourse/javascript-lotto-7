import { Random } from '@woowacourse/mission-utils';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  static generateRandomLotto() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return new Lotto(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }

  matchCount(winningNumbers) {
    return this.#numbers.filter((number) => winningNumbers.includes(number))
      .length;
  }

  hasBonusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }

  #validate(numbers) {
    if (
      numbers.length !== 6 ||
      new Set(numbers).size !== 6 ||
      numbers.some((num) => num < 1 || num > 45)
    ) {
      throw new Error(
        '[ERROR] 로또 번호는 1부터 45 사이의 중복되지 않은 6개의 숫자여야 합니다.',
      );
    }
  }
}

export default Lotto;
