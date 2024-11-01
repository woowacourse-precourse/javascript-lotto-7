import LOTTO_INFO from './constant/lotto.js';
import { validateBonusNumber, validateInputMoney, validateLottoNumbers } from './utils/validate.js';
import InputView from './view/InputView.js';
import OuputView from './view/OutputView.js';
import Lotto from './model/Lotto.js';

class App {
  #money;

  #lottoList;

  #winningNumber;

  #bonusNumber;

  async run() {
    await this.setMoney();
    this.buyLotto();
    this.displayLottoList();
    await this.setWinningNumber();
    await this.setBonusNumber();
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
      this.#winningNumber = winningNumber.map(Number);
    } catch (error) {
      OuputView.printMessage(error.message);
      await this.setWinningNumber();
    }
  }

  async setBonusNumber() {
    try {
      const inputBonusNumber = await InputView.readBonusNumber();
      validateBonusNumber(this.#winningNumber, inputBonusNumber);
      this.#bonusNumber = Number(inputBonusNumber);
    } catch (error) {
      OuputView.printMessage(error.message);
      await this.setBonusNumber();
    }
  }
}

export default App;
