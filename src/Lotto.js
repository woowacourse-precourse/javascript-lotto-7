import {Random} from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }
    if (!numbers.every((number) => number >= 1 && number <= 45)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }

  static generate() {
    return new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6));
  }

  toString() {
    return `[${this.#numbers.join(", ")}]`;
  }

  matchNumbers(winningNumbers, bonusNumber) {
    const matchCount = this.#numbers.filter((number) =>
      winningNumbers.includes(number)
    ).length;

    const hasBonus = matchCount === 5 && this.#numbers.includes(bonusNumber);

    return {matchCount, hasBonus};
  }

  getNumbers() {
    return [...this.#numbers];
  }
}

export default Lotto;
