import { Console, Random } from "@woowacourse/mission-utils";
import Validator from "./Validator.js";
import { INPUT_MESSAGE } from "./Constant.js";

class IOHandler {
  constructor() {
    this.Validator = new Validator();
  }

  // 입력받아 ,로 잘라 문자 배열로 넘겨주는 함수
  async getPurchaseAmount() {
    try {
      const purchaseAmount = await Console.readLineAsync(INPUT_MESSAGE.GET_PURCHASE_AMOUNT);
      this.Validator.purchaseAmount(purchaseAmount);
      return purchaseAmount.split(",");
    } catch (error) {
      Console.print(error);
      return this.getPurchaseAmount();
    }
  }
}

export default IOHandler;
