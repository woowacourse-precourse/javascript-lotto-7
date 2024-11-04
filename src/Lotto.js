import { Random as MissionUtilsRandom, Console } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;
  
  constructor(numbers = MissionUtilsRandom.pickUniqueNumbersInRange(1, 45, 6)) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateLength(numbers);
    this.#validateRange(numbers);
    this.#validateUnique(numbers);
  }

  #validateLength(numbers) {
    if (!Array.isArray(numbers) || numbers.length !== 6) {
      Console.print("[ERROR] 로또 번호는 6개여야 합니다.");
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  #validateRange(numbers) {
    if (!numbers.every((num) => num >= 1 && num <= 45)) {
      Console.print("[ERROR] 로또 번호는 1과 45 사이여야 합니다.");
      throw new Error("[ERROR] 로또 번호는 1과 45 사이여야 합니다.");
    }
  }

  #validateUnique(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      Console.print("[ERROR] 로또 번호에 중복된 숫자가 없어야 합니다.");
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 없어야 합니다.");
    }
  }

  getNumbers() {
    return this.#numbers;
  }
