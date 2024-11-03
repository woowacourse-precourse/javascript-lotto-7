import UserInterface from '../utils/UserInterface.js';
import Lotto from './Lotto.js';

class LottoGame {
  #paymentAmount;
  #winningNumbers;
  #lottoList;

  async initialize() {
    this.#paymentAmount = await UserInterface.queryPaymentAmout();
    this.#generateLottos(this.#paymentAmount / 1000);
    UserInterface.printLottos(this.#lottoList);
    this.#winningNumbers = await UserInterface.queryWinningNumbers();
  }

  #generateLottos(count) {
    this.#lottoList = Array.from({ length: count }, () => new Lotto());
  }
}

export default LottoGame;
