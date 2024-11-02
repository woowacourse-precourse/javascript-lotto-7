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
    this.validateJackpot(this.jackpot);
  }

  async setBonusJackpot() {
    const bonusNumber = await Console.readLineAsync(INPUT.BONUS);
    return bonusNumber;
  }

  validateJackpot(numbers) {
    return new Lotto(numbers);
  }
}

export default MatchController;
