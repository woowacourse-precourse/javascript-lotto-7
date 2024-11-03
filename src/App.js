import {Console} from "@woowacourse/mission-utils";

class App {
  LOTTO_PRICE = 1000;

  async run() {
    const payment = await this.getPayment()
  }

  async getPayment() {
    try {
      const payment = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
      return this.validatePayment(payment);
    } catch (e) {
      Console.print(e.message);
      return this.getPayment();
    }
  }

  validatePayment(payment_str) {
    const payment = Number(payment_str);
    if (isNaN(payment)) {
      throw new Error("[ERROR] 구입금액은 숫자로 입력하셔야 합니다.");
    }
    if (payment < 0) {
      throw new Error("[ERROR] 구입금액은 0원 이상 입력하셔야 합니다.");
    }
    if (payment % this.LOTTO_PRICE !== 0) {
      throw new Error("[ERROR] 구입금액은 1000원으로 나누어져야 합니다.");
    }
    return payment;
  }
}

export default App;
