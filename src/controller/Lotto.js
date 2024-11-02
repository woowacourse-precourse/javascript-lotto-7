import Validator from './Validator.js';
import { parseNumbers } from '../utils/Parser.js';
import WinningNumbers from '../model/WinningNumbers.js';
import InputView from '../view/InputView.js';
import { generateLottoNumber } from '../utils/RandomNumberGenerator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    const winningNumbers = new WinningNumbers(numbers);
    this.#numbers = winningNumbers.getWinningNumbers();
    const bonusNumber = winningNumbers.getBonusNumber();
  }

  static initializePurchaseAmount(amount) {
    const purchaseAmount = InputView.readPurchaseAmount();
    Validator.checkPurchaseAmount(amount);
  }

  static makeLottoTickets(lottoCounts) {
    const lottoTickets = [];
    for (let i = 0; i < lottoCounts; i++) {
      lottoTickets.push(generateLottoNumber());
    }
    lottoTickets.forEach((number) => {
      Validator.checkWinningNumbers(number);
    });

    if (lottoTickets.length !== lottoCounts) {
      throw new Error('[ERROR]');
    }
  }
}

export default Lotto;
