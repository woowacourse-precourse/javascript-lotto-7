class Validate {
  static validateMoney(money) {
    const numberMoney = Number(money);
    if (!this.#isPositiveInteger(numberMoney) || numberMoney % 1000 !== 0) {
      throw new Error('[Error] 구입금액은 양의 정수이며 1000으로 나눠떨어져야 합니다.');
    }
  }

  static validateLottoNumbers(lottoNumbers) {
    if (lottoNumbers.length !== 6) throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    for (const number of lottoNumbers) {
      if (!this.#isPositiveInteger(number)) throw new Error('[Error] 로또 번호는 양의 정수만 가능합니다.');
      if (!this.#isInRange(number)) throw new Error('[Error] 로또 번호는 1과 45 사이의 양의 정수만 가능합니다.');
    }
    if (this.#hasDuplicates(lottoNumbers)) throw new Error('[Error] 로또 번호에 중복된 수가 존재합니다.');
  }

  static #isPositiveInteger(value) {
    return Number.isInteger(value) && value > 0;
  }

  static #isInRange(num) {
    return 1 <= num && num <= 45;
  }

  static #hasDuplicates(arr) {
    return new Set(arr).size !== arr.length;
  }
}

export default Validate;
