import { Console, Random } from "@woowacourse/mission-utils";
import Validator from "./Validator.js";
import { INPUT_MESSAGE } from "./Constant.js";

class IOHandler {
  constructor() {
    this.Validator = new Validator();
  }

  async getPurchaseAmount() {
    try {
      const purchaseAmount = await Console.readLineAsync(INPUT_MESSAGE.GET_PURCHASE_AMOUNT);
      this.Validator.purchaseAmount(purchaseAmount);
      return purchaseAmount;
    } catch (error) {
      Console.print(error);
      return this.getPurchaseAmount();
    }
  }

  async getLottoNumbers() {
    try {
      const inputs = await Console.readLineAsync(INPUT_MESSAGE.GET_LOTTO_NUMBERS);
      const lottoNumbers = inputs.split(",");
      this.Validator.lottoNumbers(lottoNumbers);
      return lottoNumbers;
    } catch (error) {
      Console.print(error);
      return this.getLottoNumbers();
    }
  }
}

export default IOHandler;
