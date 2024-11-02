import { LOTTO_COUNT } from "../constants/lottoValue.js";
import LottoNumbersError from "../errors/LottoNumbersError.js";
import Validates from "../validates/Validates.js";

class Lotto {
  #numbers;

  /**
   *
   * @param {number[]} numbers - 로또 번호 배열.
   */
  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_COUNT) {
      throw new LottoNumbersError("로또 번호는 총 6개여야 합니다.");
    }
    if (new Set(numbers).size !== LOTTO_COUNT) {
      throw new LottoNumbersError("중복된 숫자가 있습니다.");
    }
    numbers.forEach((number) => {
      if (!Validates.isNumber(number)) throw new LottoNumbersError("숫자만 입력 가능합니다.");
      if (!Validates.isRangeOk(+number)) throw new LottoNumbersError("1부터 45까지의 숫자만 입력 가능합니다.");
    });
  }

  #sortLottoNumbers() {
    this.#numbers.sort((a, b) => a - b);
  }

  getLottoNumbers() {
    this.#sortLottoNumbers();
    return this.#numbers;
  }
}

export default Lotto;
