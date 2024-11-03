import { Console } from '@woowacourse/mission-utils';
import Input from '../View/Input.js';
import { ERROR_MESSAGE } from '../constant/error.js';
import Lotto from '../Lotto.js';
import { isNumber } from '../util/validation.js';
import { createErrorMessage } from '../util/error.js';

class GameController {
  async init() {
    const purchaseCount = await Input.getPurchaseAmount()(
      this.#getValidatedPurchaseCount,
    );

    Console.print(`\n${purchaseCount}개를 구매했습니다.`);

    const winningNumbers = await Input.getWinningNumbers()(
      this.#validateWinningNumbers,
    );
    const bonusNumber = await this.#getValidatedBonusNumber();

    Console.print(winningNumbers);
    Console.print(bonusNumber);
  }

  #getValidatedPurchaseCount(input) {
    const amount = +input;
    if (!isNumber(amount)) {
      throw new Error(createErrorMessage(ERROR_MESSAGE.invalidNumberType));
    }

    if (amount % 1000 !== 0) {
      throw new Error(
        createErrorMessage(ERROR_MESSAGE.invalidPurchaseAmountUnit),
      );
    }

    return amount / 1000;
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
