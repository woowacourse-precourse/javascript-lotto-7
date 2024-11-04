class ValidatePrice {
  constructor(price) {
    this.price = price;
  }
  isNum() {
    if (isNaN(this.price)) {
      console.log("!!!", this.price);
      throw new Error("[ERROR] 구매금액은 숫자로 입력해주세요");
    }
  }
  isDivisibleByThousand() {
    if (this.price % 1000 !== 0) {
      throw new Error("[ERROR] 1000원 단위로 입력해주세요");
    }
  }
  // 0, -1000 이런 경우에는 위에서 걸러지지 않는다.
  isTooLessMoney() {
    if (this.price < 1000) {
      throw new Error("[ERROR] 1000원 이상의 금액을 입력해주세요");
    }
  }
}

export default ValidatePrice;
