class Validate {
  static number(numString) {
    return /^[0-9]+$/.test(numString);
  }

  static integer(number) {
    return Number.isInteger(number);
  }

  static range(value, min, max) {
    return min <= value && value <= max;
  }
}

export default Validate;
