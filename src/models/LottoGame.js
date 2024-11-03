import UserInterface from '../utils/UserInterface.js';

class LottoGame {
  #paymentAmount;
  #winningNumbers;

  async initialize() {
    this.#paymentAmount = await UserInterface.queryPaymentAmout();
    this.#winningNumbers = await UserInterface.queryWinningNumbers();
  }
}

export default LottoGame;
