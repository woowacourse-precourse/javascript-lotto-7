class Validator {
  static checkAmount(amount) {
    if (isNaN(amount) || amount === '' || Number(amount) <= 0) {
      throw new Error('[ERROR] 금액 입력 오류!');
    }
    if (amount % 1000 !== 0) {
      throw new Error('[ERROR] 금액 단위 요류!');
    }
  }
}

export default Validator;
