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
    Console.print(`${LottoShop.getBuyLottosInfo(this.buyLottos)}\n`);

    await this.#setWinningLotto();

    await this.#setBonusNum();

    this.#lottoAnalyzer = new LottoAnalyzer(
      this.winningLotto.getNumbers(),
      this.buyLottos,
      this.bonusNum,
      this.money
    );

    this.#lottoAnalyzer.calculate();
    this.#printResult();
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

  #printResult() {
    Console.print('당첨 통계\n---');
    for (let idx = 0; idx < 5; idx++) {
      Console.print(this.#makeResult(idx));
    }

    Console.print(`총 수익률은 ${this.#lottoAnalyzer.getRoi().toLocaleString()}%입니다.`);
  }

  #makeResult(idx) {
    let matchCount = 3;
    let bonusCaseMessage = '';
    if (idx === 1) matchCount = 4;
    else if (idx === 2) matchCount = 5;
    else if (idx === 3) {
      matchCount = 5;
      bonusCaseMessage = ', 보너스 볼 일치';
    } else if (idx === 4) matchCount = 6;

    return `${matchCount}개 일치`
      + `${bonusCaseMessage}`
      + ` (${this.#prizeMoney[idx].toLocaleString()})원 -`
      + ` ${this.#lottoAnalyzer.getwinningCount()[idx]}개`;
  }
}

export default App;
