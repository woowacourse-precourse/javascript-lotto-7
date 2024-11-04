import { Console, MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import { LOTTO_NUMBER_MAX, LOTTO_NUMBER_MIN } from './constant.js';

class LottoMachine {
  drawLottoNumbers() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO_NUMBER_MIN,
      LOTTO_NUMBER_MAX,
      6
    );
    return new Lotto(numbers);
  }
  generateLottos(cnt) {
    return Array.from({ length: cnt }, () => this.drawLottoNumbers());
  }

  compareWinningNumbers(numbers, winningNumbers) {
    return numbers.filter((num) => winningNumbers.includes(num)).length;
  }
  compareBonusNumber(numbers, bonus) {
    return numbers.includes(bonus);
  }
}
export default LottoMachine;
