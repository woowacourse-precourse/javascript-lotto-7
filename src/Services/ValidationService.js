import validateBonusNumber from '../Validation/Input/validateBonusNumber.js';
import validateLottoNumber from '../Validation/Input/validateLottoNumber.js';
import validateMoney from '../Validation/Input/validateMoney.js';

class ValidationService {
  constructor() {
    this.validateBonusNumber = validateBonusNumber;
    this.validateLottoNumber = validateLottoNumber;
    this.validateMoney = validateMoney;
  }

  isValidBonusNumber = (input, winningNumbers) =>
    this.validateBonusNumber(input, winningNumbers);

  isValidLottoNumber = (input) => this.validateLottoNumber(input);

  isValidMoney = (input) => this.validateMoney(input);
}

export default ValidationService;
