import { ERROR_MESSAGES } from '../constants/errorMessage';

class Validator {
  static LOTTO_PRICE = 1000;

  static validatePurchaseAmount(amount) {
    if (!Number.isInteger(amount) || amount <= 0) {
      throw new Error(ERROR_MESSAGES.purchaseAmount);
    }
    return true;
  }

  static validateDivisibleByThousand(amount) {
    if (amount % Validator.LOTTO_PRICE !== 0) {
      throw new Error();
    }
  }

  static validateLottoNumbers(numbers) {
    if (!Array.isArray(numbers) || numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.lottoNumbers.invalidArray);
    }
    const uniqueNumbers = new Set(numbers);

    if (uniqueNumbers.size !== 6) {
      throw new Error(ERROR_MESSAGES.lottoNumbers.duplicateNumbers);
    }

    for (let number of numbers) {
      if (!Number.isInteger(number) || number < 1 || number > 45) {
        throw new Error(ERROR_MESSAGES.lottoNumbers.outOfRange);
      }
    }
    return true;
  }

  static validateBonusNumber(bonusNumber, lottoNumbers) {
    if (!Number.isInteger(bonusNumber) || bonusNumber < 1 || bonusNumber > 45) {
      throw new Error(ERROR_MESSAGES.bonusNumber.outOfRange);
    }
    if (lottoNumbers.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.bonusNumber.duplicateWithLotto);
    }
    return true;
  }
}

export default Validator;
