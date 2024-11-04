import LOTTO from '../constants/Lotto.js';

class BonusNumberValidation {
  static checkIsEmpty(number) {
    return number.trim() === '';
  }

  static checkIsNaN(number) {
    const checkNumber = Number(number);
    return !Number.isInteger(checkNumber) || Number.isNaN(checkNumber);
  }

  static checkInRange(number) {
    return (
      Number(number) < LOTTO.MIN_LOTTO_NUMBER ||
      Number(number) > LOTTO.MAX_LOTTO_NUMBER
    );
  }

  static checkDuplicate(number, winningNumbers) {
    return winningNumbers.some(
      (winningNumber) => winningNumber === Number(number),
    );
  }
}
export default BonusNumberValidation;
