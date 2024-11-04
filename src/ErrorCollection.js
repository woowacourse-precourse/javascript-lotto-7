/**
 * @class ErrorCollection
 * @description 입력값의 유효성을 검사하여 오류가 발생하면 에러를 발생시키는 클래스
 */
class ErrorCollection {
  /**
   * @description 로또 번호가 6개인지 확인
   * @param {number[]} numbers - 로또 번호 배열
   * @throws {Error} 로또 번호가 6개가 아닐 경우 에러
   */
  checkLottoNumberCount(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  /**
   * @description 로또 번호가 모두 정수인지 확인
   * @param {number[]} numbers - 로또 번호 배열
   * @throws {Error} 정수가 아닌 번호가 포함된 경우 에러
   */
  checkLottoNumberIntegers(numbers) {
    const allIntegers = numbers.every((num) => Number.isInteger(num));
    if (!allIntegers) {
      throw new Error("[ERROR] 로또 번호는 정수여야 합니다.");
    }
  }

  /**
   * @description 로또 번호가 1~45 범위 내에 있는지 확인
   * @param {number[]} numbers - 로또 번호 배열
   * @throws {Error} 범위를 벗어난 번호가 포함된 경우 에러
   */
  checkLottoNumberRange(numbers) {
    const inRange = numbers.every((num) => num >= 1 && num <= 45);
    if (!inRange) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 자연수여야 합니다.");
    }
  }

  /**
   * @description  로또 번호에 중복이 없는지 확인
   * @param {number[]} numbers - 로또 번호 배열
   * @throws {Error} 중복된 번호가 포함된 경우 에러
   */
  checkLottoNumberDuplicates(numbers) {
    const noDuplicates = new Set(numbers).size === numbers.length;
    if (!noDuplicates) {
      throw new Error("[ERROR] 로또 번호에 중복이 있습니다.");
    }
  }

  /**
   * @description 보너스 번호가 정수인지 확인
   * @param {number} bonus - 보너스 번호
   * @throws {Error} 보너스 번호가 정수가 아닐 경우 에러
   */
  checkBonusNumberInteger(bonus) {
    if (!Number.isInteger(bonus)) {
      throw new Error("[ERROR] 보너스 번호는 정수여야 합니다.");
    }
  }

  /**
   * @description 보너스 번호가 1~45 범위 내에 있는지 확인
   * @param {number} bonus - 보너스 번호
   * @throws {Error} 보너스 번호가 범위를 벗어난 경우 에러
   */
  checkBonusNumberRange(bonus) {
    if (bonus < 1 || bonus > 45) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 정수여야 합니다.");
    }
  }

  /**
   * @description 보너스 번호가 당첨 번호와 중복되지 않는지 확인
   * @param {number} bonus - 보너스 번호
   * @param {number[]} winningNumbers - 당첨 번호 배열
   * @throws {Error} 보너스 번호가 당첨 번호와 중복될 경우 에러
   */
  checkBonusNumberDuplicate(bonus, winningNumbers) {
    if (winningNumbers.includes(bonus)) {
      throw new Error(
        "[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다."
      );
    }
  }

  /**
   * @description 구입 금액이 정수인지 확인
   * @param {number} amount - 구입 금액
   * @throws {Error} 구입 금액이 정수가 아닐 경우 에러
   */
  checkPurchaseAmountInteger(amount) {
    if (!Number.isInteger(amount)) {
      throw new Error("[ERROR] 구입 금액은 정수여야 합니다.");
    }
  }

  /**
   * @description 구입 금액이 양의 정수인지 확인
   * @param {number} amount - 구입 금액
   * @throws {Error} 구입 금액이 양수가 아닐 경우 에러
   */
  checkPurchaseAmountPositive(amount) {
    if (amount <= 0) {
      throw new Error("[ERROR] 구입 금액은 양의 정수여야 합니다.");
    }
  }

  /**
   * @description 구입 금액이 1,000원 단위로 나누어 떨어지는지 확인
   * @param {number} amount - 구입 금액
   * @throws {Error} 구입 금액이 1,000원 단위로 나누어 떨어지지 않을 경우 에러
   */
  checkPurchaseAmountDivisibility(amount) {
    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위여야 합니다.");
    }
  }
}

export default ErrorCollection;
