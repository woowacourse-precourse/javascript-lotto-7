import { LOTTERY_NUMBER_COUNT } from "./constants.js";

export class Validator {
  static #validateNotEmpty(input) {
    if (input.trim() === "") {
      throw new Error("[ERROR] 입력값이 비어있습니다.");
    }
  }

  static #validateNumber(input) {
    if (isNaN(input.trim())) {
      throw new Error("[ERROR] 유효한 숫자를 입력해주세요.");
    }
  }

  static #validatePositiveInteger(number) {
    if (number <= 0) {
      throw new Error("[ERROR] 양수를 입력해주세요.");
    }
  }

  static #validateThousandUnit(amount) {
    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 1000원 단위로 입력해주세요.");
    }
  }

  static #validateWinNumberCount(numbers) {
    if (numbers.length !== LOTTERY_NUMBER_COUNT) {
      throw new Error(`[ERROR] 당첨 번호는 ${LOTTERY_NUMBER_COUNT}개여야 합니다.`);
    }
  }

  static #validateValidWinNumber(number) {
    if (number < 1 || number > 45) {
      throw new Error("[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }

  static #validateNotDuplicate(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 중복된 숫자가 있습니다.");
    }
  }

  // 올바른 숫자형식인지 검사
  static isValidNumber(input) {
    this.#validateNotEmpty(input);
    this.#validateNumber(input);
  }

  // 올바른 로또 구입 금액을 입력했는지 검사
  static isValidLottoAmount(number) {
    this.#validatePositiveInteger(number);
    this.#validateThousandUnit(number);
  }

  // 올바른 당첨번호인지 검사
  static isValidWinningNumbers(numbers) {
    this.#validateWinNumberCount(numbers);
    numbers.forEach((number) => this.#validateValidWinNumber(number));
    this.#validateNotDuplicate(numbers);
  }

  // 올바른 보너스 번호인지 검사
  static isValidBonusNumber(bonus, winningNumbers) {
    this.#validateValidWinNumber(bonus);
    this.#validateNotDuplicate([bonus, ...winningNumbers]);
  }
}
