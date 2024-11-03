import LottoIO from "./LottoIO.js ";
import { isNumber, isOutRangeNumber } from "./utils.js";
import {
  LOTTO_NUMBER_MAX,
  LOTTO_NUMBER_MIN,
  NUMBER_COUNT_BY_LOTTO,
} from "./constants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    while (true) {
      try {
        Lotto.#validateLottoNumbers(numbers);
        this.#numbers = numbers;

        break;
      } catch ({ message }) {
        LottoIO.print(message);

        return Lotto.createWinningNumbers();
      }
    }
  }

  static async createWinningNumbers() {
    const numbers = await LottoIO.getUserInput("당첨 번호를 입력해 주세요.\n");

    return new Lotto(numbers.split(",").map(Number));
  }

  get winnningNumbers() {
    return [...this.#numbers];
  }

  static #validateLottoNumbers(numbers) {
    if (typeof numbers !== "object") {
      LottoIO.throwError(
        "당첨 번호는 콤마(,)를 기준으로 숫자를 입력해 주세요. (ex: 1,2,3)"
      );
    }

    if (numbers.length !== NUMBER_COUNT_BY_LOTTO) {
      LottoIO.throwError(
        `${NUMBER_COUNT_BY_LOTTO}개의 당첨 번호를 입력해 주세요.`
      );
    }

    if (numbers.some((n) => !isNumber(n))) {
      LottoIO.throwError("숫자와 콤마(,)만 입력해 주세요.");
    }

    const isIncludeOutRangeNumber = numbers.some((n) =>
      isOutRangeNumber(n, LOTTO_NUMBER_MIN, LOTTO_NUMBER_MAX)
    );
    if (isIncludeOutRangeNumber) {
      LottoIO.throwError(
        `당첨 번호는 ${LOTTO_NUMBER_MIN} ~ ${LOTTO_NUMBER_MAX} 사이로 입력해 주세요.`
      );
    }

    if (new Set(numbers).size !== numbers.length) {
      LottoIO.throwError("모든 당첨 번호를 서로 다르게 입력해 주세요.");
    }
  }
}

export default Lotto;
