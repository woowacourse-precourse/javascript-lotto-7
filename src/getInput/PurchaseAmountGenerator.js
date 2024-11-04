import { Console } from '@woowacourse/mission-utils';
import NumberValidator from '../utils/NumberValidator.js';
import PurchaseAmountValidator from '../utils/PurchaseAmountValidator.js';

class PurchaseAmountGenerator {
  #purchaseAmount;

  constructor(number) {
    this.#validatePurchaseAmount(number);
    this.#purchaseAmount = number;
  }

  static async getPurchaseAmount() {
    try {
      const purchaseAmount =
        await Console.readLineAsync('구입금액을 입력해 주세요.\n');
      Console.print('');
      const validator = new PurchaseAmountGenerator(purchaseAmount);
      return validator.#purchaseAmount;
    } catch (error) {
      Console.print(error.message);
      return PurchaseAmountGenerator.getPurchaseAmount();
    }
  }

  #validatePurchaseAmount(purchaseAmount) {
    NumberValidator.validateIsEmpty(purchaseAmount);
    NumberValidator.validateIsNumber(purchaseAmount);
    NumberValidator.validateNoDecimal(purchaseAmount);

    const parsedAmount = parseFloat(purchaseAmount);
    NumberValidator.validateIsInteger(parsedAmount);
    NumberValidator.validateIsPositive(parsedAmount);
    PurchaseAmountValidator.validateDivisibleBy1000(parsedAmount);
  }
}

export default PurchaseAmountGenerator;
