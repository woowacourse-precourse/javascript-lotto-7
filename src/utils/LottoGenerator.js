import { Console, MissionUtils } from '@woowacourse/mission-utils';

class LottoGenerator {
  constructor(purchaseCount) {
    this.purchaseCount = purchaseCount;
    this.lottoNumbers = [];
  }

  generateLottoNumbers() {
    for (let i = 0; i < this.purchaseCount; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      this.lottoNumbers.push(numbers.sort((a, b) => a - b));
    }
  }

  printLottoNumbers() {
    Console.print(`\n${this.purchaseCount}개를 구매했습니다.`);
    this.lottoNumbers.forEach(numbers => {
      Console.print(`[${numbers.join(', ')}]`);
    });
  }
}

export default LottoGenerator;
