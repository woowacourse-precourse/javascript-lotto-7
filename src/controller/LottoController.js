import Input from '../view/Input.js';
import LottoTicketValidator from '../utils/LottoTicketValidator.js';
import LotteryService from '../model/LotteryService.js';

export default class LottoController {
  #LotteryService;

  constructor() {
    this.#LotteryService = new LotteryService();
  }

  async start() {
    const amount = await this.#validateAndGetAmount();
    this.#LotteryService.start(amount);
  }

  async #validateAndGetAmount() {
    const amount = await Input.getAmount();
    const validator = new LottoTicketValidator();
    validator.validateAmount(amount);
    return Number(amount);
  }
}
