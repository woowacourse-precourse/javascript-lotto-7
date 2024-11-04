const { Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class LottoManager {
  constructor() {
    this.lottos = [];
  }

  generateLottos(count) {
    this.lottos = Array.from({ length: count }, () => {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      return new Lotto(numbers);
    });
    return this.lottos;
  }

  calculateResults(winningNumbers, bonusNumber) {
    const results = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    this.lottos.forEach((lotto) => {
      const matchCount = lotto.getNumbers().filter((num) => winningNumbers.includes(num)).length;
      const isBonusMatch = lotto.getNumbers().includes(bonusNumber);

      if (matchCount === 6) results[1]++;
      else if (matchCount === 5 && isBonusMatch) results[2]++;
      else if (matchCount === 5) results[3]++;
      else if (matchCount === 4) results[4]++;
      else if (matchCount === 3) results[5]++;
    });
    return results;
  }
}

module.exports = LottoManager;
