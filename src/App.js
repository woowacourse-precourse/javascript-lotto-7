import { Console } from '@woowacourse/mission-utils';

class App {
  #cash;

  #numberOfLotto;

  // eslint-disable-next-line max-lines-per-function
  async run() {
    // 1. 구입 금액을 입력받는다.
    this.#cash = await Console.readLineAsync('구입금액을 입력해 주세요.\n');

    // 2. 구매된 로또 매수를 출력한다.
    this.#numberOfLotto = this.#cash / 1000;
    Console.print(`\n${this.#numberOfLotto}개를 구매했습니다.`);
  }
}

export default App;
