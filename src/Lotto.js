import LottoModel from "./model/lottoModel.js";
import InputValidate from "./utils/InputValidate.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.error = new InputValidate();
    this.model = new LottoModel();
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.error.inputExist(numbers);
    this.error.lottoNumberLength(numbers);
    this.error.lottoNumberRange(numbers);
    this.error.lottoNumberType(numbers);
    this.error.duplicateLottoNumber(numbers);
  }
  // TODO: 추가 기능 구현
  getLottoNumber() {
    return this.#numbers;
  }

}

export default Lotto;
