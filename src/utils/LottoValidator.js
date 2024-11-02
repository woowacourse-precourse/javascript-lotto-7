import InputValidator from './InputValidator.js';

class LottoValidator {
  static validatePurchaseAmount(input) {
    InputValidator.isNaturalNumber(input);
    InputValidator.isDivisibleByThousand(input);
  }
  static validateWinningNumbers(inputArray) {
    inputArray.map((input) => {
      InputValidator.isNaturalNumber(input);
      InputValidator.isLottoRangeNumber(input);
    });
    InputValidator.isWinningLength(inputArray);
    InputValidator.isSameNumber(inputArray);
  }
  static validateBonusNumber(input) {
    InputValidator.isLottoRangeNumber(input);
    InputValidator.isNaturalNumber(input);
    InputValidator.isLottoRangeNumber(input);
  }
  static validateGeneratedLottoNumber(inputArray) {
    inputArray.forEach((number) => {
      InputValidator.isLottoRangeNumber(number);
      InputValidator.isNaturalNumber(number);
    });
    InputValidator.isWinningLength(inputArray);
    InputValidator.isSameNumber(inputArray);
  }
}

export default LottoValidator;
