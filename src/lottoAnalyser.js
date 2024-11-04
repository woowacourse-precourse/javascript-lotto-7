import { Console } from "@woowacourse/mission-utils";

class LottoAnalyser {
  static PRIZES = {
    3: 5000,
    4: 50000,
    5: 1500000,
    5.5: 30000000,
    6: 2000000000,
  };

  analyse(lottos, winningNumbers, bonusNumber) {
    const results = {
      3: 0,
      4: 0,
      5: 0,
      5.5: 0,
      6: 0,
    };

    lottos.forEach(lotto => {
      const matchCount = this.getMatchCount(lotto.getNumbers(), winningNumbers);
      const hasBonus = lotto.getNumbers().includes(bonusNumber);

      if (matchCount === 5 && hasBonus) {
        results[5.5]++;
      } else if (matchCount >= 3) {
        results[matchCount]++;
      }
    });

    return results;
  }

  getMatchCount(lottoNumbers, winningNumbers) {
    return lottoNumbers.filter(number => winningNumbers.includes(number)).length;
  }

  calculateProfitRate(results, inputMoney) {
    const totalPrize = Object.keys(results).reduce((acc, key) => {
      return acc + (results[key] * LottoAnalyser.PRIZES[key]);
    }, 0);

    return ((totalPrize / inputMoney) * 100).toFixed(1);
  }

  printResults(results, profitRate) {
    Console.print('당첨 통계\n---');
    Object.keys(results).forEach(key => {
      if (key === '5.5') {
        Console.print(`5개 일치, 보너스 볼 일치 (${LottoAnalyser.PRIZES[key].toLocaleString()}원) - ${results[key]}개`);
      } else {
        Console.print(`${key}개 일치 (${LottoAnalyser.PRIZES[key].toLocaleString()}원) - ${results[key]}개`);
      }
    });
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default LottoAnalyser;