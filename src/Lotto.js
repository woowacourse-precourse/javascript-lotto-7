import { ERROR_MESSAGE_VALIDATE_LOTTO } from "./ErrorMessage";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE_VALIDATE_LOTTO.invalidLength);
    }
    numbers.reduce((prev, curr) => {
      const currentNumber = parseFloat(curr);
      if (isNaN(currentNumber)) {
        throw new Error(ERROR_MESSAGE_VALIDATE_LOTTO.nan);
      }
      if (!Number.isInteger(currentNumber)) {
        throw new Error(ERROR_MESSAGE_VALIDATE_LOTTO.nonInteger);
      }
      if (currentNumber < 1 || currentNumber > 45) {
        throw new Error(ERROR_MESSAGE_VALIDATE_LOTTO.outOfBound);
      }
      if (prev.includes(curr))
        throw new Error(ERROR_MESSAGE_VALIDATE_LOTTO.duplicated);
      prev.push(curr);
      return prev;
    }, []);
  }

  getNumbers() {
    return this.#numbers;
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
