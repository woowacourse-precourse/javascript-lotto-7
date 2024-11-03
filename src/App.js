import { Console } from '@woowacourse/mission-utils';
class App {
  constructor() {
    this.money = 0;
  }
  async run() {
    Console.print('구입금액을 입력해 주세요.\n');
    Console.readLineAsync(this.money);
  }
}

export default App;
