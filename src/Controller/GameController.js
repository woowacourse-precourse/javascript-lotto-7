import { Console } from '@woowacourse/mission-utils';
import Input from '../View/Input.js';
import { ERROR_MESSAGE } from '../constant/error.js';

class GameController {
  async init() {
    const purchaseAmount = await Input.getPurchaseAmount()(
      this.#validatePurchaseAmount,
    );
    const winningNumbers = await this.#getValidatedWinningNumbers();
    const bonusNumber = await this.#getValidatedBonusNumber();

    Console.print(purchaseAmount);
    Console.print(winningNumbers);
    Console.print(bonusNumber);
  }

  #validatePurchaseAmount(input) {
    const amount = +input;
    if (Number.isNaN(amount)) {
      throw new Error(ERROR_MESSAGE.invalidNumberType);
    }

    if (amount % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.invalidPurchaseAmountUnit);
    }

    return amount;
  }

  async #getValidatedWinningNumbers() {
    const validateWinningNumbers = Input.getWinningNumbers();

    return validateWinningNumbers((input) => input);
  }

  async #getValidatedBonusNumber() {
    const validateBonusNumber = Input.getBonusNumber();

    return validateBonusNumber((input) => input);
  }
}

export default GameController;
