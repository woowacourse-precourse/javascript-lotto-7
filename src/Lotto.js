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

  equals(target, bonus) {
    const result = this.#numbers.reduce(
      (prev, curr) => {
        if (target.includes(curr)) {
          prev[0] += 1;
        } else if (curr === bonus) {
          prev[1] = true;
        }
        return prev;
      },
      [0, false]
    );
    if (result[0] === 6) {
      return 5;
    } else if (result[0] === 5 && result[1]) {
      return 4;
    } else if (result[0] === 5) {
      return 3;
    } else if (result[0] === 4) {
      return 2;
    } else if (result[0] === 3) {
      return 1;
    }
    return 0;
  }
  // TODO: 추가 기능 구현
}

export default Lotto;
