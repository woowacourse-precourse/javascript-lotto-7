import { Console } from "@woowacourse/mission-utils";

class Input {
  constructor(price) {
    this.price = price;
  }

  async inputPrice() {
    let price = await Console.readLineAsync("구입 금액을 입력해 주세요.\n");
    Console.print(price);
  }
}
export default Input;
