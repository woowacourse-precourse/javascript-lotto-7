import ErrorCollection from "./ErrorCollection.js";

/**
 * @class BonusNumber
 * @description 로또 보너스 번호를 관리하고 유효성을 검사
 */
class BonusNumber {
  #bonus;

  /**
   * @description BonusNumber 인스턴스를 생성
   * @param {number} number - 보너스 번호
   * @param {number[]} winningNumbers - 당첨 번호 배열로, 중복 체크에 사용
   * @throws 유효하지 않은 보너스 번호일 경우 오류를 발생
   */
  constructor(number, winningNumbers) {
    this.#validate(number, winningNumbers);
    this.#bonus = number;
  }

  /**
   * @description 보너스 번호를 유효성 검사
   * @param {number} number - 검사할 보너스 번호
   * @param {number[]} winningNumbers - 중복 여부를 확인할 당첨 번호 배열
   * @private
   */
  #validate(number, winningNumbers) {
    const errorCollection = new ErrorCollection();
    errorCollection.checkBonusNumberInteger(number);
    errorCollection.checkBonusNumberRange(number);
    errorCollection.checkBonusNumberDuplicate(number, winningNumbers);
  }

  /**
   * @description 보너스 번호를 반환
   * @returns {number} 유효성이 확인된 보너스 번호
   */
  getBonusNumber() {
    return this.#bonus;
  }
}

export default BonusNumber;
