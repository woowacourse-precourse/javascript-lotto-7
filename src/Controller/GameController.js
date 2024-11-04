import { ERROR_MESSAGE } from '../constant/error.js';
import { RULE } from '../constant/rule.js';
import Lotto from '../Model/Lotto.js';
import LottoGame from '../Model/LottoGame.js';
import { throwWoowaError } from '../util/error.js';
import { isNumber, validateLottoNumber } from '../util/validation.js';
import Input from '../View/Input.js';
import Output from '../View/Output.js';

class GameController {
  async init() {
    const purchaseCount = await this.#getValidatedPurchaseCount();

    const game = new LottoGame(purchaseCount);

    Output.printPurchaseCount(purchaseCount);
    game.printLottos();

    const winningLotto = await this.#getWinningLotto();
    const bonusNumber = await this.#getValidatedBonusNumber(winningLotto);

    game.calculateWinningRanks(winningLotto, bonusNumber);

    this.#printResult(game);
  }

  async #getValidatedPurchaseCount() {
    const amount = await Input.getPurchaseAmount()(
      this.#validatePurchaseAmount,
    );

    return amount / RULE.purchaseAmount.unit;
  }

  #validatePurchaseAmount(input) {
    const amount = Number(input);

    if (!isNumber(amount)) {
      throwWoowaError(ERROR_MESSAGE.invalidNumberType);
    }
    if (amount % RULE.purchaseAmount.unit !== 0) {
      throwWoowaError(ERROR_MESSAGE.invalidPurchaseAmountUnit);
    }
    if (amount > RULE.purchaseAmount.max) {
      throwWoowaError(ERROR_MESSAGE.exceedMaxPurchaseAmount);
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

  async #getValidatedBonusNumber(winningLotto) {
    const bonusNumber = await Input.getBonusNumber()((input) => {
      const number = Number(input);
      validateLottoNumber(number);
      if (winningLotto.hasInNumbers(number)) {
        throwWoowaError(ERROR_MESSAGE.invalidDuplicateNumber);
      }

      return number;
    });

    return bonusNumber;
  }

  #printResult(game) {
    Output.printResultMessage();
    Output.printWinningHistory(game);

    const winningRate = game.calculateWinningRate();
    Output.printWinningRate(winningRate);
  }
}

export default GameController;
