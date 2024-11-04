import { Random, Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

// 상수 정의
const LOTTO_PRICE = 1000;
const LOTTO_NUMBER_COUNT = 6;
const MIN_NUMBER = 1;
const MAX_NUMBER = 45;
const prizeTable = {
  3: 5000,
  4: 50000,
  5: 1500000,
  '5+bonus': 30000000,
  6: 2000000000,
};

class App {
  constructor() {
    this.lottos = [];
    this.winningNumbers = [];
    this.bonusNumber = null;
  }

  async run() {
    try {
      await this.purchaseLotto();
      await this.inputWinningNumbers();
      await this.inputBonusNumber();
      this.calculateResults();
    } catch (error) {
      Console.print(error.message);
    }
  }

  async purchaseLotto() {
    const amount = await this.getPurchaseAmount();
    this.generateLottos(amount);
    this.printLottos();
  }

  async getPurchaseAmount() {
    const input = await Console.readLineAsync('로또 구입 금액을 입력해 주세요.\n');
    const amount = parseInt(input, 10);

    if (isNaN(amount) || amount <= 0 || amount % LOTTO_PRICE !== 0) {
      throw new Error('[ERROR] 구입 금액은 1,000원 단위로 입력해 주세요.');
    }

    return amount;
  }

  generateLottos(amount) {
    const numberOfLottos = amount / LOTTO_PRICE;

    for (let i = 0; i < numberOfLottos; i++) {
      const numbers = Random.pickUniqueNumbersInRange(MIN_NUMBER, MAX_NUMBER, LOTTO_NUMBER_COUNT).sort(
        (a, b) => a - b,
      );
      this.lottos.push(new Lotto(numbers));
    }
  }

  printLottos() {
    Console.print(`${this.lottos.length}개를 구매했습니다.`);
    this.lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });
  }

  async inputWinningNumbers() {
    const input = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    const numbers = input.split(',').map(Number);

    if (!this.isValidWinningNumbers(numbers)) {
      throw new Error('[ERROR] 올바른 당첨 번호를 입력해 주세요. (1~45 사이의 숫자 6개)');
    }

    this.winningNumbers = numbers;
  }

  isValidWinningNumbers(numbers) {
    return (
      numbers.length === LOTTO_NUMBER_COUNT
        && numbers.every((num) => !isNaN(num) && num >= MIN_NUMBER && num <= MAX_NUMBER)
    );
  }

  async inputBonusNumber() {
    const input = await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    const bonusNumber = parseInt(input, 10);

    if (!this.isValidBonusNumber(bonusNumber)) {
      throw new Error(
        '[ERROR] 올바른 보너스 번호를 입력해 주세요. (1~45 사이의 숫자, 당첨 번호와 중복되지 않아야 합니다)',
      );
    }

    this.bonusNumber = bonusNumber;
  }

  isValidBonusNumber(bonusNumber) {
    return (
      !isNaN(bonusNumber)
        && bonusNumber >= MIN_NUMBER
        && bonusNumber <= MAX_NUMBER
        && !this.winningNumbers.includes(bonusNumber)
    );
  }

  calculateResults() {
    const matchCount = this.getMatchCount();
    const totalPrize = this.calculateTotalPrize(matchCount);

    this.printResults(matchCount, totalPrize);
  }

  getMatchCount() {
    const matchCount = {
      3: 0, 4: 0, 5: 0, '5+bonus': 0, 6: 0,
    };

    this.lottos.forEach((lotto) => {
      const matchedCount = this.countMatchingNumbers(lotto.getNumbers());
      const hasBonus = lotto.getNumbers().includes(this.bonusNumber);

      if (matchedCount === 6) {
        matchCount[6]++;
      } else if (matchedCount === 5 && hasBonus) {
        matchCount['5+bonus']++;
      } else if (matchedCount === 5) {
        matchCount[5]++;
      } else if (matchedCount === 4) {
        matchCount[4]++;
      } else if (matchedCount === 3) {
        matchCount[3]++;
      }
    });

    return matchCount;
  }

  calculateTotalPrize(matchCount) {
    return Object.keys(prizeTable).reduce(
      (total, key) => total + matchCount[key] * prizeTable[key],
      0,
    );
  }

  printResults(matchCount, totalPrize) {
    Console.print('당첨 통계\n---');
    Console.print(`3개 일치 (5,000원) - ${matchCount[3]}개`);
    Console.print(`4개 일치 (50,000원) - ${matchCount[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${matchCount[5]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${matchCount['5+bonus']}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${matchCount[6]}개`);

    const spentAmount = this.lottos.length * LOTTO_PRICE;
    const profitRate = ((totalPrize / spentAmount) * 100).toFixed(1);
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }

  countMatchingNumbers(numbers) {
    return numbers.filter((num) => this.winningNumbers.includes(num)).length;
  }
}

export default App;
