import { Console } from '@woowacourse/mission-utils';

class App {
  #cash;

  async run() {
    // 1. 구입 금액을 입력받는다.
    this.#cash = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
  }
}

export default App;
