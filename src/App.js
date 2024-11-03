import { Console } from '@woowacourse/mission-utils';
import inputView from './userInterface/InputView.js';
import Lotto from './Lotto.js';
import LottoMachine from './LottoMachine.js';
import Utils from './utils/Utils.js';
import Validation from './Validation.js';

class App {
  async run() {
    const lottoMachine = await this.getLottoMachine();
    const winningNumbers = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumber(winningNumbers);
    const winningLottoNumbers = App.makeWinningLottoNumbers(
      winningNumbers,
      bonusNumber,
    );
  }

  async getLottoMachine() {
    try {
      const payment = await App.getPayment();
      const lottoMachine = LottoMachine.constructLottoMachine(payment, Lotto);
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

  async getWinningNumbers() {
    try {
      const numbers = await App.getWinningNumbersInput();
      const validWinningNumbers = App.validateWinningNumbers(numbers);
      return validWinningNumbers;
    } catch (error) {
      Console.print(error.message);

      return this.getWinningNumbers();
    }
  }

  static async getWinningNumbersInput() {
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

  async getBonusNumber(winningNumbers) {
    try {
      const bonusNumber = await App.getBonusNumberInput();
      const validBonusNumber = App.validateBonusNumber(
        bonusNumber,
        winningNumbers,
      );

      return validBonusNumber;
    } catch (error) {
      Console.print(error.message);

      return this.getBonusNumber();
    }
  }

  static async getBonusNumberInput() {
    const bonusNumber = await inputView.askBonusNumber();
    const parsedNumber = this.parsingBonusNumber(bonusNumber);
    return parsedNumber;
  }

  static parsingBonusNumber(number) {
    const parsedBonusNumber = Utils.parsingToNumber(number);
    return parsedBonusNumber;
  }

  static validateBonusNumber(bonusNumber, winningNumbers) {
    Validation.checkBonusNumber(bonusNumber, winningNumbers);

    return bonusNumber;
  }

  static makeWinningLottoNumbers(winningNumbers, bonusNumber) {
    return { numbers: winningNumbers, bonusNumber };
  }
}

export default App;
