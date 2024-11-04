import { Console } from '@woowacourse/mission-utils';
import LottoShop from './LottoShop.js';
import LottoAnalyzer from './LottoAnalyzer.js';
import Lotto from './Lotto.js';

class App {
  #prizeMoney = [5000, 50000, 1500000, 30000000, 2000000000];
  #lottoAnalyzer = null;
  constructor() {
    this.money = 0;
    this.bonusNum = 0;
    this.buyLottos = null;
    this.winningLotto = null;
  }

  async run() {
    await this.#setMoney();

    this.buyLottos = LottoShop.buyLottos(this.money);
    Console.print(LottoShop.getBuyLottosInfo(this.buyLottos));
    Console.print('');

    await this.#setWinningLotto();

    await this.#setBonusNum();

    this.#lottoAnalyzer = new LottoAnalyzer(
      this.winningLotto.getNumbers(),
      this.buyLottos,
      this.bonusNum
    );
    this.#lottoAnalyzer.calculate();
  }

  async #setMoney() {
    this.money = Number(await Console.readLineAsync('구입금액을 입력해 주세요.\n'));
    Console.print('');
  }

  async #setWinningLotto() {
    const inputWinningNumbers = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    const winningNumbers = inputWinningNumbers.split(',').map((number) => Number(number));
    this.winningLotto = new Lotto(winningNumbers);
    Console.print('');
  }

  async #setBonusNum() {
    this.bonusNum = Number(await Console.readLineAsync('보너스 번호를 입력해 주세요.\n'));
    Console.print('');
  }
}

export default App;
