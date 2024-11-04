import ErrorCollection from "./ErrorCollection.js";

/**
 * @class Parser
 * @description 문자열로 입력된 데이터를 파싱하고, 필요한 경우 유효성 검사를 수행하는 클래스
 */
class Parser {
  /**
   * @description 문자열로 입력된 구입 금액을 숫자로 변환하고 유효성을 검사
   * @param {string} input - 문자열로 입력된 구입 금액
   * @returns {number} 파싱된 구입 금액
   * @throws {Error} 유효하지 않은 구입 금액일 경우 오류를 발생
   */
  parsePurchaseAmount(input) {
    const amount = Number(input);
    const errorCollection = new ErrorCollection();

    errorCollection.checkPurchaseAmountNumber(amount);
    errorCollection.checkPurchaseAmountInteger(amount);
    errorCollection.checkPurchaseAmountPositive(amount);
    errorCollection.checkPurchaseAmountDivisibility(amount);

    return amount;
  }

  /**
   * @description 문자열로 입력된 당첨 번호를 쉼표로 구분하여 숫자 배열로 변환
   * @param {string} input - 문자열로 입력된 당첨 번호
   * @returns {number[]} 파싱된 당첨 번호 배열
   */
  parseNumbers(input) {
    return input.split(",").map((num) => Number(num.trim()));
  }

  /**
   * @description 문자열로 입력된 보너스 번호를 숫자로 변환
   * @param {string} input - 문자열로 입력된 보너스 번호
   * @returns {number} 파싱된 보너스 번호
   */
  parseBonusNumber(input) {
    return Number(input.trim());
  }
}

export default Parser;
