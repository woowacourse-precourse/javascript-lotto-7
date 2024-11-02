import { Input } from './Input.js';
import { Validation } from './Validation.js';
import { Calculation } from './Calculation.js';
import { Output } from './Output.js';

export class LottoMachine {
  #input;
  #validation;
  #calculation;
  #output;

  constructor() {
    this.#input = new Input();
    this.#validation = new Validation();
    this.#calculation = new Calculation();
    this.#output = new Output();
  }

  async run() {
    const purchasePrice = await this.#input.getPurchasePrice();
    this.#validation.validatePurchasePrice(purchasePrice);

    const lottoTicketCount = this.#calculation.getLottoTicketCount(purchasePrice);
    this.#output.printLottoTicketCount(lottoTicketCount);

    const lottoTicket = this.#output.printLottoTicket(lottoTicketCount);
    const winningNumbers = await this.#input.getWinningNumbers();
    const bonusNumber = await this.#input.getBonusNumber();
  }
}
