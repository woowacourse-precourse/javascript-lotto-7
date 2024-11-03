import { Console } from '@woowacourse/mission-utils';
import Input from '../View/Input.js';
import { ERROR_MESSAGE } from '../constant/error.js';
import Lotto from '../Lotto.js';
import { isNumber } from '../util/validation.js';

class GameController {
  async init() {
    const purchaseAmount = await Input.getPurchaseAmount()(
      this.#validatePurchaseAmount,
    );
    const winningNumbers = await Input.getWinningNumbers()(
      this.#validateWinningNumbers,
    );
    const bonusNumber = await this.#getValidatedBonusNumber();

    Console.print(purchaseAmount);
    Console.print(winningNumbers);
    Console.print(bonusNumber);
  }

  #validatePurchaseAmount(input) {
    const amount = +input;
    if (!isNumber(amount)) {
      throw new Error(ERROR_MESSAGE.invalidNumberType);
    }

    if (amount % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.invalidPurchaseAmountUnit);
    }

    return amount;
  }

  #validateWinningNumbers(input) {
    const numbers = input.split(',').map((value) => +value);

    const lotto = new Lotto(numbers);

    return lotto;
  }

  async #getValidatedBonusNumber() {
    const validateBonusNumber = Input.getBonusNumber();

    return validateBonusNumber((input) => input);
  }
}

export default GameController;
