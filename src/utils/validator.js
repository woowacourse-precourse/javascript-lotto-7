import { ERROR_MESSAGES } from '../constants/errorMessage.js';

class Validator {
  static LOTTO_PRICE = 1000;
  static START_NUMBER = 1;
  static END_NUMBER = 45;
  static LOTTO_NUMBER_COUNT = 6;

  static validatePurchaseAmount(amount) {
    if (!Number.isInteger(amount) || amount <= 0) {
      throw new Error(ERROR_MESSAGES.purchaseAmount.notPositiveInteger);
    }

    if (amount % Validator.LOTTO_PRICE !== 0) {
      throw new Error(ERROR_MESSAGES.purchaseAmount.notDivisibleByThousand);
    }
  }

  static validateLottoNumbers(numbers) {
    if (
      !Array.isArray(numbers) ||
      numbers.length !== Validator.LOTTO_NUMBER_COUNT
    ) {
      throw new Error(ERROR_MESSAGES.lottoNumbers.invalidArray);
    }
    const uniqueNumbers = new Set(numbers);

    if (uniqueNumbers.size !== Validator.LOTTO_NUMBER_COUNT) {
      throw new Error(ERROR_MESSAGES.lottoNumbers.duplicateNumbers);
    }

    for (let number of numbers) {
      if (
        !Number.isInteger(number) ||
        number < Validator.START_NUMBER ||
        number > Validator.END_NUMBER
      ) {
        throw new Error(ERROR_MESSAGES.lottoNumbers.outOfRange);
      }
    }
  }

  static validateBonusNumber(bonusNumber, lottoNumbers) {
    if (
      !Number.isInteger(bonusNumber) ||
      bonusNumber < Validator.START_NUMBER ||
      bonusNumber > Validator.END_NUMBER
    ) {
      throw new Error(ERROR_MESSAGES.bonusNumber.outOfRange);
    }
    if (lottoNumbers.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.bonusNumber.duplicateWithLotto);
    }
  }
}

export default Validator;
