import { Console, Random } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor() {
    this.#numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b
    );
  }

  printNumberArray() {
    Console.print(this.#numbers);
  }

  getLevel(winningNumbers, bonusNumber) {
    const matchCount = this.#numbers.filter((number) =>
      winningNumbers.includes(number)
    ).length;

    if (matchCount === 6) return 1;
    if (matchCount === 5) {
      if (this.#numbers.includes(bonusNumber)) return 2;
      return 3;
    }
    if (matchCount === 4) return 4;
    if (matchCount === 3) return 5;

    return 0;
  }
}

export default Lotto;
