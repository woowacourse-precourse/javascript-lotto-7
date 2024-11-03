import { Console } from '@woowacourse/mission-utils';
import LottoShop from './LottoShop.js';
import LottoAnalyzer from './LottoAnalyzer.js';
import Lotto from './Lotto.js';

class App {
  constructor() {
    this.money = 0;
    this.bonusNum = 0;
    this.winningLotto = null;
  }

  async run() {
    await this.setMoney();
    Console.print('');

    this.buyLottos = LottoShop.buyLottos(this.money);
    Console.print(LottoAnalyzer.getBuyLottosInfo(this.buyLottos));
    Console.print('');

    await this.setWinningLotto();
    Console.print('');

    await this.setBonusNum();
    Console.print('');
  }

  async setMoney() {
    this.money = Number(await Console.readLineAsync('구입금액을 입력해 주세요.\n'));
  }

  async setWinningLotto() {
    const inputWinningNumbers = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    const winningNumbers = inputWinningNumbers.split(',').map((number) => Number(number));
    this.winningLotto = new Lotto(winningNumbers);
  }

  async setBonusNum() {
    this.bonusNum = Number(await Console.readLineAsync('보너스 번호를 입력해 주세요.\n'));
  }
}

export default App;
