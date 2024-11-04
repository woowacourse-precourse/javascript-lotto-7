import { Random } from "@woowacourse/mission-utils";
import { RANDOM_NUMBERS_RANGE, LOTTO_MAX_LENGTH } from "./Constants.js";


class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateLength(numbers);
    this.#validateDuplicates(numbers);
    this.#validateRange(numbers);
    this.#validateInteger(numbers);
  }

  #validateLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 당첨 번호는 6개여야 합니다.");
    }
  }

  #validateDuplicates(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error("[ERROR] 당첨 번호는 중복될 수 없습니다.");
    }
  }

  #validateRange(numbers) {
    numbers.forEach(number => {
      if (number < 1 || number > 45) {
        throw new Error("[ERROR] 당첨 번호는 1부터 45 사이의 숫자를 입력해야 합니다.");
      }
    });
  }

  #validateInteger(numbers) {
    numbers.forEach(number => {
      if (!Number.isInteger(number)) {
        throw new Error("[ERROR] 당첨 번호는 정수를 입력해야 합니다.");
      }
    });
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return [...this.#numbers];
  }

  static generateRandomNumbers() {
    const randomNumbers = Random.pickUniqueNumbersInRange(
      RANDOM_NUMBERS_RANGE.MIN,
      RANDOM_NUMBERS_RANGE.MAX,
      LOTTO_MAX_LENGTH
    );
    return new Lotto(randomNumbers);
  }
}

export default Lotto;
