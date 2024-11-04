import { Console } from "@woowacourse/mission-utils";

class Purchase {
  PRICE = 1000;
  #amounts;

  #setAmount(pay) {
    if (pay % this.PRICE !== 0) {
      throw new Error("[ERROR] 1,000원 단위로 입력해주세요.");
    }
    this.#amounts = pay / this.PRICE;
    return this.#amounts;
  }

  async getPayment() {
    const pay = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    Console.print('');
    return parseInt(this.#setAmount(pay),10);
  }
}

export default Purchase;