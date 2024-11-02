import { Console } from '@woowacourse/mission-utils';
import inputView from './userInterface/InputView.js';
import Lotto from './Lotto.js';
import LottoMachine from './LottoMachine.js';
import Utils from './utils/Utils.js';

class App {
  async run() {
    const lottoMachine = await this.getLottoMachine();
  }

  async getLottoMachine() {
    try {
      const payment = await App.getPayment();
      const lottoMachine = new LottoMachine(payment, Lotto);
      return lottoMachine;
    } catch (error) {
      Console.print(error.message);

      return this.getLottoMachine();
    }
  }

  static async getPayment() {
    const payment = await inputView.askPayment();
    const parsedPayment = Utils.parsingNumber(payment);
    return parsedPayment;
  }
}

export default App;
