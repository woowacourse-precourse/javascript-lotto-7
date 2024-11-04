import ErrorCollection from "./ErrorCollection.js";

/**
 * @class Lotto
 * @description 로또 번호를 관리하고 유효성을 검사하는 클래스
 */
class Lotto {
  #numbers;

  /**
   * @constructor
   * @param {number[]} numbers - 초기화할 로또 번호 배열
   * @throws {Error} 로또 번호의 개수, 정수 여부, 범위, 중복 여부를 검사하여 유효하지 않으면 에러
   */
  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  /**
   * @description 로또 번호의 유효성을 검사
   * @param {number[]} numbers - 검사할 로또 번호 배열
   * @private
   */
  #validate(numbers) {
    const errorCollection = new ErrorCollection();
    errorCollection.checkLottoNumberCount(numbers);
    errorCollection.checkLottoNumberIntegers(numbers);
    errorCollection.checkLottoNumberRange(numbers);
    errorCollection.checkLottoNumberDuplicates(numbers);
  }

  /**
   * @description 저장된 로또 번호 배열을 반환
   * @returns {number[]} 설정된 로또 번호 배열
   */
  getLottoNumber() {
    return this.#numbers;
  }
}

export default Lotto;
