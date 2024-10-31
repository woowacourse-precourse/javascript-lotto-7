import { Input } from './Input.js';
import { Validation } from './Validation.js';

export class LottoMachine {
  async run() {
    const input = new Input();
    const validation = new Validation();

    const purchasePrice = await input.getPurchasePrice();
    validation.validatePurchasePrice(purchasePrice);

    const winningNumbers = await input.getWinningNumbers();
    const bonusNumber = await input.getBonusNumber();
  }
}
