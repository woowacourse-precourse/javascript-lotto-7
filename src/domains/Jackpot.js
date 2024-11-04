import { Console } from '@woowacourse/mission-utils';
import { INPUT } from '../constants/Constants.js';
import Validators from '../utils/Validation.js';
import Lotto from '../Lotto.js';

class Jackpot {
  #jackpot;
  #bonus;

  constructor() {
    this.#jackpot = [];
    this.#bonus = 0;
  }

  async inputJackpot() {
    const inputStr = await Console.readLineAsync(INPUT.JACKPOT);
    this.#jackpot = inputStr.trim().split(',').map(Number);
    this.validateJackpot(this.#jackpot);
  }

  validateJackpot(array) {
    const check = new Lotto(array);
    return check;
  }

  async inputBonus() {
    const bonus = await Console.readLineAsync(INPUT.BONUS);
    this.validateBonus(bonus);
    this.#bonus = bonus;
  }

  validateBonus(number) {
    Validators.checkNumber(number);
    Validators.checkRange(number);
    Validators.checkBonus(this.#jackpot, Number(number));
  }

  getJackpot() {
    return this.#jackpot;
  }

  getBonus() {
    return this.#bonus;
  }

  async startGetJackpot() {
    await this.inputJackpot();
    await this.inputBonus();
  }
}

export default Jackpot;
