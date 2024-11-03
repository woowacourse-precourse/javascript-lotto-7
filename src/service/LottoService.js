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

    });
    
  }

  static countMatches(numbers, winningNumbers) {
    return numbers.filter(number => winningNumbers.includes(number)).length;
  }
}
