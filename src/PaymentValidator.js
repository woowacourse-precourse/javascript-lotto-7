class PaymentValidator {
  static checkThousandUnit(price) {
    if(price % 1000 !== 0) {
      throw new Error("[ERROR] : 구입 금액은 1000원 단위로 입력해야 합니다.");
    }
  }
}

export default PaymentValidator;