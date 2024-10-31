import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto';

class Generator {
  times;
  lottos = [];

  createLotto(amount) {
    try {
      this.times = this.calculateTimes(amount);

      for (let i = 0; i < times; i++) {
        const randomNumbers = this.createLottoNumbers();
        const sortedNumbers = this.sortNumbers(randomNumbers);

        this.lottos.push(this.createRealLotto(sortedNumbers));
      }

      return lottos;
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
