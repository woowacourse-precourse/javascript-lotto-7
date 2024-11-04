import { Random } from "@woowacourse/mission-utils";
import {
  ERROR_MESSAGES,
  LOTTO_BONUS_FLAG,
  LOTTO_SIZE,
  LOTTO_WINNING_FLAG,
  MAX_NUMBER,
  MIN_NUMBER,
} from "../utils/constants.js";
import ErrorHandler from "../utils/ErrorHandler.js";

// 로또 번호 생성 및 관리
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b); // 오름차순 정렬
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      ErrorHandler.throwError(ERROR_MESSAGES.WINNING_SIZE);
    } else if (new Set(numbers).size !== LOTTO_SIZE) {
      ErrorHandler.throwError(ERROR_MESSAGES.DUPLICATE_NUMBER);
    }
  }

  //랜덤 로또 번호 반환과 동시에 인스턴스 생성
  static generateLottoNumbers() {
    return new Lotto(
      Random.pickUniqueNumbersInRange(MIN_NUMBER, MAX_NUMBER, LOTTO_SIZE)
    );
  }

  // 로또번호 반환
  getNumbers() {
    return `[${this.#numbers.join(", ")}]`;
  }

  // 당첨 번호와 비교 후 맞는 갯수 리턴
  countMatchingNumbers(winningNumbersArray) {
    return this.#numbers.filter(
      (num) => winningNumbersArray[num] === LOTTO_WINNING_FLAG
    ).length;
  }

  // 보너스 번호가 있는지 확인
  hasBonusNumber(winningNumbersArray) {
    return this.#numbers.some(
      (num) => winningNumbersArray[num] === LOTTO_BONUS_FLAG
    );
  }
}

export default Lotto;
