import RandomLotto from '../service/RandomLotto.js';
import UserLotto from '../service/UserLotto.js';
import LottoGame from '../service/LottoGame.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class GameController {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
    this.randomLotto = new RandomLotto();
    this.userLotto = new UserLotto();
    this.lottoGame = new LottoGame();
  }

  async prepareGame() {
    const price = await this.inputView.askPurchasePrice();
    const lottoQuantity = this.outputView.printLottoQuantity(price);
    const randomLotto = this.outputView.printPurchasedLotteries(lottoQuantity);
    return randomLotto;
  }

  async runGame(randomLotto) {
    const userLottoNumber = await this.inputView.askUserLotto();
    const userBonusNumber = await this.inputView.askBonusLotto();
    const userLotto = this.userLotto.createUserLotto(
      userLottoNumber,
      userBonusNumber,
    );

    this.lottoGame.compareLotto(randomLotto, userLotto);
  }
}

export default GameController;
