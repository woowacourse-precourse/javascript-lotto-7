import { Console, MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import { INPUT_MESSAGES } from './Constants/input.js';
import { OUTPUT_MESSAGES } from './Constants/output.js';
import { PRIZE_MONEY, RANK_DESCRIPTIONS } from './Constants/prize.js';
import { validatePurchaseAmount, validateWinningNumbers, validateBonusNumber } from './utils/validateInput.js';

class App {
  async run() {
    const buyCost = await this.getBuyAmount();
    const STANDARD_COST = 1000;
    const buyCount = buyCost / STANDARD_COST;

    Console.print(`${buyCount}${OUTPUT_MESSAGES.LOTTO_COUNT}`);
    const myLottoNumbers = [];

    for (let i = 0; i < buyCount; i++) {
      const lottoNumber = this.generateNumber();
      Console.print(`[${lottoNumber.join(', ')}]`);
      new Lotto(lottoNumber);
      myLottoNumbers.push(lottoNumber);
    }

    const winningNumberInput = await Console.readLineAsync(INPUT_MESSAGES.WINNING_NUMBERS);
    const bonusNumberInput = await Console.readLineAsync(INPUT_MESSAGES.BONUS_NUMBER);
    const winningNumbers = validateWinningNumbers(winningNumberInput);

    const bonusNumber = validateBonusNumber(bonusNumberInput, winningNumbers);

    Console.print('당첨 통계');
    Console.print('---');

    const results = this.calculateWinningNumber(myLottoNumbers, winningNumbers, bonusNumber);
    this.formatResult(results, buyCost);
  }

  async getBuyAmount() {
    try {
      const input = await Console.readLineAsync(INPUT_MESSAGES.PURCHASE_AMOUNT);
      return validatePurchaseAmount(input);
    } catch (error) {
      Console.print(error.message);
      return this.getBuyAmount(); // 에러 발생 시 다시 입력 받기
    }
  }

  generateNumber() {
    const lottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    lottoNumber.sort((a, b) => a - b);
    return lottoNumber;
  }

  calculateWinningNumber(myLottoNumbers, winningNumbers, bonusNumber) {
    const results = { 3: 0, 4: 0, 5: 0, '5+bonus': 0, 6: 0 };
    myLottoNumbers.forEach((lotto) => {
      const matchCount = lotto.filter((num) => winningNumbers.includes(num)).length;
      const hasBonus = lotto.includes(bonusNumber);
      const rankKey = matchCount === 5 && hasBonus ? '5+bonus' : matchCount;
      if (PRIZE_MONEY[rankKey]) results[rankKey]++;
    });

    return results;
  }

  formatResult(results, totalCost) {
    let totalPrize = 0;
    let resultMessage = '';

    [3, 4, 5, '5+bonus', 6].forEach((key) => {
      const count = results[key];
      const prize = PRIZE_MONEY[key];
      const matchText = RANK_DESCRIPTIONS[key];
      resultMessage += `${matchText} (${prize.toLocaleString()}원) - ${count}개\n`;
      totalPrize += count * prize;
    });

    const profitRate = ((totalPrize / totalCost) * 100).toFixed(1);
    resultMessage += `총 수익률은 ${profitRate}%입니다.`;
    Console.print(resultMessage.trim());
  }
}

export default App;
