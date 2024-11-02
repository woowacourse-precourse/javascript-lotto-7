import LottoService from '../service/LottoService.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OuputView.js';

export default class LottoController {
  #lottoService;
  constructor() {
    this.#lottoService = new LottoService();
  }

  async run() {
    await this.#getPrice();
    this.#printLottosInfomation();
    await this.#getWinningNumbers();
    await this.#getBonusNumber();
    this.#printResult();
  }

  async #getPrice() {
    while (true) {
      try {
        const price = Number(await InputView.price());
        this.#lottoService.createUserModel(price);
        return;
      } catch (e) {
        OutputView.error(e.message);
      }
    }
  }

  #printLottosInfomation() {
    const { lottoLength, lottosNumberArray } =
      this.#lottoService.getLottosInformation();
    OutputView.lottosInformation({ lottoLength, lottosNumberArray });
  }

  async #getWinningNumbers() {
    while (true) {
      try {
        const numberString = await InputView.winningNumbers();
        this.#lottoService.createWinningLottoModel(numberString);
        return;
      } catch (e) {
        OutputView.error(e.message);
      }
    }
  }

  async #getBonusNumber() {
    while (true) {
      try {
        const bonusNumber = Number(await InputView.bonusNumber());
        this.#lottoService.appendBonusNumber(bonusNumber);
        return;
      } catch (e) {
        OutputView.error(e.message);
      }
    }
  }

  #printResult() {
    const statistics = this.#lottoService.getStatistics();
    OutputView.winningStatistics(statistics);

    const rateOfReturn = Number(this.#lottoService.getRateOfReturn(statistics));
    OutputView.rateOfReturn(rateOfReturn);
  }
}
