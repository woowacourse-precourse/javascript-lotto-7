import { ERROR_MESSAGE } from "../constants/constants.js";

class Validator {
  //입력 에러
  static inputNullData(data) {
    if (data === null || data.trim() === "") {
      throw new Error (ERROR_MESSAGE.nullData);
    }
  }

  static inputPurchaseValidation(price) {
    if (!Number.isInteger(price / 1000)) {
      throw new Error(ERROR_MESSAGE.purchaseError);
    }
  }

  static purchaseRangeValidation(price) {
    if (price <= 0) {
      throw new Error(ERROR_MESSAGE.purchaseRangeError);
    }
  }

  // 당첨 번호 에러
  static lottoLengthValidation(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.lottoLengthError);
    }
  }

  static lottoDuplicatedValidation(numbers) {
    const isDuplicated = numbers.some(function(x) {
      return numbers.indexOf(x) !== numbers.lastIndexOf(x);
    });
    if (isDuplicated) {
      throw new Error(ERROR_MESSAGE.lottoDuplicatedError);
    }
  }

  static lottoRangeValidation(numbers) {
    const isOutOfRange = numbers.some(function(number) {
      return number < 1 || number > 45;
    });
    if (isOutOfRange) {
      throw new Error(ERROR_MESSAGE.lottoRangeError);
    }
  }

  static lottoTypeValidation(numbers) {
    const isTypeValid = numbers.every((element) => {
      return Number.isInteger(element);
    });
    if (!isTypeValid) {
      throw new Error(ERROR_MESSAGE.lottoTypeError);
    }
  }

  //보너스 번호 에러
  static bonusLengthValidation(number) {
    if (number.length !== 1) {
      throw new Error(ERROR_MESSAGE.bonusLengthError);
    }
  }

  static bonusRangeValidation(number) {
    const isOutOfRange = number < 1 || number > 45;
    if (isOutOfRange) {
      throw new Error(ERROR_MESSAGE.bonusRangeError);
    }
  }

  static bonusTypeValidation(number) {
    const isTypeValid = Number.isInteger(number);
    if (!isTypeValid) {
      throw new Error(ERROR_MESSAGE.bonusTypeError);
    }
  }
}

export default Validator;