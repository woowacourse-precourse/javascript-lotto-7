import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from '../constant/error.js';
import Lotto from '../Model/Lotto.js';
import LottoGame from '../Model/LottoGame.js';
import { createErrorMessage } from '../util/error.js';
import { isNumber } from '../util/validation.js';
import Input from '../View/Input.js';

class GameController {
  async init() {
    const purchaseCount = await Input.getPurchaseAmount()(
      this.#getValidatedPurchaseCount,
    );

    Console.print(`\n${purchaseCount}개를 구매했습니다.`);

    const game = new LottoGame(purchaseCount);

    const winningNumbers = await Input.getWinningNumbers()(
      this.#validateWinningNumbers,
    );
    const bonusNumber = await this.#getValidatedBonusNumber();
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
