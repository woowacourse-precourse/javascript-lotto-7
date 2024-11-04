import Lotto from "../Lotto";
import { intersect } from "../utils/intersect";

class WinningNumbers {
  #winningLotto;
  #bonus;
  
  constructor(numbers, bonus){
    this.#validate(numbers, bonus);
    this.#winningLotto = new Lotto(numbers);
    this.#bonus = bonus;
  }

  #validate (bonus) {}

  test(lotto) {

  }
}