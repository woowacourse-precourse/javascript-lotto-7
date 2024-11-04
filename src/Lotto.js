import { Random } from '@woowacourse/mission-utils';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
    if (!numbers.every(num => Number.isInteger(num) && num >= 1 && num <= 45)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 정수여야 합니다.");
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  static generateRandomNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

export default Lotto;
