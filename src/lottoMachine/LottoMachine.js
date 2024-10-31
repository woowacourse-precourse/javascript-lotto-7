import { Calculation } from './Calculation.js';
import { Input } from './Input.js';
import { Output } from './Output.js';
import { Validation } from './Validation.js';

export class LottoMachine {
  async run() {
    const input = new Input();
    const validation = new Validation();
    const calculation = new Calculation();
    const output = new Output();

    const purchasePrice = await input.getPurchasePrice();
    validation.validatePurchasePrice(purchasePrice);
    const lottoTicketCount = calculation.getLottoTicketCount(purchasePrice);
    output.printLottoTicketCount(lottoTicketCount);

    const winningNumbers = await input.getWinningNumbers();
    const bonusNumber = await input.getBonusNumber();
  }
}
