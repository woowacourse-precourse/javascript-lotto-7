import ValidateMessage from "./messages/ValidateMessage.js";
import LottoPrizeEvaluator from "./functions/LottoPrizeEvaluator.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.result = "";
  }

  #validate(numbers) {
    this.#checkNumberCount(numbers);
    this.#checkDuplicateValues(numbers);
    this.#checkIntegerValues(numbers);
    this.#checkRange(numbers);
  }

  #checkNumberCount(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ValidateMessage.LOTTO_ERROR_MESSAGES.INVALID_NUMBER_COUNT);
    }
  }

  #checkDuplicateValues(numbers) {
    const set = new Set(numbers);
    if (numbers.length !== set.size) {
      throw new Error(ValidateMessage.LOTTO_ERROR_MESSAGES.DUPLICATE_VALUES);
    }
  }

  #checkIntegerValues(numbers) {
    if (numbers.some((number) => isNaN(Number(number)) || number % 1 !== 0)) {
      throw new Error(ValidateMessage.LOTTO_ERROR_MESSAGES.NOT_AN_INTEGER);
    }
  }

  #checkRange(numbers) {
    if (numbers.some((number) => number < 1 || number > 45)) {
      throw new Error(ValidateMessage.LOTTO_ERROR_MESSAGES.OUT_OF_RANGE);
    }
  }

  checkResult(lottoData) {
    this.result = LottoPrizeEvaluator.checkResult(this.#numbers, lottoData);
  }
}

export default Lotto;
