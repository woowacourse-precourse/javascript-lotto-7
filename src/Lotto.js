import {lottoNumberValidatePipe} from './lottoNumberValidatePipe.js'
import { validateLottoNumberAmount, validateLottoOverlap } from "./validate.js"

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.map(Number).sort((a, b) => a - b);
  }

  #validate(numbers) {
    validateLottoNumberAmount(numbers);
    validateLottoOverlap(numbers);
    lottoNumberValidatePipe(numbers);
  }
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
