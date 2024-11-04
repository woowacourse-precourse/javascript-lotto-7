import { ERROR, FORMAT } from '../constants/Constants.js';

class ValidateLotto {
  constructor() {
    this.checkSet = new Set();
  }

  checkSize(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.LOTTO_ARRAY_COUNT);
    }
  }

  checkNumber(num) {
    if (Number.isNaN(Number(num))) {
      throw new Error(ERROR.LOTTO_TYPE);
    }
  }

  checkInteger(num) {
    if (!FORMAT.NUMBER.test(num)) {
      throw new Error(ERROR.NON_INTEGER);
    }
  }

  checkRange(num) {
    if (num < 1 || num > 45) {
      throw new Error(ERROR.LOTTO_RANGE);
    }
  }

  checkLotto(num) {
    if (this.checkSet.has(num)) {
      throw new Error(ERROR.LOTTO_REPEAT);
    }
    this.checkSet.add(num);
  }

  checkAll(numbers) {
    this.checkSize(numbers);
    numbers.forEach((num) => {
      this.checkNumber(num);
      this.checkInteger(num);
      this.checkRange(num);
      this.checkLotto(num);
    });
  }
}

export default ValidateLotto;
