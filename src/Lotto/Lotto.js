import {lottoNumberValidatePipe} from '../lottoNumberValidatePipe.js'
import { validateLottoNumberAmount } from "../validate.js"

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort();
  }

  #validate(numbers) {
    validateLottoNumberAmount(numbers);
    lottoNumberValidatePipe(numbers);
  }
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
