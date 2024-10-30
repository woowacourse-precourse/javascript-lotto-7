import { Console } from "@woowacourse/mission-utils";
import InputValidate from "../utils/InputValidate.js";

class LottoController{
  constructor() {
    this.error = new InputValidate();
    // model
    // view
  }

  async play() {
    const userPrice = await this.inputPrice();
  }

  async inputPrice() {
    let isValid = false;
    do {
      const price = await Console.readLineAsync("구입금액을 입력해 주세요.");
      isValid = this.validatePrice(price);
    } while (!isValid);
  }
  
  validatePrice(price) {
    try {
      this.error.priceInputValidate(price);
      return true;
    } catch(error) {
      Console.print(error);
      return false;
    }
  }
}

export default LottoController;