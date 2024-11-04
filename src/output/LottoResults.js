import { Console } from '@woowacourse/mission-utils';

class LottoResults {
  constructor() {
    this.winningNumbersDictionary = {
      '3개 일치 (5,000원)': 0,
      '4개 일치 (50,000원)': 0,
      '5개 일치 (1,500,000원)': 0,
      '5개 일치, 보너스 볼 일치 (30,000,000원)': 0,
      '6개 일치 (2,000,000,000원)': 0,
    };
    this.prizeMoney = {
      '3개 일치 (5,000원)': 5000,
      '4개 일치 (50,000원)': 50000,
      '5개 일치 (1,500,000원)': 1500000,
      '5개 일치, 보너스 볼 일치 (30,000,000원)': 30000000,
      '6개 일치 (2,000,000,000원)': 2000000000,
    };
  }

  checkWinningNumbers(lottoList, winnigNumber, bonusNumber, money) {
    lottoList.forEach((ticket) => {
      const matchCount = this.countMatches(ticket, winnigNumber);
      const hasBonus = ticket.includes(bonusNumber);

      if (matchCount === 3) {
        this.winningNumbersDictionary['3개 일치 (5,000원)'] += 1;
      } else if (matchCount === 4) {
        this.winningNumbersDictionary['4개 일치 (50,000원)'] += 1;
      } else if (matchCount === 5) {
        if (hasBonus) {
          this.winningNumbersDictionary[
            '5개 일치, 보너스 볼 일치 (30,000,000원)'
          ] += 1;
        }
        this.winningNumbersDictionary['5개 일치 (1,500,000원)'] += 1;
      } else if (matchCount === 6) {
        this.winningNumbersDictionary['6개 일치 (2,000,000,000원)'] += 1;
      }
    });

    this.displayWinnigResult();
    this.displayRateOfReturn(money);
  }

  countMatches(ticket, winningNumber) {
    return ticket.filter((number) => winningNumber.includes(number)).length;
  }

  displayWinnigResult() {
    Console.print('당첨 통계');
    Console.print('---');
    Object.entries(this.winningNumbersDictionary).forEach(([key, value]) => {
      Console.print(`${key} - ${value}개`);
    });
  }

  displayRateOfReturn(money) {
    const totalPrize = Object.entries(this.winningNumbersDictionary).reduce(
      (acc, [key, count]) => acc + this.prizeMoney[key] * count,
      0,
    );

    const rateOfReturn = ((totalPrize / money) * 100).toFixed(1);

    Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  }
}

export default LottoResults;
