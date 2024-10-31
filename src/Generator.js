import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import Print from './Print.js';

class Generator {
  times;
  lottos = [];

  createLotto(amount) {
    try {
      this.times = this.calculateTimes(amount);
      Print.printTimes(this.times);

      for (let i = 0; i < this.times; i++) {
        const randomNumbers = this.createLottoNumbers();
        const sortedNumbers = this.sortNumbers(randomNumbers);
        Print.printLottosNumber(sortedNumbers);

        this.lottos.push(this.createRealLotto(sortedNumbers));
      }

      return this.lottos;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  calculateTimes(amount) {
    return amount / 1000;
  }

  createLottoNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  createRealLotto(numbers) {
    return new Lotto(numbers);
  }
}

export default Generator;
