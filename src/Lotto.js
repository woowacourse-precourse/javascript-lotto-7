import { ERROR_MESSAGE_VALIDATE_LOTTO } from "./ErrorMessage.js";

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
    numbers.reduce((previous, current) => {
      const currententNumber = parseFloat(current);
      if (isNaN(currententNumber)) {
        throw new Error(ERROR_MESSAGE_VALIDATE_LOTTO.nan);
      }
      if (!Number.isInteger(currententNumber)) {
        throw new Error(ERROR_MESSAGE_VALIDATE_LOTTO.nonInteger);
      }
      if (currententNumber < 1 || currententNumber > 45) {
        throw new Error(ERROR_MESSAGE_VALIDATE_LOTTO.outOfBound);
      }
      if (previous.includes(current)) throw new Error(ERROR_MESSAGE_VALIDATE_LOTTO.duplicated);
      previous.push(current);
      return previous;
    }, []);
  }

  getNumbers() {
    return this.#numbers.sort((a, b) => a - b);
  }

  equals(target, bonus) {
    const result = this.#numbers.reduce(
      (previous, current) => {
        if (target.includes(current)) previous[0] += 1;
        else if (current === bonus) previous[1] = true;
        return previous;
      },
      [0, false]
    );
    if (result[0] === 6) return 5;
    else if (result[0] === 5 && result[1]) return 4;
    else if (result[0] === 5) return 3;
    else if (result[0] === 4) return 2;
    else if (result[0] === 3) return 1;
    return 0;
  }
  // TODO: 추가 기능 구현
}

export default Lotto;
