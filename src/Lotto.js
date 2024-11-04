import { ERROR_MESSAGES, throwError } from "./Error/Error.js";
import defaultSettings from "./Config/DefaultSettings.js";

const { lotto } = defaultSettings;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validatePickingNumberCount(numbers);
    this.#validateNumberRange(numbers);
    this.#validateNoDuplicates(numbers);
    this.#numbers = numbers;
  }

  getNumbers() {
    return this.#numbers;
  }

  // 숫자 개수가 올바른지 확인
  #validatePickingNumberCount(numbers) {
    if (numbers.length !== lotto.pickingNumber) {
      throwError(ERROR_MESSAGES.lotteryNumber.ONLY_6_NUMBERS);
    }
  }

  // 숫자가 범위 내에 있는지 확인
  #validateNumberRange(numbers) {
    if (
      numbers.some(
        (num) => num < lotto.minimumNumber || num > lotto.maximumNumber
      )
    ) {
      throwError(ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_IN_RANGE_ALLOWED);
    }
  }

  // 중복된 숫자가 없는지 확인
  #validateNoDuplicates(numbers) {
    if (new Set(numbers).size !== lotto.pickingNumber) {
      throwError(ERROR_MESSAGES.lotteryNumber.DUPLICATED_NUMBER);
    }
  }
}

export default Lotto;
