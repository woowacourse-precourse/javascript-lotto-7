import * as numberConfig from "./config/numberConfig.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validateNull(numbers);
    this.#validateInputType(numbers);
    this.#validateNumberOfBalls(numbers);
    this.#validateNumbersRange(numbers);
    this.#validateUniqueNumber(numbers);
    this.#numbers = numbers;
  }

  getWinningNumbers() {
    return this.#numbers;
  }

  #validateNull(numbers) {
    if (numbers == "") {
      throw new Error("\n[ERROR] 로또 번호는 공백으로 둘 수 없습니다.");
    }
  }

  #validateInputType(numbers) {
    if (typeof numbers == !Number) {
      throw new Error("\n[ERROR] 숫자만 입력할 수 있습니다.");
    }
  }

  #validateNumberOfBalls(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  #validateNumbersRange(numbers) {
    numbers.forEach((num) => {
      if (
        numberConfig.LOTTO_NUM_RANGE.MIN > num ||
        numberConfig.LOTTO_NUM_RANGE.MAX < num
      ) {
        throw new Error(
          "[ERROR] 당첨 번호는 1부터 45사이의 숫자만 입력할 수 있습니다."
        );
      }
    });
  }

  #validateUniqueNumber(numbers) {
    const uiqueNumbers = new Set(numbers);
    if (uiqueNumbers.size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 포함되어 있습니다.");
    }
  }
}

export default Lotto;
