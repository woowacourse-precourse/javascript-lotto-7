class ValidateNumber {
  static checkMissing(input, errorMessage) {
    if (input.length == 0) {
      throw new Error(errorMessage);
    }
  }

  static validateNumber(input, errorMessage) {
    if (isNaN(input) || input < 1 || input > 45) {
      throw new Error(errorMessage);
    }
  }

  static checkArrayLength(array, expectedLength, errorMessage) {
    if (array.length !== expectedLength) {
      throw new Error(errorMessage);
    }
  }

  static checkForDuplicates(array, errorMessage) {
    if (new Set(array).size !== array.length) {
      throw new Error(errorMessage);
    }
  }
}

export default ValidateNumber;
