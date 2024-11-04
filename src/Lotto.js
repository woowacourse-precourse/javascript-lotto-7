import { Random } from "@woowacourse/mission-utils";

class Lotto {
  static NUMBER_RANGE = { MIN: 1, MAX: 45 };
  static NUM_COUNT = 6;

  #numbers;

  constructor(numbers = Lotto.generateRandomNumbers()) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  static generateRandomNumbers() {
    return Random.pickUniqueNumbersInRange(
      Lotto.NUMBER_RANGE.MIN,
      Lotto.NUMBER_RANGE.MAX,
      Lotto.NUM_COUNT
    );
  }

  #validate(numbers) {
    if (numbers.length !== Lotto.NUM_COUNT) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (!numbers.every((num) => this.isNumberInRange(num))) {
      throw new Error("[ERROR] 숫자는 1~45 사이의 수여야 합니다.");
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }
  }

  isNumberInRange(number) {
    return number >= Lotto.NUMBER_RANGE.MIN && number <= Lotto.NUMBER_RANGE.MAX;
  }

  getNumbers() {
    return this.#numbers;
  }

  matchCount(winningNumbers) {
    return this.#numbers.filter((num) => winningNumbers.includes(num)).length;
  }

  hasBonusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }
}

export default Lotto;
