import { INPUT } from './constants/Constants.js';
import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import Validators from './utils/Validation.js';

class Jackpot {
  constructor() {
    this.jackpot = [];
  }

  async setJackpot() {
    this.jackpot = await Console.readLineAsync(INPUT.JACKPOT);
    this.jackpot = this.jackpot.trim().split(',').map(Number);
    this.validateJackpot(this.jackpot);
  }

  async setBonusJackpot() {
    const bonusNumber = await Console.readLineAsync(INPUT.BONUS);
    this.validateBonus(bonusNumber);
    return bonusNumber;
  }

  validateJackpot(numbers) {
    const checkLotto = new Lotto(numbers);
    return checkLotto;
  }

  validateBonus(number) {
    Validators.checkNumber(number);
    Validators.checkRange(number);
    Validators.checkBonus(this.jackpot, Number(number));
  }

  async getJackpotController() {
    await this.setJackpot();
    await this.setBonusJackpot();
  }
}

export default Jackpot;
