import { Console, MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class LottoMachine {
  drawLottoNumbers() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
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
