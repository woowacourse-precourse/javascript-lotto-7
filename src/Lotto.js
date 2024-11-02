import ERROR_MESSAGES from './Error/Error.js';
import defaultSettings from './Config/DefaultSettings.js';

const { lotto } = defaultSettings;
// 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.
// 이 때문에 이를 /Model에 이동하지 않았음.
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validateNotEmpty(numbers);
    this.#validateLength(numbers);
    this.#validateType(numbers);
    this.#validateRange(numbers);
    this.#validateNumber(numbers);
    this.#numbers = numbers;
  }

  #validateLength(numbers) {
    if (numbers.length !== lotto.pickingNumber) {
      throw new Error(ERROR_MESSAGES.lotteryNumber.NOT_ENOUGH_ELEMENT);
    }
  }

  #validateNumber(numbers) {
    if (new Set(numbers).size !== lotto.pickingNumber) {
      throw new Error(ERROR_MESSAGES.lotteryNumber.DUPLICATED_NUMBER);
    }
  }

  #validateRange(numbers) {
    numbers.forEach((number) => {
      if (number < lotto.minimumNumber || number > lotto.maximumNumber) {
        throw new Error(
          ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_IN_RANGE_ALLOWED,
        );
      }
    });
  }

  #validateType(numbers) {
    numbers.forEach((number) => {
      if (typeof number !== 'number' || !Number.isInteger(number)) {
        throw new Error(ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_ALLOWED);
      }
    });
  }

  #validateNotEmpty(numbers) {
    if (!numbers || numbers.length === 0) {
      throw new Error(ERROR_MESSAGES.lotteryNumber.NOT_ENOUGH_ELEMENT);
    }
  }

  toString() {
    return `[${this.#numbers.join(', ')}]`;
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
