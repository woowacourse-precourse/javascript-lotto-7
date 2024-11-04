import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class WinningManager {
  async answer() {
    const input = await Console.readLineAsync('');
    return input;
  }

  async checkWinningNumbers(lottoTickets) {
    const winningNumbers = await this.getWinningNumber();
    const bonusNumber = await this.getBounsNumber(winningNumbers)

    this.printResults(lottoTickets, winningNumbers, bonusNumber);
  }

  async getWinningNumber() {
    Console.print('\n당첨 번호를 입력해 주세요.');
    const winningInput = await this.answer();
    const winningNumbers = winningInput.split(',').map(Number);

    new Lotto(winningNumbers);;

    return winningNumbers
  }

  async getBounsNumber(winningNumbers) {
    Console.print('\n보너스 번호를 입력해 주세요.');
    const bonusNumber = Number(await this.answer());

    this.validateBonusNumber(bonusNumber, winningNumbers);

    return bonusNumber
  }

  validateBonusNumber(bonusNumber, winningNumbers) {
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }
  }

  printResults(lottoTickets, winningNumbers, bonusNumber) {
    const resultCounts = { 3: 0, 4: 0, 5: 0, '5+bonus': 0, 6: 0 };
    let totalPrize = 0;

    lottoTickets.forEach((ticket) => {
      const matchCount = ticket.matchCount(winningNumbers);
      const isBonusMatch = ticket.isBonusMatch(bonusNumber);

      if (matchCount === 6) {
        resultCounts[6]++;
        totalPrize += 2000000000;
      } else if (matchCount === 5 && isBonusMatch) {
        resultCounts['5+bonus']++;
        totalPrize += 30000000;
      } else if (matchCount === 5) {
        resultCounts[5]++;
        totalPrize += 1500000;
      } else if (matchCount === 4) {
        resultCounts[4]++;
        totalPrize += 50000;
      } else if (matchCount === 3) {
        resultCounts[3]++;
        totalPrize += 5000;
      }
    });

    Console.print('\n당첨 통계\n---');
    Console.print(`3개 일치 (5,000원) - ${resultCounts[3]}개`);
    Console.print(`4개 일치 (50,000원) - ${resultCounts[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${resultCounts[5]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${resultCounts['5+bonus']}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${resultCounts[6]}개`);
    Console.print(`총 수익률은 ${(totalPrize / (lottoTickets.length * 1000) * 100).toFixed(1)}%입니다.`);
  }
}

export default WinningManager;
