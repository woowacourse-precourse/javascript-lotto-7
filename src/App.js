import { Console } from '@woowacourse/mission-utils';
import LottoMachine from './LottoMachine.js';
class App {
  constructor() {
    this.money = 0;
    this.LottoMachine = null;
  }
  async run() {
    this.money = Number(await Console.readLineAsync('구입금액을 입력해 주세요.\n'));
    this.LottoMachine = new LottoMachine(this.money);
  }
}

export default App;
