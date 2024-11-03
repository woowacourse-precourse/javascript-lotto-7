class Utils {
  static range(count, value) {
    return Array(count).fill(value || '');
  }

  static getParsingNumber(array) {
    return array.map((el) => parseInt(el, 10));
  }
}

export default Utils;
