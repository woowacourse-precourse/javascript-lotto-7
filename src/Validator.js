export default class Validator {
  #PRICE_ERROR = "[ERROR] 1000원 단위의 정수를 입력해 주세요.";

  priceValidate(inputPrice, lottoPrice) {
    if (
      inputPrice % lottoPrice !== 0 ||
      isNaN(inputPrice) ||
      Number.isInteger(inputPrice) ||
      inputPrice.toString().includes(".")
    ) {
      throw new Error(this.#PRICE_ERROR);
    }
  }
}
