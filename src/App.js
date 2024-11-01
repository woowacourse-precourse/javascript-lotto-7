import { Console, MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  static PRIZE_TABLE = {
    3: 5000,
    4: 50000,
    5: 1500000,
    5.5: 30000000,
    6: 2000000000,
  };

  static RANK_DESCRIPTIONS = {
    3: '3개 일치',
    4: '4개 일치',
    5: '5개 일치',
    5.5: '5개 일치, 보너스 볼 일치',
    6: '6개 일치',
  };

  async run() {
    const buyCost = await this.getBuyAmount();

    const STANDARD_COST = 1000;
    const buyCount = buyCost / STANDARD_COST;

    Console.print(`${buyCount}개를 구매했습니다.`);
    const myLottoNumbers = [];

    for (let i = 0; i < buyCount; i++) {
      const lottoNumber = this.generateNumber();
      Console.print(`[${lottoNumber.join(', ')}]`);
      new Lotto(lottoNumber);
      myLottoNumbers.push(lottoNumber);
    }

    const winningNumberInput = await Console.readLineAsync(
      '\n당첨 번호를 입력해 주세요.\n'
    );
    const bonusNumberInput = await Console.readLineAsync(
      '\n보너스 번호를 입력해 주세요.\n'
    );
    const winningNumbers = this.validateWinningNumbers(winningNumberInput);

    const bonusNumber = this.validateBonusNumber(
      bonusNumberInput,
      winningNumbers
    );

    Console.print('\n당첨 통계');
    Console.print('\n---');

    const results = this.calculateWinningNumber(
      myLottoNumbers,
      winningNumbers,
      bonusNumber
    );
    this.formatResult(results, buyCount);
  }

  async getBuyAmount() {
    try {
        const input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
        return this.validatePurchaseAmount(input);
    } catch (error) {
        Console.print(error.message);
        return this.getBuyAmount(); // 에러 발생시 다시 입력 받기
    }
}

  validatePurchaseAmount(buyCost) {
    const STANDARD_COST = 1000;
    if (!buyCost.match(/^\d+$/)) {
      throw new Error('[ERROR] 숫자로 입력해야 합니다.');
    }

    const amount = Number(buyCost);
    
    if (amount < STANDARD_COST)
      throw new Error('[ERROR] 구입금액은 1000원 이상이어야 합니다.');
    if (amount % STANDARD_COST !== 0)
      throw new Error('[ERROR] 구입금액은 1000원 단위로 입력해야 합니다.');

    return amount;
  }

  generateNumber() {
    const lottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    lottoNumber.sort((a, b) => a - b);
    return lottoNumber;
  }

  validateWinningNumbers(input) {
    const numbers = input.split(',').map((num) => Number(num.trim()));
    if (numbers.length !== 6 || numbers.some((num) => isNaN(num))) {
      throw new Error(
        '[ERROR] 당첨 번호는 쉼표로 구분된 6개의 숫자여야 합니다.'
      );
    }
    new Lotto(numbers);
    return numbers;
  }

  validateBonusNumber(bonusInput, winningNumbers) {
    const bonusNumber = Number(bonusInput.trim());
    Lotto.validateBonusNumber(bonusNumber, winningNumbers);
    return bonusNumber;
  }

  calculateWinningNumber(myLottoNumbers, winningNumbers, bonusNumber) {
    const results = { 3: 0, 4: 0, 5: 0, 5.5: 0, 6: 0 };
    myLottoNumbers.forEach((lotto) => {
      const matchCount = lotto.filter((num) =>
        winningNumbers.includes(num)
      ).length;
      const hasBonus = lotto.includes(bonusNumber);
      const rankKey = matchCount === 5 && hasBonus ? 5.5 : matchCount;
      if (App.PRIZE_TABLE[rankKey]) results[rankKey]++;
    });

    return results;
  }

  formatResult(results, totalTickets) {
    let totalPrize = 0;
    let resultMessage = '';

    [3, 4, 5, '5.5', 6].forEach((rankKey) => {
      const prize = App.PRIZE_TABLE[rankKey] || 0;
      totalPrize += results[rankKey] * prize;
      resultMessage += `${
        App.RANK_DESCRIPTIONS[rankKey]
      } (${prize.toLocaleString()}원) - ${results[rankKey]}개\n`;
    });

    const profitRate = this.calculateProfitRate(
      totalPrize,
      totalTickets * 1000
    );
    resultMessage += `총 수익률은 ${profitRate}%입니다.`;
    Console.print(resultMessage);
  }

  calculateProfitRate(totalPrize, totalCost) {
    if (totalPrize === 0) {
      return 0;
    }
    return ((totalPrize / totalCost) * 100).toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })
  }
}

export default App;
