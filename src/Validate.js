class Validate {
  static numbers(numStringArray) {
    return numStringArray.every(numString => this.number(numString));
  }

  static number(numString) {
    return /^[0-9]+$/.test(numString);
  }

  static integer(number) {
    return Number.isInteger(number);
  }

  static range(value, min, max) {
    return min <= value && value <= max;
  }

  static arrayCount(array, count) {
    return array.length === count;
  }

  static valueIsUnique(array, target) {
    return array.every(element => element !== target);
  }

  static uniqueArray(numArray) {
    return new Set(numArray).size === numArray.length;
  }
}

export default Validate;
