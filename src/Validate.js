class Validate {
  static number(numString) {
    return /^[0-9]+$/.test(numString);
  }

  static integer(number) {
    return Number.isInteger(number);
  }
}

export default Validate;
