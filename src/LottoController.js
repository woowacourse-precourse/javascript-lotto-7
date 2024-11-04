import { INPUT_MESSAGE, OUTPUT_MESSAGE, PRIZE } from './constant.js';
import { Console } from '@woowacourse/mission-utils';
import { validateAmount, validateBonus, validateNumbers } from './validate.js';

class LottoController {
  async getLottoAmount() {
    const amount = await Console.readLineAsync(
      INPUT_MESSAGE.INPUT_LOTTO_AMOUNT
    );
    validateAmount(amount);
    return parseInt(amount, 10);
  }
  async getLottoNumber() {
    const numbers = await Console.readLineAsync(
      INPUT_MESSAGE.INPUT_LOTTO_NUMBERS
    );
    validateNumbers(numbers);
    return numbers.split(',').map((num) => parseInt(num, 10));
  }
  async getLottoBonusNumber(numbers) {
    const bonus = await Console.readLineAsync(
      INPUT_MESSAGE.INPUT_BONUS_NUMBERS
    );
    validateBonus(bonus, numbers);
    return bonus;
  }
  printLottoCount(cnt) {
    Console.print(OUTPUT_MESSAGE.LOTTO_CNT(cnt));
  }

  printLottos(lottos) {
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });
  }

  calculateStatistics(lottos, winningNumbers, bonusNumber, machine) {
    const statistics = { 3: 0, 4: 0, 5: 0, bonus: 0, 6: 0 };
    lottos.forEach((lotto) => {
      const matchCount = machine.compareWinningNumbers(
        lotto.getNumbers(),
        winningNumbers
      );
      const isBonusMatch = machine.compareBonusNumber(
        lotto.getNumbers(),
        bonusNumber
      );

      if (matchCount === 6) statistics[6]++;
      else if (matchCount === 5 && isBonusMatch) statistics['bonus']++;
      else if (matchCount === 5) statistics[5]++;
      else if (matchCount === 4) statistics[4]++;
      else if (matchCount === 3) statistics[3]++;
    });
    return statistics;
  }
  calculateProfitRate(statistics, totalSpent) {
    let totalEarnings = 0;
    for (const key in statistics) {
      const count = statistics[key];
      totalEarnings += PRIZE[key] * count;
    }
    return ((totalEarnings / totalSpent) * 100).toFixed(1);
  }

  printStatistics(statistics, profitRate) {
    Console.print(OUTPUT_MESSAGE.HEADER);
    Console.print(OUTPUT_MESSAGE.MATCH_3(statistics[3]));
    Console.print(OUTPUT_MESSAGE.MATCH_4(statistics[4]));
    Console.print(OUTPUT_MESSAGE.MATCH_5(statistics[5]));
    Console.print(OUTPUT_MESSAGE.MATCH_BONUS(statistics['bonus']));
    Console.print(OUTPUT_MESSAGE.MATCH_6(statistics[6]));
    Console.print(OUTPUT_MESSAGE.TOTAL_RETURN(profitRate));
  }
}

export default LottoController;
