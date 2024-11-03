import { Console } from '@woowacourse/mission-utils';
class App {
  constructor() {
    this.money = 0;
  }
  async run() {
    this.money = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
  }
}

export default App;
