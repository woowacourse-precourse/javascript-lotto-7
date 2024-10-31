class Lotto_purchase {
  constructor(payment) {
    this.validate(payment);
  }

  validate(payment) {
    if (payment % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1000원 단위로 가능합니다.");
    }
  }
}

export default Lotto_purchase;