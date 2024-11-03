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
}

export default ValidateNumber;
