import { Random } from '@woowacourse/mission-utils';

class MoneyToLottos {
  generateLottoNumbers() {
    const numbers = Random.pickUniqueNumbersInRange(
      BOUND.LOWER,
      BOUND.UPPER,
      SIZE
    );
    return numbers.sort((a, b) => a - b);
  }
}

export default MoneyToLottos;
