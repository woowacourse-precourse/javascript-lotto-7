import Lotto from "../model/Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";

export class LottoService {
  static purchaseLotto(amount) {
    const numberOfLotto = Math.floor(amount / 1000);
    return this.generateLottos(numberOfLotto);
  }

  static generateLottos(count) {
    const lottos = [];
    for (let i = 0; i < count; i++) {
      lottos.push(this.generateLotto());
    }
    return lottos;
  }

  static generateLotto() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return new Lotto(numbers);
  }

  static calculateWinnings(lottos, winningNumbers, bonusNumber) {
    const prizeTable = {
      3: { count: 0, prize: 5000 },
      4: { count: 0, prize: 50000 },
      5: { count: 0, prize: 1500000 },
      "5": { count: 0, prize: 30000000 },
      6: { count: 0, prize: 2000000000 },
    };

    lottos.forEach((lotto) => {
      const matchCount = this.countMatches(lotto.getNumbers(), winningNumbers);
      const isBonusMatch = lotto.getNumbers().includes(bonusNumber);

      this.updatePrizeTable(prizeTable, matchCount, isBonusMatch);
    });
    return this.calculateTotalReturn(prizeTable, lottos.length * 1000);
  }

  static countMatches(numbers, winningNumbers) {
    return numbers.filter(number => winningNumbers.includes(number)).length;
  }

  static updatePrizeTable(prizeTable, matchCount, isBonusMatch) {
    if (matchCount === 6) {
      prizeTable[6].count++;
    } else if (matchCount === 5 && isBonusMatch) {
      prizeTable['5'].count++;
    } else if (matchCount >= 3) {
      prizeTable[matchCount].count++;
    }
  }
  
  static calculateTotalReturn(prizeTable, totalSpent) {
    let totalPrize = 0;
    const results = [];

    const order = [3, 4, 5, '5', 6];

    order.forEach(key => {
      const { count, prize } = prizeTable[key];
      let description;
      if (key === '5') {
        description = '5개 일치, 보너스 볼 일치';
      } else {
        description = `${key}개 일치`;
      }
      results.push(`${description} (${prize.toLocaleString()}원) - ${count}개`);
      totalPrize += count * prize;
    });

    const totalReturn = ((totalPrize / totalSpent) * 100).toFixed(1);
    results.totalReturn = totalReturn;
    return results;
  }
}
