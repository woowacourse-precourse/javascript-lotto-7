import LottoService from '../service/LottoService.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

export default class LottoController {
  #lottoService;
  constructor() {
    this.#lottoService = new LottoService();
  }

  async run() {
    await this.#handleInputPrice();
    this.#printLottosInformation();
    await this.#handleInputWinningNumbers();
    await this.#handleInputBonusNumber();
    this.#printLottoResult();
  }

  async #handleInputPrice() {
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

  #printLottosInformation() {
    const { lottoLength, lottoNumbersArray } =
      this.#lottoService.getLottosInformation();
    OutputView.lottosInformation({ lottoLength, lottoNumbersArray });
  }

  async #handleInputWinningNumbers() {
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

  async #handleInputBonusNumber() {
    while (true) {
      try {
        const bonusNumber = Number(await InputView.bonusNumber());
        this.#lottoService.setBonusNumber(bonusNumber);
        return;
      } catch (e) {
        OutputView.error(e.message);
      }
    }
  }

  #printLottoResult() {
    const statistics = this.#lottoService.calculateWinningStatistics();
    OutputView.winningStatistics(statistics);

    const rateOfReturn = Number(this.#lottoService.getRateOfReturn(statistics));
    OutputView.rateOfReturn(rateOfReturn);
  }
}
