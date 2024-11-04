import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const userPay = await this.getUserPay(); // await 추가
      const lottoCount = this.calculateLottoCount(userPay);

      Console.print(`${lottoCount}개를 구매했습니다.`);
    } catch (error) {
      Console.print(error.message);
    }
  }

  /**
   * @description 사용자로부터 구매 금액을 입력받는다.
   * @returns {number} - 검증된 구입 금액
   */
  async getUserPay() {
    const amountInput = await Console.readLineAsync("구입금액을 입력해 주세요.\n"); // await 추가
    const amount = parseInt(amountInput, 10);

    this.validatePurchaseAmount(amount);
    return amount;
  }

  /**
   * @description 구입 금액을 검증하는 함수
   * @param {number} amount - 구입 금액
   * @throws {Error} 1,000원 단위가 아닐 경우 오류 발생
   */
  validatePurchaseAmount(amount) {
    if (isNaN(amount) || amount <= 0 || amount % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위의 양수여야 합니다.");
    }
  }

  /**
   * @description 로또 개수를 계산하는 함수
   * @param {number} amount - 유효한 구입 금액
   * @returns {number} 구입 금액에 따른 로또 개수
   */
  calculateLottoCount(amount) {
    return Math.floor(amount / 1000);
  }
}

export default App;