import { MissionUtils } from "@woowacourse/mission-utils"

const ERROR_MESSAGES = {
  notANumber: "[ERROR] 로또 번호는 숫자로 입력해야 합니다.",
  incorrectLength: "[ERROR] 로또 번호는 6개여야 합니다.",
  duplicateNumbers: "[ERROR] 중복된 숫자가 존재하지 않아야 합니다.",
  outOfRange: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다."
};

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = [...numbers];
  }

  #validate(numbers) {
    this.#validateIsNumber(numbers);
    this.#validateLength(numbers);
    this.#validateOnlyUnique(numbers);
    this.#validateNumRange(numbers);
  }

  #validateIsNumber(numbers) {
    numbers.forEach((val) => {
      if (isNaN(val)) {
        throw new Error(ERROR_MESSAGES.notANumber);
      }
    });
  }

  #validateLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.incorrectLength);
    }
  }

  #validateOnlyUnique(numbers) {
    if (!this.#isOnlyUnique(numbers)) {
      throw new Error(ERROR_MESSAGES.duplicateNumbers);
    }
  }

  #validateNumRange(numbers) {
    numbers.forEach((val) => {
      if (val < 1 || val > 45) {
        throw new Error(ERROR_MESSAGES.outOfRange);
      }
    });
  }

  #isOnlyUnique(numbers) {
    return new Set(numbers).size === numbers.length;
  }

  #lottoSort(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  makeLotto() {
    this.#numbers = this.#lottoSort(this.#numbers);
    this.#printLotto(this.#numbers);
  }

  makeWinningLotto() {
    const bonusNum = this.#getBonusNum();
    this.#numbers = this.#lottoSort([...this.#numbers, bonusNum]);
  }

  #getBonusNum() {
    const BONUS_NUMBER = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 1)[0];
    return BONUS_NUMBER;
  }

  #printLotto() {
    MissionUtils.Console.print(this.#numbers);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
