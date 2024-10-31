import { Random } from '@woowacourse/mission-utils';

class Generator {
  createLotto(amount) {
    try {
      const times = this.calculateTimes(amount);
      const lottos = [];

      for (let i = 0; i < times; i++) {
        const randomNumbers = this.createLottoNumbers();
      }
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
}

export default Generator;
