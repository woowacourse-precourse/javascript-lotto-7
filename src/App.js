import { Lotto } from './Lotto.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    const purchaseAmount = parseInt(input, 10);

    try {
      this.validatePurchaseAmount(purchaseAmount);

      const lottoCount = purchaseAmount / 1000;
      Console.print(`\n${lottoCount}개를 구매했습니다.`);

      const lottos = this.generateLottos(lottoCount);
      lottos.forEach((lotto) => {
        Console.print(lotto.numbers);
      });

      const { winningNumbers, bonusNumber } = await this.getWinningNumbers();


      const result = this.compareNumbers(lottos, winningNumbers, bonusNumber);


      this.displayResult(result);

    } catch (error) {
      Console.print(error.message);
    }
  }

  async getWinningNumbers() {
    const winningInput = await Console.readLineAsync('\n당첨 번호를 입력해 주세요. (예: 1,2,3,4,5,6)\n');
    const winningNumbers = this.parseWinningNumbers(winningInput);

    const bonusInput = await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
    const bonusNumber = this.parseBonusNumber(bonusInput, winningNumbers);

    Console.print(`\n입력된 당첨 번호: ${winningNumbers}`);
    Console.print(`보너스 번호: ${bonusNumber}`);
    
    return { winningNumbers, bonusNumber };
  }

  compareNumbers(lottos, winningNumbers, bonusNumber) {
    const result = {
      first: 0,  // 6개
      second: 0, // 5개 + 보너스 
      third: 0,  // 5개
      fourth: 0, // 4개
      fifth: 0   // 3개
    };

    lottos.forEach((lotto) => {
      const matchCount = lotto.numbers.filter((num) => winningNumbers.includes(num)).length;
      const isBonusMatch = lotto.numbers.includes(bonusNumber);

      if (matchCount === 6) {
        result.first += 1;
      } else if (matchCount === 5 && isBonusMatch) {
        result.second += 1;
      } else if (matchCount === 5) {
        result.third += 1;
      } else if (matchCount === 4) {
        result.fourth += 1;
      } else if (matchCount === 3) {
        result.fifth += 1;
      }
    });

    return result;
  }

  displayResult(result) {
    Console.print('\n당첨 통계\n---');
    Console.print(`3개 일치 (5,000원) - ${result.fifth}개`);
    Console.print(`4개 일치 (50,000원) - ${result.fourth}개`);
    Console.print(`5개 일치 (1,500,000원) - ${result.third}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${result.second}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${result.first}개`);
  }

  parseWinningNumbers(input) {
    const numbers = input.split(',').map((num) => parseInt(num, 10));
    if (numbers.length !== 6 || numbers.some((num) => isNaN(num) || num < 1 || num > 45)) {
      throw new Error('[ERROR] 당첨 번호는 1부터 45 사이의 숫자 6개여야 합니다.');
    }
    if (new Set(numbers).size !== 6) {
      throw new Error('[ERROR] 당첨 번호는 중복될 수 없습니다.');
    }
    return numbers;
  }

  parseBonusNumber(input, winningNumbers) {
    const bonusNumber = parseInt(input, 10);
    if (isNaN(bonusNumber) || bonusNumber < 1 || bonusNumber > 45) {
      throw new Error('[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
    }
    return bonusNumber;
  }

  validatePurchaseAmount(amount) {
    if (isNaN(amount) || amount % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액은 1,000원 단위로 입력해 주세요.');
    }
  }

  generateLottos(count) {
    const lottos = [];
    for (let i = 0; i < count; i++) {
      lottos.push(new Lotto());
    }
    return lottos;
  }
}

export default App;
