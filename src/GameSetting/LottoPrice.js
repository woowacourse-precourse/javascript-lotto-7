import Validation from "./Utils/Validation";

class LottoPrice {
  #price;

  constructor(input) {
    let validatedPrice = this.#validate(input);
    this.#price = validatedPrice;
  }

  #validate(input) {
    // input을 자연수로 변환
    let validatedPrice = Validation.inputNaturalNumber(input);

    // 1000으로 나눠지는지 검사
    if (validatedPrice % 1000 !== 0) {
      throw new Error("[ERROR] 1000원 단위로 입력해주세요.");
    }

    return validatedPrice;
  }

  getLottoPrice() {
    return this.#price;
  }
}

export default LottoPrice;
