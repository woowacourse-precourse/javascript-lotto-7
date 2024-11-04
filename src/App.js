import { Random, Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
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
    const input = await Console.readLineAsync('로또 구입 금액을 입력해 주세요.\n');
    const amount = parseInt(input, 10);

    if (isNaN(amount) || amount <= 0 || amount % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액은 1,000원 단위로 입력해 주세요.');
    }

    const numberOfLottos = amount / 1000;
    this.lottos = [];

    for (let i = 0; i < numberOfLottos; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      const lotto = new Lotto(numbers);
      this.lottos.push(lotto);
    }

    Console.print(`${numberOfLottos}개를 구매했습니다.`);
    this.lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });
  }

  async inputWinningNumbers() {
    const input = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    const numbers = input.split(',').map(Number);

    if (numbers.length !== 6 || numbers.some((num) => isNaN(num) || num < 1 || num > 45)) {
      throw new Error('[ERROR] 올바른 당첨 번호를 입력해 주세요. (1~45 사이의 숫자 6개)');
    }

    this.winningNumbers = numbers;
  }

  async inputBonusNumber() {
    const input = await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    const bonusNumber = parseInt(input, 10);

    if (
      isNaN(bonusNumber)
        || bonusNumber < 1
        || bonusNumber > 45
        || this.winningNumbers.includes(bonusNumber)
    ) {
      throw new Error(
        '[ERROR] 올바른 보너스 번호를 입력해 주세요. (1~45 사이의 숫자, 당첨 번호와 중복되지 않아야 합니다)',
      );
    }

    this.bonusNumber = bonusNumber;
  }

  calculateResults() {
    const prizeTable = {
      3: 5000,
      4: 50000,
      5: 1500000,
      '5+bonus': 30000000,
      6: 2000000000,
    };

    const matchCount = {
      3: 0, 4: 0, 5: 0, '5+bonus': 0, 6: 0,
    };
    let totalPrize = 0;

    this.lottos.forEach((lotto) => {
      const numbers = lotto.getNumbers();
      const matchedCount = this.countMatchingNumbers(numbers);
      const hasBonus = numbers.includes(this.bonusNumber);

      if (matchedCount >= 3) {
        if (matchedCount === 5 && hasBonus) {
          matchCount['5+bonus']++;
          totalPrize += prizeTable['5+bonus'];
        } else if (matchedCount === 5) {
          matchCount[5]++;
          totalPrize += prizeTable[5];
        } else {
          matchCount[matchedCount]++;
          totalPrize += prizeTable[matchedCount];
        }
      } else if (matchedCount === 6) {
        matchCount[6]++;
        totalPrize += prizeTable[6];
      }
    });

    Console.print('당첨 통계\n---');
    Console.print(`3개 일치 (5,000원) - ${matchCount[3]}개`);
    Console.print(`4개 일치 (50,000원) - ${matchCount[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${matchCount[5]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${matchCount['5+bonus']}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${matchCount[6]}개`);

    const spentAmount = this.lottos.length * 1000;
    const profitRate = ((totalPrize / spentAmount) * 100).toFixed(1);
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }

  countMatchingNumbers(numbers) {
    return numbers.filter((num) => this.winningNumbers.includes(num)).length;
  }
}

export default App;
