import { Random } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  static generate() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return new Lotto(numbers.sort((a, b) => a - b));
  }

  static parseNumbers(input) {
    const numbers = input.split(",").map((num) => parseInt(num.trim(), 10));
    Lotto.#validateWinningNumbers(numbers);
    return numbers;
  }

  static validateBonusNumber(number, winningNumbers) {
    if (isNaN(number) || number < 1 || number > 45) {
      throw new Error("[ERROR] 보너스 번호는 1~45 사이의 숫자여야 합니다.");
    }
    if (winningNumbers.includes(number)) {
      throw new Error(
        "[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다."
      );
    }
  }

  static #validateWinningNumbers(numbers) {
    if (
      numbers.length !== 6 ||
      numbers.some((num) => isNaN(num) || num < 1 || num > 45)
    ) {
      throw new Error(
        "[ERROR] 당첨 번호는 1~45 사이의 숫자 6개여야 하며, 중복이 없어야 합니다."
      );
    }
    if (new Set(numbers).size !== 6) {
      throw new Error(
        "[ERROR] 당첨 번호는 중복되지 않는 6개의 숫자여야 합니다."
      );
    }
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }
    if (numbers.some((num) => num < 1 || num > 45)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }

  getNumbers() {
    return [...this.#numbers];
  }

  countMatches(winningNumbers) {
    return this.#numbers.filter((num) => winningNumbers.includes(num)).length;
  }

  hasNumber(number) {
    return this.#numbers.includes(number);
  }
}

export default Lotto;
