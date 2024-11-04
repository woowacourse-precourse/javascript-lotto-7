import { BONUS_MATCH_RANK_INDEX, LOTTO_MATCH_COUNT } from "./constants/lottoNumbers.js";
import InputValidate from "./utils/InputValidate.js";

const RANK = [
  "firstPlace",
  "thirdPlace",
  "fourthPlace",
  "fifthPlace",
  "blank",
  "blank",
  "blank",
  "secondPlace",
];



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

  getLottoNumber() {
    return this.#numbers;
  }

  compareLotto(winningNumber, bonusNumber) {

    const count = this.#numbers.filter((value) => winningNumber.includes(value)).length;
    if(this.#numbers.includes(bonusNumber) && count === LOTTO_MATCH_COUNT){
      return RANK[BONUS_MATCH_RANK_INDEX];
    }
    return RANK[this.#numbers.length - count];
  }
}

export default Lotto;