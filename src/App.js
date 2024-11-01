import { Console, Random } from '@woowacourse/mission-utils';

class App {
  #cash;

  #numberOfLotto;

  #lottos;

  constructor() {
    this.#lottos = [];
  }

  // eslint-disable-next-line max-lines-per-function
  async run() {
    // 1. 구입 금액을 입력받는다.
    this.#cash = await Console.readLineAsync('구입금액을 입력해 주세요.\n');

    // 2. 구매된 로또 매수를 출력한다.
    this.#numberOfLotto = this.#cash / 1000;
    Console.print(`\n${this.#numberOfLotto}개를 구매했습니다.`);

    // 3. 매수 만큼 6개의 랜덤한 숫자로 이루어진 정수 배열을 출력한다.
    for (let i = 0; i < this.#numberOfLotto; i += 1) {
      const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const sortedNumbers = randomNumbers.sort((a, b) => a - b);
      this.#lottos.push(sortedNumbers);

      Console.print(sortedNumbers);
    }

    // 4. 당첨 번호를 입력받는다.
    const winnerNumberInput = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
    const winnerNumbers = winnerNumberInput.split(',').map((num) => Number(num));
  }
}

export default App;
