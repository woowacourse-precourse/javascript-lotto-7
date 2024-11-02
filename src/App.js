import { Console } from '@woowacourse/mission-utils';
import inputView from './userInterface/InputView.js';
import Lotto from './Lotto.js';
import LottoMachine from './LottoMachine.js';

class App {
  async run() {
    const lottoMachine = await this.getLottoMachine();
  }

  async getLottoMachine() {
    try {
      const payment = await inputView.askPayment();
      const lottoMachine = new LottoMachine(payment, Lotto);
      return lottoMachine;
    } catch (error) {
      Console.print(error.message);

      return this.getLottoMachine();
    }
  }

  static parsePayment(payment) {
    return Number(payment);
  }
}

export default App;
