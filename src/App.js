import Input from './Input.js';
import Print from './Print.js';
import Lotto from './Lotto.js';
import BuyLotto from './BuyLotto.js';

class App {
  constructor() {
    this.input = new Input();
    this.print = new Print();
    this.buyLotto = new BuyLotto();
  }

  async run() {
    const money = await this.input.inputMoney();
    const lottoCount = this.buyLotto.calculateLottoCount(money);
    const lottos = this.buyLotto.getLotto(lottoCount);
    this.print.printLottos(lottos);
    const lotto = new Lotto(await this.input.inputLottoNumber());
    const bonusNumber = await this.input.inputBonusNumber(lotto.getNumbers());
    const winning = lotto.compareLotto(lottos, bonusNumber);
    const rate = lotto.calculateStatistics(winning, money);
    this.print.printStatistics(winning, rate);
  }
}

export default App;
