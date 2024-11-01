import Validator from './Validator.js';
import { parseNumbers } from '../utils/Parser.js';
import BonusNumber from '../model/BonusNumber.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    const bonusNumberInstance = new BonusNumber();
    const bonusNumber = bonusNumberInstance.getBonusNumber();
    this.#checkBonusNumberDuplicate(numbers, bonusNumber);
    Validator.validateWinningNumbers(numbers);
    this.#numbers = parseNumbers(numbers);
  }

  #checkBonusNumberDuplicate(numbers, bonusNumber) {
    if (numbers.includes(bonusNumber)) {
      throw new Error('[ERROR]');
    }
  }
}

export default Lotto;
