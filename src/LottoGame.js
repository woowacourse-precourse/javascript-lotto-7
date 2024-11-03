import { MissionUtils, Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class LottoGame {
  static PRICE_PER_LOTTO = 1000;

  constructor(quantity) {
    this.quantity = quantity;
    this.lottos = this.createLottos();
    this.winningNumbers = null;
    this.bonusNumber = null;
    this.result = {
      '1st place': 0,
      '2nd place': 0,
      '3rd place': 0,
      '4th place': 0,
      '5th place': 0,
    };
  }

  createLottos() {
    return Array.from(
      { length: this.quantity },
      () => new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6))
    );
  }

  async start() {
    this.displayLottos();
    await this.inputWinningInfo();
    this.calculateWinningResults();
    this.displayResult();
  }

  displayLottos() {
    Console.print(`\n${this.quantity}개를 구매했습니다.`);
    this.lottos.forEach((lotto) =>
      Console.print(`[${lotto.numbers.join(', ')}]`)
    );
  }

  async inputWinningInfo() {
    await this.inputWinningNumbers();
    await this.inputBonusNumber();
  }

  async inputWinningNumbers() {
    const winningInput = await Console.readLineAsync(
      '\n당첨 번호를 입력해 주세요.\n'
    );
    this.winningNumbers = winningInput
      .split(',')
      .map((numberString) => Number(numberString.trim()));

    this.validateWinningNumbers(this.winningNumbers);
  }

  async inputBonusNumber() {
    const bonusInput = await Console.readLineAsync(
      '\n보너스 번호를 입력해 주세요.\n'
    );
    this.bonusNumber = Number(bonusInput);

    this.validateBonusNumber(this.bonusNumber);
  }

  validateWinningNumbers(winningNumbers) {
    if (new Set(winningNumbers).size !== 6) {
      throw new Error('[ERROR] 당첨 번호는 6개의 서로 다른 숫자여야 합니다.');
    }

    winningNumbers.forEach((number) => {
      if (isNaN(number))
        throw new Error('[ERROR] 당첨 번호 입력이 잘못되었습니다.');
      if (number <= 0 || number >= 46)
        throw new Error('[ERROR] 당첨 번호 입력이 잘못되었습니다.');
    });
  }

  validateBonusNumber(bonusNumber) {
    if (isNaN(bonusNumber))
      throw new Error('[ERROR] 보너스 번호 입력이 잘못되었습니다.');

    if (this.winningNumbers.includes(bonusNumber))
      throw new Error('[ERROR] 당첨 번호와 보너스 번호는 중복될 수 없습니다.');
  }

  calculateWinningResults() {
    this.lottos.forEach((lotto) => {
      const result = lotto.checkWinningStatus(
        this.winningNumbers,
        this.bonusNumber
      );
      this.recordResult(result);
    });
  }

  recordResult({ matchCount, hasBonus }) {
    if (matchCount === 3) this.result['5th place']++;
    if (matchCount === 4) this.result['4th place']++;
    if (matchCount === 5 && !hasBonus) this.result['3rd place']++;
    if (matchCount === 5 && hasBonus) this.result['2nd place']++;
    if (matchCount === 6) this.result['1st place']++;
  }

  displayResult() {
    Console.print('\n당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${this.result['5th place']}개`);
    Console.print(`4개 일치 (50,000원) - ${this.result['4th place']}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.result['3rd place']}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.result['2nd place']}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${this.result['1st place']}개`);
    Console.print(`총 수익률은 ${this.calculateProfitRate()}%입니다.`);
  }

  calculateProfitRate() {
    const winningAmount = this.calculateWinningAmount();
    const purchaseAmount = this.quantity * LottoGame.PRICE_PER_LOTTO;

    return Number(((winningAmount / purchaseAmount) * 100).toFixed(1));
  }

  calculateWinningAmount() {
    return (
      this.result['5th place'] * 5000 +
      this.result['4th place'] * 50000 +
      this.result['3rd place'] * 1500000 +
      this.result['2nd place'] * 30000000 +
      this.result['1st place'] * 2000000000
    );
  }
}

export default LottoGame;
