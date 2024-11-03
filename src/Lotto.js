import ERROR from "./constants/error";
import CONSTANT from "./constants/costant";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers == '') {
      throw new Error(ERROR.BLANK);
  }

    if (numbers.length !== CONSTANT.LOTTO_CANSTANT.LOTTO_LENGTH) {
      throw new Error(ERROR.INVALID_NUMBER_COUNT);
    }

    const removeDuplicate = new Set(numbers);
    if (numbers.length !== removeDuplicate.size){
      throw new Error(ERROR.DUPLICATED_NUMBER);
    }

    this.#lottoValidation(numbers);
  }

  #lottoValidation(numbers) {
    numbers.forEach((num) => {
      if (num > 45 || num < 1) { 
          throw new Error(ERROR.INVALID_RANGE_NUMBER);
      }

      if (isNaN(num)) {
          throw new Error(ERROR.INVALID_VALUE);
      }

      if (!Number.isInteger(num)) {
          throw new Error(ERROR.IS_NOT_INT);
      }
  });
  }
}

export default Lotto;
