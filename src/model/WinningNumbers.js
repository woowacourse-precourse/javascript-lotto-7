import Lotto from "../Lotto";
import { intersect } from "../utils/intersect";

class WinningNumbers {
  #winningLotto;
  #bonus;
  
  constructor(numbers){
    this.#validate(numbers, bonus);
    this.#winningLotto = new Lotto(numbers);
  }
  
  test(lotto) {
    const matched = intersect(lotto.numbers, [this.#winningLotto.numbers]);
    const bonusMatch = lotto.has(this.#bonus.value);
    return { matched, bonusMatch };
  }
  
  set bonus (bonus) {
    this.#bonus = bonus;
  }

  #validate (numbers) {
    new Lotto(numbers);
  }
}

export default WinningNumbers;
