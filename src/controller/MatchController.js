import { INPUT } from '../constants/Constants.js';
import { Console } from '@woowacourse/mission-utils';
import Lotto from '../Lotto.js';

class MatchController {
  constructor() {
    this.jackpot = [];
  }

  async setJackpot() {
    this.jackpot = await Console.readLineAsync(INPUT.JACKPOT);
    this.jackpot = this.jackpot.split(',').map(Number);
    this.validateLotto(this.jackpot);
  }

  async setBonusJackpot() {
    const bonusNumber = await Console.readLineAsync(INPUT.BONUS);
    return bonusNumber;
  }

  validateLotto(numbers) {
    const checkLotto = new Lotto(numbers);
    return checkLotto;
  }
}

export default MatchController;
