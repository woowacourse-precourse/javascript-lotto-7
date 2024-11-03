class Validate {
  static number(numString) {
    return /^[0-9]+$/.test(numString);
  }
}

export default Validate;
