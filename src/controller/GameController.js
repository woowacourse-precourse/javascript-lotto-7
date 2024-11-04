import RandomLotto from '../service/RandomLotto.js';
import UserLotto from '../service/UserLotto.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import Lotto from '../Lotto.js';
import Winner from '../service/Winner.js';

class GameController {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
    this.randomLotto = new RandomLotto();
    this.userLotto = new UserLotto();
    this.winner = new Winner();
  }

  async prepareGame() {
    const price = await this.inputView.askPurchasePrice();
    const lottoQuantity = this.outputView.printLottoQuantity(price);
    const randomLotto = this.outputView.printPurchasedLotteries(lottoQuantity);
    return [price, randomLotto];
  }

  async runGame(randomLotto) {
    const userLottoNumber = await this.inputView.askUserLotto();
    const userBonusNumber = await this.inputView.askBonusLotto(userLottoNumber);
    const gameResult = Lotto.compareResult(
      randomLotto,
      userLottoNumber,
      userBonusNumber,
    );
    return gameResult;
  }

  async finishGame(result, cost) {
    this.outputView.printResultHeader();
    const ranking = this.winner.checkRanking(result);
    this.outputView.printGameResult(ranking);
    const returnRate = this.winner.confirmReturnRate(ranking, cost);
    this.outputView.printReturnRate(returnRate);
  }
}

export default GameController;
