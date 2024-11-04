import { Random } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers = Lotto.generateNumbers()) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  static generateNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 당첨 번호는 중복되지 않는 6개의 숫자여야 합니다.");
    }
    if (!numbers.every(num => num >= 1 && num <= 45)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }

  static validateBonus(bonusNumber, mainNumbers) {
    if (isNaN(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
    }
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    if (mainNumbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  get numbers() {
    return this.#numbers;
  }

  matchCount(otherNumbers) {
    return this.#numbers.filter(num => otherNumbers.includes(num)).length;
  }

  hasBonus(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }
}

export default Lotto;
