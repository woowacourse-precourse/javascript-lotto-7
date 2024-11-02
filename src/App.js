import { Console } from '@woowacourse/mission-utils';
import inputView from './userInterface/InputView.js';
import Lotto from './Lotto.js';
import LottoMachine from './LottoMachine.js';
import Utils from './utils/Utils.js';
import Validation from './Validation.js';

class App {
  async run() {
    const lottoMachine = await this.getLottoMachine();
  }

  async getLottoMachine() {
    try {
      const payment = await App.getPayment();
      const lottoMachine = App.makeLottoMachine(payment);
      return lottoMachine;
    } catch (error) {
      Console.print(error.message);

      return this.getLottoMachine();
    }
  }

  static async getPayment() {
    const payment = await inputView.askPayment();
    const parsedPayment = Utils.parsingToNumber(payment);
    return parsedPayment;
  }

  static makeLottoMachine(payment) {
    const lottoMachine = new LottoMachine(payment, Lotto);
    return lottoMachine;
  }

  async getWinningNumbers() {
    try {
      const numbers = await App.getWinningNumbers();
      const validWinningNumbers = App.validateWinningNumbers(numbers);
      return validWinningNumbers;
    } catch (error) {
      Console.print(error.message);

      return this.getWinningNumbers();
    }
  }

  static async getWinningNumbers() {
    const winningNumbers = await inputView.askWinningNumbers();
    const parsedNumbers = this.parsingWinningNumbers(winningNumbers);
    return parsedNumbers;
  }

  static parsingWinningNumbers(numbers) {
    const numbersArray = Utils.parsingToArray(numbers);
    const winningNumbers = numbersArray.map((number) =>
      Utils.parsingToNumber(number),
    );

    return winningNumbers;
  }

  static validateWinningNumbers(numbers) {
    const targetNumbers = [...numbers];
    Validation.checkWinningNumbers(targetNumbers);

    return targetNumbers;
  }
}

export default App;
