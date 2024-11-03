import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from '../constant/error.js';
import { CONSOLE_MESSAGE } from '../constant/message.js';
import { RULE } from '../constant/rule.js';
import Lotto from '../Model/Lotto.js';
import LottoGame from '../Model/LottoGame.js';
import { createErrorMessage } from '../util/error.js';
import { isNumber, validateLottoNumber } from '../util/validation.js';
import Input from '../View/Input.js';

class GameController {
  async init() {
    const purchaseCount = await this.#getValidatedPurchaseCount();

    Console.print(`\n${purchaseCount}개를 구매했습니다.`);

    const game = new LottoGame(purchaseCount);
    game.printLottos();

    const winningNumbers = await this.#getWinningLotto();
    const bonusNumber = await this.#getValidatedBonusNumber();

    Console.print(CONSOLE_MESSAGE.resultMessage);
  }

  async #getValidatedPurchaseCount() {
    const amount = await Input.getPurchaseAmount()(
      this.#validatePurchaseAmount,
    );

    return amount / RULE.PURCHASE_AMOUNT_UNIT;
  }

  #validatePurchaseAmount(input) {
    const amount = Number(input);
    if (!isNumber(amount)) {
      throw new Error(createErrorMessage(ERROR_MESSAGE.invalidNumberType));
    }

    if (amount % RULE.PURCHASE_AMOUNT_UNIT !== 0) {
      throw new Error(
        createErrorMessage(ERROR_MESSAGE.invalidPurchaseAmountUnit),
      );
    }

    return amount;
  }

  async #getWinningLotto() {
    const lotto = await Input.getWinningNumbers()((input) => {
      const numbers = input.split(',').map((value) => +value);

      return new Lotto(numbers);
    });

    return lotto;
  }

  async #getValidatedBonusNumber() {
    const bonusNumber = await Input.getBonusNumber()(
      this.#validatedBonusNumber,
    );

    return bonusNumber;
  }

  #validatedBonusNumber(input) {
    const bonusNumber = Number(input);

    validateLottoNumber(bonusNumber);

    return bonusNumber;
  }
}

export default GameController;
