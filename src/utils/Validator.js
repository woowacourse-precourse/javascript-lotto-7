// Validator.js
class Validator {
  static validateWinningNumbers(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error('[ERROR] 로또 번호는 중복되지 않아야 합니다.');
    }
    if (
      !numbers.every((num) => Number.isInteger(num) && num >= 1 && num <= 45)
    ) {
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
  }
}

export default Validator;
