import { Console } from '@woowacourse/mission-utils';
import LottoMachine from './LottoMachine.js';
class App {
  constructor() {
    this.money = 0;
    this.bonusNum = 0;
    this.winningNumbers = null;
    this.lottoMachine = null;
  }

  async run() {
    this.money = Number(await Console.readLineAsync('구입금액을 입력해 주세요.\n'));
    Console.print('');

    this.lottoMachine = new LottoMachine(this.money);
    Console.print(this.lottoMachine.getBoughtLottosInfo());
    Console.print('');

    this.winningNumbers = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    this.lottoMachine.setWinningLotto(this.winningNumbers);
    Console.print('');

    this.bonusNum = Number(await Console.readLineAsync('보너스 번호를 입력해 주세요.\n'));
    this.lottoMachine.setBonusNum(this.bonusNum);
    Console.print('');
  }
}

export default App;
