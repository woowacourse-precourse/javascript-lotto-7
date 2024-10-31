import LOTTO_INFO from './constant/lotto.js';
import { validateInputMoney, validateLottoNumbers } from './utils/validate.js';
import InputView from './view/InputView.js';
import OuputView from './view/OutputView.js';
import Lotto from './model/Lotto.js';

class App {
  #money;

  #lottoList;

  #winningNumber;

  async run() {
    await this.setMoney();
    this.buyLotto();
    this.displayLottoList();
    await this.setWinningNumber();
  }

  async setMoney() {
    try {
      const inputMoney = await InputView.readMoney();
      validateInputMoney(inputMoney);
      this.#money = Number(inputMoney);
    } catch (error) {
      OuputView.printMessage(error.message);
      await this.setMoney();
    }
  }

  buyLotto() {
    const totalLottoCount = this.#money / LOTTO_INFO.PRICE;
    this.#lottoList = Array.from({ length: totalLottoCount }, () => Lotto.create());
  }

  displayLottoList() {
    const lottoNumbers = this.#lottoList.map((lotto) => lotto.getNumbers());

    OuputView.printLottoList(lottoNumbers);
  }

  async setWinningNumber() {
    try {
      const inputWinningNumber = await InputView.readWinningNumber();
      const winningNumber = inputWinningNumber.split(',');
      validateLottoNumbers(winningNumber);
      this.#winningNumber = winningNumber;
    } catch (error) {
      OuputView.printMessage(error.message);
      await this.setWinningNumber();
    }
  }
}

export default App;
