import LottoService from '../service/LottoService.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OuputView.js';

export default class LottoController {
  #lottoService;
  constructor() {
    this.#lottoService = new LottoService();
  }

  async run() {
    const price = await this.#getPrice();
    this.#printLottosInfomation();
    await this.#getWinningNumbers();
    await this.#getBonusNumber();
    this.#printResult(price);
  }

  async #getPrice() {
    while (true) {
      try {
        const price = Number(await InputView.price());
        this.#lottoService.createUserModel(price);
        return price;
      } catch (e) {
        OutputView.printError(e.message);
      }
    }
  }

  #printLottosInfomation() {
    const { lottoLength, lottoNumbers } =
      this.#lottoService.getLottosInformation();
    OutputView.printLottosInformation({ lottoLength, lottoNumbers });
  }

  async #getWinningNumbers() {
    while (true) {
      try {
        const numberString = await InputView.winningNumbers();
        this.#lottoService.createWinningLottoModel(numberString);
        return;
      } catch (e) {
        OutputView.printError(e.message);
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
        OutputView.printError(e.message);
      }
    }
  }

  #printResult(price) {
    const statistics = this.#lottoService.getStatistics();
    OutputView.printWinningStatistics(statistics);

    const rateOfReturn = Number(
      this.#lottoService.getRateOfReturn(statistics, price),
    );
    OutputView.printRateOfReturn(rateOfReturn);
  }
}
