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
      return lottoNumbers.map((num) => Number(num));
    } catch (error) {
      Console.print(error);
      return this.getLottoNumbers();
    }
  }

  async getBonusNumber() {
    try {
      const bonusNumber = await Console.readLineAsync(INPUT_MESSAGE.GET_BONUS_NUMBER);
      this.Validator.bonusNumber(bonusNumber);
      return Number(bonusNumber);
    } catch (error) {
      Console.print(error);
      return this.getBonusNumber();
    }
  }
}

export default IOHandler;
