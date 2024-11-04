import Input from '../view/Input.js';
import LottoTicketValidator from '../utils/LottoTicketValidator.js';
import LotteryService from '../model/LotteryService.js';
import Output from '../view/Output.js';

export default class LottoController {
  #LotteryService;

  constructor() {
    this.#LotteryService = new LotteryService();
  }

  async start() {
    const amount = await this.#validateAndGetAmount();
    await this.#LotteryService.start(amount);
    const lottoResult = this.#LotteryService.getLottoResults();
    const profitPercent = this.#LotteryService.getProfitPercentage();
    Output.printResults(lottoResult, profitPercent);
  }

  async #validateAndGetAmount() {
    const validator = new LottoTicketValidator();
    let amount;

    while (true) {
      amount = await Input.getAmount();

      if (validator.validateAmount(amount)) {
        return Number(amount);
      }
    }
  }
}
