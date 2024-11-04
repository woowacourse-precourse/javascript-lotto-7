class Formatter {
  static formatNumberWithCommas(number) {
    return number.toLocaleString();
  }

  static isLocaleFormattedNumber(string) {
    const LOCALE_FROMAT_REGEX = /^\d{1,3}(,\d{3})*$/;
    return LOCALE_FROMAT_REGEX.test(string);
  }

  static formatLocaleStringToNumber(localeString) {
    return Number(localeString.split(',').join(''));
  }
}
export default Formatter;
