import { Console } from '@woowacourse/mission-utils';
import Input from '../View/Input.js';

class GameController {
  async init() {
    const purchaseAmount = await this.#getValidatedPurchaseAmount();
    const winningNumbers = await this.#getValidatedWinningNumbers();
    const bonusNumber = await this.#getValidatedBonusNumber();

    Console.print(purchaseAmount);
    Console.print(winningNumbers);
    Console.print(bonusNumber);
  }

  async #getValidatedPurchaseAmount() {
    const validatePurchaseAmount = Input.getPurchaseAmount();

    return validatePurchaseAmount((input) => input);
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
