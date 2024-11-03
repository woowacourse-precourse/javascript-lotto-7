import { Console } from '@woowacourse/mission-utils';
class App {
  constructor() {
    this.money = 0;
  }
  async run() {
    Console.readLineAsync(this.money);
  }
}

export default App;
