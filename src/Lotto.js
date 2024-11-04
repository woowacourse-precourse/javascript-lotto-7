import { Console, Random } from "@woowacourse/mission-utils";

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

    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }
  }

  printNumberArray() {
    Console.print(`[${this.#numbers.join(", ")}]`);
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
