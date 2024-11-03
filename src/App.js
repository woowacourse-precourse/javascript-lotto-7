import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  async run() {
    const purchaseAmount = await this.getPurchaseAmount();
    const purchaseCount = this.calculatePurchaseCount(purchaseAmount);

    const generatedLottos = this.generateLottos(purchaseCount);

    const winningNumbers = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumber(winningNumbers);

    const lottoResults = this.calculateLottoResults(
      generatedLottos,
      winningNumbers,
      bonusNumber,
      purchaseAmount,
    );
    this.printLottoResults(lottoResults);
  }

  async getPurchaseAmount() {
    while(1){
      try {
        let amount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
        amount = Number(amount);

        if (Number.isNaN(amount) || amount <= 0) {
          throw new Error('[ERROR] 구입 금액은 1 이상의 숫자여야 합니다.');
        }
        return amount;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }
  

  calculatePurchaseCount(purchaseAmount) {
    const purchaseCount = purchaseAmount / 1000;
    if (!Number.isInteger(purchaseCount)) {
      throw new Error('[ERROR] 구입 금액은 1,000원 단위여야 합니다.');
    }

    Console.print(`\n${purchaseCount}개를 구매했습니다.`);
    return purchaseCount;
  }

  generateLottos(purchaseCount) {
    return Array.from({ length: purchaseCount }, () => {
      const lotto = new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b));
      lotto.printNumbers();
      return lotto;
    });
  }

  async getWinningNumbers() {
    while (1) {
      try {
        const getNumbers = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
        if (getNumbers.trim() === '' || getNumbers.endsWith(',')) {
          throw new Error('[ERROR] 올바른 형식으로 당첨 번호를 입력해 주세요.');
        }
        const winningNumbers = getNumbers.split(',').map((number) => {
          const num = Number(number.trim());
          if (Number.isNaN(num) || num < 1 || num > 45) {
            throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자를 6개 입력해야합니다.');
          }
          return num;
        });
        const uniqueNumbers = new Set(winningNumbers);
        if (uniqueNumbers.size !== winningNumbers.length) {
          throw new Error('[ERROR] 중복된 번호는 입력할 수 없습니다.');
        }
        if (winningNumbers.length !== 6) {
          throw new Error('[ERROR] 로또 번호는 6개를 입력해야합니다.');
        }
        return winningNumbers;
      } catch (e) {
      Console.print(e.message);
      }
    }
  }

  async getBonusNumber(winningNumbers) {
    while (1) {
      try {
        let bonusNumber = await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
        bonusNumber = Number(bonusNumber);
        if (Number.isNaN(bonusNumber) || bonusNumber < 1 || bonusNumber > 45) {
          throw new Error('[ERROR] 보너스 번호는 1부터 45 사이의 숫자 한개여야 합니다.');
        }
        if (winningNumbers.includes(bonusNumber)) {
          throw new Error('[ERROR] 보너스 번호는 로또 번호와 중복될 수 없습니다.');
        }
        return bonusNumber;
      } catch(e) {
      Console.print(e.message);
      }
    }
  }

  calculateLottoResults(generatedLottos, winningNumbers, bonusNumber, purchaseAmount) {
    const lottoResults = {
      3: 0,
      4: 0,
      5: 0,
      5.5: 0,
      6: 0,
      totalPrize: 0,
      profitRate: 0,
    };

    generatedLottos.forEach((lotto) => {
      let matchCount = lotto.matchNumbers(winningNumbers);
      const matchBonus = lotto.matchNumbers([bonusNumber]);

      if (matchCount === 5 && matchBonus === 1) {
        matchCount += 0.5;
      }
      if (matchCount >= 3) {
        lottoResults[matchCount] += 1;
      }
    });

    lottoResults.totalPrize = lottoResults[3] * 5000
      + lottoResults[4] * 50000
      + lottoResults[5] * 1500000
      + lottoResults[5.5] * 30000000
      + lottoResults[6] * 2000000000;

    lottoResults.profitRate = ((lottoResults.totalPrize / purchaseAmount) * 100).toFixed(1);
    lottoResults.profitRate = lottoResults.profitRate.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return lottoResults;
  }

  printLottoResults(lottoResults) {
    Console.print('\n당첨 통계\n---');
    Console.print(`3개 일치 (5,000원) - ${lottoResults[3]}개`);
    Console.print(`4개 일치 (50,000원) - ${lottoResults[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${lottoResults[5]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${lottoResults[5.5]}개`,
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${lottoResults[6]}개`);

    Console.print(`총 수익률은 ${lottoResults.profitRate}%입니다.`);
  }
}
export default App;
