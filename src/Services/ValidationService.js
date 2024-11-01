// Validation/ValidationService.js
import validateBonusNumber from '../Validation/Input/validateBonusNumber.js';
import validateLottoNumber from '../Validation/Input/validateLottoNumber.js';
import validateMoney from '../Validation/Input/validateMoney.js';
import validateLotteryNotes from '../Validation/Domain/validateLotteryNotes.js';

class ValidationService {
  constructor() {
    this.validateBonusNumber = validateBonusNumber;
    this.validateLottoNumber = validateLottoNumber;
    this.validateMoney = validateMoney;
    this.validateLotteryNotes = validateLotteryNotes;
  }

  isValidBonusNumber = (input, winningNumbers) =>
    this.validateBonusNumber(input, winningNumbers);

  isValidLottoNumber = (input) => this.validateLottoNumber(input);

  isValidMoney = (input) => this.validateMoney(input);

  isValidLotteryNotes = (purchaseAmount) =>
    this.validateLotteryNotes(purchaseAmount);
}

export default ValidationService;
