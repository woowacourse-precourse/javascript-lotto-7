import { Console } from "@woowacourse/mission-utils";

class Purchase {
  PRICE = 1000;
  #amounts;

  #setAmount(pay) {
    if (pay % this.PRICE !== 0) {
      throw new Error("[ERROR] 1,000원 단위로 입력해주세요.\n");
    }
    this.#amounts = pay / this.PRICE;
    return this.#amounts;
  }

  async getPayment() {
    while (true) {
      try {
        let pay = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
        Console.print('');
        pay = parseInt(pay.trim(), 10);

        if (isNaN(pay) || pay <= 0) {
          throw new Error("[ERROR] 유효한 숫자를 입력해 주세요.\n");
        }

        return this.#setAmount(pay);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}

export default Purchase;