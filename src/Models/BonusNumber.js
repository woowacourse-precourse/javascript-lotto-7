import BONUS_NUMBER_RULES from '../Validators/bonusNumberRules.js';
import validator from '../Validators/Validator.js';
import InputParser from './InputParser.js';

class bonusNumber {
  #bonusNumber;

  constructor(bonusNumberInput, winningNumbers) {
    const bonusNumber = this.#parser(bonusNumberInput);
    this.#validate(bonusNumber, winningNumbers);
    this.#bonusNumber = bonusNumber;
  }
  #parser(bonusNumberInput) {
    const bonusNumber = InputParser.number(bonusNumberInput);
    return bonusNumber;
  }
  #validate(bonusNumber, winningNumbers) {
    validator(
      { bonusNumber, lottoNumbers: winningNumbers },
      BONUS_NUMBER_RULES,
    );
  }

  get number() {
    return this.#bonusNumber;
  }
}

export default bonusNumber;
