import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const userPay = await this.getUserPay(); // await 추가
      const lottoCount = this.calculateLottoCount(userPay);

      Console.print(`${lottoCount}개를 구매했습니다.`);
      const lottoTickets = this.generateLottoTickets(lottoCount);

      lottoTickets.forEach(ticket => Console.print(`[${ticket.join(", ")}]`));
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

  /**
   * @description 로또 티켓을 생성하는 함수
   * @param {number} count - 생성할 로또 수량
   * @returns {number[][]} 로또 번호 배열
   */
  generateLottoTickets(count) {
    const tickets = [];
    for (let i = 0; i < count; i++) {
      tickets.push(this.generateLottoNumbers());
    }
    return tickets;
  }

  /**
   * @description 로또 번호를 생성하는 함수
   * @returns {number[]} 1에서 45 사이의 중복되지 않는 숫자 6개로 구성된 배열
   */
  generateLottoNumbers() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers.sort((a, b) => a - b); // 오름차순 정렬
  }
}

export default App;