import { ERROR_MESSAGES, throwError } from "./Error/Error.js";
import defaultSettings from "./Config/DefaultSettings.js";

const { lotto } = defaultSettings;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }
  // 현재 로또 번호를 반환하는 메서드
  getNumbers() {
    return this.#numbers;
  }

  // numbers의 유효성을 검사하는 private 메서드
  #validate(numbers) {
    if (numbers.length !== lotto.pickingNumber) {
      throwError(ERROR_MESSAGES.lotteryNumber.ONLY_6_NUMBERS);
    }
    if (
      numbers.some(
        (num) => num < lotto.minimumNumber || num > lotto.maximumNumber
      )
    ) {
      throwError(ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_IN_RANGE_ALLOWED);
    }
    if (new Set(numbers).size !== lotto.pickingNumber) {
      throwError(ERROR_MESSAGES.lotteryNumber.DUPLICATED_NUMBER);
    }
  }
}

export default Lotto;
