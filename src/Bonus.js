import { MIN_LOTTO_NUMBER, MAX_LOTTO_NUMBER, BONUS_ERROR_MESSAGE } from "./constants.js";

class Bonus {
  #number;

  constructor(number) {
    this.#validate(number);
    this.#number = number;
  }

  #validate(number) {
    if (number.trim() === "") {
        throw new Error(BONUS_ERROR_MESSAGE.IS_EMPTY);
    }
    else if (isNaN(Number(number))) {
        throw new Error(BONUS_ERROR_MESSAGE.IS_NOT_NUMBER);
    }
    else if (!Number.isInteger(Number(number))) {
        throw new Error(BONUS_ERROR_MESSAGE.IS_NOT_INTEGER);
    }
    else if (number < MIN_LOTTO_NUMBER || number > MAX_LOTTO_NUMBER) {
        throw new Error(BONUS_ERROR_MESSAGE.OUT_OF_RANGE);
    }
  }

  getNumber() {
    return this.#number;
  }
}

export default Bonus;