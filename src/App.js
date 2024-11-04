import { Console } from '@woowacourse/mission-utils';
import LottoShop from './LottoShop.js';
import LottoAnalyzer from './LottoAnalyzer.js';
import Lotto from './Lotto.js';
import inputMessages from './constants/inputMessages.js';
import { Delimiters, EMPTY_STRING } from './constants/strings.js';

class App {
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

    this.#lottoAnalyzer.run();
    Console.print(this.#lottoAnalyzer.getStatistics());
  }

  async #setMoney() {
    this.money = Number(await Console.readLineAsync(inputMessages.INPUT_MONEY));
    Console.print(EMPTY_STRING);
  }

  async #setWinningLotto() {
    const inputWinningNumbers = await Console.readLineAsync(inputMessages.INPUT_WINNING_NUMBERS);
    const winningNumbers = inputWinningNumbers
      .split(Delimiters.COMMA)
      .map((number) => Number(number));
    this.winningLotto = new Lotto(winningNumbers);
    Console.print(EMPTY_STRING);
  }

  async #setBonusNum() {
    this.bonusNum = Number(await Console.readLineAsync(inputMessages.INPUT_BONUS));
    Console.print(EMPTY_STRING);
  }
}

export default App;
