import { RANK } from "./constants/lottoDetails.js";
import InputValidate from "./utils/InputValidate.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.error = new InputValidate();
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
  
  compareLotto(winningNumber, bonusNumber) {

    const count = this.#numbers.filter((value) => winningNumber.includes(value)).length;
    if(this.#numbers.includes(bonusNumber) && count === 5){
      return RANK[7];
    }
    return RANK[this.#numbers.length - count];
  }


}

export default Lotto;
