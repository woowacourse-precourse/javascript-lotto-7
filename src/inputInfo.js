import { Console } from "@woowacourse/mission-utils";
import Exception from "./exceptionHandling.js";

class Input {
  constructor(price) {
    this.price = price;
  }

  async inputPrice() {
    let price = await Console.readLineAsync("구입 금액을 입력해 주세요.\n");
    let checkPrice = new Exception();
    checkPrice.validatePrice(price);
  }
}
export default Input;
