import LOTTO_INFO from './constant/lotto.js';
import { validateInputMoney } from './utils/validate.js';
import InputView from './view/InputView.js';
import OuputView from './view/OutputView.js';
import Lotto from './model/Lotto.js';

class App {
  #money;

  #lottoList;

  async run() {
    await this.setMoney();
    this.buyLotto();
    this.displayLottoList();
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
}

export default App;
