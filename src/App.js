import { Console } from "@woowacourse/mission-utils";

class App {
  async getPayment() {
    const payment = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    this.validatePayment(payment);
  }

  validatePayment(payment) {
    if (isNaN(payment)) throw new Error("[ERROR] 숫자를 입력해야 합니다.");
    if (payment <= 0)
      throw new Error("[ERROR] 0이상의 금액을 입력해야 합니다.");
    if (payment % 1000 !== 0)
      throw new Error("[ERROR] 1000원 단위로 금액을 입력해야 합니다.");
  }

  async run() {
    await this.getPayment();
  }
}

export default App;
