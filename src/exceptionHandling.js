import { Console } from "@woowacourse/mission-utils";
import Input from "./inputInfo.js";

class Exception {
  constructor(price) {
    this.price = price;
  }

  validatePrice(price) {
    if (price % 1000 !== 0 || price === "" || price < 1) {
      Console.print("[ERROR] 구입 금액을 1000 단위로 입력해주세요.");
      let replayInputPrice = new Input();
      replayInputPrice.inputPrice();
    }
  }
}
export default Exception;
