import { LOTTO_NUM_ERROR, ONLY_NUM_ERROR } from "./lib/error.js";
import { LOTTO_NUM_LENGTH } from "./lib/constants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_NUM_LENGTH) {
      throw new Error(LOTTO_NUM_ERROR.length);
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(LOTTO_NUM_ERROR.duplicated);
    }
    if (
      numbers.some(
        (num) => isNaN(Number(num)) || !Number.isInteger(Number(num))
      )
    ) {
      throw new Error(ONLY_NUM_ERROR);
    }
  }

  getLottoRank(winningNumbers, bonusNumber) {
    const winningNumbersArray = [...winningNumbers.split(","), bonusNumber];

    const matchedCount = this.#numbers.filter((number) =>
      winningNumbersArray.includes(number.toString())
    ).length;

    switch (matchedCount) {
      case 6:
        if (this.#numbers.includes(Number(bonusNumber))) {
          return 2;
        }
        return 1;
      case 5:
        return 3;
      case 4:
        return 4;
      case 3:
        return 5;
      default:
        return 0;
    }
  }
}

export default Lotto;
