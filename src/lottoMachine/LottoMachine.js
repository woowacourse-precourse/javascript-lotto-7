import { Input } from './Input.js';

export class LottoMachine {
  async run() {
    const input = new Input();
    const purchasePrice = await input.getPurchasePrice();
    const winningNumbers = await input.getWinningNumbers();
  }
}
