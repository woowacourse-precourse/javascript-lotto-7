import RandomLotto from '../service/RandomLotto.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class GameController {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
    this.randomLotto = new RandomLotto();
  }

  async prepareGame() {
    const price = await this.inputView.askPurchasePrice();
    const lottoQuantity = this.outputView.printLottoQuantity(price);
    this.outputView.printPurchasedLotteries(lottoQuantity);
  }

  async runGame() {
    const userLotto = await this.inputView.askUserLotto();
    const userBonus = await this.inputView.askBonusLotto();
  }
}

export default GameController;
