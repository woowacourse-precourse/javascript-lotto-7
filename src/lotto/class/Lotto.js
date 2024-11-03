import LottoIO from "./LottoIO.js ";
import { duplicateNumbers, isNumber, isOutRangeNumber } from "./utils.js";
import {
  LOTTO_NUMBER_MAX,
  LOTTO_NUMBER_MIN,
  NUMBER_COUNT_BY_LOTTO,
} from "./lotto/constants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.#validate(numbers);
    this.#numbers = numbers;
  }

  static async createWinningNumbers() {
    while (true) {
      try {
        const numbers = await this.#getNumbers();
        const parsing = numbers.split(",").map(Number);

        return new Lotto(parsing);
      } catch ({ message }) {
        LottoIO.print(message || "알 수 없는 에러");
      }
    }
  }

  get numbers() {
    return [...this.#numbers];
  }

  static async #getNumbers() {
    return await LottoIO.getUserInput("당첨 번호를 입력해 주세요.\n");
  }

  static #validate(numbers) {
    this.#checkIterator(numbers);
    this.#checkNumberCount(numbers);
    this.#checkNumberOrComma(numbers);
    this.#checkInRangeNumbers(numbers);
    this.#checkDifferentNumbers(numbers);
  }

  static #checkIterator(numbers) {
    if (typeof numbers !== "object") {
      LottoIO.throwError(
        "당첨 번호는 콤마(,)를 기준으로 숫자를 입력해 주세요. (ex: 1,2,3)"
      );
    }
  }

  static #checkNumberCount(numbers) {
    if (numbers.length !== NUMBER_COUNT_BY_LOTTO) {
      LottoIO.throwError(
        `${NUMBER_COUNT_BY_LOTTO}개의 당첨 번호를 입력해 주세요.`
      );
    }
  }
  static #checkNumberOrComma(numbers) {
    if (numbers.some((n) => !isNumber(n))) {
      LottoIO.throwError("숫자와 콤마(,)만 입력해 주세요.");
    }
  }

  static #checkInRangeNumbers(numbers) {
    const isInRangeLotto = (number) =>
      isOutRangeNumber(number, LOTTO_NUMBER_MIN, LOTTO_NUMBER_MAX);

    if (numbers.some(isInRangeLotto)) {
      LottoIO.throwError(
        `당첨 번호는 ${LOTTO_NUMBER_MIN} ~ ${LOTTO_NUMBER_MAX} 사이로 입력해 주세요.`
      );
    }
  }

  static #checkDifferentNumbers(numbers) {
    if (duplicateNumbers(numbers)) {
      LottoIO.throwError("모든 당첨 번호를 서로 다르게 입력해 주세요.");
    }
  }
}

export default Lotto;
