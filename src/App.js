import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  #lottos = [];
  #winNumber = [];
  #bonusNumber = 0;

  async run() {
    try {
      await this.#purchaseLottos();
      await this.#getWinNumber();
      await this.#getBonusNumber();
      this.#printResults();
    } catch (error) {
      Console.print(error.message);
    }
  }

  async #purchaseLottos() {
    const amount = await this.#getPrice();
    const count = amount / 1000;

    Console.print(`\n${count}개를 구매했습니다.`);

    await this.#generateLottos(count);
    this.#printLottos();
  }

  async #getPrice() {
    const input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    const price = Number(input);

    if (isNaN(price) || price % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액은 1000원 단위입니다.');
    }

    return price;
  }

  async #getWinNumber() {
    const input = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
    const numbers = this.#parseNumbers(input);

    this.#winNumber = new Lotto(numbers).getNumbers();
  }

  async #getBonusNumber() {
    const input = await Console.readLineAsync(
      '\n보너스 번호를 입력해 주세요.\n'
    );
    const number = Number(input);

    if (isNaN(number) || number < 1 || number > 45) {
      throw new Error('[ERROR] 유효하지 않은 보너스 번호입니다.');
    }

    this.#bonusNumber = number;
  }

  #parseNumbers(input) {
    const numbers = input.split(',').map(Number);
    if (numbers.some(isNaN)) {
      throw new Error('[ERROR] 숫자만 입력 가능합니다.');
    }
    return numbers;
  }

  async #generateLottos(count) {
    for (let i = 0; i < count; i++) {
      const numbers = await Random.pickUniqueNumbersInRange(1, 45, 6);
      this.#lottos.push(new Lotto(numbers));
    }
  }

  #calculateResults() {
    const results = new Array(5).fill(0);

    this.#lottos.forEach((lotto) => {
      const matchCount = lotto.countMatchingNumbers(this.#winNumber);
      if (matchCount === 6) results[4]++;
      else if (matchCount === 5 && lotto.includes(this.#bonusNumber))
        results[3]++;
      else if (matchCount === 5) results[2]++;
      else if (matchCount === 4) results[1]++;
      else if (matchCount === 3) results[0]++;
    });

    return results;
  }

  #printLottos() {
    this.#lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });
  }

  #printResults() {
    const results = this.#calculateResults();

    Console.print('\n당첨 통계\n---');
    this.#printPrizeResults(results);
    this.#printReturnRate(results);
  }

  #printPrizeResults(results) {
    const prizes = [
      [3, '5,000'],
      [4, '50,000'],
      [5, '1,500,000'],
      [5, '30,000,000'],
      [6, '2,000,000,000'],
    ];

    const messages = [
      '3개 일치',
      '4개 일치',
      '5개 일치',
      '5개 일치, 보너스 볼 일치',
      '6개 일치',
    ];

    results.forEach((count, index) => {
      Console.print(`${messages[index]} (${prizes[index][1]}원) - ${count}개`);
    });
  }

  #printReturnRate(results) {
    const prizeAmounts = [5000, 50000, 1500000, 30000000, 2000000000];
    const totalPrize = results.reduce((sum, count, index) => {
      return sum + count * prizeAmounts[index];
    }, 0);

    const rate = (totalPrize / (this.#lottos.length * 1000)) * 100;
    Console.print(`총 수익률은 ${rate.toFixed(1)}%입니다.`);
  }
}

export default App;
