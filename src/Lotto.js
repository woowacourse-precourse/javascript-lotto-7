import { Random } from "@woowacourse/mission-utils";
import { errorMessage } from "./constant/errorMessage.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.#sortNumbers(numbers);
  }

  static create(){
    const numbers = Lotto.makeLottoNumbers();
    return new Lotto(numbers);
  }

  static makeLottoNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  #sortNumbers(numbers){
    return numbers.sort((a, b) => a - b);
  }

  getLotto(){
    return [...this.#numbers];
  }

  findDuplicated(numbers){
    return numbers.filter((item, index) => numbers.indexOf(item) !== index);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(errorMessage.invalidCountLottoNumbers);
    }
    if (this.findDuplicated(numbers).length > 0){
      throw new Error (errorMessage.duplicateLottoNumbers);
    }
  }
}

export default Lotto;
